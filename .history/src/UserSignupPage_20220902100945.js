import React from "react";

class UserSignupPage extends React.Component {

    state = {
        username: null,
        displayName:null,
        password:null,
        passwordRepeate:null
     
    }

/*     onChangeUserName = event  =>{
      this.setState({
        username:event.target.value
      })
    }
    onChangeDisplayName = event  =>{
        this.setState({
          displayName:event.target.value
        })
      }
    onChangePassword = event =>{
        this.setState({
            password:event.target.value
        })
    }

    onChangePasswordRepeate = event =>{
        this.setState({
            passwordRepeate:event.target.value
        })
    }
 */
    onChange = event =>{
        const value = event.target.value;
        const field = event.target.name;
        this.setState({
            [field]:value
        })
    }
     
   

    render() {
        return (
            <form>
                <h1>Sign Up</h1>
                <div>
                <label>Username</label>
                <input name="username" onChange={this.onChange}/>
                </div>
                <div>
                <label >Display Name</label>
                <input name="displayName" onChange={this.onChange}/>
                </div>
                <div>
                <label >Password</label>
                <input name="password" type="Password" onChange={this.onChange}/>
                </div>
                <div>
                <label>Password Repeat</label>
                <input name="repeatPassword" type="Password" onChange={this.onChange}/>
                </div>
                <div>
               
                <button>Sign Up</button>
                </div>
            </form>

        )
    }
}

export default UserSignupPage;