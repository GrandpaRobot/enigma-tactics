<script lang="ts">
	import Board from '../components/Board.svelte';
	import Game from '../components/Game.svelte';
	import PlayerPanel from '../components/PlayerPanel/PlayerPanel.svelte';
</script>

<main>
	<Game>
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
