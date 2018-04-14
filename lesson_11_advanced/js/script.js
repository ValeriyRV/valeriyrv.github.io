window.addEventListener('DOMContentLoaded', function() {

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
				}
			}
		};
	});

//Timer
let deadline = '2018-04-16';

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

//Прокрутка документа

let link_about = document.querySelector('.link-about');
let link_photo = document.querySelector('.link-photo');
let link_price = document.querySelector('.link-price');
let link_contacts = document.querySelector('.link-contacts');

link_about.onclick = function(event) {
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
};

link_photo.onclick = function(event) {
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
};

link_price.onclick = function(event) {
	event.preventDefault();	
	 animate({
        duration: 2500,
        timing: function(timeFraction) {
          return timeFraction;
        },
        draw: function(progress) {          
          window.scrollTo(0,progress * 4500);
        }
      });
};

link_contacts.onclick = function(event) {
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
};


function animate(options) {

  var start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction от 0 до 1
    var timeFraction = (time - start) / options.duration;
    if (timeFraction > 1) timeFraction = 1;

    // текущее состояние анимации
    var progress = options.timing(timeFraction)

    options.draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }

  });
}


// Modal

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
});

//Form

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

				//Работа с формой модального окна
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
													//Добавляем контент на страницу									
												} else {
													statusMessage.innerHTML = message.failure;
												};
										};
								};
								for (let i = 0; i < modal_window_input.length; i++) {
									modal_window_input[i].value = '';
									//Очищаем поля ввода
								}
				});

				//Работа с формой контактов
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
													//Добавляем контент на страницу									
												} else {
													statusMessage.innerHTML = message.failure;
												};
										};
								};
								for (let i = 0; i < contact_input.length; i++) {
									contact_input[i].value = '';
									//Очищаем поля ввода
								}
				});

});