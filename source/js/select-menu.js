$.widget( 'app.selectmenu', $.ui.selectmenu, {
  _drawButton: function() {
      this._super();

      var selected = this.element
              .find( '[selected]' )
              .length,
          placeholder = this.options.placeholder;

      if ( !selected && placeholder ) {
          this.buttonItem.text( placeholder );
      }
  }
});

const select = $('.js-select');

select.each(function() {
  let placeholder = $(this).attr('placeholder');
  $(this).selectmenu({
    icons: {
       button: "my-test-class"
    },

    classes: {
      "ui-selectmenu-button": "credit-calculate__select credit-calculate__choice",
      "ui-selectmenu-menu": "term__wrapper choice__wrapper"
    },

    placeholder: placeholder
  });
});

