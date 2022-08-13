var elNavbar = document.querySelector(".site-header");
var elNavbarToggleButton = document.querySelector(".site-header__hamburger-button")

    elNavbarToggleButton.addEventListener("click", function(){
    elNavbar.classList.toggle("open");
  })