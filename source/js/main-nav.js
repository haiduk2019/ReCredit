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

var payToggle = $('.js-payment-method__toggle');
var payArrow = $('.js-payment-method__arrow');
var payInfo = $('.js-instruction-info');

payToggle.on('click', function () {
  payToggle.removeClass('payment-method__toggle--active');
  $(this).addClass('payment-method__toggle--active');

  /*   payArrow.toggleClass('payment-method__arrow--active'); */
  if (payInfo.hasClass('instruction-info--active')) {
    // payInfo.removeClass('instruction-info--active');
  } else {
    payInfo.addClass('instruction-info--active');
  }
  /*   payInfo.toggleClass('instruction-info--active'); */
});

//Маска ввода номера на сайте
// $('input[name=phone-field]').mask("+3 (999) 999-99-99");


// $(function () {
//   //задание заполнителя с помощью параметра placeholder
//   $('input[name=phone-field]').mask("+38 (999) 999-99-99");
//   /*   $('input[name=sms-code-field]').mask("9 9 9 9"); */
//   /* $.mask.definitions['~'] = '[+ -]';
//   $('input[name=sms-code-field]').mask("~ 9.99 ~ 9.99 999"); */
//   $('input[name=sms-code-field]').mask("9 9 9 9");

// });
