let yourBudget = +prompt("Ваш бюджет?", "0");
let yourShopName = prompt("Название вашего магазина?");
let time = 19;


mainList = {
	 budget: yourBudget,
	 shopName: yourShopName,
	 shopGoods: [],
	 employers: {},
	 open: false
};

// Вариант с использованием цикла while...do
/*let i = 0;
while (i < 5) {
		let a = prompt("Какой тип товаров будем продавать?");
		if ((typeof(a)) === 'string'  &&  (typeof(a)) !== null && a != '' && a.length < 50 ) {
				console.log('Все верно!');
				mainList.shopGoods[i] = a;
		} else if ((typeof(a)) != 'string' || a == '') {
					alert('Вы ввели не правильное значение. Повторите ввод заново');
					i--;					
		}
		i++;
}*/

// Вариант с использованием цикла do...while
/*let i = 0;
do {
		let a = prompt("Какой тип товаров будем продавать?");
		if ((typeof(a)) === 'string'  &&  (typeof(a)) !== null && a != '' && a.length < 50 ) {
				console.log('Все верно!');
				mainList.shopGoods[i] = a;
		} else if ((typeof(a)) != 'string' || a == '') {
					alert('Вы ввели не правильное значение. Повторите ввод заново');
					i--;					
		}
		i++;
} while (i < 5);*/

for (let i = 0; i < 5; i++) {
		let a = prompt("Какой тип товаров будем продавать?");
		if ((typeof(a)) === 'string'  &&  (typeof(a)) !== null && a != '' && a.length < 50 ) {
				console.log('Все верно!');
				mainList.shopGoods[i] = a;
		} else if ((typeof(a)) != 'string' || a == '') {
					alert('Вы ввели не правильное значение. Повторите ввод заново');
					i--;					
		}
}

if (time < 0) {
	 console.log('Такого просто не может быть');
} else if (time > 8 && time < 20) {
		console.log('Время работать!');
		}  else if (time < 24) {
			  console.log('Уже слишком поздно!');
				}  else {
					  console.log('В сутках только 24 часа!');
				}

//console.log("Название вашего магазина:", mainList.shopName);
//console.log("Массив shopGoods:", mainList.shopGoods);
//console.log("Ваш бюджет за месяц:", mainList.budget);
console.log("Ваш бюджет за день:", mainList.budget/30);

console.log(mainList);

