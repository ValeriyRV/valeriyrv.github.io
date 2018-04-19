window.addEventListener('DOMContentLoaded', function() {

	overlay = document.querySelector('.overlay');
	main = document.querySelector('.main');

	custom = document.querySelector('.custom');
	custom_info = document.querySelector('.custom-info');
	custom_char = document.querySelector('.custom-char');
	custom_style = document.querySelector('.custom-style');

	popup_btn = document.querySelector('.popup-btn');

	reset = document.getElementById('reset');
	voting = document.getElementById('voting');
	crime = document.getElementById('crime');

	// Дествия при нажатии кнопки "Создать" в модальном окне "Создать своего кандидата"
	popup_btn.addEventListener('click', function() {
		overlay.style.display = 'none';
		main.style.display = 'none';
		custom.style.display = 'flex';
		custom_info.style.display = 'block';
		custom_char.style.display = 'block';
		custom_style.style.display = 'block';
	});

	// Дествия при нажатии кнопки "Сбросить результаты"
	reset.addEventListener('click', function() {
		console.log(reset);
	});

	// Дествия при нажатии кнопки "Провести честное голосование"
	voting.addEventListener('click', function() {
		console.log(voting);
	});

	// Дествия при нажатии кнопки "Вмешаться в выборы"
	crime.addEventListener('click', function() {
		console.log(crime);
	});

});