import React, { Component } from 'react'

 class Test extends Component {
   state = {isLoggedIn: false};
   

   render(){
    return (
        <div>
            {!this.state.isLoggedIn ?(
            <h1>You are not Logged In!</h1>
            ) : (
            <h1>Congratulations you are logged in!</h1>
            )}
            <button onClick={(e) => this.setState({ isLoggedIn: true})}> Login!</button>
        </div>
    )
   }
}

export default Test;
