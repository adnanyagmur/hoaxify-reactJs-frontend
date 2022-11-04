import React, { Component } from 'react';
import Input from '../components/Input';

export default class LoginPage extends Component {


  render() {
    return (
      <div className='container'>
        <form>
        <Input label="Username" name="username" ></Input>
        <Input label="Password" name="password" type="password" ></Input>

        <button>Login</button>
        </form>
      </div>
    )
  }
}
