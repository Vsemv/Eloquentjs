                // arrays

let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[2]);
console.log(listOfNumbers[0]);
console.log(listOfNumbers[2-1]);

                // properties

                // methods

let doh = 'How how how';
console.log(typeof doh.toUpperCase);
console.log(doh.toUpperCase());

let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
console.log(sequence.pop());
console.log(sequence);

                // objects
                console.log('dividing line----------------------------')

let day1 = {
    squirrel: false,
    events: ['worked', 'touched the tree', 'ate pizza', 'ran']
};
console.log(day1.squirrel);
console.log(day1.wolf);
day1.wolf = false;
console.log(day1.wolf);

let descriptions = {
    work: 'Went to work',
    'touching the tree': 'touched the tree'
};

let anObject = {left: 1, right: 2};
console.log(anObject.left);
delete anObject.left;
console.log(anObject.left);
console.log('left' in anObject);
console.log('right' in anObject);

console.log(Object.keys({x: 0, y: 0, z: 2}));
console.log(Object.keys(anObject));

let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);

let firstObj = {purple: 2, green: 5};
let secondObj = {yellow: 1, whhite: 0};
Object.assign(firstObj, secondObj);
console.log(firstObj);
console.log(secondObj);

console.log(typeof []);

    // array of objects:
let journal = [
    {
        events: ['worked', 'touched the tree', 'ate pizza', 'ran', 'wached TV'],
        squirrel: false
    },
    {
        events: ['worked', 'ate ice cream', 'ate cauliflower', 'ate lasagna', 'touched the tree', 'brushed my teeth'],
        squirrel: false
    },
    {
        events: ['day off', 'rode bike', 'rested', 'ate peanut', 'drank beer'],
        squirrel: true
        /* etc */
    },
];

                // changeability


                