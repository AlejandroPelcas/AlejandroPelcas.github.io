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

  $('.type').typeit({
       strings: ["Software Engineer", "Student", "A dork", "Boba Addict", "A tall human bean"],
       speed: 175,
       breakLines: false,
       loop: true,
       startDelay: 150,
       deleteDelay: 1000,
       loopDelay: 900
    });






  $('#sun').click(function () {
    $('body').css("background-color",'#FAFAFA')
    $('p').css("color", 'black');
  });

  $('#moon').click(function() {
    $('body').css("background-color",'black')
    $('p').css("color", 'snow');
  });




  });
