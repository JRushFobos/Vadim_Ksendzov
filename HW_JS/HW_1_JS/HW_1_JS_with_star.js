//HW_1* 
//Задания с разным количеством звездочек:)
//1*:
//Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
//Пример: const checkAge = function(age) {
//Ваши преобразования
//}
//Вывести в консоль результат работы функции с возрастами 17, 18, 61

let age_1 = 10
let age_2 = 18
let age_3 = 60

const checkAge = function (age_1)
{

if (age_1 < age_2) {
	console.log("You don’t have access cause your age is", age_1, "It’s less then")
}
else if (age_1 >= age_2 && age_1 < age_3 ){
	console.log('Keep calm and look Culture channel')
}
else if (age_1 > age_3){
	console.log('Welcome  !')
}
else {
	console.log('Technical work')
}
}
checkAge(17)
checkAge(18)
checkAge(61)

//2*:
//Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. 
//И если он не Number - кидалась ошибка.
let age_1 = 10
let age_2 = 18
let age_3 = 60

const checkAge = function (age_1)
{
if (typeof age_1 == 'number'){
	if (age_1 < age_2) {
		console.log("You don’t have access cause your age is", age_1, "It’s less then")
		}
	else if (age_1 >= age_2 && age_1 < age_3 ){
		console.log('Keep calm and look Culture channel')
		}
	else if (age_1 > age_3){
		console.log('Welcome  !')
		}
	else {
		console.log('Technical work')
	}
} else console.log ('Not an integer value')
}
checkAge(17)
checkAge(18)
checkAge(61)
checkAge('61')
checkAge('FFFF')

//3**:
//Преобразовать 2* таким образом, 
//чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

let age_1 = 10
let age_2 = 18
let age_3 = 60

const checkAge = function (age_1)
{
	age_1=Number(age_1)
	console.log(age_1)
}
{
if (typeof age_1 == 'number'){
	if (age_1 < age_2) {
		console.log("You don’t have access cause your age is", age_1, "It’s less then")
		}
	else if (age_1 >= age_2 && age_1 < age_3 ){
		console.log('Keep calm and look Culture channel')
		}
	else if (age_1 > age_3){
		console.log('Welcome  !')
		}
	else {
		console.log('Technical work')
	}
} else console.log ('Not an integer value')
}
checkAge(17)
checkAge(18)
checkAge(61)
checkAge('61')
checkAge('FFFF')

//3**:
//Преобразовать 2* таким образом, 
//чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number
let age_1 = 10
let age_2 = 18
let age_3 = 60

const checkAge = function (age_1)

{
if (age_1 && !isNaN (age_1)){
	if (age_1 < age_2) {
		console.log("You don’t have access cause your age is", age_1, "It’s less then")
		}
	else if (age_1 >= age_2 && age_1 < age_3 ){
		console.log('Keep calm and look Culture channel')
		}
	else if (age_1 > age_3){
		console.log('Welcome  !')
		}
	else {
		console.log('Technical work')
	}
} else console.log ('Not an integer value')
}
checkAge(17)
checkAge(18)
checkAge(61)
checkAge('61')
checkAge('FFFF')

//4***:
//Преобразовать задание 3* таким образом, чтобы возраст вводится
// используя функцию prompt в привязанной верстке
let age_1 = 10
let age_2 = 18
let age_3 = 60

const checkAge = function (age_1)

{
if (age_1 && !isNaN (age_1)){
	if (age_1 < age_2) {
		alert("You don’t have access cause your age is", age_1, "It’s less then")
		}
	else if (age_1 >= age_2 && age_1 < age_3 ){
		alert('Keep calm and look Culture channel')
		}
	else if (age_1 > age_3){
		alert('Welcome  !')
		}
	else {
		alert('Technical work')
	}
} else alert ('Not an integer value')
}

let a = prompt ('Enter you age')
checkAge(a)
// и файл index.html с кодом
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script src="./HW_1_JS_with_star"></script>
</body>
</html>