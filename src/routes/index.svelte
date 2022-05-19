<script>
    import { onMount } from "svelte";
  import "uikit/dist/css/uikit.css";
  import "uikit/dist/js/uikit.js";
  import Slide from './lib/slide_home.svelte'
  let images= [];
  onMount(() => {
    fetch(window.location.href + "img/slide/img.json")
      .then((response) => {
        return response.json();
      })
      .then((jsondata) => (images = jsondata))
      .then(() => console.log("Slide init"));
  });
</script>
<svelte:head>
  <title>Home</title>
</svelte:head>

<section>
  <h1>&nbsp;</h1>
  <h1>
    Home del progetto di Educazione Civica di Andrea Canale, Marco Cellini e
    Gioele Mari
  </h1>
  <h1>&nbsp;</h1>

 
<Slide/>

  <br />
</section>

<style>
  h1 {
    color: white;
  }
</style>
