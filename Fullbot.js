const prompt = require("prompt-sync") ({ sigint: true });
console.log("Hello! My name is bot.");
console.log("I was created in 2022.");
console.log("Please, remind me your name: ");
const name1 = prompt();
console.log(`What a great name you have ${name1}`);
console.log(`Let me guess your age.`);
console.log(`Enter reminders of dividing your age by 3,5 and 7.`);
const reminder3 = prompt();
const reminder5 = prompt();
const reminder7 = prompt();
age = (reminder3 * 70 + reminder5 * 21 + reminder7 * 15) % 105;
console.log(`Your age is ${age}, thats a good time to start programming!`);
console.log("Now I will prove to you that i can count to any number you want.");
let n = 0;
const number = prompt();
console.log(n + "!");
while(n < number) {
n++;
console.log(n + "!");
} console.log(`Completed`);
console.log("Let's test your programming knowledge.");
console.log("Why do we use methods?");
console.log("1.To repeat a statement multiple times.");
console.log("2.To decompose a program into several small subroutines.");
console.log("3.To determine the execution time of a program.");
console.log("4.To interrupt the execution of a program.");
function test() {
	const answer = prompt();
	while(answer) {
if (answer == 2){
	end();
	break;
} 
else {
	console.log("Please,Try again.")
	test();
	break;
}
	}
function end() {
console.log("Congratulation!");
}
}
function nice_day() {
	console.log("Completed, have a nice day!");
}
function full() {
	console.log(`Your name ${name1}`);
	console.log(`Your age ${age}`);
	console.log(`Youe count ${number}`);
}
test();
full();
nice_day();

