let yourBudget,
			 yourShopName,
 			time,
 			price;

function start() {
				//yourBudget = +prompt("Ваш бюджет?");

				while(isNaN(yourBudget) || yourBudget == "" || yourBudget == null)
					yourBudget = +prompt("Ваш бюджет?");

				yourShopName = prompt("Название вашего магазина?", '').toUpperCase();
				time = 19;
}

//start ();

let mainList = {
			 budget: yourBudget,
			 shopName: yourShopName,
			 shopGoods: [],
			 employers: {
			 		firstEmployee: '',
			 		secondEmployee: '',
			 		thirdEmployee: '',
			 		fourthEmployee: ''
			 },
			 open: false,
			 discount: false,
			 shopItems: [],

			 recruitEmployers: function recruitEmployers() {
								for (let i = 0; i < 1; i++) {
								let a = prompt("Введите имя первого сотрудника", '');
										if ((typeof(a)) === 'string'  &&  (typeof(a)) !== null && a != '' && a.length < 50 ) {
												console.log('Имя первого сотрудника получено правильно');
												mainList.employers.firstEmployee = a;
										} else if ((typeof(a)) != 'string' || a == '') {
													alert('Вы ввели не правильное значение. Повторите ввод заново');
													i--;					
										}
								}		

								for (let i = 0; i < 1; i++) {
								let a = prompt("Введите имя второго сотрудника", '');
										if ((typeof(a)) === 'string'  &&  (typeof(a)) !== null && a != '' && a.length < 50 ) {
												console.log('Имя второго сотрудника получено правильно');
												mainList.employers.secondEmployee = a;
										} else if ((typeof(a)) != 'string' || a == '') {
													alert('Вы ввели не правильное значение. Повторите ввод заново');
													i--;					
										}
								}

								for (let i = 0; i < 1; i++) {
								let a = prompt("Введите имя третьего сотрудника", '');
										if ((typeof(a)) === 'string'  &&  (typeof(a)) !== null && a != '' && a.length < 50 ) {
												console.log('Имя третьего сотрудника получено правильно');
												mainList.employers.thirdEmployee = a;
										} else if ((typeof(a)) != 'string' || a == '') {
													alert('Вы ввели не правильное значение. Повторите ввод заново');
													i--;					
										}
								}

								for (let i = 0; i < 1; i++) {
								let a = prompt("Введите имя четвертого сотрудника", '');
										if ((typeof(a)) === 'string'  &&  (typeof(a)) !== null && a != '' && a.length < 50 ) {
												console.log('Имя четвертого сотрудника получено правильно');
												mainList.employers.fourthEmployee = a;
										} else if ((typeof(a)) != 'string' || a == '') {
													alert('Вы ввели не правильное значение. Повторите ввод заново');
													i--;					
										}
								}
				},

				chooseGoods: function chooseGoods() {
								for (let i = 0; i < 5; i++) {
										let a = prompt("Какой тип товаров будем продавать?", '');
										if ((typeof(a)) === 'string'  &&  (typeof(a)) !== null && a != '' && a.length < 50 ) {
												console.log('Тип товара получен правильно');
												mainList.shopGoods[i] = a;
										} else if ((typeof(a)) != 'string' || a == '') {
													alert('Вы ввели не правильное значение. Повторите ввод заново');
													i--;					
										}
								}
				},

				enterPrice: function enterPrice() {
								while(isNaN(price) || price == "" || price == null)
									price = +prompt("Введите цену");
				},

				enterDiscount: function enterDiscount() {
								mainList.discount = confirm("Будут ли скидки");
								return mainList.discount;
				},

				priceCalculation: function priceCalculation() {
								if (mainList.discount == true) {
											price = price * 0.8;
								}
				},

				workTime: function workTime(time) {
								if (time < 0) {
									 console.log('Такого просто не может быть');
								} else if (time > 8 && time < 20) {
										console.log('Время работать!');
										mainList.open = true;
										}  else if (time < 24) {
											  console.log('Уже слишком поздно!');
												}  else {
													  console.log('В сутках только 24 часа!');
												}
				},

				dailyBudget: function dailyBudget() {
									return mainList.budget/30;
				},

				chooseShopItems: function chooseShopItems() {
									let items;
									while(isNaN(items) == false || items == "" || items == null) {
											items = prompt("Перечислите через запятую товары", "");
									}

									mainList.shopItems = items.split(",");
									mainList.shopItems.push(prompt("Введите еще один товар", ""));
									mainList.shopItems.sort();

									
				}
				

};

//mainList.recruitEmployers();

//mainList.chooseGoods();

//mainList.enterPrice();

//mainList.enterDiscount();

mainList.priceCalculation();

mainList.workTime(17);

let k = mainList.dailyBudget();


//console.log("Название вашего магазина:", mainList.shopName);
//console.log("Массив shopGoods:", mainList.shopGoods);
//console.log("Ваш бюджет за месяц:", mainList.budget);


/*console.log("Цена с учетом скидки", price);
console.log("Ваш бюджет за день c округлением до целого числа:", Math.round(k));*/


//console.log("Скидки", );


mainList.chooseShopItems();

let items = mainList.shopItems;

console.log("У нас вы можете купить:");
items.forEach(function(item,i,items) {
		console.log(++i + ": " + item);
});

console.log(mainList);

