            // if

// let num = Number(prompt("Enter the number"));
// if (num < 10){
//     console.log("small");
// }else if (num < 100){
//     console.log("middle");
// }else{
//     console.log("big");
// }

            // while

// let number = 0;
// while(number <= 12){
//     console.log(number);
//     number = number + 2;
// };

// let result = 1;
// let counter = 0;
// while ( counter < 10 ){
//     result = result * 2;
//     counter = counter + 1;
//     console.log("result: " + result, "counter: " + counter);
// }
// console.log(result);

            // do

// let yourName;
// do {
//     yourName = prompt("Who are you?");
// } while (!yourName);
// console.log(yourName);

// let count = 0;
// let expect = 10;
// do {
//     count = count + 1;
//     console.log("count: " + count);
// } while (count < expect);
// console.log("count: " + count, "expect: " + expect);

            // for

// let result = 1;
// for(let counter = 0; counter < 10; counter = counter +1){
//     result = result * 2;
//     console.log("result: " + result);
// }
// console.log(result);

// for(let current = 1; ; current = current + 1){
//     if(current % 7 == 0){
//         console.log(current + "% from 7 = 0");
//         break;
//     }
//     console.log(current + "% from 7 != 0");
// }

//          exercises

            // exercise 1
    // constructing triangle in a cycle:
// let triangle = '#'
// for(let i = 0; ; i++){
//     console.log(triangle);
//     if(triangle.length == 7){
//         break;
//     };
//     triangle += '#';
// };

            // exercise 2
    // FizzBuzz
// let count = 0;
// for(let i = 0; i < 100; i++){
//     count += 1;
//     if(count % 3 == 0 && count % 5 != 0){
//         console.log('Fizz');
//     }else if(count % 5 == 0 && count % 3 == 0){
//         console.log('FizzBuzz');
//     } else if(count % 5 == 0 && count % 3 != 0){
//         console.log('Buzz');
//     }else{
//         console.log(count);
//     };
// };

            // exercise 3
    // chess board
let string = '';
for(let col = 0; col < 8; col++){
    for(let row = 0; row < 8; row++){
        if(col % 2 != 0 || row % 2 == 0){
            string += ' ';
        }else if(col % 2 == 0 || row % 2 != 0){
            string += '#';
        }
    }
    string += '\n';
}
console.log(string);
console.log(string.length);