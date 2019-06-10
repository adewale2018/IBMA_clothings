/*$(document).ready(function(){

});
$(window).on('load', function() {
  alert('window is fully loaded');
});
*/
$(window).on('load', function() {
  $('#status').fadeOut();
  $('#preloader').delay(500).fadeOut();
});
/*
$(function() {
  $('h1').hide().slideDown(1000).slideUp(2000);
  $('h2').hide().show(2000);
  $('#greet').css({
    color: 'green',
    fontSize: 25,
    textAlign: 'center'
  }).hide().show(4000);
  $('.ceo').css({
    color: 'gray',
    fontSize: 50,
    textAlign: 'center'
  });
  $('h2').click(function(){
    $('.ceo').css({
      color: 'orange',
      fontSize: 50,
      fontFamily: 'Raleway sans-serif',
      textAlign: 'center'
    }).hide().show(5000);
  });
});
*/
