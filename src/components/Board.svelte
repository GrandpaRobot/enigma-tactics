<script lang="ts">
	import { boardSize } from '../lib/constants';
	import { board } from '../stores/boardState';
</script>

<div
	class="board"
	style="grid-template-columns: repeat({boardSize}, 1fr); grid-template-rows: repeat({boardSize}, 1fr);"
>
	{#each $board as row}
		{#each row as space}
			<div class="space">
				{#if space.occupant}
					<p>{space.occupant}</p>
				{:else}
					<div class="empty-spot" />
				{/if}
			</div>
		{/each}
	{/each}
</div>

<style>
	.board {
		display: grid;
		grid-gap: 10px;
		width: 200px;
		background-color: grey;
	}
	.space {
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1px solid black;
		width: 20px;
		height: 20px;
		background-color: white;
	}
</style>
