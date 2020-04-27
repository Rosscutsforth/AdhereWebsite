
$(document).ready(function(){
});

window.onscroll = function() {myFunction()};

var header = document.getElementsByClassName('header');

var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOFFset > sticky) {
    header.classList.add("sticky");
  }; else {
    header.classList.remove("sticky");
  };
};
