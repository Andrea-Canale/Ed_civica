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
      imgmaxwidth="500px"
      header="Il raspberry"
      meta="Scritto da Andrea Canale e Marco Cellini Giovedì 12 Maggio 2022"
      subtitle="Cos'è un Raspberry?"
      text="Il raspberry PI è un Single-Board Computer sviluppato dalla Raspberry PI foundation. Funziona come un computer, sono presenti diverse porte GPIO, 
        è possibile installarci diversi sistemi operativi, da Raspberry OS a Arch Linux.
        è una scheda veramente versatile, molto usata perchè piccola e a basso consumo energetico. Nelle versione PI 4 in avanti integra anche la porta type-C che garantisce
        un supporto ad innumerevoli periferiche. I Raspberry usano chip Broadcom solitamente che hanno un buon supporto ad attacchi Wi-Fi e sono molto potenti in relazione al consumo.
        "
      imgcomment="Un raspberry"
      imgsrc="/img/slide/raspberry.png"
    />
  </div>
</section>
