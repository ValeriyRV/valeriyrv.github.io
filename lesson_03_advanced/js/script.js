let str = "урок-3-был слишком легким";

str = str.charAt(0).toUpperCase() + str.substr(1);

console.log(str);

str = str.replace(/-/g, " ");

console.log(str);

str = str.replace(/слишком/g, "");
let m=str.length;

str = str.split("");
str[m-1] = '';
str[m-2] = 'о';
str[m-8] = 'о';
str = str.join("");

console.log(str);


var arr = [20, 33, 1, "Человек", 2, 3];
let t = 0;
for (let i = 0; i < 6; i++) {
		if (isNaN(parseInt(arr[i])) != true) {
			t = t + Math.pow(arr[i],3);	
		}
}
console.log("Квадратный корень из суммы кубов элементов массива =", Math.sqrt(t));
