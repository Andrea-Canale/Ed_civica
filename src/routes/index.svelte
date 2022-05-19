<script>
    import { onMount } from "svelte";
  import "uikit/dist/css/uikit.css";
  import "uikit/dist/js/uikit.js";
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

  <div
  class="uk-position-relative uk-visible-toggle uk-light"
  tabindex="-1"
  uk-slideshow="min-height: 300; max-height: 600"
  hidden={false}
>
  <ul class="uk-slideshow-items">
        <a href="/pericoli/fake-news/">
          <li>
          <img src="/img/slide/fake_news_pc.png" alt="">
        </li>
      </a>
        <a href="/strumenti/jammer">
          <li>
          <img src="/img/slide/jammer.png" alt="">
        </li>
      </a>
      <a href="/strumenti/raspberry">
        <li>
          <img src="/img/slide/raspberry.png" alt="">
        </li>
      </a>
      <a href="/strumenti/rubber-ducky">
        <li>
          <img src="/img/slide/rubber_ducky.png" alt="">
        </li>
      </a>
        <a href="/crittografia/sniffing">
          <li>
          <img src="/img/slide/sniffing.jpeg" alt="dssa">
        </li>
        
      </a>
  </ul>

  <a
    class="uk-position-center-left uk-position-small uk-hidden-hover"
    href="#"
    alt=""
    uk-slidenav-previous
    uk-slideshow-item="previous"
  />
  <a
    class="uk-position-center-right uk-position-small uk-hidden-hover"
    href="#"
    alt=""
    uk-slidenav-next
    uk-slideshow-item="next"
  />
</div>

  <br />
</section>

<style>
  h1 {
    color: white;
  }
</style>
