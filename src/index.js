var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("imgSlide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
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


document.getElementById("menuBtn").onclick = close;
document.getElementById("menuBtn").onclick = open;

function open() {
  document.getElementById("menuBtn").onclick = close;
  document.getElementById("navSideBar").style.width = "250px";
  document.body.style.backgroundColor = "#f3f3f3";
  document.getElementById("menuBtn").classList.add("open");
}

function close() {
  document.getElementById("menuBtn").onclick = open;
  document.getElementById("navSideBar").style.width = "0";
  document.body.style.backgroundColor = "white";
  document.getElementById("menuBtn").classList.remove("open");
}


function copyUrl() {


  var inputDump = document.createElement('input'),
    hrefText = window.location.href;
  document.body.appendChild(inputDump);
  inputDump.value = hrefText;
  inputDump.select();
  document.execCommand('copy');
  document.body.removeChild(inputDump);
  alert("Copied the text: " + hrefText);
}