import firebase from 'firebase/app'
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBaWutMZ_Df05WHLgAbWXX_W8BNg8OLRg0",
    authDomain: "nurram-projects.firebaseapp.com",
    databaseURL: "https://nurram-projects-default-rtdb.firebaseio.com",
    projectId: "nurram-projects",
    storageBucket: "nurram-projects.appspot.com",
    messagingSenderId: "67835346400",
    appId: "1:67835346400:web:0b59be15e9d59d73a5ff85",
    measurementId: "G-T6CNGSRKR5"
};
  
firebase.initializeApp(firebaseConfig);

export default firebase.database();