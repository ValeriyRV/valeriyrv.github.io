var yourBudget = +prompt("Ваш бюджет?", "0");
var yourShopName = prompt("Название вашего магазина?");

mainList = {
	 budget: yourBudget,
	 shopName: yourShopName,
	 shopGoods: ['Moloko', 'Hleb', 'Maslo'],
	 employers: ['Ivan', 'Alexander', 'Dmitriy'],
	 open: false
};

mainList.shopGoods[0] = prompt("Какой тип товаров будем продавать?");
mainList.shopGoods[1] = prompt("Какой тип товаров будем продавать?");
mainList.shopGoods[2] = prompt("Какой тип товаров будем продавать?");

console.log("Название вашего магазина:", mainList.shopName);

console.log("Массив shopGoods:", mainList.shopGoods);

console.log("Ваш бюджет за месяц:", mainList.budget);

console.log("Ваш бюджет за день:", mainList.budget/30);