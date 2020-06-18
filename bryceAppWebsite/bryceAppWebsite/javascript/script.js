
$(document).ready(function(){

  window.onscroll = function() {stickyHeader()};

  var mainHeader = document.getElementById("header");

  var sticky = header.offsetTop;

  function stickyHeader() {
    if (window.pageYOffset > sticky) {
      header.classList.add('sticky');
    } else{
      header.classList.remove('sticky');
    }
  };


  $('.seattleImage').hover(function() {
    $('.seattleText').fadeIn(350);
  },
  function() {
    $('.seattleText').fadeOut(100);
  });


  // $('#main').click(function() {
  //   $(this).toggleClass('currentPage');
  // })
  //
  // $('#about').click(function() {
  //   $(this).toggleClass('currentPage');
  // })
  //
  // $('#contact').click(function() {
  //   $(this).toggleClass('currentPage');
  // })

});
