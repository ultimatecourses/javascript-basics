import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = "<h1>JavaScript Basics</h1>";

//case
/* const number = 0;
let result;

switch (number) {
  case 0:
    result = "nice";
    break;
  case 99:
    result = "hmm";
    break;
}
console.log(result);  */

//if else
/* const number = 0;
let result;

if (number === 0) {
  result = "nice";
} else {
  result = "not nice";
}
console.log(result);*/

/*function
console.log(Number(66));*/

/*string and indexes
console.log(new String(1234));
console.log("Mark"[2]);*/

/*TestingUppercase 
const word = "Hello";
const trans = word.toUpperCase();
console.log(trans);*/

/*ArgumentsTest
function price() {
  console.log(arguments[1]);
}
price(1, 2, 3, 4);*/

/*
function pangalan(name = "Mark") {
  console.log(`Ngalan: ${name.toUpperCase()}`);
}
pangalan("Mark");*/

/*
function pangalan(name) {
  console.log(name);
}
pangalan("Mark");*/

/* PARAMS TEST
function price(numberOne, ...params) {
  console.log(numberOne, params);
  console.log(Array.isArray(params));
  const total = params.reduce((prev, next) => prev + next);
  console.log(`Total ${total}USD`);
}
price(88, 77, 66, 55); */

/*testingArrowFunction
const pangalan = (name = "Mark") =>
  console.log(`Pangalan: ${name.toUpperCase()}`);
pangalan();

const pangalan = (name = "Mark") => {
  console.log(name.toUpperCase());
};
pangalan(); */

/*Playing with functions
function pangalan(name) {
  console.log(`Pangalan ${name.toUpperCase()}`);
}
pangalan("Hehe");*/
