// 1. Arrow Function და ორი რიცხვის დაჯამება:
// დაწერე Arrow Function, რომელიც მიიღებს ორ რიცხვს და დააბრუნებს მათ ჯამს. 
//მაგალითად: const add = (a, b) => a + b;

const sum = (a, b) => {
    return a + b;
};
console.log(sum(6, 7))


// 2. დაწერე Anonymous ფუნქცია, რომელიც მიიღებს ორ რიცხვს და დააბრუნებს მათ შორის სხვაობას. 
//მაგალითად: (function(a, b) { return a - b; })(8, 3);

const subtraction = function (x, y) {
    return x - y;
}
console.log(subtraction(45, 4))

// 3. Arrow Function
// დაწერე რომელიც მიიღებს ერთ რიცხვს და შეამოწმებს, არის თუ არა ის ლუწი (თუ ლუწია დააბრუნებს true). 
//მაგალითად: const isEven = (num) => num % 2 === 0;

const isEven = (number) => {
    console.log(number % 2 === 0);
};
isEven(21);

// 4. Callback Function და გამრავლება:
// დაწერე ფუნქცია, რომელიც მიიღებს ორ რიცხვს და Callback ფუნქციას, რომელიც გამოიყენება ამ რიცხვების 
//ნამრავლის დასათვლელად:

function mult(x, y, callback) {
    const result = x * y;
    callback(result)
}
mult(6, 7, function (result) {
    console.log(result)
})

// 5. Arrow Function და რიცხვის დადებითობის შემოწმება:
// Arrow Function, რომელიც მიიღებს ერთ რიცხვს და შეამოწმებს, არის თუ არა ის დადებითი. 
//მაგალითად: const isPositive = (num) => num > 0;

const isPositive = (number) => {
    return number > 0;
}
console.log(isPositive(6))


// 6. დაწერე Anonymous ფუნქცია, რომელიც მიიღებს რიცხვს და დააბრუნებს მის გაორმაგებულ მნიშვნელობას. 
//მაგალითად: (function(n) { return n * 2; })(5);

const double = function (n) {
    return n * 2;
}
console.log(double(6))


// 7. დაწერე ფუნქცია, რომელიც მიიღებს რიცხვს და Callback ფუნქციას, რომელიც დააბრუნებს ამ რიცხვის გაორმაგებულ 
//მნიშვნელობას:

function double1(x, callback) {
    const result1 = x * 2;
    callback(result1)
}
double1(3, function (result1) {
    console.log(result1)
});


// 8. Arrow Function და რიცხვის ნაშთის შემოწმება:
// Arrow Function, რომელიც შეამოწმებს, თუ ნაშთია რიცხვის გაყოფისას 3-ზე (მაგალითად, არის თუ არა რიცხვი 3-ზე 
//გაყოფადი). მაგალითად: const isDivisibleByThree = (num) => num % 3 === 0;

const isDivisibleByThree = (number) => {
    return number % 3 === 0;
}
console.log(isDivisibleByThree(12))

// 9. Callback Function და რიცხვის გადამოწმება:
// დაწერე ფუნქცია, რომელიც მიიღებს რიცხვს და Callback ფუნქციას, და გამოიძახებს Callback-ს, რომ შეამოწმოს,
// არის თუ არა ეს რიცხვი ლუწი.

function isOdd(num, callback) {
    const result2 = num % 2 === 0;
    callback(result2)
}
isOdd(68, function (result2) {
    console.log(`Your result is ${result2}`)
});


// 10. Arrow Function და რიცხვის კუბის გამოთვლა:
// Arrow Function, რომელიც მიიღებს რიცხვს და დააბრუნებს მის კუბს. 
//მაგალითად: const cube = (num) => num * num * num;

const cube = (number) => {
    return number ** 3
}
console.log(cube(21))

// 11. Callback Function და მარტივი გამრავლება:
// დაწერე ფუნქცია, რომელიც მიიღებს ორ რიცხვს და Callback ფუნქციას, რომელიც დააბრუნებს მათ ნამრავლს. 

//იგივე, რაც მე-4.


// 12. Arrow Function და რიცხვის დადებითობის შემოწმება:
// Arrow Function, რომელიც შეამოწმებს, არის თუ არა რიცხვი ნულზე მეტი. 
//მაგალითად: const isGreaterThanZero = (num) => num > 0;

//იგივეა, რაც მე-5.


// 13. დაწერე Anonymous ფუნქცია, რომელიც მიიღებს ერთ რიცხვს და დააბრუნებს მის ნახევარს. 
//მაგალითად: (function(n) { return n / 2; })(10);
// Callback Function და რიცხვის დამატება:

const helf = function (n) {
    return n / 2;
};
console.log(helf(24))


// 14. დაწერე ფუნქცია, რომელიც მიიღებს ორ რიცხვს და Callback ფუნქციას, რომელიც შეაჯამებს ამ რიცხვებს.


function mult2(x, y, callback) {
    const result3 = x + y;
    callback(result3);
}
mult2(4, 50, function (result3) {
    console.log(result3)
});

// 15. Arrow Function, რომელიც მიიღებს ერთ რიცხვს და დააბრუნებს მის კვადრატს.
// მაგალითი: const square = (num) => num * num;

const square = (number) => {
    return number * number
}
console.log(square(7))
