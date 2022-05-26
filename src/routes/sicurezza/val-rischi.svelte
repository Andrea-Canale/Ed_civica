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
      header="Valutazione rischio Informatico"
      meta="Scritto da Andrea Canale, Marco Cellini e Gioele Mari Giovedì Maggio 2022"
      subtitle=""
      text="La valutazione del rischio informatico per le aziende è un procedimento necessario per la compliance al GDPR (Regolamento Generale per la Protezione dei Dati), 
        ma che va ben oltre l’obbligo di legge: proteggere i dati trattati dalle aziende, 
        vuol dire proteggere le persone a cui quei dati appartengono. 
        I rischi sono diversi e non banali, 
        e aumentano di pari passo con la mole di dati sensibili trattati e la complessità della infrastruttura tecnologica utilizzata.        "
      imgcomment=""
      imgsrc="/img/pen_tester.jpg"
    />
  </div>
  <hr class="uk-divider-icon" />
  <h1>
    <strong
      >In che modo la valutazione del rischio informatico è necessaria per la
      compliance al GDPR?</strong
    >
  </h1>
  <div align="center" class="container">
    <p class="text">
      Avere la consapevolezza del livello di esposizione ai rischi informatici è
      il primo passo per contrastare possibili esfiltrazioni di dati sensibili,
      personali e/o aziendali. Valutare il rischio informatico, soprattutto in
      relazione alla protezione dei dati personali, è un aspetto che definirei
      centrale per il GDPR. Il regolamento europeo infatti prevede che venga
      valutato il rischio per le libertà e i diritti degli interessati,
      derivante da un’eventuale violazione dei dati ai danni dell’azienda.
    </p>
    <p class="text">
      Poiché è quasi impensabile che un’azienda, per quanto piccola, oggi possa
      lavorare senza utilizzare alcun device tecnologico connesso a Internet, è
      evidente che una valutazione del rischio informatico è un’azione
      imprescindibile. Naturalmente, le dimensioni dell’azienda e il settore
      dell’industria a cui fa riferimento indicano rischi diversi: questi
      dipendono infatti dalla quantità e dalla sensibilità dei dati trattati.
    </p>
    <hr class="uk-divider-icon" />
    <h1> Come si svolge questa valutazione? </h1>
    <div align="centre" class="container">
      <p class="text">
        La valutazione del rischio informatico è un’analisi che serve ad avere
        una visione globale dell’esposizione di un’azienda alla perdita o alla
        violazione dei dati. Spesso l’azienda non è consapevole che le
        informazioni che la riguardano sono già disponibili in Internet: si
        trovano sia su database illegali, anche nel deep web, sia su fonti
        lecite, da cui però potrebbero essere estrapolate per un uso illecito.
      </p>
      <p class="text">
        La valutazione del rischio informatico consente di mappare quante, quali
        e dove sono le informazioni sull’azienda e sulle persone che vi orbitano
        attorno. In base a questo, poi, si scelgono le azioni di mitigazione del
        rischio da intraprendere.
      </p>
    </div>
    <hr class="uk-divider-icon" />
    <h1> Il ruolo del Pen Tester </h1>
    <div align="center" class="container">
      <p class="text">
        Il penetration tester ha il compito di “attaccare” un target aziendale
        per scovarne vulnerabilità e difetti: una figura importante per la cyber
        security in azienda.
      </p>
      <p class="text">
        ll penetration tester ha assunto un’importanza strategica sempre
        maggiore nell’ambito della sicurezza informatica nelle aziende.
      </p>
      <p class="text">
        Se è vero, infatti, che negli ultimi anni si sono moltiplicati framework
        e normative sulla cyber security nell’intento di favorire la diffusione
        rapida e quanto più uniforme di una cultura della sicurezza, è
        altrettanto evidente che, per quanto utile, questo approccio risulta
        tuttavia distante dalla realtà delle applicazioni di business e dalle
        infrastrutture informatiche presenti in azienda.
      </p>
      <p class="text">
        Una buona gestione organizzativa deve, quindi, essere accompagnata da
        una forma di sana preoccupazione, che preluda all’organizzazione di
        simulazioni di attacco nei confronti della propria infrastruttura: i
        cosiddetti penetration test.
      </p>
      <br />
    </div>
    <hr class="uk-divider-icon" />
    <h1> Chi e' il penetration tester </h1>
    <div align="center" class="container">
      <p class="text">
        Il penetration tester può essere descritto come un hacker incaricato di
        attaccare lecitamente un target aziendale, al fine di scovare il maggior
        numero di difetti.
      </p>
    </div>
    <div align="left" class="container">
      <p class="text">
        Sono diversi gli ambiti in cui un penetration tester può tentare di
        bypassare le restrizioni poste dalla società committente. Soprattutto
        sono molteplici, e personalizzabili, gli scenari all’interno dei quali è
        possibile far agire l’hacker etico:
      </p>
      <ul>
        <li class="text">
          penetration test interno: si simula un attacco perpetrato da un
          insider, ovvero un malintenzionato che può, più o meno lecitamente,
          agire dall’interno dell’azienda. In questo caso, a seconda delle
          necessità e della curiosità della società committente, il penetration
          tester cercherà di analizzare il contesto informatico infrastrutturale
          nel quale si trova, al fine di tentare di accedere ad informazioni
          riservate o di compiere azioni non autorizzate;
        </li>
        <li class="text">
          penetration test esterno: si simula un attacco condotto dall’esterno,
          emulando un criminale informatico che punti a violare i terminali
          aziendali esposti pubblicamente su rete internet, quali applicazioni,
          database, dispositivi di rete, web server e via dicendo.
        </li>
      </ul>
      <p class="text">
        Entrambe queste semplici casistiche esemplificative possono essere
        affrontate secondo diverse modalità, classificate come segue
        dall’Institute for Security and Open Methodologies:
      </p>
      <ul>
        <li class="text">
           Blind.  Gli analisti simulano le azioni di un agente
          di minaccia all’oscuro dei dettagli implementativi del contesto
          oggetto di analisi. Il target è a conoscenza di tutti i dettagli della
          verifica.
        </li>
        <li class="text">
           Double Blind.  Gli analisti simulano le azioni di un
          agente di minaccia all’oscuro dei dettagli implementativi del contesto
          oggetto di analisi. Il target non è informato sul perimetro di test.
        </li>
        <li class="text">
           Gray Box.  Gli analisti simulano le azioni di un
          agente di minaccia in possesso di informazioni limitate sulle
          componenti e sulle difese presenti nel contesto oggetto di analisi. Il
          target è a conoscenza di tutti i dettagli della verifica.
        </li>
        <li class="text">
           Double Gray Box.  Gli analisti simulano le azioni di
          un agente di minaccia in possesso di informazioni limitate sulle
          componenti e sulle difese presenti nel contesto oggetto di analisi. Il
          target è a conoscenza del perimetro di test, ma non di tutti i
          dettagli della verifica.
        </li>
        <li class="text">
           Tandem.  Gli analisti e il target sono entrambi in
          possesso di informazioni di dettaglio relative al contesto oggetto di
          analisi e alla verifica di sicurezza.
        </li>
        <li class="text">
           Reversal.  Gli analisti sono in possesso di
          informazioni di dettaglio relative al contesto oggetto di analisi. Il
          target non è informato sul perimetro di test.
        </li>
      </ul>
      <br />
    </div>
    <p class="text">
      Per quanto ogni tipologia di test abbia i propri obiettivi, l’intento
      finale di un penetration tester è ottenere l’accesso a informazioni
      confidenziali e all’esecuzione di codici con privilegi amministrativi.
    </p>

    <hr class="uk-divider-icon" />
    <h1> Le competenza necessarie </h1>
    <div align="center" class="container">
      <p class="text">
        Il penetration tester può essere descritto come un hacker incaricato di
        attaccare lecitamente un target aziendale, al fine di scovare il maggior
        numero di difetti.
      </p>

      <p class="text">
        Per diventare un buon penetration tester è necessaria una buona base di
        esperienza maturata sul campo o per il tramite di laboratori o
        challenge, spesso organizzati su internet a livello internazionale.
      </p>
      <p class="text">
        Sono inoltre sempre più diffusi, anche in Italia, corsi universitari in
        Ingegneria e Scienze Informatiche con specializzazioni in grado di
        formare giovani hacker etici.
      </p>
      <p class="text">
        Le caratteristiche principali per un penetration tester restano la
        duttilità – la capacità di adattarsi a un linguaggio o a un’applicazione
        sconosciuta – e l’abilità di mantenere il sangue freddo sia in caso di
        fallimento sia in caso di riuscito accesso ad informazioni sensibili.
      </p>
      <p class="text">
        Entrando nello specifico, è ovviamente richiesta la conoscenza
        approfondita dei sistemi Windows e Unix, compresa la capacità di
        rielaborare script in PowerShell, bash, Perl, Python, Ruby, PHP e SQL.
      </p>
      <p class="text">
        A seconda degli ambiti di specializzazione, possono inoltre essere
        richieste skill specifiche di analisi come interpretazione di codice
        mobile, de-offuscamento, de-compilazione e reverse engineering.
      </p>
      <p class="text">
        Tra le certificazioni più accreditate per maturare l’esperienza
        necessaria vi è senz’altro l’OSCP (Offensive Security Certified
        Professional) che permette, attraverso appositi laboratori virtuali, di
        testare strumenti e tecniche di intrusione in ambiente controllato.
      </p>
    </div>
  </div>
</section>

<style>
  li {
    color: white;
  }
</style>
