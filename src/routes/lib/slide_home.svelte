<script>
  // @ts-nocheck

  import { Splide, SplideSlide, SplideTrack } from "@splidejs/svelte-splide";
  import "@splidejs/svelte-splide/css";
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/purecss@1.0.1/build/base-min.css"
  />
  <link
    rel="stylesheet"
    href="https://unpkg.com/purecss@2.1.0/build/pure-min.css"
    integrity="sha384-yHIFVG6ClnONEA5yB5DJXfW2/KC173DIQrYoZMEtBvGzmf0PKiGyNEqe9N6BNDBH"
    crossorigin="anonymous"
  />
</svelte:head>
<Splide aria-label="Articoli" hasTrack={false}>
  <SplideTrack>
    <SplideSlide>
      <div align="center">
        <a href="/pericoli/fake-news"
          ><img src="/img/fake_news.png" alt="fakenews" class="pure-img" /></a
        >
      </div>
    </SplideSlide>
    <SplideSlide>
      <div align="center">
        <a href="/pericoli/truffe"
          ><img
            src="/img/truffe_online.jpg"
            alt="truffe_online"
            class="pure-img"
          /></a
        >
      </div>
    </SplideSlide>
    <SplideSlide>
      <div align="center">
        <a href="/pericoli/furti-ide"
          ><img
            src="/img/furti-identità.jpg"
            alt="furti_identità"
            class="pure-img"
          /></a
        >
      </div>
    </SplideSlide>
    <SplideSlide>
      <div align="center">
        <a href="/strumenti/rubber-ducky"
          ><img
            src="/img/rubber_ducky.png"
            alt="rubber_ducky"
            class="pure-img"
          /></a
        >
      </div>
    </SplideSlide>
    <SplideSlide>
      <div align="center">
        <a href="/strumenti/jammer"
          ><img src="/img/jammer_sfondo.png" alt="Jammer" class="pure-img" /></a
        >
      </div>
    </SplideSlide>
    <SplideSlide>
      <div align="center">
        <a href="/strumenti/raspberry"
          ><img src="/img/raspberry.png" alt="Raspberry" class="pure-img" /></a
        >
      </div>
    </SplideSlide>
    <SplideSlide>
      <div align="center">
        <a href="/strumenti/tools"
          ><img src="/img/tools_kali.jpg" alt="Kali" class="pure-img" /></a
        >
      </div>
    </SplideSlide>
    <SplideSlide>
      <div align="center">
        <a href="/crittografia/sniffing"
          ><img src="/img/sniffing.png" alt="Sniffing" class="pure-img" /></a
        >
      </div>
    </SplideSlide>
    <SplideSlide>
      <div align="center">
        <a href="/sicurezza/reati"
          ><img
            src="/img/reati_informatici.jpeg"
            alt="Reati-Informatici"
            class="pure-img"
          /></a
        >
      </div>
    </SplideSlide>
    <SplideSlide>
      <div align="center">
        <a href="/sicurezza/proteggersi"
          ><img
            src="/img/protezione_in_rete.jpg"
            alt="Protezione in rete"
            class="pure-img"
          /></a
        >
      </div>
    </SplideSlide>
    <SplideSlide>
      <div align="center">
        <a href="/sicurezza/ddos"
          ><img src="/img/ddos.jpg" alt="DDOS" class="pure-img" /></a
        >
      </div>
    </SplideSlide>
  </SplideTrack>
</Splide>

<style>
  img {
    max-width: 400px;
  }
</style>
