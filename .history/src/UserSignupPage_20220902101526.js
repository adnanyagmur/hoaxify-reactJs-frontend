import React from "react";

class UserSignupPage extends React.Component {

    state = {
        username: null,
        displayName:null,
        password:null,
        passwordRepeat:null
     
    }

    onChange = event =>{
        const {name,value} =event.target;
        this.setState({
            [name]:value
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
                <input name="passwordRepeat" type="Password" onChange={this.onChange}/>
                </div>
                <div>
               
                <button>Sign Up</button>
                </div>
            </form>

        )
    }
}

export default UserSignupPage;