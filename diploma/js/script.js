window.addEventListener('DOMContentLoaded', function() {

	let candidate = new Object();

	let overlay = document.querySelector('.overlay'),
					main = document.querySelector('.main'),

	    custom = document.querySelector('.custom'),
	    custom_info = document.querySelector('.custom-info'),
	    custom_char = document.querySelector('.custom-char'),
	    custom_style = document.querySelector('.custom-style'),

	    popup_btn = document.querySelector('.popup-btn'),

	    reset = document.getElementById('reset'),
	    voting = document.getElementById('voting'),
	    crime = document.getElementById('crime'),

	    	    
	    

	    ready_btn = document.getElementById('ready');

	// Обработчик нажатия кнопки "Создать" в модальном окне "Создать своего кандидата"
	popup_btn.addEventListener('click', function() {
			overlay.style.display = 'none';
			main.style.display = 'none';
			custom.style.display = 'flex';
			custom_info.style.display = 'block';
			custom_char.style.display = 'block';
			custom_style.style.display = 'block';
	});

//Слайдер
				let slideIndex = 1;
								slides_female = ["img/construct-1.png","img/construct-2.png","img/construct-3.png","img/construct-4.png"],
								slides_male = ["img/construct-5.png","img/construct-6.png","img/construct-7.png","img/construct-8.png"],
								slides_gender = "male";
								slider_preview = document.querySelector('.custom-style-easy .preview'),
								slider_person = document.querySelector('.person-easy');
								prev = document.querySelector('.prev'),
								next = document.querySelector('.next');
								female_radio_btn = document.getElementById('female');
								male_radio_btn = document.getElementById('male');

								slider_preview.style.backgroundImage = "url('"+slides_male[slideIndex - 1]+"')";
								slider_person.style.backgroundImage = "url('"+slides_male[slideIndex - 1]+"')";

					function showSlidesFemale(n) {
									if (n > slides_female.length) {
										slideIndex = 1;										
									};
									if (n < 1) {
										slideIndex = slides_female.length;										
									};
									slider_preview.style.backgroundImage = "url('"+slides_female[slideIndex - 1]+"')";
									slider_person.style.backgroundImage = "url('"+slides_female[slideIndex - 1]+"')";									
								};

					function showSlidesMale(n) {
									if (n > slides_male.length) {
										slideIndex = 1;										
									};
									if (n < 1) {
										slideIndex = slides_male.length;										
									};
									slider_preview.style.backgroundImage = "url('"+slides_male[slideIndex - 1]+"')";
									slider_person.style.backgroundImage = "url('"+slides_male[slideIndex - 1]+"')";									
								};			

					function plusSlidesFemale (n) {
						showSlidesFemale(slideIndex += n);
					};

					function plusSlidesMale (n) {
						showSlidesMale(slideIndex += n);
					};						

					prev.addEventListener('click', function() {
							if(document.getElementById('female').checked) {
								plusSlidesFemale(-1);
							} 
							if(document.getElementById('male').checked) {
								plusSlidesMale(-1);
							} 													
					});

					next.addEventListener('click', function() {						
							if(document.getElementById('female').checked) {
								plusSlidesFemale(1);
							} 
							if(document.getElementById('male').checked) {
								plusSlidesMale(1);
							}
					});

					female_radio_btn.addEventListener('click', function() {
						slider_preview.style.backgroundImage = "url('"+slides_female[slideIndex - 1]+"')";
						slider_person.style.backgroundImage = "url('"+slides_female[slideIndex - 1]+"')";	
					});

					male_radio_btn.addEventListener('click', function() {
						slider_preview.style.backgroundImage = "url('"+slides_male[slideIndex - 1]+"')";
						slider_person.style.backgroundImage = "url('"+slides_male[slideIndex - 1]+"')";	
					});

	// Обработчик нажатия кнопки "Готово" на экране выбора параметров кандидата
	ready_btn.addEventListener('click', function() {

				let full_name = document.getElementById('name').value,
			    	age = document.getElementById('age').value,	
			    	bio = document.getElementsByName('bio')[0].value;
					
				if ((typeof(full_name)) === 'string'  &&  (typeof(full_name)) !== null && full_name != '') {
					 candidate.name = document.getElementById('name').value;
				} else {
						alert("Вы ввели фамилию имя отчество не правильно");
				};
				
				if ((typeof(age)) === 'string'  &&  (typeof(age)) !== null && age != '')
				{
						if (isNaN(age) == true) {
							alert("Вы не правильно указали возраст");
						} else {
							candidate.age = +document.getElementById('age').value;
						}					
				}
				
				if(document.getElementById('male').checked) {
						candidate.gender = 'Мужской';			
				} else if(document.getElementById('female').checked) {
						candidate.gender = 'Женский';			
				}		
				
				for (let i = 0; i < document.getElementById('select').options.length; i++)
				{					
						if (document.getElementById('select').options[0].selected) {
							candidate.political_type = 'Либеральные';
						}
						if (document.getElementById('select').options[1].selected) {
							candidate.political_type = 'Левые';
						}
						if (document.getElementById('select').options[2].selected) {
							candidate.political_type = 'Правые';
						}
				}
				
				if ((typeof(bio)) === 'string'  &&  (typeof(bio)) !== null && bio != '') {
					 candidate.bio = document.getElementsByName('bio')[0].value;
				} else {
						alert("Вы не правильно ввели биографию");
				};
				
				//Скрыте экрана создания кандидата и показ главного экрана
				custom.style.display = 'none';
				main.style.display = 'block';

				//Создание карточки кандидата				
				let candidate_card = document.createElement('div'),
								candidate_card_block = document.createElement('div'),
								candidate_card_block_photo = document.createElement('div');

				//candidate_card.innerHTML = "Какточка нового кандидата";

				candidate_card.classList.add("main-cards-item");				
				candidate_card.appendChild(candidate_card_block);
				candidate_card_block.classList.add("candidate-block");
				candidate_card_block.appendChild(candidate_card_block_photo);
				candidate_card_block_photo.classList.add("photo");
				candidate_card_block_photo.classList.add("photo-3");
				document.querySelector('.main-cards').appendChild(candidate_card);
									
				console.log(candidate);
				
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