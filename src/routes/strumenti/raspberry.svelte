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
      header="Il raspberry"
      meta="Scritto da Andrea Canale e Marco Cellini Giovedì 12 Maggio 2022"
      subtitle="Cos'è un Raspberry?"
      text="Il raspberry PI è un Single-Board Computer sviluppato dalla Raspberry PI foundation. Funziona come un computer, sono presenti diverse porte GPIO, 
        è possibile installarci diversi sistemi operativi, da Raspberry OS a Arch Linux.
        è una scheda veramente versatile, molto usata perchè piccola e a basso consumo energetico. Nelle versione PI 4 in avanti integra anche la porta type-C che garantisce
        un supporto ad innumerevoli periferiche. I Raspberry usano chip Broadcom solitamente che hanno un buon supporto ad attacchi Wi-Fi e sono molto potenti in relazione al consumo.
        "
      imgcomment="Un raspberry"
      imgsrc="/img/slide/raspberry.png"
    />
    <hr class="uk-divider-icon">
    <h1>La storia</h1>
    <p class="text">
      La storia di Raspberry Pi inizia nel 2006 con la creazione dei primi prototipi ispirati alla BBC Micro. 6 anni dopo nacque il primo Raspberry Pi. L'obiettivo principale era aiutare i giovani a scoprire i computer a basso costo (circa $ 30) .
    </p>
    <p class="text">Eben Upton ha lavorato cinque anni dal 2006 al 2011 su un progetto di computer a scheda singola (principalmente la sera e nei fine settimana, mentre lavorava presso Broadcom).
      Il BBC Micro dei computer Acorn che usava a scuola lo ha ispirato a creare il proprio prodotto. Come vedete qui sotto:</p>
      <img src="/img/storia_rasp.webp"/>
      <p class="text">
        Eben Upton stava lavorando su un dispositivo più piccolo ed economico. In primo luogo, ha lavorato su grandi schede per semplificare i test e il debug, ma alla fine l'obiettivo era creare un piccolo computer. Mentre Eben Upton stava creando i suoi prototipi, si è reso conto che c'era un problema nell'istruzione nel Regno Unito: i prezzi elevati dei computer. Ciò implicava che i giovani studenti non imparassero informatica e si allontanassero dalle professioni informatiche . Anche le aziende nel Regno Unito non avevano professionisti del computer.
      </p>
      <div align="left" class="container">
        <p class="text">
          In questi anni si sviluppò Internet:
        </p>
        <ul class="text">
          <li>
            Google stava iniziando ad essere ampiamente utilizzato.
          </li>
          <li>
            Facebook è appena diventato accessibile a tutti.
          </li>
          <li>
            Twitter ha avuto il suo primo tweet.
          </li>
        </ul>
        <p class="text">
          Quindi, il mondo aveva bisogno di molti programmatori e ingegneri di rete per continuare a sviluppare Internet. Eben Upton ha cercato di trovare una soluzione, con l'obiettivo di costruire un computer dieci volte più economico del BBC Micro.
        </p>
      </div>
      <hr class="uk-divider-icon">
      <div align="center" class="container">
        <h1>Il nome</h1>
        <p class="text">
          Molti nomi di produttori di computer derivano dalla frutta e Raspberry non fa eccezione. Prima di Raspberry Pi, esistevano già computer Apple, Acorns e Apricot. Quindi il nome di Raspberry doveva principalmente seguire la moda.
        </p>
        <p class="text">
          La parte "Pi" è un riferimento alla parte Python dei primi dispositivi creati. Questi dispositivi sono iniziati con un prompt del terminale basato sul linguaggio Python.
        </p>
      </div>
  </div>
</section>
