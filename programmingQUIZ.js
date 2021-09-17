// jai ganesh 

var  readlineSync  = require('readline-sync')
//var ysn = readlineSync.keyInYN('answer ')
var score = 0

var userName = readlineSync.question("hey there ! What's your name ? ")


console.log("Welcome  to Tanishk's quiz on 'programming'."  )

console.log('==========================================================')

function play(question,answer) {
var userAnswer = readlineSync.question(question)
userAnswer = userAnswer.toLowerCase()

if (userAnswer===answer ) {console.log('you were RIGHT !')
score = score + 2  }
else { console.log('you were WRONG ! ')
score = score - 1
}
console.log('Current score:' ,score  )
console.log("------------------")
}
console.log ("-Give your answer in 'YES' or 'NO'.")
console.log("-Every RIGHT answer = +2 , WRONG answer = -1.")
console.log("==========================================================")
console.log('                        |Quizadda|     ')
console.log("ALL THE BEST ! " + userName)
console.log("\n")
//questions for QUIZ
var One = { 
  question:"9) The external JavaScript file must contain the <script> tag ? ",
  answer:"no"
}
var Two= {
  question:"1) Java script language is Object-Oriented? ",
  answer:"yes"
}
var Three= {
  question: '3) The "function" and " var" are known as Prototypes? ',
  answer:"no"
}
var Four={
  question:"7) Push is the process of inserting an element in the stack? ",
  answer:"yes"
}
var Five ={
  question:"8) Upper()  method can be used to return a string in upper case letters? ",
  answer:"no"
}

var Six ={
  question:"6) Algorithm is the graphical representation of logic? ",
  answer:"no"
}
var Seven ={
  question:"4) operator is used to assign a value to a variable? ",
  answer:"yes"
}

var Eight={
  question:"2) JavaScript is the same as Java? ",
answer : "no"
}

var Nine={
  question:"5) = operator can be used to compare two values? ",answer:"no"

}
var Ten ={
  question:"10) Break statement is used to stop a loop? ",
  answer:"yes"
}
var questions = [ Two,Eight,Three,Seven,Nine,Six,Four,Five,One,Ten]

for (var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
 
}

console.log("YEP ! your TOTAL score = " + score )
console.log('===========================')
console.log("--------THANK YOU !--------")
