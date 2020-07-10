var checkMark = $('.js-reference-container__check-mark');
var answer = $('.js-reference-container__answer');

checkMark.on('click', function () {
  $(this).toggleClass('reference-container__check-mark--active');
  $(this).siblings(answer).toggleClass('reference-container__answer--active');
});

var conditionsBtn = $('.js-display-toggle');

conditionsBtn.on('click', function () {
  var hiddenBtn = $(this).siblings('.js-display-toggle:hidden');
  $(this).css('display', 'none');
  hiddenBtn.css('display', 'flex');
  // $(this).siblings('.js-conditions').toggleClass('credit-product__wrapper--hidden');
  var conditions = $(this).siblings('.js-conditions');
  if (conditions.is(":visible")) {
    conditions.hide(1000);
  } else {
    conditions.show(1000);
  }
  //  conditions.css('display', 'block');
  //   $(this).css('display', 'none');
  //  hideConditions.css('display', 'flex');
});
