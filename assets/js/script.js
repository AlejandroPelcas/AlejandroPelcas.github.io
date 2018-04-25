$(document).ready(function () {
  const name = $('.name');
  const line = $('.dash-line');
  const link = $('.links');

  // JQuery Function Number 1
  name.hide();
  link.hide();
  line.hide();
  $('.container').hide();
  $('#mood').hide();
  // jQuery Function Number 2
  name.fadeIn(1000);
  line.fadeIn(1000);
  link.fadeIn(1000);
  $('.container').fadeIn(1000);
  $('#mood').fadeIn(1000);
// jQuery Function Number 3
  $('#sun').click(function () {
    // jQuery Function Number 4
    $('body').css("background-color",'#FAFAFA')
    $('p').css("color", 'black');
    $('.nc').css("color", 'black')
    $('#prince').css("filter", 'grayscale(0%');

  });

  $('#moon').click(function() {
    $('body').css("background-color",'black')
    $('p').css("color", 'snow');
    $('.nc').css("color", 'snow');
    $('#prince').css("filter", 'grayscale(100%');
  });

  // JQuery function Number 5
  $( "li" ).hover(
    function() {
      $( this ).fadeOut(200);
      $( this ).fadeIn(200);
    }, function() {

    }
  );

  $( ".name" ).hover(
    function() {
      // Jquery function Number 6
      $( this ).slideUp(200);
      $( this ).slideDown(200);
    }, function() {

    }
  );
  $( "#moon" ).hover(
    function() {
      $( this ).css('background-color','white');
    }, function() {
      $( this ).css('background-color','grey');
    }
  );
  $( "#sun" ).hover(
    function() {
      $( this ).css('background-color','yellow');
    }, function() {
      $( this ).css('background-color','lavender');
    }
  );
  });
