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
  import Particles from "svelte-particles";
  import { loadFull } from "tsparticles";
  import  'uikit/dist/css/uikit.css';
  import 'uikit/dist/js/uikit.js';
  import 'uikit/dist/js/uikit-icons.js';
  import 'purecss/build/grids-core-min.css';
  import 'purecss/build/pure.css';
  let particlesConfig = {
    autoPlay: true,
    background: {
      color: {
        value: "#000000",
      },
      repeat: "no-repeat",
      size: "cover",
      opacity: 1,
    },
    backgroundMask: {
      composite: "destination-out",
      cover: {
        color: {
          value: "#fff",
        },
        opacity: 1,
      },
      enable: false,
    },
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
    detectRetina: true,
    duration: 0,
    fpsLimit: 120,
    interactivity: {
      detectsOn: "window",
      events: {
        onClick: {
          enable: false,
          mode: [],
        },
        onDiv: {
          selectors: [],
          enable: false,
          mode: [],
          type: "circle",
        },
        onHover: {
          enable: false,
          mode: [],
          parallax: {
            enable: false,
            force: 2,
            smooth: 10,
          },
        },
        resize: true,
      },
      modes: {
        attract: {
          distance: 200,
          duration: 0.4,
          easing: "ease-out-quad",
          factor: 1,
          maxSpeed: 50,
          speed: 1,
        },
        bounce: {
          distance: 200,
        },
        bubble: {
          distance: 200,
          duration: 0.4,
          mix: false,
          divs: {
            distance: 200,
            duration: 0.4,
            mix: false,
            selectors: [],
          },
        },
        connect: {
          distance: 80,
          links: {
            opacity: 0.5,
          },
          radius: 60,
        },
        grab: {
          distance: 100,
          links: {
            blink: false,
            consent: false,
            opacity: 1,
          },
        },
        light: {
          area: {
            gradient: {
              start: {
                value: "#f80000",
              },
              stop: {
                value: "#f80000",
              },
            },
            radius: 1000,
          },
          shadow: {
            color: {
              value: "#f80000",
            },
            length: 2000,
          },
        },
        push: {
          default: true,
          groups: [],
          quantity: 4,
        },
        remove: {
          quantity: 2,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
          factor: 100,
          speed: 1,
          maxSpeed: 50,
          easing: "ease-out-quad",
          divs: {
            distance: 200,
            duration: 0.4,
            factor: 100,
            speed: 1,
            maxSpeed: 50,
            easing: "ease-out-quad",
            selectors: [],
          },
        },
        slow: {
          factor: 3,
          radius: 200,
        },
        trail: {
          delay: 1,
          pauseOnStop: false,
          quantity: 1,
        },
      },
    },
    manualParticles: [],
    motion: {
      disable: false,
      reduce: {
        factor: 4,
        value: true,
      },
    },
    particles: {
      bounce: {
        horizontal: {
          random: {
            enable: false,
            minimumValue: 0.1,
          },
          value: 1,
        },
        vertical: {
          random: {
            enable: false,
            minimumValue: 0.1,
          },
          value: 1,
        },
      },
      collisions: {
        bounce: {
          horizontal: {
            random: {
              enable: false,
              minimumValue: 0.1,
            },
            value: 1,
          },
          vertical: {
            random: {
              enable: false,
              minimumValue: 0.1,
            },
            value: 1,
          },
        },
        enable: false,
        mode: "bounce",
        overlap: {
          enable: true,
          retries: 0,
        },
      },
      color: {
        value: "#f80000",
        animation: {
          h: {
            count: 0,
            enable: false,
            offset: 0,
            speed: 20,
            sync: true,
          },
          s: {
            count: 0,
            enable: false,
            offset: 0,
            speed: 1,
            sync: true,
          },
          l: {
            count: 0,
            enable: false,
            offset: 0,
            speed: 1,
            sync: true,
          },
        },
      },
      destroy: {
        mode: "none",
        split: {
          count: 1,
          factor: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: 3,
          },
          rate: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: {
              min: 4,
              max: 9,
            },
          },
          sizeOffset: true,
        },
      },
      gradient: [],
      groups: {
        z5000: {
          number: {
            value: 70,
          },
          zIndex: {
            value: 50,
          },
        },
        z7500: {
          number: {
            value: 30,
          },
          zIndex: {
            value: 75,
          },
        },
        z2500: {
          number: {
            value: 50,
          },
          zIndex: {
            value: 25,
          },
        },
        z1000: {
          number: {
            value: 40,
          },
          zIndex: {
            value: 10,
          },
        },
      },
      life: {
        count: 0,
        delay: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 0,
          sync: false,
        },
        duration: {
          random: {
            enable: false,
            minimumValue: 0.0001,
          },
          value: 0,
          sync: false,
        },
      },
      links: {
        blink: false,
        color: {
          value: "#f80000",
        },
        consent: false,
        distance: 100,
        enable: false,
        frequency: 1,
        opacity: 0.4,
        shadow: {
          blur: 5,
          color: {
            value: "#f80000",
          },
          enable: false,
        },
        triangles: {
          enable: false,
          frequency: 1,
        },
        width: 1,
        warp: false,
      },
      move: {
        angle: {
          offset: 0,
          value: 10,
        },
        attract: {
          distance: 200,
          enable: false,
          rotate: {
            x: 600,
            y: 1200,
          },
        },
        center: {
          x: 50,
          y: 50,
          radius: 0,
        },
        decay: 0,
        distance: {},
        direction: "right",
        drift: 0,
        enable: true,
        gravity: {
          acceleration: 9.81,
          enable: false,
          inverse: false,
          maxSpeed: 50,
        },
        path: {
          clamp: true,
          delay: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: 0,
          },
          enable: false,
          options: {},
        },
        outModes: {
          default: "out",
          bottom: "out",
          left: "out",
          right: "out",
          top: "out",
        },
        random: false,
        size: false,
        speed: 5,
        spin: {
          acceleration: 0,
          enable: false,
        },
        straight: false,
        trail: {
          enable: false,
          length: 10,
          fillColor: {
            value: "#000000",
          },
        },
        vibrate: false,
        warp: false,
      },
      number: {
        density: {
          enable: false,
          area: 800,
          factor: 1000,
        },
        limit: 0,
        value: 200,
      },
      opacity: {
        random: {
          enable: false,
          minimumValue: 0.1,
        },
        value: 1,
        animation: {
          count: 0,
          enable: false,
          speed: 3,
          sync: false,
          destroy: "none",
          startValue: "random",
          minimumValue: 0.1,
        },
      },
      orbit: {
        animation: {
          count: 0,
          enable: false,
          speed: 1,
          sync: false,
        },
        enable: false,
        opacity: 1,
        rotation: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 45,
        },
        width: 1,
      },
      reduceDuplicates: false,
      repulse: {
        random: {
          enable: false,
          minimumValue: 0,
        },
        value: 0,
        enabled: false,
        distance: 1,
        duration: 1,
        factor: 1,
        speed: 1,
      },
      roll: {
        darken: {
          enable: false,
          value: 0,
        },
        enable: false,
        enlighten: {
          enable: false,
          value: 0,
        },
        mode: "vertical",
        speed: 25,
      },
      rotate: {
        random: {
          enable: false,
          minimumValue: 0,
        },
        value: 0,
        animation: {
          enable: false,
          speed: 0,
          sync: false,
        },
        direction: "clockwise",
        path: false,
      },
      shadow: {
        blur: 0,
        color: {
          value: "#f80000",
        },
        enable: false,
        offset: {
          x: 0,
          y: 0,
        },
      },
      shape: {
        options: {},
        type: "circle",
      },
      size: {
        random: {
          enable: false,
          minimumValue: 1,
        },
        value: 3,
        animation: {
          count: 0,
          enable: false,
          speed: 5,
          sync: false,
          destroy: "none",
          startValue: "random",
        },
      },
      stroke: {
        width: 0,
      },
      tilt: {
        random: {
          enable: false,
          minimumValue: 0,
        },
        value: 0,
        animation: {
          enable: false,
          speed: 0,
          sync: false,
        },
        direction: "clockwise",
        enable: false,
      },
      twinkle: {
        lines: {
          enable: false,
          frequency: 0.05,
          opacity: 1,
        },
        particles: {
          enable: false,
          frequency: 0.05,
          opacity: 1,
        },
      },
      wobble: {
        distance: 5,
        enable: false,
        speed: 50,
      },
      zIndex: {
        random: {
          enable: false,
          minimumValue: 0,
        },
        value: 5,
        opacityRate: 0.5,
        sizeRate: 1,
        velocityRate: 1,
      },
    },
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
    responsive: [],
    style: {},
    themes: [],
    zLayers: 100,
    emitters: {
      autoPlay: true,
      fill: true,
      life: {
        wait: false,
        count: 0,
        delay: 0.4,
        duration: 0.1,
      },
      rate: {
        quantity: 1,
        delay: 7,
      },
      shape: "square",
      startCount: 0,
      size: {
        mode: "percent",
        height: 0,
        width: 0,
      },
      particles: {
        move: {
          speed: 10,
          outModes: {
            default: "none",
            right: "destroy",
          },
          straight: true,
        },
        zIndex: {
          value: 0,
        },
        rotate: {
          value: {
            min: 0,
            max: 360,
          },
          animation: {
            enable: true,
            speed: 10,
            sync: true,
          },
        },
      },
    },
  };

  let onParticlesLoaded = (event) => {
    const particlesContainer = event.detail.particles;

    // you can use particlesContainer to call all the Container class
    // (from the core library) methods like play, pause, refresh, start, stop
  };

  let particlesInit = async (engine) => {
    // you can use main to customize the tsParticles instance adding presets or custom shapes
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  };
</script>

<svelte:head>
  <link rel="stylesheet" href="/css/nav.css" />
</svelte:head>
<nav>
  <div align="center">
    <div class="topnav" id="myTopnav" align="center">
      <a href="/" class="activenav">
        <img src="/img/logo.png" width="32px" />
      </a>
      <div class="dropdown" align="center">
        <button class="dropbtn"
          >Pericoli della rete
          <i class="fa fa-caret-down" />
        </button>
        <div class="dropdown-content">
          <a href="/pericoli/fake-news">Fake News</a>

          <a href="/pericoli/truffe">Truffe Online</a>
          <a href="/pericoli/furti-ide">Furti d'identità</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn"
          >Strumenti di un hacker
          <i class="fa fa-caret-down" />
        </button>
        <div class="dropdown-content">
          <a href="/strumenti/rubber-ducky">Rubber Ducky</a>

          <a href="/strumenti/jammer">Jammer</a>
          <a href="/strumenti/raspberry">Raspberry</a>
          <a href="/strumenti/tools">Tools</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn"
          >Crittografia
          <i class="fa fa-caret-down" />
        </button>
        <div class="dropdown-content">
          <a href="/crittografia/sniffing">Sniffing</a>
          <a href="/crittografia/crittografia">Crittografia</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn"
          >Sicurezza
          <i class="fa fa-caret-down" />
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
      <a href="#0" style="font-size:15px;" class="icon" on:click={tendina}
        >&#9776;</a
      >
    </div>
  </div>
</nav>
<Particles
  id="tsparticles"
  options={particlesConfig}
  on:particlesLoaded={onParticlesLoaded}
  {particlesInit}
/>
<main>
  <slot />
</main>
<footer>
  <div class="pure-g">
    <div class="pure-u-1-3 center pure-u-md-1-3">
      <img src="/img/agnelli.png" width="256px"/>
    </div>
    <div class="pure-u-1-3 center pure-u-md-1-3">
      <p>Sito scritto da Andrea Canale, Marco Cellini e Gioele Mari</p>
    </div>
    <div class="pure-u-1-3 center pure-u-md-1-3">
      <p>Codice sorgente su <a href="javascript:void(window.open('https://github.com/Andrea-Canale/Ed_civica'))">Github</a></p>
    </div>
</div>
  
  
</footer>
<style>
  @import url("https://fonts.googleapis.com/css2?family=Raleway&display=swap");
  .navresponse {
    max-width: 2000px;
  }
  main {
    font-family: sans-serif;
    text-align: center;
  }

  :global(#tsparticles) {
    margin: 0;
    padding: 0;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    background-color: black;
  }
  nav {
    text-align: center;
    margin: 0 auto;
    display: table;
  }
  h1 {
    color: white;
  }
  footer{
    background-color: rgb(71, 70, 70);
  }
  .center {
  height: 109px;
  line-height: 109px; /* same as height! */
  text-align: center;
}
</style>
