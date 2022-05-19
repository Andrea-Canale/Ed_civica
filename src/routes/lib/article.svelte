<script lang="ts">
  export let header: string,
    meta: string,
    subtitle: string,
    text: string,
    imgsrc: string,
    imgcomment: string,
    imgmaxwidth: string;
    import './article.css';
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

  <h3 class="uk-article-meta meta">{meta}</h3>

  <p class="submeta">{subtitle}</p>
  <div align="center">
    <img
      src={imgsrc}
      class="pure-img"
      style={"max-width: " + imgmaxwidth}
      alt={"foto di " + header}
    />
    <p>{imgcomment}</p>
  </div>
  <p class="text">{text}</p>
</article>
