//step-1 : kono akta variable er man jodi porobortite change na kori tahole const use krte hbe
const milti = 22;

// kono akta variable er man k jodi porobortite change kora hoi tahole let use kora hoi
let sum = 0;
sum = 2;

// step-2 : 6 basic condition(<, >, ===, ==!, =<, =>) 
// multipol condition : &&, ||


// step-3 : array 
// array declear
const array = [55, 11, 22, 44, 99];

// array er index diye man change kora|| push, pop etc
array[0] = 22;
console.log(array);
// koto gula index ase segula dekha jabe 
console.log(array.length);


// step-4 : loop
for (let i = 0; i < array.length; i++) {
    const number = array[i]
    console.log(number);
}

// step-5 : function
function div(num1, num2) {
    const calculation = num1 / num2;
    return calculation;
}
const output = div(10, 2);
console.log(output);



// step-6 : object
const student = {
    name: 'rakib hasan',
    age: 22,
    address: 'gaidandha'
}
console.log(student);

// obj output dekhanor jonno onek way ase segula holo
console.log(student.address);
console.log(student['address']);

const jaiga = 'address';
console.log(student[jaiga]);