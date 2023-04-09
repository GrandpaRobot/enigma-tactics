<script lang="ts">
	import Initial from './Initial.svelte';

	const gameProgress = 'initial';
</script>

<div>
	{#if gameProgress === 'initial'}
		<Initial />
	{/if}
</div>

<style>
	div {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 10px;
	}
</style>
