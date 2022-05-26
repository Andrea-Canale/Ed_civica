<script lang="ts">
    export let text: string, img: string, imgsub: string, title: string;
</script>
<h1>{title}</h1>
<p>
  {text}
</p>
<a href={img}>
  <img src={img}/>
  <p>{imgsub}</p>
</a>