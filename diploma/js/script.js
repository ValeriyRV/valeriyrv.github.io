window.addEventListener('DOMContentLoaded', function() {

	overlay = document.querySelector('.overlay');
	popup_btn = document.querySelector('.popup-btn');

	reset = document.getElementById('reset');
	voting = document.getElementById('voting');
	crime = document.getElementById('crime');

	// Дествия при нажатии кнопки "Создать" в модальном окне "Создать своего кандидата"
	popup_btn.addEventListener('click', function() {
		overlay.style.display = 'none';
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