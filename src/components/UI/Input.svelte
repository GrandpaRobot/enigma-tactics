<script lang="ts">
	export let sendInput: (event: Event) => void = () => {};
	let value: string;
</script>

<input type="text" bind:value on:input={sendInput} />

<style>
</style>
