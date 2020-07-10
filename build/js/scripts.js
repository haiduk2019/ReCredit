/*
	Masked Input plugin for jQuery
	Copyright (c) 2007-2013 Josh Bush (digitalbush.com)
	Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
	Version: 1.3.1
*/
(function (e) {
  function t() {
    var e = document.createElement("input"),
      t = "onpaste";
    return e.setAttribute(t, ""), "function" == typeof e[t] ? "paste" : "input"
  }
  var n, a = t() + ".mask",
    r = navigator.userAgent,
    i = /iphone/i.test(r),
    o = /android/i.test(r);
  e.mask = {
    definitions: {
      9: "[0-9]",
      a: "[A-Za-z]",
      "*": "[A-Za-z0-9]"
    },
    dataName: "rawMaskFn",
    placeholder: "_"
  }, e.fn.extend({
    caret: function (e, t) {
      var n;
      if (0 !== this.length && !this.is(":hidden")) return "number" == typeof e ? (t = "number" == typeof t ? t : e, this.each(function () {
        this.setSelectionRange ? this.setSelectionRange(e, t) : this.createTextRange && (n = this.createTextRange(), n.collapse(!0), n.moveEnd("character", t), n.moveStart("character", e), n.select())
      })) : (this[0].setSelectionRange ? (e = this[0].selectionStart, t = this[0].selectionEnd) : document.selection && document.selection.createRange && (n = document.selection.createRange(), e = 0 - n.duplicate().moveStart("character", -1e5), t = e + n.text.length), {
        begin: e,
        end: t
      })
    },
    unmask: function () {
      return this.trigger("unmask")
    },
    mask: function (t, r) {
      var c, l, s, u, f, h;
      return !t && this.length > 0 ? (c = e(this[0]), c.data(e.mask.dataName)()) : (r = e.extend({
        placeholder: e.mask.placeholder,
        completed: null
      }, r), l = e.mask.definitions, s = [], u = h = t.length, f = null, e.each(t.split(""), function (e, t) {
        "?" == t ? (h--, u = e) : l[t] ? (s.push(RegExp(l[t])), null === f && (f = s.length - 1)) : s.push(null)
      }), this.trigger("unmask").each(function () {
        function c(e) {
          for (; h > ++e && !s[e];);
          return e
        }

        function d(e) {
          for (; --e >= 0 && !s[e];);
          return e
        }

        function m(e, t) {
          var n, a;
          if (!(0 > e)) {
            for (n = e, a = c(t); h > n; n++)
              if (s[n]) {
                if (!(h > a && s[n].test(R[a]))) break;
                R[n] = R[a], R[a] = r.placeholder, a = c(a)
              } b(), x.caret(Math.max(f, e))
          }
        }

        function p(e) {
          var t, n, a, i;
          for (t = e, n = r.placeholder; h > t; t++)
            if (s[t]) {
              if (a = c(t), i = R[t], R[t] = n, !(h > a && s[a].test(i))) break;
              n = i
            }
        }

        function g(e) {
          var t, n, a, r = e.which;
          8 === r || 46 === r || i && 127 === r ? (t = x.caret(), n = t.begin, a = t.end, 0 === a - n && (n = 46 !== r ? d(n) : a = c(n - 1), a = 46 === r ? c(a) : a), k(n, a), m(n, a - 1), e.preventDefault()) : 27 == r && (x.val(S), x.caret(0, y()), e.preventDefault())
        }

        function v(t) {
          var n, a, i, l = t.which,
            u = x.caret();
          t.ctrlKey || t.altKey || t.metaKey || 32 > l || l && (0 !== u.end - u.begin && (k(u.begin, u.end), m(u.begin, u.end - 1)), n = c(u.begin - 1), h > n && (a = String.fromCharCode(l), s[n].test(a) && (p(n), R[n] = a, b(), i = c(n), o ? setTimeout(e.proxy(e.fn.caret, x, i), 0) : x.caret(i), r.completed && i >= h && r.completed.call(x))), t.preventDefault())
        }

        function k(e, t) {
          var n;
          for (n = e; t > n && h > n; n++) s[n] && (R[n] = r.placeholder)
        }

        function b() {
          x.val(R.join(""))
        }

        function y(e) {
          var t, n, a = x.val(),
            i = -1;
          for (t = 0, pos = 0; h > t; t++)
            if (s[t]) {
              for (R[t] = r.placeholder; pos++ < a.length;)
                if (n = a.charAt(pos - 1), s[t].test(n)) {
                  R[t] = n, i = t;
                  break
                } if (pos > a.length) break
            } else R[t] === a.charAt(pos) && t !== u && (pos++, i = t);
          return e ? b() : u > i + 1 ? (x.val(""), k(0, h)) : (b(), x.val(x.val().substring(0, i + 1))), u ? t : f
        }
        var x = e(this),
          R = e.map(t.split(""), function (e) {
            return "?" != e ? l[e] ? r.placeholder : e : void 0
          }),
          S = x.val();
        x.data(e.mask.dataName, function () {
          return e.map(R, function (e, t) {
            return s[t] && e != r.placeholder ? e : null
          }).join("")
        }), x.attr("readonly") || x.one("unmask", function () {
          x.unbind(".mask").removeData(e.mask.dataName)
        }).bind("focus.mask", function () {
          clearTimeout(n);
          var e;
          S = x.val(), e = y(), n = setTimeout(function () {
            b(), e == t.length ? x.caret(0, e) : x.caret(e)
          }, 10)
        }).bind("blur.mask", function () {
          y(), x.val() != S && x.change()
        }).bind("keydown.mask", g).bind("keypress.mask", v).bind(a, function () {
          setTimeout(function () {
            var e = y(!0);
            x.caret(e), r.completed && e == x.val().length && r.completed.call(x)
          }, 0)
        }), y()
      }))
    }
  })
})(jQuery);

var checkMark = $('.js-reference-container__check-mark');
var answer = $('.js-reference-container__answer');

checkMark.on('click', function () {
  $(this).toggleClass('reference-container__check-mark--active');
  $(this).siblings(answer).toggleClass('reference-container__answer--active');
});

var conditionsBtn = $('.js-display-toggle');

conditionsBtn.on('click', function () {
  var hiddenBtn = $(this).siblings('.js-display-toggle:hidden');
  $(this).css('display', 'none');
  hiddenBtn.css('display', 'flex');
  // $(this).siblings('.js-conditions').toggleClass('credit-product__wrapper--hidden');
  var conditions = $(this).siblings('.js-conditions');
  if (conditions.is(":visible")) {
    conditions.hide(1000);
  } else {
    conditions.show(1000);
  }
  //  conditions.css('display', 'block');
  //   $(this).css('display', 'none');
  //  hideConditions.css('display', 'flex');
});

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


var langMenu = $('.js-lang-menu');
var navHeader = $('.js-main-nav');
var navToggle = $('.js-main-nav__toggle');

navHeader.removeClass('main-nav--nojs');
langMenu.removeClass('lang-menu--active');

navToggle.on('click', function () {
  navToggle.toggleClass('main-nav__toggle--active');
  navHeader.toggleClass('main-nav--active');
  langMenu.toggleClass('lang-menu--active');
});

var payToggle = $('.js-payment-method__toggle');
var payArrow = $('.js-payment-method__arrow');
var payInfo = $('.js-instruction-info');

payToggle.on('click', function () {
  payToggle.removeClass('payment-method__toggle--active');
  $(this).addClass('payment-method__toggle--active');

  /*   payArrow.toggleClass('payment-method__arrow--active'); */
  if (payInfo.hasClass('instruction-info--active')) {
    // payInfo.removeClass('instruction-info--active');
  } else {
    payInfo.addClass('instruction-info--active');
  }
  /*   payInfo.toggleClass('instruction-info--active'); */
});

//Маска ввода номера на сайте
// $('input[name=phone-field]').mask("+3 (999) 999-99-99");


$(function () {
  //задание заполнителя с помощью параметра placeholder
  $('input[name=phone-field]').mask("+38 (999) 999-99-99");
  /*   $('input[name=sms-code-field]').mask("9 9 9 9"); */
  /* $.mask.definitions['~'] = '[+ -]';
  $('input[name=sms-code-field]').mask("~ 9.99 ~ 9.99 999"); */
  $('input[name=sms-code-field]').mask("9 9 9 9");

});

document.createElement("picture");

/*! Picturefill - v2.3.1 - 2015-04-09
* http://scottjehl.github.io/picturefill
* Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT */
window.matchMedia||(window.matchMedia=function(){"use strict";var a=window.styleMedia||window.media;if(!a){var b=document.createElement("style"),c=document.getElementsByTagName("script")[0],d=null;b.type="text/css",b.id="matchmediajs-test",c.parentNode.insertBefore(b,c),d="getComputedStyle"in window&&window.getComputedStyle(b,null)||b.currentStyle,a={matchMedium:function(a){var c="@media "+a+"{ #matchmediajs-test { width: 1px; } }";return b.styleSheet?b.styleSheet.cssText=c:b.textContent=c,"1px"===d.width}}}return function(b){return{matches:a.matchMedium(b||"all"),media:b||"all"}}}()),function(a,b,c){"use strict";function d(b){"object"==typeof module&&"object"==typeof module.exports?module.exports=b:"function"==typeof define&&define.amd&&define("picturefill",function(){return b}),"object"==typeof a&&(a.picturefill=b)}function e(a){var b,c,d,e,f,i=a||{};b=i.elements||g.getAllElements();for(var j=0,k=b.length;k>j;j++)if(c=b[j],d=c.parentNode,e=void 0,f=void 0,"IMG"===c.nodeName.toUpperCase()&&(c[g.ns]||(c[g.ns]={}),i.reevaluate||!c[g.ns].evaluated)){if(d&&"PICTURE"===d.nodeName.toUpperCase()){if(g.removeVideoShim(d),e=g.getMatch(c,d),e===!1)continue}else e=void 0;(d&&"PICTURE"===d.nodeName.toUpperCase()||!g.sizesSupported&&c.srcset&&h.test(c.srcset))&&g.dodgeSrcset(c),e?(f=g.processSourceSet(e),g.applyBestCandidate(f,c)):(f=g.processSourceSet(c),(void 0===c.srcset||c[g.ns].srcset)&&g.applyBestCandidate(f,c)),c[g.ns].evaluated=!0}}function f(){function c(){clearTimeout(d),d=setTimeout(h,60)}g.initTypeDetects(),e();var d,f=setInterval(function(){return e(),/^loaded|^i|^c/.test(b.readyState)?void clearInterval(f):void 0},250),h=function(){e({reevaluate:!0})};a.addEventListener?a.addEventListener("resize",c,!1):a.attachEvent&&a.attachEvent("onresize",c)}if(a.HTMLPictureElement)return void d(function(){});b.createElement("picture");var g=a.picturefill||{},h=/\s+\+?\d+(e\d+)?w/;g.ns="picturefill",function(){g.srcsetSupported="srcset"in c,g.sizesSupported="sizes"in c,g.curSrcSupported="currentSrc"in c}(),g.trim=function(a){return a.trim?a.trim():a.replace(/^\s+|\s+$/g,"")},g.makeUrl=function(){var a=b.createElement("a");return function(b){return a.href=b,a.href}}(),g.restrictsMixedContent=function(){return"https:"===a.location.protocol},g.matchesMedia=function(b){return a.matchMedia&&a.matchMedia(b).matches},g.getDpr=function(){return a.devicePixelRatio||1},g.getWidthFromLength=function(a){var c;if(!a||a.indexOf("%")>-1!=!1||!(parseFloat(a)>0||a.indexOf("calc(")>-1))return!1;a=a.replace("vw","%"),g.lengthEl||(g.lengthEl=b.createElement("div"),g.lengthEl.style.cssText="border:0;display:block;font-size:1em;left:0;margin:0;padding:0;position:absolute;visibility:hidden",g.lengthEl.className="helper-from-picturefill-js"),g.lengthEl.style.width="0px";try{g.lengthEl.style.width=a}catch(d){}return b.body.appendChild(g.lengthEl),c=g.lengthEl.offsetWidth,0>=c&&(c=!1),b.body.removeChild(g.lengthEl),c},g.detectTypeSupport=function(b,c){var d=new a.Image;return d.onerror=function(){g.types[b]=!1,e()},d.onload=function(){g.types[b]=1===d.width,e()},d.src=c,"pending"},g.types=g.types||{},g.initTypeDetects=function(){g.types["image/jpeg"]=!0,g.types["image/gif"]=!0,g.types["image/png"]=!0,g.types["image/svg+xml"]=b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),g.types["image/webp"]=g.detectTypeSupport("image/webp","data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=")},g.verifyTypeSupport=function(a){var b=a.getAttribute("type");if(null===b||""===b)return!0;var c=g.types[b];return"string"==typeof c&&"pending"!==c?(g.types[b]=g.detectTypeSupport(b,c),"pending"):"function"==typeof c?(c(),"pending"):c},g.parseSize=function(a){var b=/(\([^)]+\))?\s*(.+)/g.exec(a);return{media:b&&b[1],length:b&&b[2]}},g.findWidthFromSourceSize=function(c){for(var d,e=g.trim(c).split(/\s*,\s*/),f=0,h=e.length;h>f;f++){var i=e[f],j=g.parseSize(i),k=j.length,l=j.media;if(k&&(!l||g.matchesMedia(l))&&(d=g.getWidthFromLength(k)))break}return d||Math.max(a.innerWidth||0,b.documentElement.clientWidth)},g.parseSrcset=function(a){for(var b=[];""!==a;){a=a.replace(/^\s+/g,"");var c,d=a.search(/\s/g),e=null;if(-1!==d){c=a.slice(0,d);var f=c.slice(-1);if((","===f||""===c)&&(c=c.replace(/,+$/,""),e=""),a=a.slice(d+1),null===e){var g=a.indexOf(",");-1!==g?(e=a.slice(0,g),a=a.slice(g+1)):(e=a,a="")}}else c=a,a="";(c||e)&&b.push({url:c,descriptor:e})}return b},g.parseDescriptor=function(a,b){var c,d=b||"100vw",e=a&&a.replace(/(^\s+|\s+$)/g,""),f=g.findWidthFromSourceSize(d);if(e)for(var h=e.split(" "),i=h.length-1;i>=0;i--){var j=h[i],k=j&&j.slice(j.length-1);if("h"!==k&&"w"!==k||g.sizesSupported){if("x"===k){var l=j&&parseFloat(j,10);c=l&&!isNaN(l)?l:1}}else c=parseFloat(parseInt(j,10)/f)}return c||1},g.getCandidatesFromSourceSet=function(a,b){for(var c=g.parseSrcset(a),d=[],e=0,f=c.length;f>e;e++){var h=c[e];d.push({url:h.url,resolution:g.parseDescriptor(h.descriptor,b)})}return d},g.dodgeSrcset=function(a){a.srcset&&(a[g.ns].srcset=a.srcset,a.srcset="",a.setAttribute("data-pfsrcset",a[g.ns].srcset))},g.processSourceSet=function(a){var b=a.getAttribute("srcset"),c=a.getAttribute("sizes"),d=[];return"IMG"===a.nodeName.toUpperCase()&&a[g.ns]&&a[g.ns].srcset&&(b=a[g.ns].srcset),b&&(d=g.getCandidatesFromSourceSet(b,c)),d},g.backfaceVisibilityFix=function(a){var b=a.style||{},c="webkitBackfaceVisibility"in b,d=b.zoom;c&&(b.zoom=".999",c=a.offsetWidth,b.zoom=d)},g.setIntrinsicSize=function(){var c={},d=function(a,b,c){b&&a.setAttribute("width",parseInt(b/c,10))};return function(e,f){var h;e[g.ns]&&!a.pfStopIntrinsicSize&&(void 0===e[g.ns].dims&&(e[g.ns].dims=e.getAttribute("width")||e.getAttribute("height")),e[g.ns].dims||(f.url in c?d(e,c[f.url],f.resolution):(h=b.createElement("img"),h.onload=function(){if(c[f.url]=h.width,!c[f.url])try{b.body.appendChild(h),c[f.url]=h.width||h.offsetWidth,b.body.removeChild(h)}catch(a){}e.src===f.url&&d(e,c[f.url],f.resolution),e=null,h.onload=null,h=null},h.src=f.url)))}}(),g.applyBestCandidate=function(a,b){var c,d,e;a.sort(g.ascendingSort),d=a.length,e=a[d-1];for(var f=0;d>f;f++)if(c=a[f],c.resolution>=g.getDpr()){e=c;break}e&&(e.url=g.makeUrl(e.url),b.src!==e.url&&(g.restrictsMixedContent()&&"http:"===e.url.substr(0,"http:".length).toLowerCase()?void 0!==window.console&&console.warn("Blocked mixed content image "+e.url):(b.src=e.url,g.curSrcSupported||(b.currentSrc=b.src),g.backfaceVisibilityFix(b))),g.setIntrinsicSize(b,e))},g.ascendingSort=function(a,b){return a.resolution-b.resolution},g.removeVideoShim=function(a){var b=a.getElementsByTagName("video");if(b.length){for(var c=b[0],d=c.getElementsByTagName("source");d.length;)a.insertBefore(d[0],c);c.parentNode.removeChild(c)}},g.getAllElements=function(){for(var a=[],c=b.getElementsByTagName("img"),d=0,e=c.length;e>d;d++){var f=c[d];("PICTURE"===f.parentNode.nodeName.toUpperCase()||null!==f.getAttribute("srcset")||f[g.ns]&&null!==f[g.ns].srcset)&&a.push(f)}return a},g.getMatch=function(a,b){for(var c,d=b.childNodes,e=0,f=d.length;f>e;e++){var h=d[e];if(1===h.nodeType){if(h===a)return c;if("SOURCE"===h.nodeName.toUpperCase()){null!==h.getAttribute("src")&&void 0!==typeof console&&console.warn("The `src` attribute is invalid on `picture` `source` element; instead, use `srcset`.");var i=h.getAttribute("media");if(h.getAttribute("srcset")&&(!i||g.matchesMedia(i))){var j=g.verifyTypeSupport(h);if(j===!0){c=h;break}if("pending"===j)return!1}}}}return c},f(),e._=g,d(e)}(window,window.document,new window.Image);

$(document).ready(function () {
  var calculateRange = $(".credit-calculate__range");
  var value = calculateRange.data('value');
  calculateRange.slider({
    range: "min",
    value: value,
    min: 10000,
    max: 100000,
    slide: function (event, ui) {
      $(".credit-calculate__amount").text(ui.value + " грн");
    }
  });
  $(".credit-calculate__amount").text($(".credit-calculate__range").slider("value") + " грн");
});


$(document).ready(function () {
  var select = $(".js-credit-select");
  var slider = $("<div id='slider'></div>").insertAfter(select).slider({
    min: 3,
    max: 12,
    step: 3,
    range: "min",
    value: select.val(),
    slide: function (event, ui) {
      // select[ 0 ].selectedIndex = ui.value - 1;
      $('.js-credit-calculate__period').text(ui.value + ' мес');
    }
  });

  select.on("change", function () {
    $('.js-credit-calculate__period').text(this.value + ' мес');
    slider.slider("value", this.value);
  });

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
