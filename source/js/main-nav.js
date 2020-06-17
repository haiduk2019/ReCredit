var langMenu = $('.js-lang-menu');
var navHeader = $('.js-main-nav');
var navToggle = $('.js-main-nav__toggle');


navToggle.on('click', function() {
  navToggle.toggleClass('main-nav__toggle--active');
  navHeader.toggleClass('main-nav--active');
  langMenu.toggleClass('lang-menu--active');
});

//Маска ввода номера на сайте
// $('input[name=phone-field]').mask("+3 (999) 999-99-99");


$(function() {
  //задание заполнителя с помощью параметра placeholder
  $('input[name=phone-field]').mask("+3 (999) 999-99-99", {placeholder: "(000) 000-00-00" });

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
