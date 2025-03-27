var preloader = document.getElementsByClassName("preloader")[0];

window.onload = function () {
  setTimeout(function () {
    preloader.style.opacity = 0;
    preloader.style.transition = "opacity 0.3s ease";
    setTimeout(function () {
      preloader.style.display = "none";
    }, 400);
  }, 1000);
};

// =======================================

var header = document.getElementsByTagName("header")[0];
var offers = document.getElementsByClassName("offer");
var service = document.getElementsByClassName("ser1");

console.log(offers);
console.log(service);

window.onscroll = function () {
  if (scrollY > 440) {
    header.classList.add("fixed-bar");
    offers[0].style.animation = "fadeInUp 1.5s forwards";
    offers[1].style.animation = "fadeInUp 1.5s 0.4s forwards";
    offers[2].style.animation = "fadeInUp 1.5s 0.8s forwards";
  }
  else {
    header.classList.remove("fixed-bar");
  }

  if (scrollY > 2000) {
    service[0].style.animation = "fadeInUp 1.5s forwards";
    service[1].style.animation = "fadeInUp 1.5s 0.4s forwards";
    service[2].style.animation = "fadeInUp 1.5s 0.8s forwards";
    service[3].style.animation = "fadeInUp 1.5s 1.2s forwards";
  } 
};
