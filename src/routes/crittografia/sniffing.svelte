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
  <div align="center" class="container">
    <h5>
      La guida è a scopo didattico, i creatori non sono responsabili di
      eventuali disagi arrecati ad altri seguendo questa guida.
    </h5>
    <p>Per questa guida ci servirà un OS Windows, Linux o Mac OS</p>
    <hr class="uk-divider-icon" />
    <p>Installiamo Wireshark sul nostro OS</p>
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
    <p>
      Per Windows scarichiamo l'installer da <a
        href="https://1.eu.dl.wireshark.org/win64/Wireshark-win64-3.6.5.exe"
        >qui</a
      >
    </p>
    <!--Appena avrò un portatile finirò la guida :-) -->
    <h1>Work in progress</h1>
  </div>
  <hr />
</section>
