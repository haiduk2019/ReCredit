const designedSelect = $(".designed-select");

designedSelect.selectmenu({
  icons: {
     button: "my-test-class"
  },
  classes: {
    "ui-selectmenu-button": "credit-calculate__select",
    "ui-selectmenu-menu": "term__wrapper"
  },
  change: function( event, ui ) {
    if ($(this).attr('id') == 'request_for_a_loan_employment') {
      if ($(this).val() == 'Прочее' || $(this).val() == 'Інше') {
        $('#employmentManual-wrapper').show();
      } else {
        $('#employmentManual-wrapper').hide();
      }
    }
    if ($(this).attr('id') == 'request_for_a_loan_purposeOfTheLoan') {
      if ($(this).val() == 'Прочее' || $(this).val() == 'Інше') {
        $('#purposeOfTheLoanManual-wrapper').show();
      } else {
        $('#purposeOfTheLoanManual-wrapper').hide();
      }
    }
  }
});
designedSelect.selectmenu().change();
