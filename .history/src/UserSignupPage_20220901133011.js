import React from "react";

class UserSignupPage extends React.Component {

    state = {
        username: null,
        agreedClicked: false
    }

    onChangeUserName = event  =>{
         console.log(event.target.value);
         this.state.username = event.target.value;
         console.log(event.target.value)
    }
    onChangeAgree =event =>{
        event.target.agreedClicked = event.target.checked;
        console.log(this.state);
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
                <label>Display Name</label>
                <input/>
                </div>
                <div>
                <label>Password</label>
                <input type="Password"/>
                </div>
                <div>
                <label>Password Repeat</label>
                
                <input type="Password"/>
                </div>
                <div>
                <input type="checkbox"></input> Agreed
                <button disabled={!this.state.agreedClicked}>Sign Up</button>
                </div>
            </form>

        )
    }
}

export default UserSignupPage;