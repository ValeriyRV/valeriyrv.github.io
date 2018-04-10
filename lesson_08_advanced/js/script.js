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
let deadline = '2018-04-12';

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
	window.scrollTo(0,200);
};

link_photo.onclick = function(event) {
	event.preventDefault();
	window.scrollTo(0,1800);
};

link_price.onclick = function(event) {
	event.preventDefault();
	window.scrollTo(0,4500);
};

link_contacts.onclick = function(event) {
	event.preventDefault();
	window.scrollTo(0,5200);
};




});