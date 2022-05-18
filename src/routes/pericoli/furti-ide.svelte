<script lang="ts">
  import Article from "../lib/article.svelte";
  import UnorderedList from "../lib/UnorderedList.svelte";
  import Punti_truffe from "../lib/Punti_truffe.svelte";
  import Punto2_truffe from "../lib/Punto2_truffe.svelte";
  import P_truffe_ultimi from "../lib/P_truffe_ultimi.svelte";

  import punto_truffe1 from "../lib/punto_truffe1.svelte";
  import punto_truffe2 from "../lib/punto_truffe2.svelte";

  import punto2_truffe1 from "../lib/punto2_truffe1.svelte";
  import punto2_truffe2 from "../lib/punto2_truffe2.svelte";
  import punto2_truffe3 from "../lib/punto2_truffe3.svelte";

  import p_truffe3 from "../lib/p_truffe3.svelte";
  import p_truffe4 from "../lib/p_truffe4.svelte";
  import p_truffe5 from "../lib/p_truffe5.svelte";
  import p_truffe6 from "../lib/p_truffe6.svelte";
  import p_truffe7 from "../lib/p_truffe7.svelte";
  import p_truffe8 from "../lib/p_truffe8.svelte";

  import p_truffe_9 from "../lib/p_truffe_9.svelte";
  import p_truffe_10 from "../lib/p_truffe_10.svelte";

  const cmps = [punto_truffe1, punto_truffe2];
  const t = [p_truffe3, p_truffe4, p_truffe5, p_truffe6, p_truffe7, p_truffe8];
  const p = [punto2_truffe1, punto2_truffe2, punto2_truffe3];
  const last = [p_truffe_9, p_truffe_10];
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
      header="Furti d'Identità"
      meta="Scritto da Andrea Canale, Marco Cellini e Gioele Mari Mercoledì 18 Maggio 2022"
      subtitle=""
      text="Bisogna anzitutto analizzare il concetto di identità personale e quello di identità digitale e la tutela della personalità del soggetto sul web."
      imgcomment=""
      imgsrc="/img/furti-identità.jpg"
    />
  </div>
  <div align="center" class="container">
    <p>
      L’identità personale consisterebbe nella rappresentazione di un individuo
      in relazione al contesto sociale in cui sviluppa la sua personalità. Il
      concetto di identità personale contiene l'insieme delle caratteristiche
      dell'individuo.
    </p>
    <p>
      In questo senso, quindi, l’ordinamento giuridico riconosce il diritto del
      singolo a mantenere il controllo sulla rappresentazione che ha di sé agli
      occhi della società; da questi concetti si sviluppano, peraltro, le
      questioni giuridiche relative alla tutela dell’onore, del decoro, della
      reputazione, nonché del diritto all’immagine.
    </p>
    <p>
      In questo contesto si inserisce anche il concetto di identità digitale che
      è la rappresentazione di un individuo, identificabile in colui che
      crea/usa il dataset in cui essa è memorizzata. Uno dei primi studiosi ad
      occuparsi della nascita della 'persona digitale' (digital persona) e dei
      suoi effetti sulla privacy dei cittadini fu, a partire dal 1994, il
      tecnologo Roger Clarke che diede questa definizione: la persona digitale è
      un modello di personalità individuale pubblica basato su dati e mantenuto
      da transazioni, destinato ad essere utilizzato su delega dell'individuo. È
      chiaro, infatti, che ogni azione compiuta nella realtà di internet
      fornisce al sistema, dei dati che consentono di ricostruire un profilo più
      o meno dettagliato dell’utente a cui si riferiscono, relativo alla sua
      personalità, alle sue preferenze ed opinioni personali: in breve, la sua
      identità personale.
    </p>

    <p>
      La popolarità e l’utilizzo massiccio di Internet hanno comportato la
      creazione di milioni di identità digitali, al fine di svolgere in questo
      spazio virtuale le attività più disparate. Si possono pertanto individuare
      diverse tipologie di identità digitali, in relazione alle attività da
      compiere sul web, motivo per cui la nozione di identità digitale è
      comunemente intesa secondo due differenti accezioni, ovvero sia come
      rappresentazione nel mondo online di una persona fisica o giuridica, sia
      come insieme delle informazioni e delle risorse concesse da un sistema
      informatico al suo utilizzatore o, meglio, come l’insieme di codici
      elettronici attribuiti ad un soggetto fisico, che ne consentono
      l’identificazione nel mondo virtuale.
    </p>

    <hr class="uk-divider-icon" />
    <h1>
      Ma andiamo ad esaminare in che cosa consiste il furto di identità digitale
    </h1>
    <div align="left" class="container">
      <p>
        Il furto d’identità digitale è un fenomeno criminoso prodromico alla
        commissione di ulteriori illeciti, che si articola in diverse fasi,
        ovvero:
      </p>

      <ul>
        <li>l’ottenimento delle informazioni personali della vittima;</li>
        <li>
          l’interazione con le informazioni personali, che consiste nel possesso
          e nella vendita di tali dati;
        </li>
        <li>
          l’utilizzo delle informazioni personali illecitamente ottenute per
          commettere ulteriori reati, non necessariamente contro il patrimonio,
          ma anche ad esempio diffamazioni o minacce.
        </li>
      </ul>
    </div>

    <hr class="uk-divider-icon" />
    <h1>Qualche consiglio utile</h1>
    <div align="center" class="container">
      <p>
        Come abbiamo visto è impossibile scongiurare del tutto il pericolo di un
        furto d’identità, tuttavia ci sono degli accorgimenti che possono
        ridurre le possibilità che ciò accada.
      </p>
      <div align="left" class="container">
        <p>
          A titolo non esaustivo, ecco alcuni consigli utili per proteggere i
          dati personali ed evitare che qualcuno se ne impossessi:
        </p>
      </div>
      <div align="left" class="container">
        <ul>
          <li>
            scegliere password non banali con lettere minuscole, maiuscole,
            numeri e simboli e aggiornarle periodicamente;
          </li>
          <li>
            fare attenzione ad aprire email sospette e comunque non comunicare i
            propri dati personali, credenziali del conto via email, password e
            pin;
          </li>
          <li>accedere ai social network dal vostro browser.</li>
        </ul>
      </div>

      <div align="center" class="container">
        <p>
          Questi consigli sono sicuramente utili ma non possono fronteggiare le
          infinite possibilità di frode, quindi sempre tenere gli occhi aperti!
        </p>
      </div>

      <br />
    </div>
  </div>
</section>

<style>
  li {
    color: white;
  }
</style>
