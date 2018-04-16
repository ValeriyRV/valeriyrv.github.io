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