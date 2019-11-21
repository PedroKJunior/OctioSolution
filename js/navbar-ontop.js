(function() {

	const className = "navbar-ontop"
	
	document.write("<style id='temp-navbar-ontop'>.navbar {opacity:0; transition: none !important}</style>")

	function update() {
		const nav = document.querySelector(".navbar")

		if (window.scrollY >= 630){
			nav.classList.remove(className)
			$("#logo-navbar").css("opacity","1");
		} else {
			nav.classList.add(className)
			$("#logo-navbar").css("opacity","0")
		}	
}

	document.addEventListener("DOMContentLoaded", function(event) {
		$(window).on('show.bs.collapse', function (e) {
			$(e.target).closest("." + className).removeClass(className);
		})

		$(window).on('hidden.bs.collapse', function (e) {
			update()
		})
		update()
		setTimeout(function() {
			document.querySelector("#temp-navbar-ontop").remove()
		})
  	});

	window.addEventListener("scroll", function() {
		update()			
	})

})();