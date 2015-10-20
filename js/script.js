
	$('nav li').has('ul').addClass('parent');
	$('.parent ul').hide();
	$('nav ul').on('mouseover', 'li.parent', function() {
	    $(this).find('ul').show();
	});


