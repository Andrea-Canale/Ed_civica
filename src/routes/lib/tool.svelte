<script lang="ts">
  export let text: string,
    img: string,
    imgsub: string,
    title: string,
    subtitle: string;
</script>

{#if title != undefined}
  <h1>{title}</h1>
{/if}
{#if subtitle != undefined}
  <h2><b>{subtitle}</b></h2>
{/if}
<p>
  {text}
</p>
<a href={img}>
  {#if img != ""}
    <img src={img} />
  {/if}
  <p>{imgsub}</p>
</a>
