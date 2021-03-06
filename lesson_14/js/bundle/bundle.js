(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', function() {

  let tab = require('../parts/tab.js');
  let modal = require('../parts/modal.js');
  let ajax = require('../parts/ajax.js');
  let slider = require('../parts/slider.js');
  let calc = require('../parts/calc.js');
  let scroll = require('../parts/scroll.js');
  let timer = require('../parts/timer.js');

  tab();
  modal();
  ajax();
  slider();
  calc();
  scroll();
  timer();

});
},{"../parts/ajax.js":2,"../parts/calc.js":3,"../parts/modal.js":4,"../parts/scroll.js":5,"../parts/slider.js":6,"../parts/tab.js":7,"../parts/timer.js":8}],2:[function(require,module,exports){
function ajax() {

	let message = new Object();
	message.loading = "Загрузка...";
	message.success = "Спасибо! Скоро мы с вами свяжемся";
	message.failure = "Что-то пошло не так...";
	message.addimage = "<img src='img/ok_picture.png'>"

	let modal_window_form = document.getElementsByClassName('main-form')[0],
					modal_window_input = modal_window_form.getElementsByTagName('input'),

					contact_form = document.querySelector('.contact-form form'),
					contact_input = contact_form.getElementsByTagName('input'),

					statusMessage = document.createElement('div');
					statusMessage.style.color = "#ffffff"
					statusMessage.style.marginTop = "5px";				


					statusMessage.classList.add('status');

					//Working with modal window form
					modal_window_form.addEventListener('submit', function(event) {
									event.preventDefault();
									modal_window_form.appendChild(statusMessage);

									// AJAX
									let request = new XMLHttpRequest();
									request.open("POST", 'server.php');
									request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

									let formData = new FormData(modal_window_form);

									request.send(formData);

									request.onreadystatechange = function() {
											if (request.readyState < 4) {
													statusMessage.innerHTML = message.loading;
											} else if (request.readyState === 4) {
													if (request.status == 200 && request.status < 300) {
														statusMessage.innerHTML = message.addimage;													
														//Add content on the page
													} else {
														statusMessage.innerHTML = message.failure;
													};
											};
									};
									for (let i = 0; i < modal_window_input.length; i++) {
										modal_window_input[i].value = '';
										//Clear inputs
									}
					});

					//Working with contact form
					contact_form.addEventListener('submit', function(event) {
									event.preventDefault();
									contact_form.appendChild(statusMessage);
									//contact_form.appendChild(img);

									// AJAX
									let request = new XMLHttpRequest();
									request.open("POST", 'server.php');
									request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

									let formData = new FormData(contact_form);

									request.send(formData);

									request.onreadystatechange = function() {
											if (request.readyState < 4) {
													statusMessage.innerHTML = message.loading;
											} else if (request.readyState === 4) {
													if (request.status == 200 && request.status < 300) {													
														statusMessage.innerHTML = message.addimage;													
														//Add content on the page
													} else {
														statusMessage.innerHTML = message.failure;
													};
											};
									};
									for (let i = 0; i < contact_input.length; i++) {
										contact_input[i].value = '';
										//Clear inputs
									}
					});
};

module.exports = ajax;
},{}],3:[function(require,module,exports){
function calc() {
	
	let persons = document.getElementsByClassName('counter-block-input')[0],
					restDays = document.getElementsByClassName('counter-block-input')[1],
					place = document.getElementById('select'),
					totalValue = document.getElementById('total'),
					personsSum = 0,
					daysSum = 0,
					total = 0;

					totalValue.innerHTML = 0;

					persons.addEventListener('change', function() {
						personsSum = +this.value;								
						total = (daysSum + personsSum) * 4000;								
						if (this.value == '' || isNaN(parseInt(this.value)) == true || personsSum % 1 != 0 || daysSum % 1 != 0 || personsSum <= 0 || daysSum <= 0) {
							totalValue.innerHTML = 0;
						} else {
							totalValue.innerHTML = total;
						};
					});

					restDays.addEventListener('change', function() {
						daysSum = +this.value;
						total = (daysSum + personsSum) * 4000;
						if (this.value == '' || isNaN(parseInt(this.value)) == true || personsSum % 1 != 0 || daysSum % 1 != 0 || personsSum <= 0 || daysSum <= 0) {
							totalValue.innerHTML = 0;
						} else {
							totalValue.innerHTML = total;
						};
					});

					place.addEventListener('change', function() {
						if (restDays.value == '' || isNaN(parseInt(restDays.value)) == true || personsSum % 1 != 0 || persons.value == '' || isNaN(parseInt(restDays.value)) == true || daysSum % 1 != 0 || personsSum <= 0 || daysSum <= 0) {
							totalValue.innerHTML = 0;
						} else {
							let e = total;									
							totalValue.innerHTML = e * this.options[this.selectedIndex].value;
						};
			});
};

module.exports = calc;
},{}],4:[function(require,module,exports){
function modal() {

	let more = document.querySelector('.more');
					overlay = document.querySelector('.overlay');
					popup = document.querySelector('.popup');
					close = document.querySelector('.popup-close');
					description_btn = document.getElementsByClassName('description-btn');

	description_btn[0].addEventListener('click', function() {
					this.classList.add('more-splash');
					overlay.style.display = "block";
					document.body.style.overflow = 'hidden';
	});

	description_btn[1].addEventListener('click', function() {
					this.classList.add('more-splash');
					overlay.style.display = "block";
					document.body.style.overflow = 'hidden';
	});

	description_btn[2].addEventListener('click', function() {
					this.classList.add('more-splash');
					overlay.style.display = "block";
					document.body.style.overflow = 'hidden';
	});

	description_btn[3].addEventListener('click', function() {
					this.classList.add('more-splash');
					overlay.style.display = "block";
					document.body.style.overflow = 'hidden';
	});

	more.addEventListener('click', function() {
					overlay.style.display = "block";
					popup.classList.add('popup-slide');
					document.body.style.overflow = 'hidden';
	});

	close.addEventListener('click', function() {
					overlay.style.display = "none";
					popup.classList.remove('popup-slide');				
					document.body.style.overflow = '';
					let statusMessage = document.querySelector('.status');					
					statusMessage.innerHTML = '';
	});
};

module.exports = modal;
},{}],5:[function(require,module,exports){
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
},{}],6:[function(require,module,exports){
function slider() {
	
	let slideIndex = 1,
					slides = document.getElementsByClassName('slider-item'),
					prev = document.querySelector('.prev'),
					next = document.querySelector('.next'),
					dotsWrap = document.querySelector('.slider-dots'),
					dots = document.getElementsByClassName('dot');

					showSlides(slideIndex);

					function showSlides(n) {

						if (n > slides.length) {
							slideIndex = 1;										
						};

						if (n < 1) {
							slideIndex = slides.length;										
						};

						for (let i = 0; i < slides.length; i++) {
							slides[i].style.display = 'none';
						};

						for (let i = 0; i < dots.length; i++) {
							dots[i].classList.remove('dot-active');
						};

						slides[slideIndex - 1].style.display = 'block';
						dots[slideIndex - 1].classList.add('dot-active');

					};

					function plusSlides (n) {
						showSlides(slideIndex += n);
					};

					function currentSlide (n) {
						showSlides(slideIndex = n);
					};

					prev.addEventListener('click', function() {
						plusSlides(-1);
					});

					next.addEventListener('click', function() {
						plusSlides(1);
					});

					dotsWrap.addEventListener('click', function(event) {
						for (let i = 0; i < dots.length + 1; i++) {
							if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
								currentSlide(i);
							};
					};
			});
};

module.exports = slider;
},{}],7:[function(require,module,exports){
function tab() {
	
	let tab = document.getElementsByClassName('info-header-tab'),
					tabContent = document.getElementsByClassName('info-tabcontent'),
					info = document.getElementsByClassName('info-header')[0];
		

	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
						tabContent[i].classList.remove('show');
						tabContent[i].classList.add('hide');
		};
	};

	hideTabContent(1);

	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) {
						hideTabContent(0);
						tabContent[b].classList.remove('hide');
						tabContent[b].classList.add('show');
		};
	};

	info.addEventListener('click', function(event) {
		let target = event.target;
		if(target.className == 'info-header-tab') {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					showTabContent(i);
					break; 
				};
			};
		};
	});
};

module.exports = tab;
},{}],8:[function(require,module,exports){
function timer() {
	
		let deadline = '2018-04-18';

		setClock('timer', deadline);

		function getTimeRemaining(endtime) {
			let t = Date.parse(endtime) - Date.parse(new Date()),
					seconds = Math.floor(t / 1000 % 60),
					minutes = Math.floor( (t / 1000 / 60) % 60 ),
					hours = Math.floor(t / (1000 * 60 * 60));

			return {
				'total': t,
				'hours': hours,
				'minutes': minutes,
				'seconds': seconds
			};

		};

		function setClock(id, endtime) {
			let timer = document.getElementById(id),
				hours = timer.querySelector('.hours'),
				minutes = timer.querySelector('.minutes'),
				seconds = timer.querySelector('.seconds');

			updateClock();

			function updateClock() {
				let t = getTimeRemaining(endtime);
				hours.innerHTML = (t.hours < 10) ? '0' + t.hours : t.hours;
				minutes.innerHTML = (t.minutes < 10) ? '0' + t.minutes : t.minutes;
				seconds.innerHTML = (t.seconds < 10) ? '0' + t.seconds : t.seconds;

				let timeInterval = setInterval(updateClock, 1000);

				if (t.total <= 0) {
					clearInterval(timeInterval);
					hours.innerHTML = '00';
					minutes.innerHTML = '00';
					seconds.innerHTML = '00';
				};
			};
		};
	};

	module.exports = timer;
},{}]},{},[1]);
