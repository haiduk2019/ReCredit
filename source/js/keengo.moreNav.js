$.fn.moreNav = function() {
	var nav = $(this);

	function setMoreNav(flag) {

		var nav_width = nav.outerWidth(),
			nav_elem_width = 0,
			more_link = $('<li class="site-list__item js-more"><div class="site-list__more"><span class=""></span><span class=""></span><span class=""></span></div><ul class="site-list--more-nav"></ul></li>'),
			class_nav_item = 'nav-item',
      class_nav_item_more = 'nav-item-more';

    if(!flag) {
      var elements = nav.find('li:not(.js-more)');
      elements.removeClass(class_nav_item_more)
              .removeClass(class_nav_item)
              .addClass(class_nav_item)
      nav.append(elements);
    }

		if( nav.find('.js-more').length > 0 ) {
			nav.append(nav.find('.js-more ul li'));
			nav.find('.js-more').remove();
		}

		$.each(nav.find('li'), function(i, elem){
			var elem_width = $(elem).outerWidth();

			nav_elem_width += elem_width;
		});

		if( nav_elem_width > nav_width ) {
			nav.append(more_link);
			nav_width -= more_link.outerWidth();

			nav_elem_width = 0;

			$.each(nav.find('li'), function(i, elem){
				var elem_width = $(elem).outerWidth();

				nav_elem_width += elem_width;

				if( !$(elem).is('.js-more') ) {
					if( nav_elem_width < nav_width ) {
						$(elem).addClass(class_nav_item).removeClass(class_nav_item_more);
					} else {
						$(elem).addClass(class_nav_item_more).removeClass(class_nav_item);
					}
				}
			});
		}

		more_link.find('ul').append($('.' + class_nav_item_more));

	}
	setMoreNav(window.innerWidth >= 1280);
	setMoreNav(window.innerWidth >= 1280);
	$(window).resize(function(){
		setMoreNav(window.innerWidth >= 1280);
	});
};

if(window.innerWidth >= 1280) {
  $('.js-site-list').moreNav();
}

