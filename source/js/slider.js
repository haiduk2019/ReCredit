
  const calculateRange = $(".credit-calculate__range");
  const value = calculateRange.data('value');
  const select = $(".js-credit-select");
  const period = $(".js-credit-calculate__period");
  const creditCalculateAmount = $(".credit-calculate__amount");
  const slider = $(".js-select-slider");





  calculateRange.slider({
    range: "min",
    value: value,
    min: 10000,
    max: 100000,
    step: 500,
    slide: function (event, ui) {
      creditCalculateAmount.text(addSpace(ui.value) + " грн");
    },
    create: function( event, ui ) {
      creditCalculateAmount.text(addSpace(value) + " грн");
    }
  });



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
    },

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
    }
  });



   // Добавляет пробелы в числах после каждых 3-х знаков
   function addSpace(nStr) {
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    let rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ' ' + '$2');
    }
    return x1 + x2;
}
