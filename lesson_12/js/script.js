$(document).ready(function() {
	
		//Получаем кнопку "Расписание туров"
		$(".main_nav li:eq(1)").on('click', function() {
					$(".overlay").fadeTo(1500, 1);
				 $(".modal").animate({
				 	height: 'show'
				 }, 3000);					
		});

		//Получаем кнопку "Выбрать тур"
		$(".main_btna").on('click', function() {
					$(".overlay").fadeTo(1500, 1);				 					
				 $(".modal").animate({	 	
				 	height: 'show'
				 }, 3000);				 
		});

		//Получаем кнопку "Получить консультацию"
		$(".contact").on('click', function() {
					$(".overlay").fadeTo(1500, 1);
				 $(".modal").animate({
				 	height: 'show'
				 }, 3000);					
		});

		//Обработчик кнопки закрытия модального окна
		$(".close").on('click', function() {
					$(".modal").animate({
						height: 'hide'
					}, 3000);
					$(".overlay").fadeTo(4500, 0);
		});

});