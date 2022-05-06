<script lang="ts">
  export let header, meta, subtitle, text;
</script>

<article class="uk-article">
  <h1 class="uk-article-title">
    <a class="uk-link-reset" href="">{header}</a>
  </h1>

  <p class="uk-article-meta">{meta}</p>

  <p class="uk-text-lead">{subtitle}</p>

  <p>{text}</p>
</article>
