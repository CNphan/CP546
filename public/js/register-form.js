$('#submit-application').click(function () {
  var btn = $(this);
  btn.button('loading');
  $.ajax(...).always(function () {
    btn.button('submit');
  });
});

$('#add-transcript').click(function () {
	  var btn = $(this);
	  btn.button('loading');
	  $.ajax(...).always(function () {
	    btn.button('reset');
	  });
	});