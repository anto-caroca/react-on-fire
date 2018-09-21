import React, { Component } from 'react';
import '../App.css';
import AuthWhithGoogle from './component/Login/AuthWhithGoogle';
import AuthWithFacebook from './component/Login/AuthWithFacebook';
import AuthWithEmailAndPassword from './components/Login/AuthWhithEmailAndPassword';
import RegisterWithFirebase from './component/Register/RegisterWithFirebase';
import firebase from './components/Firebase/Firebase';

//ES Modules:
//import firebase from 'firebase/app';
import 'firebase/auth';

 class App extends Component {
 
 // display users in my template
  render() {
    return (
      <div className="App">
        <h1>{this.state.users}</h1> 
        <div className=''>
        </div>
            <div className=''>
               {this.renderLoginButton()}
            </div>
            <AuthWithFacebook/>
            <AuthWhithGoogle />
            <AuthWithEmailAndPassword />
            <RegisterWithFirebase />
      </div>
    );
  }
}
 export default App;