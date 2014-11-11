$(function() {
	$('.dropBtn').on('click', function () {
	    var dropValue = $(this).val();
	    $('input[name="grab"]').val(dropValue);
	    
	    $('form[name=catalog]').trigger('submit');
	});
});