<script lang="ts">
  export let header: string,
    meta: string,
    subtitle: string,
    text: string,
    imgsrc: string,
    imgcomment: string,
    imgmaxwidth: string;
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/purecss@1.0.1/build/base-min.css"
  />
</svelte:head>

<article class="uk-article">
  <h1>
    {header}
  </h1>

  <p class="uk-article-meta">{meta}</p>

  <p>{subtitle}</p>
  <div align="center">
    <img
      src={imgsrc}
      class="pure-img"
      style={"max-width: " + imgmaxwidth}
      alt={"foto di " + header}
    />
    <p>{imgcomment}</p>
  </div>
  <p>{text}</p>
</article>
