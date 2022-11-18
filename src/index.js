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
  console.log(arguments[2]);
}
price(1, 2, 3, 4);*/

/*function pangalan(name = "Mark") {
  console.log(`Ngalan: ${name.toLowerCase()}`);
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
  console.log(`Total: ${total} USD`);
}
price(88, 77, 66, 55);*/

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

/* Shortcut
const price = (...params) => params.reduce((prev, next) => prev + next);
console.log(`Total ${price(19, 15, 199)}`);*/

/*RETURN LEARNING
function price(...params) {
  const total = params.reduce((prev, next) => prev + next);
  return total;
}
const price2 = (...params) => params.reduce((prev, next) => prev + next);

console.log(`Total: ${price(20, 22, 55, 40)}usd`);
console.log(`Total: ${price2(20, 22, 55, 40, 41)}usd`);*/

/*RETURN PLAYTIME
function pangalan(id) {
  const thename = `My name is: ${id}`;
  return function (name) {
    return `${thename} ${name}`;
  };
}
const newpangalan = pangalan("Mark Kenneth");
console.log(newpangalan("Ferrer"));

const second = pangalan("Jessa");
console.log(second("Zabala"));

function thecarpartid(id) {
  const theid = `The car is a: ${id}`;
  return function (name) {
    return `${theid} ${name}`;
  };
}
const newcarpartid = thecarpartid("Tesla");
console.log(newcarpartid("But no charger"));*/

/*This test 
const firstname = { id: "Mark" };
const secondname = { id: "Kenneth" };
const surname = { id: "Oraa" };

function thename(name, number) {
  console.log(`${this.id} ${name} ${number}`);
}

//bind the same as call but lazy version
const boundsurname = thename.bind(surname, "hehe", 22);
boundsurname();

thename.call(firstname, "Ano nga?", 12);
thename.call(secondname);*/
