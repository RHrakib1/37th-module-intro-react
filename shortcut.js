// truety: 'string', number, [],{}, true
// falsey: '', 0, falsey, null, undefind

const money = 80;
let food;
if (money > 100) {
    food = 'biriany';
}
else {
    food = 'vat'
}
// console.log(food);

// tarnary
let food1 = money > 100 ? 'biriany' : 'vat mach';
console.log(food1);



// kono akta number er sathe emty string '' add krle seta string hoye jai
const num4 = 55;
const num4Str = num4 + ''
console.log( "the number is a :",num4);
console.log("the string is a :",num4Str);




// string k number a rupantorito krte + use krte hoi
const stringNum = '1444';
const numberConvart = +stringNum;
console.log("the strinis a :",stringNum);
console.log("the number is a : ",numberConvart);