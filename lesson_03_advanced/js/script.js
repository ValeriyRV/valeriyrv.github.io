let str = "урок-3-был слишком легким";

str = str.charAt(0).toUpperCase() + str.substr(1);

console.log(str);

console.log(str.replace(/-/g, " "));



var arr = [20, 33, 1, "Человек", 2, 3];
let t = 0;
for (let i = 0; i < 6; i++) {
		if (isNaN(parseInt(arr[i])) != true) {
			t = t + Math.pow(arr[i],3);	
		}
}
console.log("Квадратный корень из суммы кубов элементов массива =", Math.sqrt(t));
