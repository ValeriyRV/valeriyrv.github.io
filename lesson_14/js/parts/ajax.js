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