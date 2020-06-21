var langMenu = $('.js-lang-menu');
var navHeader = $('.js-main-nav');
var navToggle = $('.js-main-nav__toggle');

navHeader.removeClass('main-nav--nojs');
langMenu.removeClass('lang-menu--active');

navToggle.on('click', function () {
  navToggle.toggleClass('main-nav__toggle--active');
  navHeader.toggleClass('main-nav--active');
  langMenu.toggleClass('lang-menu--active');
});

//Маска ввода номера на сайте
// $('input[name=phone-field]').mask("+3 (999) 999-99-99");


$(function () {
  //задание заполнителя с помощью параметра placeholder
  $('input[name=phone-field]').mask("+38 (999) 999-99-99");
/*   $('input[name=sms-code-field]').mask("9 9 9 9"); */
/* $.mask.definitions['~'] = '[+ -]';
$('input[name=sms-code-field]').mask("~ 9.99 ~ 9.99 999"); */
$('input[name=sms-code-field]').mask("9 9 9 9");

});


