const number = [100, 55, 44, 82, 15];
const student = {
    name: 'Rakib Hasan',
    age: 22,
    address: 'gaidandha',
    roll: 511100,
    reg: 125408880,
    institute: 'kurigram politechnic institute'
}

// templeat string
// ki vabe obj and array theke amra templaet string er madhome data acess krte pari 
const template = `My Name is ${student.name}. My campus name is ${student.institute}. hes roll is a ${student.roll} My address is a ${student.address}. my sirial number is a ${number[4]}`
console.log(template);