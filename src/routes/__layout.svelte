<script lang="ts">
  import "../app.css";
  function tendina() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
</script>

<svelte:head>
  <!-- UIkit CSS -->
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/uikit@3.14.1/dist/css/uikit.min.css"
  />
  <!-- UIkit JS -->
  <script
    src="https://cdn.jsdelivr.net/npm/uikit@3.14.1/dist/js/uikit.min.js"></script>
  <script
    src="https://cdn.jsdelivr.net/npm/uikit@3.14.1/dist/js/uikit-icons.min.js"></script>
    <link rel="stylesheet" href="/css/nav.css"/>
</svelte:head>
<div class="topnav" id="myTopnav">
  <a href="/" class="active">Home</a>
  <div class="dropdown">
    <button class="dropbtn">Pericoli della rete
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
        <a href="/pericoli/fake-news">Fake News</a>
    
     <a href="/pericoli/truffe">Truffe Online</a>
      <a href="/pericoli/furti-ide">Furti d' identità</a>
    </div>
  </div> 
  <div class="dropdown">
    <button class="dropbtn">Strumenti di un hacker
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      
        <a href="/strumenti/rubber-ducky">Rubber Ducky</a>
     
<a href="/strumenti/jammer">Jammer</a>
     <a href="/strumenti/raspberry">Raspberry</a>
     <a href="/strumenti/lan-turtle">LAN Turtle</a>
    <a href="/strumenti/tools">Tools</a>
    </div>
  </div> 
  <div class="dropdown">
    <button class="dropbtn">Crittografia 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="/crittografia/sniffing">Sniffing</a>
    </div>
  </div> 
  <div class="dropdown">
    <button class="dropbtn">Sicurezza 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
   
        <a href="/sicurezza/val-rischi">Valutazione dei rischi</a>
     
      <a href="/sicurezza/reati">Reati Informatici</a>
        <a href="/sicurezza/accessi-abusivi"
          >Accesso abusivo ad un sistema informatico</a
        >
     
        <a href="/sicurezza/proteggersi">Come proteggersi in rete</a>
     <a href="/sicurezza/ddos">DDOS</a>
    </div>
  </div> 
  <a href="#0" style="font-size:15px;" class="icon" on:click={tendina}>&#9776;</a>
</div>

<main>
  <slot />
</main>

<style>
  .navresponse{
    max-width: 2000px;
  }
</style>
