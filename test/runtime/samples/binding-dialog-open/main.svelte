<script>
	export let open;
</script>

<dialog bind:open>content</dialog>

{#if open}
	<p>hello!</p>
{/if}
