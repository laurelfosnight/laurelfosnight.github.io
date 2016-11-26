$(document).ready(function () {
	$('#nav-menu-btn').on('click', function () {
		var $menuBtn = $(this),
		    menuExpanded = $menuBtn.attr('aria-expanded'),
		    $navMenu = $('#nav-menu');
		    
		if (menuExpanded === 'true') {
			$menuBtn.attr('aria-expanded','false').removeClass('expanded');
			$navMenu.removeClass('expanded');
		} else {
			$menuBtn.attr('aria-expanded','true').addClass('expanded');
			$navMenu.addClass('expanded');
		}
	});
});