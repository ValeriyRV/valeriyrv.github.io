$(document).ready(function() {
	
		//Получаем кнопку "Расписание туров"
		$(".main_nav li:eq(1)").on('click', function() {
					$(".overlay").fadeTo(1500, 1);
				 $(".modal").animate({
				 	opacity: 'show',
				 	height: 'show'
				 }, 2500);					
		});

		//Получаем кнопку "Выбрать тур"
		$(".main_btna").on('click', function() {
					$(".overlay").fadeTo(1500, 1);				 					
				 $(".modal").animate({
      opacity: 'show',
      height: 'show'
				 }, 2500);								 
		});

		//Получаем кнопку "Получить консультацию"
		$(".contact").on('click', function() {
					$(".overlay").fadeTo(1500, 1);
				 $(".modal").animate({
				 	opacity: 'show',
				 	height: 'show'
				 }, 2500);					
		});

		//Обработчик кнопки закрытия модального окна
		$(".close").on('click', function() {
					$(".modal").animate({
						opacity: 'hide',
						height: 'hide'
					}, 2500);
					$(".overlay").fadeTo(4500, 0);
		});

		//Асинхронная отправка сообщения из формы
	$('.form-inline').submit(function(event) {
				event.preventDefault();
		  $.ajax({
		  		type: "POST",
		  		url: "mailer/smart.php",
		 		 data: $(this).serialize()
		  }).done(function() {
				  $(this).find("input").val("");
				  alert("Сообщение успешно отправлено");
				  $(".form-inline").trigger("reset");
		  });
		  return false;
  });

});