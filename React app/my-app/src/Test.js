import React from 'react'
import { Component } from 'react'
import "./Test.css"

//----------------------- By Function ---------------------

// function Test() {
//   return (
//     <div>
//         <h1>Hello, I am Sumit..</h1>
//     </div>
//   )
// }


// --------------------------- By Class ----------------------
 
class Test extends Component{
    render(){
        return (
        <div>
         <h1
        //    id='testId'
        //    style={{
        //     color: "red",
        //     backgroundColor:"aqua"
        //    }}
         >Hello, I am Sumit..</h1>
        </div>
        )
    }
     
}

export default Test