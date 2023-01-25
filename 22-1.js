// -------STRING INTERPOLATION----------

let firstName = "Sumit";
let lastName = "Yadav";

console.log(firstName+ ' '+ lastName)
console.log(`${firstName} ${lastName}`)


// -------- DEFAULT PARAMS ****

function addTwoNumbers(num1, num2){
    return num1 + num2;
}
console.log(addTwoNumbers(2,5));


// -----------ARROW FUNCTIONS ********************

let addTwoNumbers=(num1,num2)=>{
    return num1 + num2;
}
console.log(addTwoNumbers(2,6));

// -----------------REST AND SPREAD OPERATOR Applicable in Array and Object in JS **

let array = [2, 14, 16, 17, 28, 19];

// ----------- Spread Operator -----------> ...

let newArray =[100,...array, 30, 60 ,49]
let newArray1 = [array]
console.log(...newArray1);

// -------------------Rest Operator -> ...

let maxNumbers =(...numbers) =>{
    // console.log(numbers);
    let maximum = Number.MIN_VALUE; // Using some DSA
    for(let number of numbers){
        maximum = Math.max(maximum, number);
    }
    return maximum;
}
console.log(maxNumbers(1,2,3,4,6,8,9,12));

//---- For Object-------

let Object ={
    name:"John",
    age:22,
    city:"New Delhi"
};

let Object2 = {...Object, country:"India" , favorateSong:"Sona re"};
console.log(Object2.city)

