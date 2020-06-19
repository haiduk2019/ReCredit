$( document ).ready(function() {
$( ".credit-calculate__range" ).slider({
    range: "min",
    value: 75800,
    min: 10000,
    max: 100000,
    slide: function( event, ui ) {
      $( ".credit-calculate__amount" ).text(ui.value + " грн");
    }
  });
  $( ".credit-calculate__amount" ).text($( ".credit-calculate__range" ).slider( "value" )+ " грн" );
});


$( document ).ready(function() {
  var select = $( ".js-credit-select" );
  var slider = $( "<div id='slider'></div>" ).insertAfter( select ).slider({
    min: 3,
    max: 12,
    step: 3,
    // range: "min",
    value: 12,
    slide: function( event, ui ) {
      select[ 0 ].selectedIndex = ui.value - 1;
      $('.js-credit-calculate__period').text(ui.value + ' мес');
    }
  });

  select.on( "change", function() {
    $('.js-credit-calculate__period').text(this.value + ' мес');
  //  $('.js-credit-calculate__period').text()
    slider.slider( "value", this.selectedIndex + 1 );
  });

});
