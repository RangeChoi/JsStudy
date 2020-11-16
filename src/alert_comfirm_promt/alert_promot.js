let admin;
let name = "John";

admin = name;

const BIRTHDAY = '18.04.1982';

const age = someCode(BIRTHDAY);

function someCode(info) {
    console.log("someCode function:" + info);
}

let input_msg = prompt("this is promt window, type what you want, and you can get result", "something you should input");
alert(input_msg);


let isBoss = confirm("Are you the boss?");
alert(isBoss);

console.log("variable admin is "+ admin);
console.log("const birthday is "+ BIRTHDAY);
console.log("calc const age is "+ age);


