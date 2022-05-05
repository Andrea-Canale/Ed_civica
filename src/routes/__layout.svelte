<svelte:head>
	<!-- UIkit CSS -->
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/uikit@3.14.1/dist/css/uikit.min.css"
	/>

	<!-- UIkit JS -->
	<script src="https://cdn.jsdelivr.net/npm/uikit@3.14.1/dist/js/uikit.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/uikit@3.14.1/dist/js/uikit-icons.min.js"></script>
</svelte:head>
<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<nav class="uk-navbar-container" uk-navbar>
    <div class="uk-navbar-left">

        <ul class="uk-navbar-nav">
            <li class="uk-active"><a href="/">Hackerinfo</a></li>
            <li>
                <a href="#">Le minacce in rete all’informazione</a>
                <div class="uk-navbar-dropdown">
                    <ul class="uk-nav uk-navbar-dropdown-nav">
                        <li class="uk-active">
						<a href="#">Frode informatica</a>
						</li>
                        <li><a href="#">Intercettazione o interruzione illecita di comunicazioni informatiche o telematiche</a></li>
                        <li><a href="#">Regole e misure da adottare per un accesso sicuro in rete</a></li>
                    </ul>
                </div>
            </li>
            <li>
                <a href="#">Tipologie di attacchi informatici</a>
                <div class="uk-navbar-dropdown">
                    <ul class="uk-nav uk-navbar-dropdown-nav">
                        <li>
						<a href="#">Accesso abusivo</a>
						</li>
                        <li><a href="#">Diffusione di hardware e software diretti al danneggiamento di sistemi</a></li>
                        <li><a href="#">Detenzione e diffusione abusiva di codici di accesso a sistemi</a></li>
						<li><a href="/ddos">Attacchi DDOS</a></li>
                    </ul>
                </div>
            </li>
			<li><a href="#">La crittografia</a></li>
        </ul>

    </div>
</nav>

<main>
	<slot />
</main>



<style>
	
</style>