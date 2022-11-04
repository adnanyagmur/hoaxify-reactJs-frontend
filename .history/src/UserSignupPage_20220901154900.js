import React from "react";

class UserSignupPage extends React.Component {

    state = {
        username: null,
        displayName:null,
        password:null,
        passwordRepeate:null
     
    }

    onChangeUserName = event  =>{
      this.setState({
        username:event.target.value
      })
    }
    onChangeDisplayName = event  =>{
        this.setState({
          displayName:event.target.value
        })
      }
     
   

    render() {
        return (
            <form>
                <h1>Sign Up</h1>
                <div>
                <label>Username</label>
                <input onChange={this.onChangeUserName}/>
                </div>
                <div>
                <label >Display Name</label>
                <input onChange={this.onChangeDisplayName}/>
                </div>
                <div>
                <label >Password</label>
                <input type="Password" onChange={this.onChangePassword}/>
                </div>
                <div>
                <label>Password Repeat</label>
                <input type="Password" onChange={this.onChangePasswordRepeate}/>
                </div>
                <div>
               
                <button>Sign Up</button>
                </div>
            </form>

        )
    }
}

export default UserSignupPage;