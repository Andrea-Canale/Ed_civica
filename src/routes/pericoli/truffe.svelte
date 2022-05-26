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
      header="Truffe Online"
      meta="Scritto da Andrea Canale, Marco Cellini e Gioele Mari Domenica 12 Maggio 2022"
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
    <p class="text">
      La truffa online viene punita con la reclusione che può andare da 6 mesi a
      3 anni, e con una sanzione, il cui costo varia da un minimo di 51 euro a
      un massimo di 1.032 euro.
    </p>
    <p class="text">
      Nel caso in cui la truffa venga realizzata ai danni dello Stato o di
      qualsiasi altro ente pubblico, oppure qualora generi in qualcuno il timore
      di un pericolo immaginario:
    </p>

    <div align="left" class="container">
      <ul>
        <li class="text">è prevista una reclusione che va da 1 ai 5 anni;</li>
        <li class="text">
          è previsto il pagamento di una multa che va da 309 euro a 1.549 euro.
        </li>
      </ul>
    </div>

    <p class="text">
      La truffa online può essere denunciata al fine di recuperare i soldi
      perduti a causa del raggiro che ha condotto in errore la persona
      danneggiata. Come si fa a riconoscere una truffa online? Come si denuncia
      e quali sono le autorità alle quali bisogna rivolgersi? Di seguito una
      guida con le informazioni più utili per riuscire a difendersi dalle truffe
      online maggiormente diffuse.
    </p>

    <hr class="uk-divider-icon" />
    <h1><strong>Come difendersi dalle truffe online?</strong></h1>
    <div align="centre" class="container">
      <p class="text">
        Purtroppo al giorno d’oggi incappare in una truffa online è davvero
        molto semplice e le modalità attraverso le quali è possibile ritrovarsi
        inconsapevolmente in una situazione che non corrisponde al vero sono
        svariate: si passa, infatti, dal più noto furto dei dati bancari alle
        astutissime truffe sui siti di compravendita immobiliare.
      </p>
      <p class="text">
        Per questo motivo, quando si effettua qualsiasi operazione online
        collegata ai propri soldi, è sempre meglio avere un grado di attenzione
        in più. Ci sono tanti piccoli consigli che è bene imparare a mettere in
        pratica per evitare una possibile truffa online e riconoscerla.
      </p>
      <div align="left" class="container">
        <p class="text">Tra questi si consiglia di:</p>
        <ul>
          <li class="text">
            evitare password banali, come quelle contenenti il nostro nome o
            quello di una persona cara seguito da numeri associati a date di
            nascita o ricorrenze;
          </li>
          <li class="text">
            evitare di utilizzare la stessa password per tutti i servizi online
            che ne richiedono una;
          </li>
          <li class="text">
            cambiare la password periodicamente e ricordarsi di memorizzarla in
            un posto sicuro (è sempre meglio tenerla in due posti diversi, in
            modo tale da riuscire comunque a reperirla in caso di dimenticanza);
          </li>
          <li class="text">
            non cliccare per nessun motivi su link sconosciuti, per esempio
            quelli che si ricevono spesso via mail;
          </li>
          <li class="text">
            non inviare i propri documenti via mail a persone che, per esempio,
            hanno messo in affitto un appartamento online senza dare la
            possibilità di vederlo dal vivo;
          </li>
          <li class="text">
            non scaricare file, applicazioni o programmi dal contenuto sospetto
            o non attendibile;
          </li>
        </ul>
      </div>
    </div>

    <hr class="uk-divider-icon" />
    <h1><strong>Come tutelarsi dai siti truffa</strong></h1>
    <div align="center" class="container">
      <p class="text">
        Chi non è particolarmente avvezzo all’utilizzo del web e nel fare
        acquisti online, potrebbe andare incontro a una truffa su un e-commerce.
      </p>
      <div align="left" class="container">
        <p class="text">
          Pertanto, nel momento in cui si compra su Internet, è bene procedere
          con cautela:
        </p>
        <ul>
          <li class="text">
            evitando di salvare i dati della propria carta di credito online;
          </li>
          <li class="text">
            utilizzando una carta prepagata contenente pochi soldi;
          </li>
          <li class="text">
            controllando i propri movimenti bancari, per esempio tramite
            l’attivazione di un servizio di SMS alert per essere sempre
            aggiornati su tutte le transazioni che vengono effettuate dal
            proprio conto.
          </li>
        </ul>
        <p class="text">
          Quando non si conosce un sito, si suggerisce sempre di fare una
          ricerca in rete per leggere le opinioni di altri utenti che hanno già
          comprato qualcosa e di verificare:
        </p>
        <ul>
          <li class="text">
            che il sito sul quale si vuole effettuare un acquisto online sia
            affidabile. La presenza del protocollo HTTPS assicura di solito che
            la trasmissione dei dati non sia intercettata. Un altro elemento che
            può certificare la sicurezza della sezione pagamenti è la presenza
            di un lucchetto;
          </li>
          <li class="text">
            che uno shop online abbia una sede legale e un numero di telefono da
            contattare.
          </li>
        </ul>
      </div>

      <p class="text">
        Nel caso in cui, nonostante tutte le precauzioni del caso, si avesse
        comunque la sfortuna di essere truffati online, non bisogna darsi per
        vinti: è possibile sporgere denuncia alle autorità competenti in
        materia.
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
