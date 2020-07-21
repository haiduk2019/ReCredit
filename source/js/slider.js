
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
    slide: function (event, ui) {
      creditCalculateAmount.text(ui.value + " грн");
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
    }
  });


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
