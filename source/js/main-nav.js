let navMain = $('.js-main-nav');
let navToggle = $('.js-main-nav__toggle');
let langMenu = $('.js-lang-menu');


navToggle.on('click', function() {
  navToggle.toggleClass('main-nav__toggle--active');
  navMain.toggleClass('main-nav--active');
  langMenu.toggleClass('.lang-menu--active');
});




$( function() {



$( "#slider-range-min" ).slider({
    range: "min",
    value: 10000,
    min: 10000,
    max: 100000,
    slide: function( event, ui ) {
      $( "#test1" ).text( "$" + ui.value );
    }
  });


  $( "#slider-range-min22" ).slider({
    range: "min",
    value: 3,
    step: 3,
    min: 3,
    max: 12,
    slide: function( event, ui ) {
      $( "#test111" ).text( "$" + ui.value );
    }
  });

  $( "#test1" ).text( "$" + $( "#slider-range-min" ).slider( "value" ) );
  $( "#test111" ).text( "$" + $( "#slider-range-min22" ).slider( "value" ) );



} );
