const students = {
    name: 'rakib',
    roll: 511100,
    address: 'colony'
}
// stringfy krle object k string a rupantorito krbe
const studentsJson = JSON.stringify(students);
console.log(students);
console.log(studentsJson);


// kono akta jsonstring thaka oboistai jsonparse dara abr obj krte pari
const jsonobj = JSON.parse(studentsJson);
console.log(jsonobj);




// fetch
// fetch('url')
//     .then(res => res.JSON())
//     .then(data => console.log(data))

// keys,value
const keys = Object.keys(students);
const value = Object.values(students);
console.log(keys);
console.log(value);





// array theke kisu addd and remove kora 
const components = [
    { name: ' mobile', price: 50000, color: 'black', brand: 'iphone' },
    { name: 'motherbord', price: 20000, color: 'black', brand: 'gigabyte' },
    { name: 'casing', price: 7000, color: 'white', brand: ' maxgrend' },
    { name: ' bilke', price: 550000, color: ' black', brand: ' FZ' },
]
const newProduct = { name: 'bike', price: 120000, brand: 'fZZZ3', color: 'blue-white' };

// pothome component k copy korte hbe tar por sekhane newProduct add krte hbe
const newProducts = [...components, newProduct];
console.log(newProducts);



// kono array theke kono item k remove kore r akta new array make kora 
const remainder = components.filter(p => p.price !== 7000)
console.log(remainder);