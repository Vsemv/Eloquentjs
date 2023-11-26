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

                // variables and scopes

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

                // nested scopes

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

                // functions as values

// let launchMissiles = function() {
//     missileSystem.launch('now');
// };
// if (safeMode) {
//     launchMissiles = function(){}
// };

                // declarative entry

function square(x) {
    return x * x;
};

console.log('Voice from future:', future());
function future() {
    return 'there will be no flying cars';
};

                // arrow functions

