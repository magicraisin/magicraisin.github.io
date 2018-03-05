window.onscroll = function() {myFunction()};

// Get the header
var nav = document.getElementById("nav");

// Get the offset position of the navbar
var sticky = nav.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}

var $animation_elements = $('.animation-element');
var $window = $(window);

$window.on('scroll', check_if_in_view);

$(document).ready(function(){
  $.CestaFeira();
});