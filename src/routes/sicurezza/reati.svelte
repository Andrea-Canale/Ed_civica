<script lang="ts">
  import Article from "../lib/article.svelte";
  import 'purecss/build/base-min.css';
</script>

<svelte:head>
  <link rel="stylesheet" href="/css/jammer.css" />
</svelte:head>

<section>
  <div class="container">
    <Article
      imgmaxwidth="500px"
      header="Quali sono i reati informatici"
      meta="Scritto da Andrea Canale, Marco Cellini e Gioele Mari Giovedì 19 Maggio 2022"
      subtitle=""
      text=""
      imgcomment=""
      imgsrc="/img/reati_informatici.jpeg"
    />
  </div>
  <div align="left" class="container">
    <p class="text">
      La legge 547 prevede cinque categorie principali di reati informatici:
    </p>
    <ul class="text">
      <li>Frode informatica</li>
      <li>Accesso abusivo a un sistema informatico</li>
      <li>Detenzione e diffusione abusiva di codici di accesso a sistemi</li>
      <li>Diffusione di hardware e software diretti a danneggiare sistemi</li>
      <li>
        Intercettazione, impedimento o interruzione illecita di comunicazioni
        informatiche o telematiche
      </li>
    </ul>
  </div>
  <hr class="uk-divider-icon" />
  <div align="center" class="container">
    <h1>Frode informatica</h1>
    <p class="text">
      La frode informatica viene definita dall’articolo 640 ter del Codice
      Penale come l’alterazione, in qualsiasi modo, del funzionamento di un
      sistema informatico o telematico in grado di procurare a sé o ad altri “un
      ingiusto profitto con altrui danno”.
    </p>
    <p class="text">
      Tra i reati compresi da questa categoria, il più diffuso e pericoloso è
      sicuramente il phishing, ovvero l’appropriazione indebita, mediante
      l’inganno, di credenziali di accesso e dati personali di un utente. Per
      una descrizione dettagliata, ti consigliamo di leggere il nostro articolo
      sul phishing.
    </p>
    <hr class="uk-divider-icon" />
    <h1>Accesso abusivo a un sistema informatico o telematico</h1>
    <div align="centre" class="container">
      <p class="text">
        L’articolo 640 ter del codice penale rende perseguibili l’accesso
        abusivo a un sistema informatico o telematico protetto da misure di
        sicurezza, nonché il mantenimento in esso contro la volontà espressa o
        tacita di chi ne ha diritto.
      </p>
      <p class="text">
        In questa categoria rientrano, ad esempio, gli accessi abusivi ai social
        network o account di e-banking mediante le credenziali del proprietario
        dell’account ma, ovviamente, a sua insaputa. Da notare che il reato è
        commesso quando si esegue l’accesso, indipendentemente dalle azioni
        successive, che possono comportare l’infrazione di altre norme e, di
        conseguenza, altri reati informatici.
      </p>
      <p class="text">
        Vale la pena sottolineare che la Corte di Cassazione ha stabilito che
        per dimostrare la sussistenza del reato può bastare l’identificazione
        dell’indirizzo IP di chi ha eseguito l’accesso abusivo.
      </p>
    </div>
    <hr class="uk-divider-icon" />
    <h1>
      <strong
        >Detenzione e diffusione abusiva di codici di accesso a sistemi
        informatici o telematici</strong
      >
    </h1>
    <div align="center" class="container">
      <p class="text">
        Commette un reato informatico di questo tipo “chiunque, al fine di
        procurare a sé o ad altri un profitto o di arrecare ad altri un danno,
        abusivamente si procura, riproduce, diffonde, comunica o consegna
        codici, parole chiave o altri mezzi idonei all’accesso a un sistema
        informatico o telematico, protetto da misure di sicurezza, o comunque
        fornisce indicazioni o istruzioni idonee al predetto scopo”.
      </p>
      <br />
    </div>
    <hr class="uk-divider-icon" />
    <h1>
      <strong
        >Diffusione di programmi diretti a danneggiare o interrompere un sistema
        informatico</strong
      >
    </h1>
    <div align="center" class="container">
      <p class="text">
        Con questa modifica al codice penale, la legge punisce “chiunque
        diffonde, comunica o consegna un programma informatico da lui stesso o
        da altri redatto, avente per scopo o per effetto il danneggiamento di un
        sistema informatico o telematico, dei dati o dei programmi in esso
        contenuti o a esso pertinenti, ovvero l’interruzione, totale o parziale,
        o l’alterazione del suo funzionamento”.
      </p>
    </div>
    <hr class="uk-divider-icon" />
    <h1>
      Intercettazione, impedimento o interruzione illecita di comunicazioni
      informatiche o telematiche
    </h1>
    <div align="center" class="container">
      <p class="text">
        In base a questa norma viene punito “chiunque fraudolentemente
        intercetta comunicazioni relative a un sistema informatico o telematico
        o intercorrenti tra più sistemi, ovvero le impedisce o le interrompe”.
        Un chiaro esempio di questo tipo di crimine informatico ai danni
        dell’utente finale è l’intercettazione dei dati di navigazione mediante
        la connessione a una rete Wi-Fi.
      </p>
    </div>
    <hr class="uk-divider-icon" />
    <h1>Misure di sicurezza personali</h1>
    <p class="text">
      Ora che sai quali sono i reati informatici previsti dal codice penale,
      speriamo che tu ti senta più tutelato. Tuttavia, sebbene la polizia
      postale disponga di strumenti e procedure sempre più efficaci, nel caso di
      molti reati è difficile risalire all’identità del criminale e,
      soprattutto, la responsabilità finale può ricadere sull’utente.
    </p>
    <p class="text">
      Ad esempio, se una banca mette a disposizione dell’utente tutte le misure
      di sicurezza preventive e informative previste dalla legge e nonostante
      ciò un cliente è vittima di un attacco di phishing contro gli utenti della
      piattaforma di e-banking in questione, il denaro rubato potrebbe non
      essere rimborsato.
    </p>
    <div align="left" class="container">
      <p class="text">
        Per questo motivo, è importante informarsi sui pericoli informatici e
        utilizzare tutti gli strumenti di protezione disponibili:
      </p>
      <ul class="text">
        <li>Verifica l’autenticità di messaggi e siti web</li>
        <li>Non divulgare dati sensibili e credenziali di accesso</li>
        <li>Crea password sicure e aggiornale periodicamente</li>
        <li>Utilizza una VPN</li>
        <li>Scarica e installa un pacchetto completo di cybersicurezza.</li>
      </ul>
    </div>
  </div>
</section>

<style>
  li {
    color: white;
  }
</style>
