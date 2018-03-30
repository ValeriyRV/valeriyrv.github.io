// Задание 1
let x = 5; 
alert( x++ );
console.log("Результат 1 задания равен зачению числа X, увеличенному на единицу");

//Задание 2
console.log("Результат 2 задания равен:");
console.log([ ] + false - null + true);

//Задание 3
//let y = 1; let x = y = 2; alert(x);
console.log("Результат 3 задания выводит сообщение об ошибке: SyntaxError: redeclaration of let x; note: Previously declared at line 3, column 4");

//Задание 4
console.log("Результат 4 задания:", [ ] + 1 + 2);

//Задание 5
alert( "1"[0] );
console.log("Результат 5 задания: выводится окно с числом 1");

//Задание 6
console.log("Результат 6 задания:", 2 && 1 && null && 0 && undefined);

//Задание 7
//!!( a && b ) и (a && b);
console.log("Результат 7 задания: выдается сообщение об ошибке: SyntaxError: unexpected token: identifier");

//Задание 8
alert( null || 2 && 3 || 4 );
console.log("Результат 8 задания: выводится окно с числом 3"); 

//Задание 9
a = [1, 2, 3];
b = [1, 2, 3];
if (a == b) {
	 console.log("Результат 9 задания: a равно b");
} else {
  console.log("Результат 9 задания: a не равно b");
}

//Задание 10
alert( +"Infinity" );
console.log("Результат 10 задания: выводится окно со строкой Infinity");

//Задание 11
if ("ёжик" > "яблоко") {
	console.log("Результат 11 задания: ёжик > яблоко");
}

//Задание 12
console.log("Результат 12 задания", 0 || "" || 2 || undefined || true || falsе);