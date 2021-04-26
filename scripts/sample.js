$(function () {
	var pull = $('#pull');
	menu = $('nav ul');
	menuHeight = menu.height();

	$(pull).on('click', function (e) {
		e.preventDefault();
		menu.slideToggle();
	});

	$(window).resize(function () {
		var w = $(window).width();
		if (w > 600 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});
});


/* I can't make it work to be responsive with CSS. Doing something wrong. 
So, I am using for now William's example of that function to make menu disappear and be a hamburger menu

function myFunction() {

	var x = document.getElementById("pull");
	if (window.matchMedia("(max-width: 600px)").matches) {
	  x.style.display = "block";
	} else {
	  x.style.display = "grid";
	}
  }

*/
