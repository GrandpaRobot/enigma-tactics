<script lang="ts">
	import { goto } from '$app/navigation';
	import { io } from 'socket.io-client';

	const socket = io();
	socket.on('game-created', (gameId: string, opponentType: string) => {
		goto(`/game/${gameId}?opponent=${opponentType}`);
	});
</script>

<main>
	<h1>Who do you want to play with?</h1>
	<button on:click={() => socket.emit('new-game', 'human')}>Human</button>
	<button on:click={() => socket.emit('new-game', 'computer')}>Computer</button>
</main>

<style>
</style>
