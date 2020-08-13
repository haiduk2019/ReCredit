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

$("#calc_amount, #request_for_a_loan_amount").focusout(function(){
  let value = $(this).val();
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
  $(this).val(value);
});
