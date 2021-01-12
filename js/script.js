const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const operator = document.querySelector("#operators");
const button = document.querySelector("button");
const result = document.querySelector("#result");

button.addEventListener('click', show);

function show(){
	let n1 = Number(num1.value);
	let n2 = Number(num2.value);
	
	switch (operator.value){
		case ("add"):
		console.log(n1 + n2);
		break;
		
		default:
		console.log("ahoy");
	}
}