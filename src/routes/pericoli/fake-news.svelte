<script lang="ts">
  import Article from "../lib/article.svelte";
  import UnorderedList from "../lib/UnorderedList.svelte";
  import punto1 from "../lib/punto1.svelte";
  import punto2 from "../lib/punto2.svelte";
  import punto3 from "../lib/punto3.svelte";
  import punto4 from "../lib/punto4.svelte";

  const cmps = [punto1, punto2, punto3, punto4];
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
      header="Le Fake News"
      meta="Scritto da Marco Cellini Domenica 8 Maggio 2022"
      subtitle=""
      text="Le reti social sono un terreno fertile per le fake news. 
        Le fake news hanno gioco facile se i contenuti sono letti acriticamente. 
        È quindi fondamentale che tutti imparino a distinguere tra opinioni e fatti e a identificare fonti credibili."
      imgcomment=""
      imgsrc="/img/fake_news_pc.png"
    />
  </div>
  <hr class="uk-divider-icon" />
  <h1>Cosa sono le fake news?</h1>
  <div align="center" class="container">
    <p>
      Le fake news sono notizie false che vengono diffuse deliberatamente. A
      prima vista, le fake news assomigliano alle notizie o ai report classici.
      Tuttavia, l’obiettivo degli autori non è quello di adempiere al dovere di
      informare, bensì quello di manipolare l’opinione pubblica e scatenare
      emozioni come la paura e l’insicurezza.
    </p>
    <p>
      Gruppi con opinioni estreme, xenofobia o una particolare visione del mondo
      abusano di internet per fomentare gli animi e diffondere opinioni
      unilaterali o manipolare i fatti (fatti alternativi). Riguardo al
      coronavirus, in particolare, circola una grande quantità di fake news.
      Anche la politica e la scienza sono spesso bersaglio delle fake news.
    </p>
    <hr class="uk-divider-icon" />
    <h1>Come individuare le fake news</h1>
    <div align="centre" class="container">
      <p>
        Individuare informazioni false non è sempre facile. Ecco alcuni indizi
        per riconoscere le fonti affidabili:
      </p>
    </div>

    <div align="left" class="container">
      <UnorderedList {cmps} />
    </div>

    <hr class="uk-divider-icon" />
    <h1>I social media sono moltiplicatori di fake news?</h1>
    <div align="center" class="container">
      <p>
        Le fake news si diffondono principalmente attraverso le reti sociali,
        come Facebook, Twitter, Instagram, YouTube, o servizi di messaggeria
        come Telegram o WhatsApp. Le notizie false che seminano dubbi,
        ridicolizzano una tesi o escludono le minoranze ricevono facilmente un
        «like» o vengono condivise e commentate più rapidamente e, spesso, si
        diffondono in pochissimo tempo.
      </p>
      <p>
        Questo aspetto è particolarmente problematico perché i social media
        stanno sempre più sostituendo i classici media come giornali, radio,
        televisione o siti di notizie governativi. Già l’84% dei giovani in
        Svizzera usa regolarmente le reti sociali come fonte di informazione
        (Studio JAMES 2020, zhaw). Affinché i bambini e i giovani possano
        riconoscere le fake news, devono sviluppare un occhio critico e imparare
        a distinguere i fatti dalle opinioni.
      </p>
      <br />
    </div>
  </div>
</section>
