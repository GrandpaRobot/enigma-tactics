<script lang="ts">
	import type { PageData } from './$types';
	import { io } from 'socket.io-client';

	import Board from '../../../components/Board.svelte';
	import Game from '../../../components/Game.svelte';
	import PlayerPanel from '../../../components/PlayerPanel/PlayerPanel.svelte';
	import { game } from '../../../stores/gameState';
	import { GamePhases } from '../../../types';

	const socket = io();
	export let data: PageData;
	socket.emit('join-game', data.gameId, data.opponentType);
	socket.on('game-joined', ({ ready }: { ready: boolean }) => {
		if (ready) game.setPhase(GamePhases.placement);
	});
</script>

<main>
	<Game>
		<h1>{$game.phase}</h1>
		<Board />
		<PlayerPanel />
	</Game>
</main>

<style>
	main {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 10px;
		flex-direction: column;
	}
</style>
