<script lang="ts">
  export let cmps: Array<String> = [];
</script>

<ul>
  {#each cmps as cmp}
    <li>
      <svelte:component this={cmp} />
    </li>
  {/each}
</ul>
