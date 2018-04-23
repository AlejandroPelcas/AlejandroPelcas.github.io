$(document).ready(function () {
  const name = $('.name');
  const line = $('.dash-line');
  const link = $('.links');

  /*name.hide();
  link.hide();
  line.hide();*/
  name.fadeIn(1000);
  line.fadeIn(1000);
  link.fadeIn(1000);




  $('#sun').click(function () {
    $('body').css("background-color",'#FAFAFA')
    $('p').css("color", 'black');
  });

  $('#moon').click(function() {
    $('body').css("background-color",'black')
    $('p').css("color", 'snow');
  });




  });
