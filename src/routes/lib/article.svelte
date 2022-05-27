<script lang="ts">
  import 'purecss/build/base-min.css';
  
  export let header: string,
    meta: string,
    subtitle: string,
    text: string,
    imgsrc: string,
    imgcomment: string,
    imgmaxwidth: string;
  
</script>


<article class="uk-article">
  <h1 style="color:white;font-family:Hacked">
    {header}
  </h1>

  <h3 class="uk-article-meta meta">{meta}</h3>

  <p class="submeta">{subtitle}</p>
  <div align="center">
    <div uk-lightbox>
      <a href={imgsrc}>
        <img
          src={imgsrc}
          class="pure-img"
          style={"max-width: " + imgmaxwidth}
          alt={"foto di " + header}
        />
      </a>
    </div>
    <p>{imgcomment}</p>
  </div>
  <p class="text">{text}</p>
</article>
