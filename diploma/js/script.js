window.addEventListener('DOMContentLoaded', function() {

  let candidate = new Object(),
      candidate_results = [];     

      overlay = document.querySelector('.overlay'),
      main = document.querySelector('.main'),

      custom = document.querySelector('.custom'),
      custom_info = document.querySelector('.custom-info'),
      custom_char = document.querySelector('.custom-char'),
      custom_style = document.querySelector('.custom-style'),

      popup_btn = document.querySelector('.popup-btn'),

      reset = document.getElementById('reset'),
      voting = document.getElementById('voting'),
      crime = document.getElementById('crime'),

      main_cards = document.querySelector('.main-cards'),

      candidate_card = document.createElement('div'),
      candidate_card_block = document.createElement('div'),
      candidate_card_block_photo = document.createElement('div'),

      candidate_card_block_result = document.createElement('div'),
      candidate_card_block_result_count = document.createElement('div'),
      candidate_card_block_result_progress = document.createElement('div'),
      candidate_card_block_result_progress_bar = document.createElement('div'),
      candidate_card_name = document.createElement('div'),
      candidate_card_age = document.createElement('div'),
      candidate_card_gender = document.createElement('div'),
      candidate_card_views = document.createElement('div'),
      candidate_card_bio = document.createElement('div'),
      candidate_card_text_1 = document.createElement('span'),
      candidate_card_text_2 = document.createElement('span'),
      candidate_card_text_3 = document.createElement('span'),

      slideIndex = 1,
      slides_female = ["img/construct-1.png","img/construct-2.png","img/construct-3.png","img/construct-4.png"],
      slides_male = ["img/construct-5.png","img/construct-6.png","img/construct-7.png","img/construct-8.png"],
      slides_gender = "male";
      slider_preview = document.querySelector('.custom-style-easy .preview'),
      slider_person = document.querySelector('.person-easy');
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next'),

      full_name = document.getElementById('name'),
      age = document.getElementById('age'),
      bio = document.getElementsByName('bio')[0],

      female_radio_btn = document.getElementById('female'),
      male_radio_btn = document.getElementById('male'),
      political_type_list = document.getElementById('select'),      

      vote_index = 1,
      fair_vote_index = 1,

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

  //Функция создания карточки кандидата
  function candidateCardCreate() {
    main_cards.appendChild(candidate_card);
    candidate_card.classList.add("main-cards-item");        
    candidate_card.appendChild(candidate_card_block);
    candidate_card_block.classList.add("candidate-block");
    candidate_card_block.appendChild(candidate_card_block_photo);
    candidate_card_block_photo.classList.add("photo");
    candidate_card_block_photo.classList.add("photo-3");

    candidate_card_block.appendChild(candidate_card_block_result);
    candidate_card_block_result.classList.add("result");
    candidate_card_block_result.appendChild(candidate_card_block_result_count);
    candidate_card_block_result_count.classList.add("result-count");    

    candidate_card_block_result.appendChild(candidate_card_block_result_progress);
    candidate_card_block_result_progress.classList.add("progress");
    candidate_card_block_result_progress.appendChild(candidate_card_block_result_progress_bar);
    candidate_card_block_result_progress_bar.classList.add("progress-bar");
    candidate_card_block_result_progress_bar.classList.add("progress-bar-3");

    candidate_card.appendChild(candidate_card_name);
    candidate_card_name.classList.add("name");
    candidate_card_name.innerHTML = candidate.name;
    candidate_card.appendChild(candidate_card_age);
    candidate_card_age.classList.add("age");
    candidate_card_age.innerHTML = candidate.age + ' лет';    

    candidate_card.appendChild(candidate_card_text_1);
    candidate_card_text_1.innerHTML = "Пол:";
    candidate_card.appendChild(candidate_card_gender);
    candidate_card_gender.classList.add("sex");
    candidate_card_gender.innerHTML = candidate.gender;

    candidate_card.appendChild(candidate_card_text_2);
    candidate_card_text_2.innerHTML = "Полит. взгляды:";
    candidate_card.appendChild(candidate_card_views);
    candidate_card_views.classList.add("views");
    candidate_card_views.innerHTML = candidate.political_type;

    candidate_card.appendChild(candidate_card_text_3);
    candidate_card_text_3.innerHTML = "Биография";
    candidate_card.appendChild(candidate_card_bio);
    candidate_card_bio.classList.add("bio");
    candidate_card_bio.innerHTML = candidate.bio;

    let candidate_card_photo_3 = document.getElementsByClassName('photo-3')[0];

    if(document.getElementById('female').checked) {
    candidate_card_photo_3.style.backgroundImage = "url('"+slides_female[slideIndex - 1]+"')";        
    }
    if(document.getElementById('male').checked) {
      candidate_card_photo_3.style.backgroundImage = "url('"+slides_male[slideIndex - 1]+"')";  
    }
    candidate_card_photo_3.style.backgroundPosition = 'center center';
    candidate_card_photo_3.style.backgroundRepeat = 'no-repeat';
    candidate_card_photo_3.style.backgroundSize = 'contain';      
  }; 

  //Функкия сброса результатов голосов кандидатов
  function resetCandidateResults() {
    let main_cards_item = document.getElementsByClassName('main-cards-item');

    for(let i = 0; i < 3; i++) {
      candidate_results[i] = 0;
      main_cards_item[i].classList.remove('main-cards-item-active');
    };           
    
  };

  //Функция сброса результатов голосования
  function resetVoteResults() {
    
    candidate.name = '';
    candidate.age = 0;
    candidate.gender = '';
    candidate.political_type = '';
    candidate.bio = '';
    slideIndex = 1;
    slider_preview.style.backgroundImage = "url('"+slides_male[slideIndex - 1]+"')";
    slider_person.style.backgroundImage = "url('"+slides_male[slideIndex - 1]+"')";
    full_name.value = '';
    age.value = '';
    male_radio_btn.checked = true;
    political_type_list.options[0].selected = true;
    bio.value = '';
    main_cards.lastChild.remove();    
    main.style.display = 'none';
    custom.style.display = 'flex';
  };

  //Функция отображения победителя голосования
  function displayWinner() {
    let main_cards_item = document.getElementsByClassName('main-cards-item'),
        a = candidate_results[0],
        b = 0;
    
    for(let i = 0; i < main_cards_item.length; i ++) {
      main_cards_item[i].classList.remove('main-cards-item-active');
      if (candidate_results[i] > a) {
        a = candidate_results[i];
        b = i;
      };     
    };    
    main_cards_item[b].classList.add('main-cards-item-active');
  };

  //Функция отображения результатов голосования
  function displayVoteResults(first,second,third) {
    let result_count = document.getElementsByClassName('result-count'),
        
        first_candidate_progress_bar = document.querySelector('.progress-bar-1'),
        second_candidate_progress_bar = document.querySelector('.progress-bar-2'),
        third_candidate_progress_bar = document.querySelector('.progress-bar-3');
    
    result_count[0].innerHTML = first + ' %';
    result_count[1].innerHTML = second + ' %';
    result_count[2].innerHTML = third + ' %';

    first_candidate_progress_bar.style.height = first+"%";  
    second_candidate_progress_bar.style.height = second+"%";
    third_candidate_progress_bar.style.height = third+"%"; 

        
  };  

  //Слйдер
  //Функция отрисовки начальных ихображений слайдера
  function initialSlides() {
    slider_preview.style.backgroundImage = "url('"+slides_male[slideIndex - 1]+"')";
    slider_person.style.backgroundImage = "url('"+slides_male[slideIndex - 1]+"')";
  };

  initialSlides();
        
  //Функция отображения изображений слайдера, когда выбран женский пол кандидата
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

  //Функция отображения изображений слайдера, когда выбран мужской пол кандидата    
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

  //Функция показа следующего слайда, когда выбран женский пол кандидата      
  function plusSlidesFemale (n) {
    showSlidesFemale(slideIndex += n);
  };

  //Функция показа следующего слайда, когда выбран мужской пол кандидата 
  function plusSlidesMale (n) {
    showSlidesMale(slideIndex += n);
  };            

  //Обработчик нажатия кнопки предыдущего слайда
  prev.addEventListener('click', function() {
      if(document.getElementById('female').checked) {
        plusSlidesFemale(-1);
      } 
      if(document.getElementById('male').checked) {
        plusSlidesMale(-1);
      }                           
  });

  //Обработчик нажатия кнопки следующего слайда
  next.addEventListener('click', function() {           
      if(document.getElementById('female').checked) {
        plusSlidesFemale(1);
      } 
      if(document.getElementById('male').checked) {
        plusSlidesMale(1);
      }
  });

  //Обработчик переключения слайдера, когда выбран женский пол кандидата 
  female_radio_btn.addEventListener('click', function() {
    slider_preview.style.backgroundImage = "url('"+slides_female[slideIndex - 1]+"')";
    slider_person.style.backgroundImage = "url('"+slides_female[slideIndex - 1]+"')"; 
  });

  //Обработчик переключения слайдера, когда выбран мужской пол кандидата
  male_radio_btn.addEventListener('click', function() {
    slider_preview.style.backgroundImage = "url('"+slides_male[slideIndex - 1]+"')";
    slider_person.style.backgroundImage = "url('"+slides_male[slideIndex - 1]+"')"; 
  });

  // Обработчик нажатия кнопки "Готово" на экране выбора параметров кандидата
  ready_btn.addEventListener('click', function() {

        let err = 0;
          
        if ((typeof(full_name.value)) === 'string'  &&  (typeof(full_name.value)) !== null && full_name.value != '' && isNaN(full_name.value) === true) {
           candidate.name = full_name.value;
           if (err == 0) {
            err = 0;
           };
        } else {
            alert("Вы ввели фамилию имя отчество не правильно");
            err = 1;
        };
        
      
        if ((typeof(age.value)) === 'string'  &&  (typeof(age.value)) !== null && age.value != '' && isNaN(age.value) === false) {
          candidate.age = +age.value;
          if (err == 0) {
            err = 0;
          };
        } else {
          alert("Вы не правильно указали возраст");
          err = 1;
        };

                
        if(document.getElementById('male').checked) {
            candidate.gender = 'Мужской';     
        } else if(document.getElementById('female').checked) {
            candidate.gender = 'Женский';     
        }   
        
        for (let i = 0; i < political_type_list.options.length; i++)
        {         
            if (political_type_list.options[0].selected) {
              candidate.political_type = 'Либеральные';
            }
            if (political_type_list.options[1].selected) {
              candidate.political_type = 'Левые';
            }
            if (political_type_list.options[2].selected) {
              candidate.political_type = 'Правые';
            }
        }
        
        if ((typeof(bio.value)) === 'string'  &&  (typeof(bio.value)) !== null && bio.value != '' && isNaN(bio.value) === true) {
           candidate.bio = bio.value;
           if (err == 0) {
             err = 0;
           };
        } else {
            alert("Вы не правильно ввели биографию");
            err = 1;
        };       
        
        //Скрыте экрана создания кандидата и показ главного экрана
        if (err == 0) {
          custom.style.display = 'none';
          main.style.display = 'block';
        };
        
        candidateCardCreate();  

        resetCandidateResults();

        displayVoteResults(candidate_results[0],candidate_results[1],candidate_results[2]);

        console.log(candidate);

        fair_vote_index = 0;
  });    
  

  // Дествия при нажатии кнопки "Сбросить результаты"
  reset.addEventListener('click', function() {
    resetCandidateResults();
    resetVoteResults();
    fair_vote_index = 0;
  });

  // Дествия при нажатии кнопки "Провести честное голосование"
  voting.addEventListener('click', function() {
    if(fair_vote_index == 0) {
      candidate_results[0] = 20;
      candidate_results[1] = 45;
      candidate_results[2] = 35;
      displayVoteResults(candidate_results[0],candidate_results[1],candidate_results[2]);
      displayWinner();
      vote_index = 0;
    };    
    fair_vote_index = 1;
  });

  // Дествия при нажатии кнопки "Вмешаться в выборы"
  crime.addEventListener('click', function() {    
    
    if (vote_index == 0) {
      candidate_results[0] = candidate_results[0] - 10;
      candidate_results[1] = candidate_results[1] - 15;
      candidate_results[2] = candidate_results[2] + 25;
      displayVoteResults(candidate_results[0],candidate_results[1],candidate_results[2]);
      displayWinner();
    };   
    vote_index = 1;
  });

});