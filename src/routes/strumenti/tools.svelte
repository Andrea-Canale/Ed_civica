<script lang="ts">
  import Article from "../lib/article.svelte";
  import Tool from "../lib/tool.svelte";
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
    <h1>Tool per attacchi a reti locali</h1>
  <Tool title="NETDISCOVER" text="Netdiscorver è un tool che permette di rilevare tutti gli host presenti in una rete, 
  compresi i MAC address e di conseguenza i vendor e gli indirizzi IP di questi host.Netdiscover per trovare gli host 
  cattura le richieste ARP dei dispositivi, quindi funziona senza mandare alcun pacchetto." img="/img/netdiscover.png" imgsub=""></Tool>
  <hr class="uk-divider-icon" />
  <Tool title="NMAP" text="    Nmap è un tool che permette di scansionare le porte aperte,chiuse e filtrate di un host e quindi di trovare 
  eventuali vulnerabilità in una configurazione di un host, in caso di porte aperte non necessarie." img="/img/nmap.png" imgsub=""></Tool>
  <h6 style="color:white;">Un classico router che non ha nessun firewall in locale e probabilmente anche all'esterno</h6>
  <hr class="uk-divider-icon" />
    <Tool title="Ettercap" text="Ettercap è un tool che permette di eseguire attacchi MITM(Man In The Middle), questo può essere utile per controllare
    se le contromisure agli attacchi MITM sono configurate correttamente(come gli ARP anti-attack...)" img="/img/ettercap.png" imgsub="Ettercap in modalità grafica"></Tool>
  <hr class="uk-divider-icon" />
    <Tool title="Wireshark" text="Wireshark è un tool che permette di monitorare il traffico in una rete, gli utenti malevoli lo usano per cercare di rubare credenziali dagli host in rete,
    può essere utile per controllare se c'è del traffico malevolo nella rete oppure si possono controllare errate configurazioni" img="/img/wireshark.png" imgsub=""></Tool>
  <hr class="uk-divider-icon" />
  <h1>Tool per attacchi a siti</h1>
  <Tool title="NIKTO" text="Nikto è un tool che permette di scansionare un host(solitamente un sito) per trovare vulnerabilità e ottenere
   informazioni sull'host scansionato come il web server usato, il sistema operativo..." img="" imgsub=""></Tool>
    <!--img  -->
  <hr class="uk-divider-icon" />
  <Tool title="SQLMAP" 
  text="SQLMAP è un tool che permette di effettuare SQL injection e quindi di testare la sicurezza di un database SQL, per controllare se
  facendo una query si possono prendere dati sensibili registrati nel database, queste query possono essere effettuate attraverso cookies oppure dorks" img="" imgsub="">
  </Tool>
  <hr class="uk-divider-icon" />
  <Tool title="Hydra" text="Hydra è un tool che permette di effettuare bruteforce su un account online(FTP, SSH, router Cisco...), questo permette di ottenere le credenziali
  dell'account attaccato se la bruteforce va a buon fine, hydra permette di verificare se gli algoritmi anti-bruteforce funzionano correttamente"
  img="/img/hydra.png" imgsub="Hydra con interfaccia grafica"/>
  <hr class="uk-divider-icon" />
  <h1>Tool per attacchi generici</h1>
  <Tool title="Metasploit" text="Metasploit è un framework che ci permette di effettuare exploit su target diversi, come router, interfacce di autenticazione... Gli exploit sono scritti in un linguaggio compatibile a Metasploit simile a Python" img="/img/metasploit.png" imgsub=""></Tool>
  <p on:click={()=> window.open("https://www.exploit-db.com")} style="color:red;">Tutti gli exploit sono disponibile su exploit-db</p>
  <hr class="uk-divider-icon" />
  <h1>Attacchi a server mail</h1>
  <Tool text="  SWAKS è un tool per verificare la sicurezza di un server SMTP(server mail), possiamo verificare se 
  senza avere le credenziali di accesso possiamo inviare mail da un mail server, in tal caso il nostro server non sarà sicuro
  e sarebbe meglio cambiare le impostazioni di sicurezza" title="SWAKS" img="" imgsub=""></Tool>
  <hr class="uk-divider-icon" />
</div>
</section>
