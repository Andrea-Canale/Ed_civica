<script lang="ts">
  import "../app.css";
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
</svelte:head>

<nav class="uk-navbar-container" uk-navbar>
  <div class="uk-navbar-left">
    <ul class="uk-navbar-nav">
      <li class="uk-active"><a href="/">Hackerinfo</a></li>
      <li>
        <a href="#0">Pericoli della rete</a>
        <div class="uk-navbar-dropdown">
          <ul class="uk-nav uk-navbar-dropdown-nav">
            <li>
              <a href="/pericoli/fake-news">Fake News</a>
            </li>
            <li><a href="/pericoli/truffe">Truffe Online</a></li>
            <li><a href="/pericoli/furti-ide">Furti d' identità</a></li>
          </ul>
        </div>
      </li>
      <li>
        <a href="#0">Strumenti di un Hacker</a>
        <div class="uk-navbar-dropdown">
          <ul class="uk-nav uk-navbar-dropdown-nav">
            <li>
              <a href="/strumenti/rubber-ducky">Rubber Ducky</a>
            </li>
            <li><a href="/strumenti/jammer">Jammer</a></li>
            <li><a href="/strumenti/raspberry">Raspberry</a></li>
            <li><a href="/strumenti/lan-turtle">LAN Turtle</a></li>
            <li><a href="/strumenti/tools">Tools</a></li>
          </ul>
        </div>
      </li>
      <li>
        <a href="#0">Crittografia</a>
        <div class="uk-navbar-dropdown">
          <ul class="uk-nav uk-navbar-dropdown-nav">
            <li><a href="/crittografia/sniffing">Sniffing</a></li>
          </ul>
        </div>
      </li>
      <li>
        <a href="#0">Sicurezza</a>
        <div class="uk-navbar-dropdown">
          <ul class="uk-nav uk-navbar-dropdown-nav">
            <li>
              <a href="/sicurezza/val-rischi">Valutazione dei rischi</a>
            </li>
            <li><a href="/sicurezza/reati">Reati Informatici</a></li>
            <li>
              <a href="/sicurezza/accessi-abusivi"
                >Accesso abusivo ad un sistema informatico</a
              >
            </li>
            <li>
              <a href="/sicurezza/proteggersi">Come proteggersi in rete</a>
            </li>
            <li><a href="/sicurezza/ddos">DDOS</a></li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</nav>

<main>
  <slot />
</main>

<style>
</style>
