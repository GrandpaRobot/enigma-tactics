<script lang="ts">
	import { player } from '../../stores/playerState';
	import type { Axis, PieceState } from '../../types';
	import Input from '../UI/Input.svelte';

	function handleInput(pieceState: PieceState, event: Event, axis: Axis) {
		const value = (event?.target as HTMLInputElement)?.value;
		player.placePiece(pieceState, axis, Number(value));
	}
</script>

<div>
	{#each $player.piecesState as pieceState}
		<div>
			<div>{pieceState.profession}</div>
			<Input sendInput={(event) => handleInput(pieceState, event, 'x')} />
			<Input sendInput={(event) => handleInput(pieceState, event, 'y')} />
		</div>
	{/each}
	<button on:click={() => console.log($player)}>Show state</button>
</div>

<style>
</style>
