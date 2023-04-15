<script lang="ts">
	import { player, computer } from '../stores/playerState';

	export let isComputer: Boolean = false;
</script>

<div>
	<p>{isComputer ? 'Computer' : $player.name}</p>
	<slot />
</div>

<style>
</style>
