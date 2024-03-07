const number = [100, 55, 44, 82, 15];
const student = {
    name: 'Rakib Hasan',
    age: 22,
    address: 'gaidandha',
    roll: 511100,
    reg: 125408880,
    institute: 'kurigram politechnic institute',
    like: ['footbal', 'cricket']
}

// 1: templeat string
// ki vabe obj and array theke amra templaet string er madhome data acess krte pari 
const template = `My Name is ${student.name}. My campus name is ${student.institute}. hes roll is a ${student.roll} My address is a ${student.address}. my sirial number is a ${number[4]} i like that a ${student.like[1]}`
console.log(template);

// 2: arrow function

// je arrow function er modhe kono parameater nai
const getfivety = () => 50;

// sigle parameater ala arrow function
const hunded = num => num + 1;

// multi parameater ala function
const double = (x, y, z) => 2 * 2 * 2;

// multi line parameater functuion
const multiLine = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}


// spread operator
// spread mane holo kono array k copy krbe kintu kono reletion rakhbe na ...amnitei dekha jai j age j number a data ase j gula abr arekta variable a stor kora hoyese kintu segula "..."use korar fole amra aktar stahe r aktar kono rletion thakbe na dushud push hbe number a kintu new number a hbe na kintu "..." aita use na krle 2 ta tei hoito tokhn reletion thkto
const newNumbers = [...number];
number.push(11111);
console.log("number is a -->",number);
console.log("new number is a ->>>",newNumbers);

