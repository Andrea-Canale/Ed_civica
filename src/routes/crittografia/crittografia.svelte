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
      imgmaxwidth="800px"
      header="Crittografia"
      meta="Scritto da Andrea Canale, Marco Cellini e Gioele Mari Lunedì 23 Maggio 2022"
      subtitle=""
      text="La crittografia è la base della protezione dei dati ed il modo più importante per garantire che le informazioni non possano essere rubate e lette. Sappiamo che ormai Internet è il mezzo più diffuso per veicolare informazioni ed è evidente quanto spesso si sottovalutano i rischi di un suo uso errato. Per questo emerge sempre di più la necessità di una forma di cifratura."
      imgcomment=""
      imgsrc="/img/crittografia.jpg"
    />
  </div>
  <div align="center" class="container">
    <p class="text">
      La crittografia, nonostante la sua origine sia molto lontana, è divenuta
      oggi fattore essenziale nelle telecomunicazioni e nelle applicazioni che
      necessitano un’elevata protezione dei dati in essi contenuti. Molti utenti
      però, ancora oggi, continuano a scambiarsi costantemente informazioni
      senza sentire il bisogno di proteggere i propri dati sensibili e
      rischiando di renderli accessibili a chiunque.
    </p>
    <p class="text">
      Non dimentichiamoci, infatti, che chiunque può accedere alla rete ( anche
      i malintenzionati) e che le applicazioni sono infatti sempre più
      vulnerabili (basti pensare a quelle bancarie e fiscali). Per questo motivo
      da qualche tempo si sta adottando il protocollo HTTPS che, al tradizionale
      protocollo HTTP (con cui i dati viaggiano sempre in chiaro), aggiunge
      l’utilizzo di un algoritmo crittografico e di un certificato digitale
      utile a dichiarare l’identità del server remoto e del soggetto che lo
      gestisce.
    </p>

    <div align="left" class="container">
      <p class="text">
        Quando si parla di un algoritmo crittografico è fondamentale che esso
        offra:
      </p>
      <ul>
        <li class="text">
           Autenticazione  : processo che permette di attestare l’identità
          di ciascun partecipante ad una comunicazione;
        </li>
        <li class="text">
           Segretezza  : indispensabile fare in modo che nessuno possa
          leggere un messaggio, fatta eccezione per il destinatario desiderato;
        </li>
        <li class="text">
           Integrità  : la protezione da modifiche non autorizzate
          operate sul messaggio trasmesso (il materiale inviato al destinatario non
          deve poter essere alterato prima della consegna);
        </li>
        <li class="text">
           Non ripudio  : un meccanismo atto a fornire la certezza
          che chi trasmette un messaggio non possa negare di averlo inviato.
        </li>
      </ul>
    </div>

    <p class="text">
      Questi elementi fanno sì che un cybercriminale non compia attacchi come
      quello di <a href="/crittografia/sniffing" title="apri crittografia"
        >sniffing</a
      >
      e  spoofing  Il primo permette di “spiare” il contenuto dei
      pacchetti dati in transito alla ricerca di informazioni utili; il secondo,
      mirato agli indirizzi IP, si concretizza nella generazione di pacchetti IP
      contenenti, come indirizzo IP del mittente, un indirizzo falso che non corrisponde
      a quello realmente usato dall’aggressore.
    </p>

    <p class="text">
      La crittografia serve proprio a questo: sia per proteggere i dati
      trasmessi evitando che possano essere alterati o sottratti da parte di
      aggressori sia per autenticare un utente.
    </p>

    <hr class="uk-divider-icon" />
    <h1> Tipi di crittografia </h1>
    <div align="centre" class="container">
      <div align="left" class="container">
        <p class="text">
          Sulla base della chiave utilizzata, possono essere individuati <strong
            >due tipi di cifratura</strong
          > :
        </p>
        <ul>
          <li class="text">
             Chiave simmetrica  , noto anche come algoritmo a chiave
            segreta, dove i messaggi sono decodificabili solo dalla persona che conosce
            la password. Questi schemi crittografici non vengono di norma utilizzati
            sulla rete Internet perché la password non può ovviamente viaggiare sullo
            stesso canale (altrimenti potrebbe diventare preda di utenti malintenzionati
            interessati alla decodifica del messaggio). La password può essere al
            limite condivisa usando altri canali ma non è certo l’approccio migliore
            per scambiarsi messaggi con utenti remoti.
          </li>
          <li class="text">
             Chiave asimmetrica  : questo metodo utilizza due chiavi
            diverse, pubblica (che può essere condivisa con chiunque) e privata (che
            deve rimanere segreta). Per cifrare un testo, quindi, con la crittografia
            asimmetrica basta usare la chiave pubblica del destinatario del messaggio
            mentre quest’ultimo per la decodifica dovrà essere necessariamente in
            possesso della sua chiave privata.
          </li>
        </ul>
      </div>
      <p class="text">
        Infine, esiste un terzo tipo di crittografia, cosiddetta <strong
          >end-to-end</strong
        > (usata principalmente da WhatsApp, Messenger o Telegram), che permette
        di proteggere la privacy e le comunicazioni usando doppio paio di chiavi
        crittografiche necessarie per cifrare e decifrare i messaggi in viaggio da
        un capo all’altro della comunicazione. Ogni utente, infatti, utilizzerà una
        chiave pubblica e una chiave privata, legate tra loro in maniera indissolubile.
        La chiave privata è destinata a rimanere sul dispositivo dei due “comunicanti”
        e servirà a decrittare i messaggi in arrivo; la chiave pubblica, invece,
        sarà condivisa con l’interlocutore e sarà utilizzata per crittografare i
        messaggi in uscita. Questa cifratura permette di rendere innocui tentativi
        di attacco man in the middle, che puntano proprio a rubare dati e informazioni
        personali “intercettando” le comunicazioni tra due o più utenti.
      </p>
    </div>
  </div>
</section>

<style>
  li {
    color: white;
  }
</style>
