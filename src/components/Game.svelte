<script lang="ts">
	import { player } from '../stores/playerState';
</script>

<div>
	<p>{$player.name}</p>
	<slot />
</div>

<style>
</style>
