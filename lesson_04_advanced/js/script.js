let matrix = [[],[]];
let matrixRange = [];
let s = 0;

//Генератор случайных целочисленных чисел в диапазоне от минимального до максимального
function getRandomInRange(min,max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Функция ввода размерности матрицы и заполнения ее элементов случайными числами
function enterTheMatrix() {
	let k = prompt("Введите размер матрицы из расчета AxB, где А - количество строк, B - количество столбцов");	
	matrixRange = k.split("x"); 
	for (i=0; i<matrixRange[0]; i++) {
		var t = [];
		for (j=0; j<matrixRange[1]; j++) {			
			t[j] = getRandomInRange(1,5);				
		}		
		matrix[i] = t;
	}
}

//Функиця нахождения суммых всех элементов матрицы
function matrixSumm() {
	for (i=0; i<matrixRange[0]; i++) {
		var t = [];
		t = matrix[i];		
		for (j=0; j<matrixRange[1]; j++) {
			s = s + t[j];
		}
	}	
}

enterTheMatrix();

console.log("Элементы матрицы:")
console.log(matrix);

matrixSumm();

console.log("Сумма всех элементов матрицы равна: ", s);