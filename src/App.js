import React, { Component } from 'react';
import './App.css';
import AuthWhithGoogle from './components/Login/AuthWhithGoogle';
import AuthWithFacebook from './components/Login/AuthWithFacebook';
import AuthWithEmailAndPassword from './components/Login/AuthWithEmailAndPassword';
import RegisterWithFirebase from './components/Register/RegisterWithFirebase';
//import firebase from './components/Firebase/Firebase';

//ES Modules:
//import firebase from 'firebase/app';
import 'firebase/auth';

 class App extends Component {
 
 // display users in my template
  render() {
    return (
      <div className="App">
        
            
             
            
            <AuthWithFacebook/>
            <AuthWhithGoogle />
            <AuthWithEmailAndPassword />
            <RegisterWithFirebase />
      </div>
    );
  }
}
 export default App;