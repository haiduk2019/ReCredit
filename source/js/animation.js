let container = $('.company-descr__list');

setInterval(function () {
  $('li img', container).each(function (event, el) {
    setTimeout(function () {
      $(el).fadeOut("slow", function () {
        $(el).fadeIn();
      });
    }, Math.random() * 1000);
  });
}, 5000);
