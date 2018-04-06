let menuItem = document.getElementsByClassName('menu-item'),
				menu = document.getElementsByClassName('menu'),
				advert = document.getElementsByClassName('adv'),
				li = document.createElement('li'),
				pageTitle = document.getElementById('title').textContent;

//Замена пунктов меню
menuItem[1].innerHTML = 'Второй пункт';
menuItem[2].innerHTML = 'Третий пункт';

//Добавление пятого пункта меню
li.innerHTML = 'Пятый пункт';
li.classList.add('menu-item');
menu[0].appendChild(li);

//Замена фотового изображения
document.body.style.backgroundImage = 'url(img/apple_true.jpg)';

//Удаление блока с рекламой
advert[0].style.visibility = 'hidden';

//Добавление слова "подлинную" к залоговку
let k = pageTitle.split(" ");
let	t;
for(i=0; i<k.length; i++) {
	if (k[i] == 'только') {
		t = i+1;	
	}
}
k.splice(t,0,"подлинную");
pageTitle = k.join(" ");
document.getElementById('title').textContent = pageTitle;

//Запись ответа на вопрос об отношении к технике Apple в поле "prompt"
let regardApple = prompt("Напишите ваше отношение к технике Apple", '');
document.getElementById('prompt').textContent = regardApple;

