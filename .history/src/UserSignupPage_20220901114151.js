import React from "react";

class UserSignupPage extends React.Component {

    render() {
        return (
            <form>
                <h1>Sign Up</h1>
                <div>
                <label>Username</label>
                <input/>
                </div>
                <div>
                <label>Display Name</label>
                <input/>
                </div>
                <div>
                <label>Password</label>
                <input type="Password"/>
                </div>
            </form>

        )
    }
}

export default UserSignupPage;