(function() {

	var duration = "1000";
	var heightOffset = 100;

	// document.write("<style id='temp-animate-in'>*[class^='animate-in'], *[class*=' animate-in'] {display:none}</style>")

	function isElementVisible(elem) {

		var rect = elem.getBoundingClientRect();
		return (
			( (rect.top + heightOffset) >= 0 && (rect.top + heightOffset) <= window.innerHeight ) || 
			( (rect.bottom + heightOffset) >= 0 && (rect.bottom + heightOffset) <= window.innerHeight ) ||
			( (rect.top + heightOffset) < 0 && (rect.bottom + heightOffset) > window.innerHeight )
		)
	}

	function update() {
		var nodes = document.querySelectorAll("*:not(.animate-in-done)[class^='animate-in'], *:not(.animate-in-done)[class*=' animate-in']")

		for (var i = 0; i < nodes.length; i++) {
			if (isElementVisible(nodes[i])) {
				nodes[i].classList.remove("out-of-viewport")
				nodes[i].classList.add("animate-in-done")
			} else {
				nodes[i].classList.add("out-of-viewport")
  		}
  	}
  }

	document.addEventListener("DOMContentLoaded", function(event) {
	  update()
    // setTimeout(function() {
    //   document.querySelector("#temp-animate-in").remove()
    // })
	});

	window.addEventListener("scroll", function() {
	  update()			
  })

})();

