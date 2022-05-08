<script>
	export let cmps
</script>

<ul>
	{#each cmps as cmp}
		<li>
			<svelte:component this={cmp}></svelte:component>
		</li>
	{/each}
</ul>