(function($) {
  var strikeTime   = 400,
      destrikeTime = 150;

  $.fn.strike = function() {
    $(this).html(
      '<span class="struck"></span>' +
      '<span class="unstruck">' +
      $(this).text() +
      '</span>'
    );

    var struckSpan   = $(this).find("span.struck"),
        unstruckSpan = $(this).find("span.unstruck"),
        text         = unstruckSpan.text(),
        stepSize     = strikeTime/text.length,
        first;

    var iterate = function() {
      if(text.length > 0) {
        first = text.substr(0, 1);
        text  = text.substr(1);
        struckSpan.append(first);
        unstruckSpan.text(text);

        setTimeout(iterate, stepSize);
      }
    };

    iterate();
  };

  $.fn.destrike = function() {
    $(this).html(
      '<span class="unstruck"></span>' +
      '<span class="struck">' +
      $(this).text() +
      '</span>'
    );

    var struckSpan   = $(this).find("span.struck"),
        unstruckSpan = $(this).find("span.unstruck"),
        text         = struckSpan.text(),
        stepSize     = destrikeTime/text.length,
        first;

    var iterate = function() {
      if(text.length > 0) {
        first = text.substr(0, 1);
        text  = text.substr(1);
        unstruckSpan.append(first);
        struckSpan.text(text);

        setTimeout(iterate, stepSize);
      }
    };

    iterate();
  };
})(jQuery);
