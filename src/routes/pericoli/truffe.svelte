<script lang="ts">
  import Article from "../lib/article.svelte";
  import UnorderedList from "../lib/UnorderedList.svelte";
  import Punti_truffe from "../lib/Punti_truffe.svelte";

  import punto_truffe1 from "../lib/punto_truffe1.svelte";
  import punto_truffe2 from "../lib/punto_truffe2.svelte";

  import p_truffe3 from "../lib/p_truffe3.svelte";
  import p_truffe4 from "../lib/p_truffe4.svelte";
  import p_truffe5 from "../lib/p_truffe5.svelte";
  import p_truffe6 from "../lib/p_truffe6.svelte";
  import p_truffe7 from "../lib/p_truffe7.svelte";
  import p_truffe8 from "../lib/p_truffe8.svelte";

  const cmps = [punto_truffe1, punto_truffe2];
  const t = [p_truffe3, p_truffe4, p_truffe5, p_truffe6, p_truffe7, p_truffe8];
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
      header="Truffe Online"
      meta="Scritto da Marco Cellini Domenica 12 Maggio 2022"
      subtitle=""
      text="Una delle forme più comuni del reato di truffa ai tempi di Internet è la cosiddetta truffa online: 
        si tratta di un reato che sul web viene declinato in molteplici forme, 
        alcune delle quali sono anche molto sofisticate. 
        La truffa online procura un profitto ingiusto a sé o ad altri provocando un danno a qualcun altro."
      imgcomment=""
      imgsrc="/img/truffe.png"
    />
  </div>
  <div align="center" class="container">
    <p>
      La truffa online viene punita con la reclusione che può andare da 6 mesi a
      3 anni, e con una sanzione, il cui costo varia da un minimo di 51 euro a
      un massimo di 1.032 euro.
    </p>
    <p>
      Nel caso in cui la truffa venga realizzata ai danni dello Stato o di
      qualsiasi altro ente pubblico, oppure qualora generi in qualcuno il timore
      di un pericolo immaginario:
    </p>

    <div align="left" class="container">
      <UnorderedList {cmps} />
    </div>

    <p>
      La truffa online può essere denunciata al fine di recuperare i soldi
      perduti a causa del raggiro che ha condotto in errore la persona
      danneggiata. Come si fa a riconoscere una truffa online? Come si denuncia
      e quali sono le autorità alle quali bisogna rivolgersi? Di seguito una
      guida con le informazioni più utili per riuscire a difendersi dalle truffe
      online maggiormente diffuse.
    </p>

    <hr class="uk-divider-icon" />
    <h1>Come difendersi dalle truffe online?</h1>
    <div align="centre" class="container">
      <p>
        Purtroppo al giorno d’oggi incappare in una truffa online è davvero
        molto semplice e le modalità attraverso le quali è possibile ritrovarsi
        inconsapevolmente in una situazione che non corrisponde al vero sono
        svariate: si passa, infatti, dal più noto furto dei dati bancari alle
        astutissime truffe sui siti di compravendita immobiliare.
      </p>
      <p>
        Per questo motivo, quando si effettua qualsiasi operazione online
        collegata ai propri soldi, è sempre meglio avere un grado di attenzione
        in più. Ci sono tanti piccoli consigli che è bene imparare a mettere in
        pratica per evitare una possibile truffa online e riconoscerla.
      </p>
      <div align="left" class="container">
        <p>Tra questi si consiglia di:</p>
      </div>
      <div align="left" class="container">
        <Punti_truffe {t} />
      </div>
    </div>

    <hr class="uk-divider-icon" />
    <h1>Come tutelarsi dai siti truffa</h1>
    <div align="center" class="container">
      <p>
        Chi non è particolarmente avvezzo all’utilizzo del web e nel fare
        acquisti online, potrebbe andare incontro a una truffa su un e-commerce.
      </p>
      <div align="left" class="container">
        <p>
          Pertanto, nel momento in cui si compra su Internet, è bene procedere
          con cautela:
        </p>
      </div>

      <br />
    </div>
  </div>
</section>
