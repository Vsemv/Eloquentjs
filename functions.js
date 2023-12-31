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

// function power(base, exponent) {
//     if (exponent == 0) {
//         return 1;
//     } else {
//         return base * power(base, exponent - 1);
//     }
// }
// console.log(power(2, 3));

// function findSolution(target) {
//     function find(current, history) {
//         if (current == target) {
//             return history;
//         } else if (current > target) {
//             return null;
//         } else {
//             return find(current + 5, `(${history} + 5)`) || find(current * 3, `(${history} * 3)`);
//         }
//     }
//     return find(1, '1');
// }
// console.log(findSolution(33));

                // expansion of functions

// function printFarmInventory(cows, chickens) {
//     let cowString = String(cows);
//     while (cowString.length < 3) {
//         cowString = '0' + cowString;
//     }
//     console.log(`${cowString} коров`);
//     let chickenString = String(chickens);
//     while (chickenString.length < 3) {
//         chickenString = '0' + chickenString;
//     }
//     console.log(`${chickenString} цыплят`);
// }
// printFarmInventory(7, 11);

// console.log('divide functions. from down you can see examplae of divided functions');

// function zeroPad(number, width) {
//     let string = String(number);
//     while (string.length < width) {
//         string = '0' + string;
//     }
//     return string
// }
// function printFarmInventoryExp(cows, chickens, pigs) {
//     console.log(`${zeroPad(cows, 3)} коров`);
//     console.log(`${zeroPad(chickens, 3)} цыплят`);
//     console.log(`${zeroPad(pigs, 3)} свиней`);
// };
// printFarmInventoryExp(7, 16, 3);

                // functions and side effects

                // exercises

        // exercise 1
    // minimum

let min = (num1, num2, num3) => {
    if(num1 < num2 && num1 < num3) {
        return num1;
    } else if (num2 < num1 && num2 < num3) {
        return num2;
    } else if (num3 < num1 && num3 < num2) {
        return num3;
    };
};
let minNum = min(2, 1, 3);
console.log('this number has minimum value: ' + minNum);

        // exercise 2
    // recursion

let isEven = (number) => {
    if (number === 0) {
        return true;
    } else if (number === 1) {
        return false;
    } else if (number < 0) {
        return isEven(-number);
    } else {
        return isEven(number - 2)
    };
};
console.log(isEven(-50));

    // letter counting

// let string = 'fdgWFhthWghtRsfQrtW';
// let upperCaseLetter = '';
// for (let i = 0; i <= string.length-1; i++) {
//     if (string[i] === 'W') {
//         upperCaseLetter += string[i];
//     };
// };
// console.log(upperCaseLetter);

let countChar = (string, Char) => {
    let findChar = '';
    for (let i = 0; i <= string.length-1; i++) {
        if (string[i] === Char) {
            findChar += string[i];
        };
    };
    return findChar.length;
};
console.log(countChar('BheheBergecbBbeeChrjrjb', 'e'));
let countBs = (string) => {
    return countChar(string, 'B');
};
console.log(countBs('BegewgB6jhcbvbsBregw4hCerg4Wwe'));

