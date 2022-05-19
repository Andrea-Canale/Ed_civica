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
      header="L'attacco DDoS"
      meta="Scritto da Andrea Canale e Gioele Mari Mercoledì 18 Maggio 2022"
      subtitle="Cos'è un attacco DDoS?"
      text=""
      imgcomment="Un attacco Distributed Denial of Service (DDoS) prevede l'invio di un numero elevato di richiesta verso di una destinazione.
        Questo solitamente comporta il crash del server che è sotto attacco perchè non riesce a gestire tutte le richieste.
        Solitamente, viene eseguito da una botnet di computer per avere una potenza computazionale elevatissima. Gli hacker per creare una botnet devono mandare un virus in modo da prendere il controllo del PC
        e iniziare l'attacco DDoS. "
      imgsrc="/img/ddos.jpg"
    />
    <hr class="uk-divider-icon" />
    <h1><strong>Il primo attacco DDoS</strong></h1>
    <p>
      La prima dimostrazione di attacco DoS(essendo stata fatta da un pc unico)
      è stata fatta da Khan C. Smith nel 1997 durante un evento che ha
      interrotto l'accesso a Internet alla Las Vegas Strip per oltre un'ora. Il
      rilascio del codice di esempio durante l'evento ha portato all'attacco
      online di Sprint, EarthLink, E-Trade e altre grandi aziende nell'anno a
      seguire.
    </p>
    <hr class="uk-divider-icon" />
    <h1><strong>I tipi di attacco DDoS</strong></h1>
    <h3>Sys-Flood</h3>
    <p>
      Il Syn-Flooding è stato il primo degli attacchi DoS e consiste nell'aprire
      continuamente nuove sessioni HTTP, in questo modo il server che viene
      attaccato deve allocare memoria per ogni nuova sessione, quando la memoria
      del server verrà saturata, il server andrà in crash.
    </p>
    <h3>Attacco Smurf</h3>
    <p>
      Questo attacco viene eseguito all'interno di una rete locale per mandare
      in crash gli host di una rete locale, in questo scenario se la rete è mal
      configurata, i pacchetti verranno moltiplicati rendendo l'attacco più
      veloce.
    </p>
    <h3>R-U-Dead-Yet? (RUDY)</h3>
    <p>
      Un attacc RUDY/Slowloris mantiene le sessioni interrotte utilizzando dei
      POST senza fine e inviando degli header con un contenuto grande.
    </p>
    <hr class="uk-divider-icon" />
    <h1><strong>Come proteggere un sito dagli attacchi DDoS</strong></h1>
    <p>
      Per proteggere un sito dagli attacchi DDoS dobbiamo inanzitutto
      configurare il firewall per bloccare le richieste ICMP e bisogna
      configurare il proprio server(Apache, Nginx...) per accettare un payload
      di dati massimo consono alle richieste del sito e infine bisognerebbe
      proteggere il sito con un anti-DDoS come Cloudflare o altri che se
      riscontrano un numero elevato di richieste, chiedono la verifica
      dell'identità.
    </p>
  </div>
  <hr class="uk-divider-icon" />
  <h1><strong>Come eseguire un attacco DDoS</strong></h1>
  <div align="center" class="container">
    <h5>
      La guida è a scopo didattico, i creatori non sono responsabili di
      eventuali disagi arrecati ad altri seguendo questa guida.
    </h5>
    <p>Ci servirà Python 3 installato sul nostro PC</p>
    <p>
      Scarichiamo Slowloris da <a
        href="https://raw.githubusercontent.com/gkbrk/slowloris/master/slowloris.py"
        >qui</a
      >
    </p>
    <p>
      Per avviare un attacco con Slowloris andiamo nella cartella dove abbiamo
      scaricato il programma ed eseguiamo il seguente comando:
    </p>
    <Bash
      command="python slowloris.py example.com #nome del sito"
      background="grey"
      commandcolor="white"
    />
    <p>
      Se il server è ben protetto l'attacco fallirà, in caso contrario è molto
      probabile che il server rallenterà e nei casi peggiori andrà in crash
    </p>
  </div>
  <br />
</section>

<style>
  h3 {
    color: white;
  }
</style>
