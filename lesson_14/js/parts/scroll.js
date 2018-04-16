function scroll() {
	
	let link_about = document.querySelector('.link-about'),
	    link_photo = document.querySelector('.link-photo'),
	    link_price = document.querySelector('.link-price'),
	    link_contacts = document.querySelector('.link-contacts');

	link_about.addEventListener('click', function(event) {
			event.preventDefault();	
			 animate({
		        duration: 300,
		        timing: function(timeFraction) {
		          return timeFraction;
		        },
		        draw: function(progress) {          
		          window.scrollTo(0,progress * 600);
		        }
		      });
	});

	link_photo.addEventListener('click', function(event) {
		event.preventDefault();	
		 animate({
	        duration: 1000,
	        timing: function(timeFraction) {
	          return timeFraction;
	        },
	        draw: function(progress) {          
	          window.scrollTo(0,progress * 1800);
	        }
	      });
	});

	link_price.addEventListener('click', function(event) {
		event.preventDefault();	
		 animate({
	        duration: 1400,
	        timing: function(timeFraction) {
	          return timeFraction;
	        },
	        draw: function(progress) {          
	          window.scrollTo(0,progress * 2500);
	        }
	      });
	});

	link_contacts.addEventListener('click', function(event) {
		event.preventDefault();	
		 animate({
	        duration: 2700,
	        timing: function(timeFraction) {
	          return timeFraction;
	        },
	        draw: function(progress) {          
	          window.scrollTo(0,progress * 5500);
	        }
	      });
	});

	function animate(options) {

	  var start = performance.now();

	  requestAnimationFrame(function animate(time) {
	    // timeFraction от 0 до 1
	    var timeFraction = (time - start) / options.duration;
	    if (timeFraction > 1) timeFraction = 1;

	    // Current state of animation
	    var progress = options.timing(timeFraction)

	    options.draw(progress);

	    if (timeFraction < 1) {
	      requestAnimationFrame(animate);
	    }

	  });
	};
};

module.exports = scroll;