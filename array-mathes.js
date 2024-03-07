const components = [
    { name: ' mobile', price: 50000, color: 'black', brand: 'iphone' },
    { name: 'motherbord', price: 20000, color: 'black', brand: 'gigabyte' },
    { name: 'casing', price: 7000, color: 'white', brand: ' maxgrend' },
    { name: ' bilke', price: 550000, color: ' black', brand: ' FZ' },
]
// map: returen krbe 
const brand = components.map(productBrand => productBrand.brand)
console.log(brand);
const name = components.map(productname => productname.name);
console.log(name);


// for eatch: kono kisu return krbe na 
components.forEach(productcoler => console.log(productcoler));
components.forEach(productcoler => console.log(productcoler.color));

// filter : jara jara condition fullfil krbe tara taraai output a asbe 
const limit = components.filter(productPrice => productPrice.price >= 20000);
console.log('limitet is a ', limit);

// example 2:filter -->>>> kono akta nam er word ber korar jonno 
const spacificName = components.filter(productName => productName.name.includes('a'))
console.log("the namer is a ::",spacificName);