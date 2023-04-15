import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

import { Server } from 'socket.io';
import type { ViteDevServer } from 'vite';

const webSocketServer = {
	name: 'webSocketServer',
	configureServer(server: ViteDevServer) {
		if (!server.httpServer) throw new Error('Vite config is broken - No http server found');
		const io = new Server(server.httpServer);
		io.on('connection', (socket) => {
			socket.on('new-game', (oponentType: string) => {
				const gameId = crypto.randomUUID();
				socket.join(gameId);
				socket.emit('game-created', gameId, oponentType);
			});
			socket.on('join-game', (gameId: string, opponentType: string) => {
				socket.join(gameId);
				const room = io.sockets.adapter.rooms.get(gameId);
				console.log(gameId, room);
				if (opponentType === 'computer' || (opponentType === 'human' && room && room.size === 2)) {
					io.in(gameId).emit('game-joined', { ready: true });
				} else {
					io.in(gameId).emit('game-joined', { ready: false });
				}
			});
			socket.on('turn-over', (gameId: string) => {
				socket.to(gameId).emit('turn-over');
			});
		});
	}
};

export default defineConfig({
	plugins: [sveltekit(), webSocketServer],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
