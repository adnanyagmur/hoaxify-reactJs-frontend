import React, { Component } from 'react';
import Input from '../components/Input';

export default class LoginPage extends Component {


  render() {
    return (
      <div className='container'>
        <form>
            <h1 className='text-center'>Login</h1>
        <Input label="Username" name="username" ></Input>
        <Input label="Password" name="password" type="password" ></Input>
        <div className='text-center'>
        <button className='btn btn-primary'>Login</button>
        </div>
        </form>
      </div>
    )
  }
}
