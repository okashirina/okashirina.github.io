let number1 = parseInt(prompt("Введите первое число:"));
let number2 = parseInt(prompt("Введите второе число:"));
sum();
multiplication();
division();
subtraction();
function sum(){
	alert(`Результат сложения: ${number1+number2}`);
}
function multiplication(){
	alert(`Результат умножения: ${number1*number2}`);
}
function division(){
	alert(`Результат деления: ${number1/number2}`);
}
function subtraction(){
	alert(`Результат вычитания: ${number1-number2}`);
}