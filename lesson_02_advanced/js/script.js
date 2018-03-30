arr = [];

for (let i = 0; i < 7; i++) {

		let a = prompt("Введите многозначное число");
		let b = parseInt(a);		
		
		if ((typeof(a)) === 'string'  &&  (typeof(a)) !== null && a != '' && a.length >= 2) {
				if (isNaN(b) == true)	{
							  alert('Вы ввели строку, а не число. Повторите ввод заново');
									i--;
				} else {						
						arr[i] = a;				
    }
		} else if ((typeof(a)) != 'string' || a == '') {
					alert('Вы ввели не правильное значение. Повторите ввод заново');
					i--;					
		} 	else if (a.length < 2)	{
			  alert('Вводимое число должно быть длиннее одного знака. Повторите ввод заново');
					i--;
		}	

}

console.log("Многозначные числа в массиве, которые начинаются с 3 или с 7:");

for (let i = 0; i < 7; i++) {
		if (arr[i].charAt(0) == 3 || arr[i].charAt(0) == 7) {
				console.log(arr[i]);
		}
}

console.log("Все числа в массиве:");
console.log(arr);
