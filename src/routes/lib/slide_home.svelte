<script lang="ts">
  import { onMount } from 'svelte';
  import 'uikit/dist/css/uikit.css';
  import 'uikit/dist/js/uikit.js';
  let images: Array<string> = [];
  onMount(()=> {
    fetch(window.location.href + "img/slide/img.json")
      .then(response => {
        return response.json();
      })
    .then(jsondata => images = jsondata);
  });
  
</script>

<div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="min-height: 0; max-height: 600">

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

  <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" alt="" uk-slidenav-previous uk-slideshow-item="previous"></a>
  <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" alt="" uk-slidenav-next uk-slideshow-item="next"></a>

</div>