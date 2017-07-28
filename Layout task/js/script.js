$(document).ready(function(){
	$(".navbar-toggle").blur(function (event) {
		var screenWidth = window.innerWidth;
		if (screenWidth < 768) {
			$(".navbar-collapse").collapse('hide');
		}
	});
})