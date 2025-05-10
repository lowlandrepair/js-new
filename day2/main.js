// function showMessage(){
//     alert("This is a function in Javascript");
// }

// showMessage();

function sum(x, y) {
    document.write(x + y);
}

sum(2, 5);
document.write("<br>");
sum(55, 44);
document.write("<br>");
sum(120, 54);

var firstName = "Digital";
var lastName = "School";

var fullName = firstName + " " + lastName;
console.log(fullName);

var test = "Test123";
console.log(`Hello from ${test}`);

var age = 22;
var age2 = 24;
console.log(age >= 18 && age <= 65); // and operator
console.log(age >= 28 || age <= 65); // or operator
console.log(!(age == age2));

// arrow function
// var arrowFunction = name => alert(`Hello ${name}`);

// arrowFunction("Ariana");

// function testFunction() {
//     var localVar = "ARIANA";
//     alert(localVar);
// }

// testFunction();

var globalVar = "ARIANA";

function globalFunction() {
    alert(globalVar);

    // alert(globalVar);
}

globalFunction();

var car = {
    name: "Mercedes",
    color: "red",
    year: 2020,
    kilometers: 0,
    startEngine: function () {
        alert("The car is moving!");
    },
    get getKilometers() {
        return this.kilometers;
    },
    set setKilometers(km) {
        this.kilometers = km;
    }
};

console.log(car.getKilometers);
car.setKilometers = 100;
console.log(car.getKilometers);

// alert(car.name);

// alert(car['color']);

// var car = new Object();
// car.name = "Mercedes";
// car.color = "red";
// car.year = 2020;
// car.kilometers = 0;

// car.type = function () {
//     return this.name + " " + this.color + " " + this.year + " " + this.kilometers;
// }

// console.log(car.type());

