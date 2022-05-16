<script lang="ts">
  export let last: Array<String> = [];
</script>

<ul>
  {#each last as cmp}
    <li>
      <svelte:component this={cmp} />
    </li>
  {/each}
</ul>
