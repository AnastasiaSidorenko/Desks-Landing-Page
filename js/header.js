// When the user scrolls the page, execute myFunction
window.onscroll = function() {Stick()};

var header = document.getElementById("header");
var user_img = document.getElementById("user");
var cart_img = document.getElementById("cart");

var sticky = false;
var offset = header.offsetTop;

function Stick() {
  if (window.pageYOffset > offset) {
    if (!sticky) {
        header.classList.add("sticky");
        sticky = true;
        user_img.src = './img/header/user_dark.svg';
        cart_img.src = './img/header/cart_dark.svg';
    }
  } else {
    header.classList.remove("sticky");
    user_img.src = './img/header/user.svg';
    cart_img.src = './img/header/cart.svg';
    sticky = false;
  }
}