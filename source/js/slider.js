const calculateRange = $(".credit-calculate__range");
const select = $(".js-credit-select");
const period = $(".js-credit-calculate__period");
const creditCalculateAmount = $(".credit-calculate__amount");
const creditCalculateAmountInput = $(".calc-amount");
const value = creditCalculateAmountInput.val();
const slider = $(".js-select-slider");

creditCalculateAmountInput.on('keyup', function () {
  let value = $(this).val();
  let amount = limitAmount(value);
  calc(amount, select.val());
  calculateRange.slider("value", value);
});

calculateRange.slider({
  range: "min",
  value: value,
  min: 10000,
  max: 100000,
  step: 1000,
  slide: function (event, ui) {
    creditCalculateAmount.text(ui.value + " грн");
    creditCalculateAmountInput.val(ui.value);
    calc(creditCalculateAmountInput.val(), select.val());
  }
});
creditCalculateAmount.text(calculateRange.slider("value") + " грн");
calculateRange.change();


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



// ==================================

function numberValidator(textbox) {
  ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
    textbox.addEventListener(event, function() {
      if (/^\d*$/.test(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        this.value = 10000;
      }
    });
  });
}

if (document.getElementById("calc_amount")) {
  numberValidator(document.getElementById("calc_amount"));
}
if (document.getElementById("request_for_a_loan_amount")) {
  numberValidator(document.getElementById("request_for_a_loan_amount"));
}

function limitAmount(value) {
  if (value < 10000) {
    value = 10000;
  }
  if (value > 100000) {
    value = 100000;
  }
  let thousand = String(value).slice(-3);
  if (thousand <= 250) {
    value = Math.floor((value / 1000)) * 1000;
  }
  if (thousand > 250 && thousand <= 750) {
    value = Math.floor((value / 1000)) * 1000 + 500;
  }
  if (thousand > 750) {
    value = Math.floor((value / 1000)) * 1000 + 1000;
  }
  return value;
}

$("#calc_amount, #request_for_a_loan_amount").focusout(function(){
  let value = $(this).val();
  let amount = limitAmount(value);
  $(this).val(amount);
});
