<script lang="ts">
	import type { PageData } from './$types';
	import { io } from 'socket.io-client';

	import Board from '../../../components/Board.svelte';
	import Game from '../../../components/Game.svelte';
	import PlayerPanel from '../../../components/PlayerPanel/PlayerPanel.svelte';

	const socket = io();
	export let data: PageData;
	let readyStatus: boolean = false;
	socket.emit('join-game', data.gameId, data.opponentType);
	socket.on('game-joined', ({ ready }: { ready: boolean }) => {
		readyStatus = ready;
	});
</script>

<main>
	<Game>
		<h1>{readyStatus ? 'Ready to play' : 'Waiting on opponent...'}</h1>
		<Board />
		<PlayerPanel />
		<button on:click={() => socket.emit('turn-over', data.gameId)}>Human</button>
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
