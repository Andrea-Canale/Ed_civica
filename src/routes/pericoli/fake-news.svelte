<script lang="ts">
  import Article from "../lib/article.svelte";
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
      meta="Scritto da Andrea Canale, Marco Cellini e Gioele Mari Domenica 8 Maggio 2022"
      subtitle=""
      text="Le reti social sono un terreno fertile per le fake news. 
        Le fake news hanno gioco facile se i contenuti sono letti acriticamente. 
        È quindi fondamentale che tutti imparino a distinguere tra opinioni e fatti e a identificare fonti credibili."
      imgcomment=""
      imgsrc="/img/fake_news_pc.png"
    />
  </div>
  <hr class="uk-divider-icon" />
  <h1><strong>Cosa sono le fake new?</strong></h1>
  <div align="center" class="container">
    <p class="text">
      Le fake news sono notizie false che vengono diffuse deliberatamente. A
      prima vista, le fake news assomigliano alle notizie o ai report classici.
      Tuttavia, l’obiettivo degli autori non è quello di adempiere al dovere di
      informare, bensì quello di manipolare l’opinione pubblica e scatenare
      emozioni come la paura e l’insicurezza.
    </p>
    <p class="text">
      Gruppi con opinioni estreme, xenofobia o una particolare visione del mondo
      abusano di internet per fomentare gli animi e diffondere opinioni
      unilaterali o manipolare i fatti (fatti alternativi). Riguardo al
      coronavirus, in particolare, circola una grande quantità di fake news.
      Anche la politica e la scienza sono spesso bersaglio delle fake news.
    </p>
    <hr class="uk-divider-icon" />
    <h1><strong>Come individuare le fake news</strong></h1>
    <div align="centre" class="container">
      <p class="text">
        Individuare informazioni false non è sempre facile. Ecco alcuni indizi
        per riconoscere le fonti affidabili:
      </p>
    </div>

    <div align="left" class="container">
      <ul>
        <li class="text">
          Il controllo delle fonti: Da dove provengono le informazioni? Chi ha
          scritto la notizia e pubblicato il contenuto? La notizia è neutrale o
          qualcuno vuole diffondere un suo messaggio? In quale formato (news,
          reti sociali, YouTube, servizi di messaggeria) è stata pubblicata
          questa notizia?
        </li>
        <li class="text">
          La verifica dei fatti: Questa notizia è attuale? Questo argomento è
          riportato anche su altri canali noti e seri? Cosa si legge lì?
        </li>
        <li class="text">
          Il controllo del gruppo target: A chi è rivolta questa notizia? Se
          questo messaggio è pubblicato sul web, quanta altra pubblicità è
          visibile su questa pagina? Il titolo e il layout sembrano strani, ci
          sono molti errori di ortografia o punti esclamativi?
        </li>
        <li class="text">
          Il controllo dell’URL: Che aspetto ha l’indirizzo URL (www.)? Le fake
          news appaiono spesso su pagine che sembrano molto simili a un sito
          serio. Anche l’indirizzo web può confondere perché molto simile a
          quello del sito originale, ad esempio www.sfr.it invece di www.srf.it
        </li>
      </ul>
    </div>

    <hr class="uk-divider-icon" />
    <h1><strong>I social media sono moltiplicatori di fake news?</strong></h1>
    <div align="center" class="container">
      <p class="text">
        Le fake news si diffondono principalmente attraverso le reti sociali,
        come Facebook, Twitter, Instagram, YouTube, o servizi di messaggeria
        come Telegram o WhatsApp. Le notizie false che seminano dubbi,
        ridicolizzano una tesi o escludono le minoranze ricevono facilmente un
        «like» o vengono condivise e commentate più rapidamente e, spesso, si
        diffondono in pochissimo tempo.
      </p>
      <p class="text">
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

<style>
  li {
    color: white;
  }
</style>
