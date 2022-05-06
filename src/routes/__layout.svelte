<script lang="ts">
	import '../app.css';
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
        <a href="#">Pericoli della rete</a>
        <div class="uk-navbar-dropdown">
          <ul class="uk-nav uk-navbar-dropdown-nav">
            <li>
              <a href="#">Fake News</a>
            </li>
            <li><a href="#">Truffe sul Web</a></li>
            <li><a href="#">Furti di identità</a></li>
          </ul>
        </div>
      </li>
      <li>
        <a href="#">Strumenti di un Hacker</a>
        <div class="uk-navbar-dropdown">
          <ul class="uk-nav uk-navbar-dropdown-nav">
            <li>
              <a href="#">Rubber Ducky</a>
            </li>
            <li><a href="#">Jammer</a></li>
            <li><a href="#">Raspberry</a></li>
            <li><a href="/ddos">LAN Turtle</a></li>
            <li><a href="/ddos">Tools</a></li>
          </ul>
        </div>
      </li>
      <li>
        <a href="#">Crittografia</a>
        <div class="uk-navbar-dropdown">
          <ul class="uk-nav uk-navbar-dropdown-nav">
            <li><a href="#">Sniffing</a></li>
          </ul>
        </div>
      </li>
      <li>
        <a href="#">Sicurezza</a>
        <div class="uk-navbar-dropdown">
          <ul class="uk-nav uk-navbar-dropdown-nav">
            <li>
              <a href="#">Valutazione dei rischi</a>
            </li>
            <li><a href="#">Reati Informatici</a></li>
            <li><a href="#">Accesso abusivo ad un sistema informatico</a></li>
            <li><a href="/ddos">Come proteggersi in rete</a></li>
            <li><a href="/ddos">DDOS</a></li>
          </ul>
        </div>
      </li>
  </div>
</nav>

<main>
  <slot />
</main>

<style>
</style>
