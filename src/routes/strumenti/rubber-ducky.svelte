<script lang="ts">
  import Article from "../lib/article.svelte";
  import Bash from "../lib/bash.svelte";
</script>

<svelte:head>
  <link rel="stylesheet" href="/css/jammer.css" />
  <link
    rel="stylesheet"
    href="https://unpkg.com/purecss@1.0.1/build/base-min.css"
  />
</svelte:head>

<section>
  <div class="container">
    <Article
      imgmaxwidth="350px"
      header="La rubber ducky"
      meta="Scritto da Andrea Canale Mercoledì 11 Maggio"
      subtitle="Cos'è una rubber ducky?"
      text="Una Rubber Ducky è una normale chiavetta che però viene riconosciuta come una tastiera e un mouse. Può eseguire codice malevolo,
      all'interno del PC senza che l'utente se ne accorga. Tuttavia su alcuni sistemi operativi non funziona correttamente, solitamente infatti si usa in ambiente Windows"
      imgcomment="Una rubber ducky della HAL5"
      imgsrc="/img/rubber_ducky.png"
    />
  </div>
  <hr class="uk-divider-icon" />
  <h1>
    <strong>Costruiamo una Rubber Ducky con un Arduino UNO o MEGA</strong>
  </h1>
</section>
