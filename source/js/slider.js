const calculateRange = $(".credit-calculate__range");
const value = calculateRange.data('value');
const select = $(".js-credit-select");
const period = $(".js-credit-calculate__period");
const creditCalculateAmount = $(".credit-calculate__amount");
// const creditCalculateAmountInput = $("#calc_amount");
const creditCalculateAmountInput = $(".calc-amount");
const slider = $(".js-select-slider");


calculateRange.slider({
  range: "min",
  value: value,
  min: 10000,
  max: 100000,
  step: 500,
  slide: function (event, ui) {
    creditCalculateAmount.text(ui.value + " грн");
    creditCalculateAmountInput.val(ui.value);
    calc(creditCalculateAmountInput.val(), select.val());
  }
});
creditCalculateAmount.text(calculateRange.slider("value") + " грн");


select.selectmenu({
  icons: {
     button: "my-test-class"
  },

  classes: {
    "ui-selectmenu-button": "credit-calculate__select",
    "ui-selectmenu-menu": "term__wrapper"
  },
  change: function( event, ui ) {
    slider.slider("value", ui.item.value);
  }

});
// ui-selectmenu-button
slider.slider({
  min: 3,
  max: 12,
  step: 3,
  range: "min",
  value: select.val(),
  slide: function (event, ui) {
    select.val(ui.value).selectmenu( "refresh" );
    select.change();
    calc(creditCalculateAmountInput.val(), select.val());
  }
});

function calc(amount, term) {
  amount = parseInt(amount);
  term = parseInt(term);
  var monthlyAmountVar = Math.round((monthlyAmount(amount, term) * 100 ) / 100);
  var returnAmountVar = Math.round((returnAmount(amount, term) * 100 ) / 100);
  $('#monthlyAmount').text(monthlyAmountVar);
  $('#returnAmount').text(returnAmountVar);
}

function percent(amount, term) {
  return 5.9;
}

function monthlyAmount(amount, term) {
  return returnAmount(amount, term) / term;
}

// сумма возврата
function returnAmount(amount, term) {
  return amount + percent(amount, term) * term * amount / 100;
}

calc(creditCalculateAmountInput.val(), select.val());
////



/* $( document ).ready(function() {
  $( ".credit-calculate__range--getting-info" ).slider({
      range: "min",
      value: 10000,
      min: 10000,
      max: 100000,
      slide: function( event, ui ) {
        $( ".credit-calculate__amount" ).text(ui.value + " грн");
      }
    });
    $( ".credit-calculate__amount" ).text($( ".credit-calculate__range" ).slider( "value" )+ " грн" );
  });
 */
