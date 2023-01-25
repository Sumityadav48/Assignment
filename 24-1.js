// ----- 1. .map()**********

let array =[1,2,3,4,5,6];
let newArray =[];

for(let i =0; i < array.length; i++){
    newArray[i] = array[i] * array[i];
}
console.log(newArray);

let array = [2,3,4,5,6,7];

function functionForMap(ele, index){
console.log(index)
    return ele*ele;
}

let functionForMap = (ele) => ele * ele;

let newArray = array.map(functionForMap);
console.log(newArray);


// ******** 2.  .forEach()*********

let array = [1, 2, 3, 4, 5, 6, 7];
array.forEach((ele,index) => {
    console.log(ele)
});


// ************ 3.  .filter() *************

let array = [10, 20, 30, 40, 50];
let newArray = array.filter((ele) =>  ele >= 30);
console.log(newArray);


// -------- 4. .find()*******----

let array = [10, 20, 30, 40, 50];
let newArray = array.find((value) => {
    return value > 20;
})
console.log(newArray)


// --------- 5.  .sort()---******

let array = [20, 30, 60, 50, 40, 10];
let sortedArray = array.sort();
console.log(sortedArray);

// Lexographical Order is used for sorting the array***********

let array = [20, 30, 60, 50, 40, 10, 111];
let temp = array.sort((ele1, ele2) => {  // Comparitive Functions
    ele1 = Number(ele1);
    ele2 = Number(ele2);
    return ele1 - ele2;
});
console.log(temp);


// --------------------------Object Destructuring -----------************************

let details = {
  name: "Alex",
  age: 22,
  address: {
    city: "Mainpuri",
    state: "Uttar Pradesh",
    country: "India",
    passportDetails: {
      passportNumber: "ABCD1234",
    },
  },
};
let passportNumber = details.address.passportDetails.passportNumber
console.log(passportNumber)

let myName = details.name;
let myAge = details.age;

console.log(myName, myAge);



Array Matching************

if(array1 == array2)  


// -------------------Object Matching-------*********

let obj1 = {name: "Sumit"};
let obj2 = {name: "Sumit"};

function areEqual(obj1, obj2){
    if (obj1 === obj2){
        return true;
    }
    if (Object.keys(obj1).length != Object.keys(obj2).length){
        return false;
    }
    for (let key of Object.keys(obj1)){
        if (typeof obj2[key]== "undefined"){
            return false;
        }
        if (obj2[key] !== obj1[key]) {
            return false;
        }
    }
    return true;
}

console.log(areEqual(obj1, obj2))



// ----------------- Map -------------------**********

let map = new Map();
map.set(1, "Sumit");
map.set(2, "A;ex");
console.log(map)
map.keys()
map.values();


// ------------------ Set -----------------***

let set = new Set();
set.add(1);
set.add(-1);

set.size();
set.has();
set.delete();

console.log(set);



// --------------------------- Class ---------------------************

class Animal{
    noOfLegs;
    color;
    family;
    sound;

    constructor(noOfLegs, color, family, sound){
        this.noOfLegs = noOfLegs;
        this.color = color;
        this.family = family;
        this.sound = sound;

    }
}
 let animal = new Animal(4, "brown", "rodent", "Phew Phew");
 console.log(animal)
