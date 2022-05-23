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
      imgmaxwidth="350px"
      header="La rubber ducky"
      meta="Scritto da Andrea Canale Mercoledì 11 Maggio"
      subtitle="Cos'è una rubber ducky?"
      text="Una Rubber Ducky è una normale chiavetta che però viene riconosciuta come una tastiera e un mouse. Può eseguire codice malevolo,
      all'interno del PC senza che l'utente se ne accorga. Tuttavia su alcuni sistemi operativi non funziona correttamente, solitamente infatti si usa in ambiente Windows"
      imgcomment="Una rubber ducky della HAL5"
      imgsrc="/img/slide/rubber_ducky.png"
    />
  </div>
  <hr class="uk-divider-icon" />
  <h1>
    <strong>Costruiamo una Rubber Ducky con un Arduino UNO o MEGA</strong>
  </h1>
  <h6 style="color:white;">Per questa guida ci serviranno un Arduino UNO e un computer</h6>
  <p>Cloniamo la seguente repository : <a href="https://github.com/Andrea-Canale/Exploit-Ed-Civica">https://github.com/Andrea-Canale/Exploit-Ed-Civica</a></p>
  <p>Prendiamo il nostro Arduino UNO e carichiamo lo sketch presente nella repository</p>
  <div uk-lightbox>
    <a href="/img/arduinoide.png">
      <img src="/img/arduinoide.png"/>
    </a>
  </div>
  <p>Ora flashiamo attraverso Atmel Flip(Windows) oppure dfu-programmer(Linux e Mac OS) il seguente firmware per far si che il nostro Arduino diventi una chiavetta</p>
  <a style="color:white;" href="https://github.com/coopermaa/USBKeyboard/raw/master/firmware/Arduino-keyboard-0.3.hex">https://github.com/coopermaa/USBKeyboard/raw/master/firmware/Arduino-keyboard-0.3.hex</a>
  <hr/>
  <div align="center">
  <Bash
  command="sudo dfu-programmer atmega16u2 erase --force"
  background="grey"
  commandcolor="white"
  />
  <Bash
  command="sudo dfu-programmer atmega16u2 flash 'Arduino-keyboard-0.3.hex"
  background="grey"
  commandcolor="white"
  />
  <Bash
  command="sudo dfu-programmer atmega16u2 reset"
  background="grey"
  commandcolor="white"
  />
</div>
  <p>Con il seguente sketch quando noi andremo ad attacare l'Arduino al PC verrà aperta una powershell che scarica un programma che fa crashare il SO senza bisogno di permessi di amministratore</p>
  <p>Se volete modificare lo sketch, la funzione Keypress preme dei tasti sulla tastiera mentre la funzione Keystring prende come parametro una stringa e digita il testo nella stringa</p>
<p>Se volete trasformare il vostro Duckino in un normale Arduino flashate il seguente firmware con la stessa procedura di prima, cambiando il nome del file sul comando flash</p>
<a style="color:white;" href="https://raw.githubusercontent.com/coopermaa/USBKeyboard/master/firmware/Arduino-usbserial-uno.hex">https://raw.githubusercontent.com/coopermaa/USBKeyboard/master/firmware/Arduino-usbserial-uno.hex</a>
<hr>
</section>
