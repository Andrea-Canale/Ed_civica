<script lang="ts">
    export let text: string, img: string, imgsub: string, title: string;
</script>
<h1>{title}</h1>
<p>
  {text}
</p>
<a href={img}>
    {#if img != ""}
    <img src={img}/>
    {/if}
  <p>{imgsub}</p>
</a>