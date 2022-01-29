const firebaseConfig = {
    apiKey: "AIzaSyBpOfcTjL086LHONAH6BH6JzLygCbodVkg",
    authDomain: "kwitter-c6201.firebaseapp.com",
    databaseURL: "https://kwitter-c6201-default-rtdb.firebaseio.com",
    projectId: "kwitter-c6201",
    storageBucket: "kwitter-c6201.appspot.com",
    messagingSenderId: "132892883558",
    appId: "1:132892883558:web:48ea9a186bfeb37808cba7"
  };
  
  // Initialize Firebase
  //const app = initializeApp(firebaseConfig);
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function addUser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
}