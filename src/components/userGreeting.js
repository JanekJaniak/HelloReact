import React, { Component } from 'react'

class UserGreeting extends Component {
  constructor() {
    super()

    this.state = {
      isLoggedIn: true
    }
  }
  
  render() {
    // 1. if/else 

    // if/else second approach
    // let message
    // if(this.state.isLoggedIn) {
    //     message = <div>Welcome Janek</div>
    //     } else {
    //       message =  <div>Welcome unknown</div>
    //     }

    //   return <div>{ message }</div>

      // if/else first approach
      // if(this.state.isLoggedIn) {
      //   return <div>Welcome Janek</div>
      //   } else {
      //     return <div>Welcome unknown</div>
      //   }

    // 2. ternary aproach 
    // return (
    //   this.state.isLoggedIn ?
    //   <div>Welcome Janek</div> :
    //   <div>Welcome unknown</div>
    // )

    // 3. short circut operator
    return this.state.isLoggedIn && <div>Weelcome Janek</div>
  }
}

export default UserGreeting