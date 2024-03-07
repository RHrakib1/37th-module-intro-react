// destructuring krle nicher example ta khub sohojei krte partam jemon niche deoya holo
/**
const number = [44, 20];
const x = number[0];
const y = number[1];
console.log(x,y);
 */

// destructuring: destructuring holo kono array er modhe jodi 2ta index thakbe setar bame pothom variable er man hbe array index er pothom ta r porer tar man hbe pore index er ta 
const [a, b] = [74, 84]
console.log(a, b);


// object destructuring
const { address, name } = { name: 'rakib', age: 22, address: 'gaibandha' };
console.log(address, name);



const employ = {
    id: 'vs code',
    destination: 'developer',
    language: ['html', 'css', 'js'],
    spacification: {
        hight: 5.9,
        weight: 60,
        address: 'bd',
        watch: {
            color: 'white',
            brand: 'sisco',
            price: 5000
        }
    },

}
// example 1
const { id, language } = employ;
console.log(id, language);
// example 2
const {hight}=employ.spacification;
console.log(hight);
// example3
const { brand } = employ.spacification.watch;
console.log(brand);