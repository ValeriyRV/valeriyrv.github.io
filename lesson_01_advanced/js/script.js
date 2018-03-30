let num = "33721";
let t = 1;
let x = num.length;

for( let i = 0; i < x; ++i ) {
		t = t * parseInt(num.charAt(i));
}

let z = t ** 3;

console.log("Число равно:", num);

console.log("Произведение цифр числа равно:", t);

console.log("Произведение цифр числа, возведенное в 3-ю степень равно:", z);