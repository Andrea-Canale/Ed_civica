<script lang="ts">
  import './slide.css';
</script>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">

</head>
<body>
<div align="center">
<div class="slideshow-container" align="center">

<a href="/pericoli/fake-news">
  <div class="mySlides fade">
  <a class="prev" onclick="plusSlides(-1)">❮</a>
  <img src="/img/slide/fake_news_pc.png" >
  <h1>&nbsp;</h1>
  <div class="textslide">Fake news</div>
</div>
</a>
<a href="/strumenti/jammer">
<div class="mySlides fade">
  <a class="prev" onclick="plusSlides(-1)">❮</a>
  <img src="/img/slide/jammer.png" >
  <h1>&nbsp;</h1>
  <div class="textslide">Il jammer</div>
</div>
</a>
<a href="/strumenti/raspberry">
<div class="mySlides fade">
  <a class="prev" onclick="plusSlides(-1)">❮</a>
  <img src="/img/slide/raspberry.png" >
  <h1>&nbsp;</h1>
  <div class="textslide">Il raspberry</div>
</div>
</a>
<a href="/strumenti/rubber-ducky">
<div class="mySlides fade">
  <a class="prev" onclick="plusSlides(-1)">❮</a>
  <img src="/img/slide/rubber_ducky.png" >
  <h1>&nbsp;</h1>
  <div class="textslide">Una rubber ducky</div>
</div>
</a>
<a href="/crittografia/sniffing">
<div class="mySlides fade">
  <a class="prev" onclick="plusSlides(-1)">❮</a> 
  <img src="/img/slide/sniffing.jpeg" >
  <h1>&nbsp;</h1>
  <div class="textslide">Schema dello sniffing</div>
</div>
</a>

<a class="next" onclick="plusSlides(1)">❯</a>

</div>
<br>

<div style="textslide-align:center">
  <span class="dot" onclick="currentSlide(1)"></span> 
  <span class="dot" onclick="currentSlide(2)"></span> 
  <span class="dot" onclick="currentSlide(3)"></span> 
  <span class="dot" onclick="currentSlide(4)"></span> 
  <span class="dot" onclick="currentSlide(5)"></span> 
</div>
</div>
<script>
slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activev", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " activev";
}
</script>

</body>

<style>
  img{
    width: 600px;
  }
</style>