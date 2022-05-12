<script lang="ts">
  export let t: Array<String> = [];
</script>

<ul>
  {#each t as cmp}
    <li>
      <svelte:component this={cmp} />
    </li>
  {/each}
</ul>
