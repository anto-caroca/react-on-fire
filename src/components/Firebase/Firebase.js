//ES Modules:
import firebase from 'firebase/app';
import 'firebase/auth';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAD6tr14xLvyFMDrwTDAiKh6zoCN3BvNkc",
    authDomain: "synapse-react-on-fire.firebaseapp.com",
    databaseURL: "https://synapse-react-on-fire.firebaseio.com",
    projectId: "synapse-react-on-fire",
    storageBucket: "synapse-react-on-fire.appspot.com",
    messagingSenderId: "599883791971"
  };
  firebase.initializeApp(config);

  export default firebase;