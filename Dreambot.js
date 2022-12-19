const prompt = require("prompt-sync") ({ sigint: true });
console.log("Привет путник, с седняшнего дня я твой помощник.");
console.log("Я вижу ты прошёл множество битв.");
console.log("Пожалуйста, напомни свой никнейм: ");
const name1 = prompt();
console.log(`Это имя настоящего воина, ${name1}`);
console.log(`Позволь узнать какой у тебя уровень ?.`);
const level = prompt();
maxlevel = (100 - level);
console.log(`Довольно высокий уровень`)
console.log(`Однако, до максимального уровня тебе не хватает ${maxlevel} уровней, 
только тогда ты будешь достоен победить дракона!`);
console.log(`Счастливого пути, Воин!`);