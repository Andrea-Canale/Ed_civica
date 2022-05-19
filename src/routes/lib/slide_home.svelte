<script lang="ts">
  import { onMount } from "svelte";
  import "uikit/dist/css/uikit.css";
  import "uikit/dist/js/uikit.js";
  let images: Array<string> = [];
  onMount(() => {
    fetch(window.location.href + "img/slide/img.json")
      .then((response) => {
        return response.json();
      })
      .then((jsondata) => (images = jsondata));
  });
</script>

<div
  class="uk-position-relative uk-visible-toggle uk-light"
  tabindex="-1"
  uk-slideshow="min-height: 0; max-height: 600"
>
  <ul class="uk-slideshow-items">
    {#each images as image}
      {#if image != "list.py" && image != ".DS_Store" && image != "img.json"}
        <li>
          <img src={"/img/slide/" + image} alt="" />
        </li>
      {/if}
    {/each}
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
