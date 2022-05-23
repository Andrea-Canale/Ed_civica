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
      imgmaxwidth="1000px"
      header="I tools e gli exploit"
      meta="Scritto da Andrea Canale e Marco Cellini Lunedì 23 Maggio 2022"
      subtitle="I tools di Kali"
      text="In questo articolo parleremo in breve dei vari tools più famosi per l'hacking e di come proteggersi da essi"
      imgcomment="Alcuni tools di Kali"
      imgsrc="/img/tools.png"
    />
  </div>
  <hr class="uk-divider-icon" />
  <div class="container" uk-lightbox>
  <h1>SWAKS</h1>
  <p>
    SWAKS è un tool per verificare la sicurezza di un server SMTP(server mail), possiamo verificare se 
    senza avere le credenziali di accesso possiamo inviare mail da un mail server, in tal caso il nostro server non sarà sicuro
    e sarebbe meglio cambiare le impostazioni di sicurezza
  </p>
  <hr class="uk-divider-icon" />
  <h1>NETDISCOVER</h1>
  <p>
    Netdiscorver è un tool che permette di rilevare tutti gli host presenti in una rete, compresi i MAC address e di conseguenza i vendor e gli indirizzi IP di questi host.
  </p>
  <p>
    Netdiscover per trovare gli host cattura le richieste ARP dei dispositivi, quindi funziona senza mandare alcun pacchetto.
  </p>
  <a href="/img/netdiscover.png">
    <img src="/img/netdiscover.png"/>
  </a>
  <hr class="uk-divider-icon" />
  <h1>NMAP</h1>
  <p>
    Nmap è un tool che permette di scansionare le porte aperte,chiuse e filtrate di un host e quindi di trovare eventuali vulnerabilità in una configurazione di un host, in caso di porte aperte non necessarie.
  </p>
  <a href="/img/nmap.png">
    <img src="/img/nmap.png"/>
    <h6 style="color:white;">Un classico router che non ha nessun firewall in locale e probabilmente anche all'esterno</h6>
  </a>
  <hr class="uk-divider-icon" />
  </div>
</section>
