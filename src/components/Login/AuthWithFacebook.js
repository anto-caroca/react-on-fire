import React, { Component } from 'react';
import '../../App.css';
import firebase from '../Firebase/Firebase';
//ES Modules:
//import firebase from 'firebase/app';
import 'firebase/auth';

 class AuthWithFacebook extends Component {
 constructor() { 
  super();
   this.state = {  
     user: null
  };   
   this.handleAuthWithFacebook = this.handleAuthWithFacebook.bind(this);
  this.handleLogout = this.handleLogout.bind(this);
  this.renderLoginButton = this.renderLoginButton.bind(this);
 }
 componentWillMount () {
  firebase.auth().onAuthStateChanged(user => {
      this.setState({user});
  });
}
   handleAuthWithFacebook () {
    const provider = new firebase.auth.FacebookAuthProvider();
     firebase.auth().signInWithPopup(provider)
        .then(result => console.log(`${result.user.email} ha iniciado sesión`))
        .catch(error => console.log(`error ${error.code}: ${error.message}`));
 }
 handleLogout(){
  firebase.auth().signOut()
  .then(result => console.log(`${result.user.email} ha salido`))
  .catch(error => console.log(`error ${error.code}: ${error.message}`));
}
 renderLoginButton () {
  // si el usuario está logueado
  if (this.state.user) {
      return (
          <div>
              <img width='100' src={this.state.user.photoURL} alt={this.state.user.displayName}/>
              <p>Hola {this.state.user.displayName}!</p>
              <button onClick={this.handleLogout}>Salir</button>
          </div>
      );
  }else{
      return(
      // si no está logueado
      <button className="btn pink lighten-1 z-depth-0" onClick={this.handleAuthWithFacebook}>Login con Facebook</button>
      );
  }
}
 // display users in my template
  render() {
    return (
      <div className="App">
        <div className=''>
            <h1>{this.state.users}</h1> 
            {this.renderLoginButton()}
        </div>
      </div>
    );
  }
}
 export default AuthWithFacebook;