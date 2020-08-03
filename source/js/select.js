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
  }
});
