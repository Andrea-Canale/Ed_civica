<script lang="ts">
  import "./slide.css";
</script>

<head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
<body>
  <div align="center">
    <div class="slideshow-container" align="center">
      <a href="/pericoli/fake-news">
        <div class="mySlides fade">
          <a class="prev" onclick="plusSlides(-1)">❮</a>
          <img src="/img/slide/fake_news_pc.png" />
          <h1>&nbsp;</h1>
          <div class="text">Fake news</div>
        </div>
      </a>
      <a href="/crittografia/crittografia">
        <div class="mySlides fade">
          <a class="prev" onclick="plusSlides(-1)">❮</a>
          <img src="/img/slide/crittografia.jpg" />
          <h1>&nbsp;</h1>
          <div class="text">Crittografia</div>
        </div>
      </a>
      <a href="/pericoli/truffe">
        <div class="mySlides fade">
          <a class="prev" onclick="plusSlides(-1)">❮</a>
          <img src="/img/slide/truffe.png" />
          <h1>&nbsp;</h1>
          <div class="text">Truffe Online</div>
        </div>
      </a>
      <a href="/strumenti/jammer">
        <div class="mySlides fade">
          <a class="prev" onclick="plusSlides(-1)">❮</a>
          <img src="/img/slide/jammer.png" />
          <h1>&nbsp;</h1>
          <div class="text">Il jammer</div>
        </div>
      </a>
      <a href="/strumenti/raspberry">
        <div class="mySlides fade">
          <a class="prev" onclick="plusSlides(-1)">❮</a>
          <img src="/img/slide/raspberry.png" />
          <h1>&nbsp;</h1>
          <div class="text">Il raspberry</div>
        </div>
      </a>
      <a href="/strumenti/rubber-ducky ">
        <div class="mySlides fade">
          <a class="prev" onclick="plusSlides(-1)">❮</a>
          <img src="/img/slide/rubber_ducky.png" />
          <h1>&nbsp;</h1>
          <div class="text">Una rubber ducky</div>
        </div>
      </a>
      <a href="/crittografia/sniffing">
        <div class="mySlides fade">
          <a class="prev" onclick="plusSlides(-1)">❮</a>
          <img src="/img/slide/sniffing.jpeg" />
          <h1>&nbsp;</h1>
          <div class="text">Schema dello sniffing</div>
        </div>
      </a>
      <a href="/sicurezza/ddos">
        <div class="mySlides fade">
          <a class="prev" onclick="plusSlides(-1)">❮</a>
          <img src="/img/slide/ddos.jpg" />
          <h1>&nbsp;</h1>
          <div class="text">Attacchi DDOS</div>
        </div>
      </a>
      <a class="next" onclick="plusSlides(1)">❯</a>
    </div>
    <br />

    <div style="text-align:center">
      <span class="dot" onclick="currentSlide(1)" />
      <span class="dot" onclick="currentSlide(2)" />
      <span class="dot" onclick="currentSlide(3)" />
      <span class="dot" onclick="currentSlide(4)" />
      <span class="dot" onclick="currentSlide(5)" />
      <span class="dot" onclick="currentSlide(6)" />
      <span class="dot" onclick="currentSlide(7)" />
      <span class="dot" onclick="currentSlide(8)" />
      <span class="dot" onclick="currentSlide(9)" />
    </div>
  </div>

  <br />

  <script>
    slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
      showSlides((slideIndex += n));
    }

    function currentSlide(n) {
      showSlides((slideIndex = n));
    }

    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" activev", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " activev";
    }

    function currentSlide(n) {
      showSlides((slideIndex = n));
    }

    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
    }
  </script>
</body>

<style>
  img {
    width: 600px;
  }
</style>
