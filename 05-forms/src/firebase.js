import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAnT_4pw4bCRMI2uKVCZ0oZ8mrJdx09e_I",
    authDomain: "forms-test-23799.firebaseapp.com",
    databaseURL: "https://forms-test-23799.firebaseio.com",
    projectId: "forms-test-23799",
    storageBucket: "forms-test-23799.appspot.com",
    messagingSenderId: "112444804387"
  };

firebase.initializeApp(config)

const firebaseDB = firebase.database()
