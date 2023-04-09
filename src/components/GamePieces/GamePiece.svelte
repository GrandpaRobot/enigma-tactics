<script lang="ts">
	import type { Professions } from '../../types';
	import Cleric from './Pieces/Cleric.svelte';
	import Fighter from './Pieces/Fighter.svelte';
	import Mage from './Pieces/Mage.svelte';

	export let profession: Professions;
</script>

<div>
	{#if profession === 'mage'}
		<Mage />
	{:else if profession === 'fighter'}
		<Fighter />
	{:else if profession === 'cleric'}
		<Cleric />
	{/if}
</div>

<style>
</style>
