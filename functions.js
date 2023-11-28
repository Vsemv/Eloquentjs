// const square = function(x) {
//     return x * x;
// };
// console.log(square(4));

// const makeNoise = function() {
//     console.log("how how how");
// };
// makeNoise();

// const power = function(base, exponent) {
//     let result = 1;
//     for(let count = 0; count < exponent; count++) {
//         result *= base;
//     }
//     return result;
// };
// console.log(power(2, 5));

//                 variables and scopes

// let x = 10;
// if (true) {
//     let y = 20;
//     var z = 30;
//     console.log(x + y + z);
// };
// console.log(x + y + z);

// const halve = function(n) {
//     return n / 2;
// };
// let n = 10;
// console.log(halve(100));
// console.log(n);

//                 nested scopes

// const hummus = function(factor) {
//     const ingredient = function(amount, unit, name) {
//         let ingredientAmount = amount * factor;
//         if (ingredientAmount < 1) {
//             unit += 's';
//         }
//         console.log(`${ingredientAmount} ${unit} ${name}`);
//     };
//     ingredient(1, 'банка', 'нута');
//     ingredient(0.25, 'стакан', 'кунжутной пасты');
//     ingredient(0.25, 'стакан', 'лимонного сока')
//     ingredient(1, 'зубок', 'чеснока')
//     ingredient(2, 'столовые ложки', 'оливкового масла')
//     ingredient(0.5, 'чайной ложки', 'кумина')
// };
// hummus(2);

//                 functions as values

// let launchMissiles = function() {
//     missileSystem.launch('now');
// };
// if (safeMode) {
//     launchMissiles = function(){}
// };

//                 declarative entry

// function square(x) {
//     return x * x;
// };

// console.log('Voice from future:', future());
// function future() {
//     return 'there will be no flying cars';
// };

//                 // arrow functions

// const power = (base, exponent) => {
//     let result = 1;
//     for(let count = 0; count < exponent; count++) {
//         result *= base;
//     };
//     return result;
// };
// console.log(power(2, 10));

//     // this two functions is same. if you have only one parameter you can write function without "()" and without body of function "{}"
// const square1 = (x) => { return x * x};
// const square2 = x => x * x;
// console.log(square1(2), square2(3));

// const horn = () => {
//     console.log('Toot');
// };
// horn();

//                 // call stack

// function greet(who) {
//     console.log('Hello, ' + who);
// }
// greet('Harry');
// console.log('Good bye!');

// // function chicken() {
// //     return egg();
// // };
// // function egg() {
// //     return chicken();
// // };
// // console.log(chicken() + ' came first');

//                // optioonal arguments

// function square(x) { return x * x; }
// console.log(square(4, true, 'hedgehog'));

// function minus(a, b) {
//     if (b === undefined) return -a;
//     else return a - b;
// };
// console.log(minus(10));
// console.log(minus(10, 5));

// function power(base, exponent = 2) {
//     let result = 1;
//     for (let count = 0; count < exponent; count++) {
//         result *= base;
//     }
//     return result;
// };
// console.log(power(4));
// console.log(power(4, 6));

// console.log('C', 'O', 2);

                // closing

// function wrapValue(n) {
//     let local = n;
//     return () => local;
// };
// let wrap1 = wrapValue(1);
// let wrap2 = wrapValue(2);
// console.log(wrap1());
// console.log(wrap2());

// function multiplier(factor) {
//     return number => number * factor;
// };
// let twice = multiplier(2);
// console.log(twice(5));

                // recursion

function power(base, exponent) {
    if (exponent == 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}
console.log(power(2, 3));

function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) || find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, '1');
}
console.log(findSolution(13));
                