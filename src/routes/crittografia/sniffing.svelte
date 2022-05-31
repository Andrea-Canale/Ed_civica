<script lang="ts">
  import Article from "../lib/article.svelte";
  import Bash from "../lib/bash.svelte";
  import 'purecss/build/base-min.css';
</script>

<svelte:head>
  <title>Sniffing</title>
  <link rel="stylesheet" href="/css/jammer.css" />
</svelte:head>

<section>
  <div class="container">
    <Article
      header="Sniffing"
      meta="Scritto da Andrea Canale, Marco Cellini e Gioele Mari Domenica 8 maggio 2022"
      subtitle="Parliamo di sniffing"
      text="La tecnica dello sniffing permette di catturare tutto il traffico che sta passando in una rete, spesso lo sniffing,
          viene usato per individuare problemi in una rete ma i malintenzionati possono catturare il traffico di rete e estrapolare delle informazioni,
          ovviamente non è così facile, dato che la maggior parte dei siti usa il protocollo HTTPS che cripta la comunicazione tra client e server.
          Quindi un hacker può catturare informazioni sensibili se riuscesse a decriptare i pacchetti HTTPS o se un sito non implementasse HTTPS, i pacchetti vengono catturati in chiaro con tutte le informazioni disponibili all'uso.
          Lo sniffing però può avvenire anche all'esterno di una rete, nell'articolo del Jammer(sotto strumenti di un hacker), abbiamo visto come Aircrack riesca 
          a risalire ai client connessi ad una rete, in modo analogo anche Wireshark può catturare i pacchetti che vengono trasmessi tra un Client Wi-Fi e un AP, se l'AP dovesse
          implementare algoritmi di sicurezza molto vecchi(AES, WPA1, ecc...), un malintenzionato potrebbe catturare le informazioni senza neanche essere connesso alla rete locale.
          Dopo andremo a vedere come effettuare sniffing in una rete e come un protocollo non sicuro metta a rischio la sicurezza dei nostri dati sensibili."
      imgcomment="Sniffing con Wireshark"
      imgmaxwidth="1024px"
      imgsrc="/img/wireshark.png"
    />
  </div>
  <hr class="uk-divider-icon" />
  <h1>Catturiamo i pacchetti all'interno di una rete con Wireshark</h1>
  <div align="center" class="container" uk-lightbox>
    <h5 class="text">
      La guida è a scopo didattico, i creatori non sono responsabili di
      eventuali disagi arrecati ad altri seguendo questa guida.
    </h5>
    <p class="text">
      Per questa guida ci servirà un OS Windows, Linux o Mac OS
    </p>
    <p class="text">Installiamo Wireshark sul nostro OS</p>
    <Bash
      command="sudo apt-get install wireshark #Debian e derivate"
      background="grey"
      commandcolor="white"
    />
    <Bash
      command="brew install wireshark #Mac OS"
      background="grey"
      commandcolor="white"
    />
    <p class="text">
      Per Windows scarichiamo l'installer da <a
        href="https://1.eu.dl.wireshark.org/win64/Wireshark-win64-3.6.5.exe"
        >qui</a
      >
    </p>
    <p class="text">Installiamo Bettercap per eseguire l'ARP spoofing</p>
    <Bash
      command="sudo apt-get install bettercap #Debian e derivate"
      background="grey"
      commandcolor="white"
    />
    <Bash
      command="brew install bettercap #Mac OS"
      background="grey"
      commandcolor="white"
    />
    <p class="text">
      A questo punto tutti i tool che dobbiamo usare sono pronti
    </p>
    <hr class="uk-divider-icon" />
    <h1>Eseguiamo l'ARP spoofing</h1>
    <p class="text">
      Scanerizzando la rete con il nostro tool preferito, io personalmente uso
      nmap, prendiamo l'IP del dispositivo che dobbiamo sniffare
    </p>
    <p class="text">Una volta preso l'IP, apriamo bettercap</p>
    <Bash command="sudo bettercap -G" background="grey" commandcolor="white" />
    <p class="text">Si aprirà bettercap</p>
    <div>
      <a href="/img/ettercap.png">
        <img src="/img/ettercap.png" alt="ettercap" />
      </a>
    </div>
    <p class="text">Selezioniamo l'interfaccia da dove sniffare e avviamolo</p>
    <p class="text">
      Poi apriamo la lista degli host dalla Host List e avviamo la scansione
      degli host
    </p>
    <a href="/img/bettercaphost.png">
      <img src="/img/bettercaphost.png" alt="ettercaphost" />
    </a>
    <p class="text">
      Selezioniamo l'IP da sniffare nel target 2 e nel target 1 mettiamo l'IP
      del server DHCP, se presente, io sto usando un semplice switch e quindi
      non lo selezionerò. Infine, avviamo l'ARP spoofing
    </p>
    <a href="/img/bettercaparp.png">
      <img src="/img/bettercaparp.png" alt="bettercapARP" />
    </a>
    <p class="text">
      Quando il PC che stiamo sniffando entrerà su un sito non sicuro(HTTP)
      wireshark ed ettercap prenderanno le credenziali e verranno visualizzate
      insieme a tutto il codice HTML e le immagini
    </p>
    <a href="/img/wiresharkcap.png">
      <img src="/img/wiresharkcap.png" alt="wiresharkcap" />
    </a>
    <p class="text">
      Possiamo anche usare driftnet per vedere le immagini scaricate
    </p>
    <Bash
      command="driftnet -i nome interfaccia"
      background="grey"
      commandcolor="white"
    />
    <a href="/img/slide/driftnet.png">
      <img src="/img/slide/driftnet.png" alt="driftnet" />
    </a>
  </div>
  <h1>&nbsp;</h1>
</section>
