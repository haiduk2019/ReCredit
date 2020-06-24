var checkMark = $('.js-reference-container__check-mark');
var answer = $('.js-reference-container__answer');

checkMark.on('click', function () {
  $(this).toggleClass('reference-container__check-mark--active');
  $(this).siblings(answer).toggleClass('reference-container__answer--active');
});
