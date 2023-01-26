// ----------- Listnode----------------*


class ListNode{
    val;
    next;

    constructor(val, next = null){
        this.val= val;
        this.next = next;
    }  
}

class TestClass {
    head;

    constructor(head = null) {
        this.head = head;
    }

    hasLast(){
        return this.head !== null;
    }

    getLast(){
        if(!this.hasLast()){
            return null;
        }
        let current = this.head;
        while (current.net !== null){
            current = current.next;
        }
        let finalValue = current.val;

        current = this.head;
        while (current.next.next !== null && current.next.next !== null){
            current = current.next;
        }
        if (current.next === null){
            this.head = null;
        }
        current.next.next = null;
        return finalValue;
    }  
}

let myVariable = new TestClass(
    new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
)


console.log(myVariable.getLast());
console.log(myVariable.getLast());
console.log(myVariable.getLast());
console.log(myVariable.getLast());
console.log(myVariable.getLast());



// ------------- Promise ------------------**********
// Promise is a class in JS

let myPromise = new Promise((fullfilled, notfulfilled) => {
   let num1 = 10;
   let num2 = 15;
   let sum = num1 + num2;
   if (sum > 24){
    fullfilled(sum);
   } else {
    notfulfilled(new Error("Promise not fulfilled"))
   }
})

myPromise.then(() =>{
    console.log("Promise was fullfilled");
}).catch(() =>{
    console.log("Promise was not fullfilled")
});


// ----------------------setTimeout() --------------------

function addTwoNumbers (num1, num2){
    let sum = 0;
    setTimeout(() =>{
        console.log(num1 + num2);
        sum = num1 + num2;
    }, 2000)
    console.log("Inside addTwoNumbers")
    return sum;
}
console.log(addTwoNumbers(2, 3));