const  square = function(x) {
    return x * x;
};
console.log(square(12));

const makeNoise = function() {
    console.log('Pling!');
};
makeNoise();

// const power = function(base, exponent) {
//     let result = 1;
//     for(let count = 0; count < exponent; count++) {
//         result *= base;
//     }
//     return result;
// }
// console.log(power(2, 10));

const hummus = function(factor){
    const ingredient = function(amount, unit, name){
        let ingredientAmount = amount * factor;
        if(ingredientAmount > 1){
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "banka", "nuta");
    ingredient(0.25, "stakan", "kunjutnoi pasty");
    ingredient(0.25, "stakan", "limonnogo soka");
    ingredient(1, "zubok", "chestnoka");
    ingredient(2, "stolovie lojki", "olivkovogo masla");
    ingredient(0.5, "chainoi lojki", "kumina");
};


const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};
console.log(power(2, 4));

function greet(who){
    console.log("Hello, " + who);
}
greet("Harry");
console.log("Good buye!");


// page 69