<script lang="ts">
    export let p: Array<String> = [];
  </script>
  
  <ul>
    {#each p as cmp}
      <li>
        <svelte:component this={cmp} />
      </li>
    {/each}
  </ul>
  