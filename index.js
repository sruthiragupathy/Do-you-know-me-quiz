var chalk = require("chalk");
//Ex - 1
console.log(chalk.bgRgb(255,255,0).black.bold("Ex - 1"));
console.log("Sruthi");

//Ex - 2
console.log(chalk.bgRgb(255,255,0).black.bold("Ex - 2"));

var readlineSync = require("readline-sync");
readlineSync.question("What is your name? ");

//Ex - 3 & Ex - 4
console.log(chalk.bgRgb(255,255,0).black.bold("Ex - 3 & Ex - 4"));

var player = readlineSync.question("What is your name? ");
console.log("Welcome "+player)

//Ex - 5 & Ex - 6
console.log(chalk.bgRgb(255,255,0).black.bold("Ex - 5 & Ex - 6"));

var myAge = readlineSync.question("What is my age? ");
var score = 0;

if(myAge == 21){
  console.log("Bravo,You are right!");
  score+=1;
}
else{
  console.log("Oops!You are wrong!");
  score -=1;
}

console.log ("Your score is ",score);

//Ex - 7
console.log(chalk.bgRgb(255,255,0).black.bold("Ex - 7"));

function add(numberOne,numberTwo){
   return numberOne+numberTwo;
  }

  var sum = add(2,5);
  console.log(sum)

//Ex - 8
console.log(chalk.bgRgb(255,255,0).black.bold("Ex - 8"));

function play(question,answer){
  var quizAns = readlineSync.question(question);
  if(quizAns.toLowerCase() == answer.toLowerCase()){
     console.log("Bravo,You are right!");
  score+=1;
}
else{
  console.log("Oops!You are wrong!");
  score -=1;
}
console.log ("Your score is ",score);
}

questionOne = "What is my favourite country? ";
answerOne = "India";

play(questionOne,answerOne);

questionTwo = "Which is my favourite programming language? ";
answerTwo = "Javascript";

play(questionTwo,answerTwo);

//Ex - 9
console.log(chalk.bgRgb(255,255,0).black.bold("Ex - 9"));

for(var i=0;i<5;i++){
  console.log("Sruthi");
}

//HomeWork - star pattern
console.log(chalk.bgRgb(255,255,0).black.bold("Homework"));

var str;
for(var i=1;i<=5;i++){
  str = "";
  for(var j=1;j<=i;j++){
    str+="*";
  }
  console.log(str);
}

//Inverted Stars
var invertedStr;
for(var i=5;i>=1;i--){
  invertedStr = "";
  for(var j=1;j<=i;j++){
    invertedStr+="*";
  }
  console.log(invertedStr);
}

//Ex - 10
console.log(chalk.bgRgb(255,255,0).black.bold("Ex - 10"));

var groceryList = ["Macaroni","Butter","Capsicum","Cheese","Carrot"];
console.log(groceryList[0]);
console.log(groceryList[2]);
console.log(groceryList[groceryList.length - 1]);

//Ex - 11
console.log(chalk.bgRgb(255,255,0).black.bold("Ex - 11"));

for(var i=0;i<groceryList.length;i++){
  console.log(groceryList[i]);
}


//Ex - 12
console.log(chalk.bgRgb(255,255,0).black.bold("Ex - 12"));

var spiderMan = {
  name : "Spider Man",
  costumeColor : "Blue",
  power : "High",
  intelligence : "10000"
}

var batMan = {
  name : "Bat Man",
  costumeColor : "Black",
  power : "Medium",
  intelligence : "100"
}

console.log(spiderMan);
console.log(spiderMan.costumeColor);

console.log(batMan);
console.log(batMan.intelligence);

console.log(spiderMan.intelligence>batMan.intelligence);

superHeroObj = [spiderMan,batMan];

for(var i = 0 ; i < superHeroObj.length;i++){
  console.log(superHeroObj[i].name);
  console.log(superHeroObj[i].costumeColor);
}

//Ex 13,14 & 15
console.log(chalk.bgRgb(255,255,0).black.bold("Ex - 13,Ex - 14 and Ex-15 "));

const questions = [{
  question:"What is my favorite book?",
  answer:"Rich Dad Poor Dad",
},
{
  question:"Which is my favourite movie?",
  answer:"The pursuit of Happiness"
}]


for(var i=0;i<questions.length;i++){
  play(questions[i].question,questions[i].answer);
}

console.log("Your Final Score",score); 
console.log("\nThanks for playing....")