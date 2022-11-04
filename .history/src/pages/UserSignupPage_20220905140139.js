import React from "react";
import {signup} from "../api/apiCalls"

class UserSignupPage extends React.Component {

    state = {
        username: null,
        displayName:null,
        password:null,
        passwordRepeat:null,
        pendingApiCall:false
     
    }

    onChange = event =>{
        const {name,value} =event.target;
        this.setState({
            [name]:value
        })
    }
     
    onClickSignup = async event =>{
        event.preventDefault();
        
        const{username,displayName,password} = this.state;

        const body ={
            username,
            displayName,
            password
        }
        this.setState({pendingApiCall: true});

        try {
           const response = await signup(body)
        }catch(error){
            console.log(error.response.data)
        }
        
       
        this.setState({pendingApiCall:false})
       

    }
   

    render() {
        const {pendingApiCall} = this.state;
        return (
        <div className="container my-5">
            <form>
                <h1 className="text-center">Sign Up</h1>
                <div className="form-group">
                <label>Username</label>
                <input className="form-control" name="username" onChange={this.onChange}/>
                </div>
                <div className="form-group">
                <label >Display Name</label>
                <input className="form-control" name="displayName" onChange={this.onChange}/>
                </div>
                <div className="form-group">
                <label >Password</label>
                <input className="form-control" name="password" type="Password" onChange={this.onChange}/>
                </div>
                <div className="form-group">
                <label>Password Repeat</label>
                <input className="form-control" name="passwordRepeat" type="Password" onChange={this.onChange}/>
                </div>
                <div className="text-center my-4">
                <button className="btn btn-primary" 
                onClick={this.onClickSignup}
                disabled={pendingApiCall}
                >
                     {pendingApiCall && <span className="spinner-border spinner-border-sm"></span>} 
                    Sign Up
               

                </button>
                </div>
            </form>
        </div>
            

        )
    }
}

export default UserSignupPage;