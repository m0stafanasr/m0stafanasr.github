
window.Done = Done
function Done(e){
    e.preventDefault();
    var name = document.getElementById("FullName").value;
         var email = document.getElementById("Email").value;
         var password = document.getElementById("Password").value;
         var admin = document.getElementById("admin").value
         try{
            Register(email,password,name,admin);   
         }
         catch(e){
             alert(e);
         }
        }

   

         import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
         
         import { getAuth ,createUserWithEmailAndPassword,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
           // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBmMcEKWrE0tbweuAHin4yl2PsvwJNgvbk",
    authDomain: "students-79239.firebaseapp.com",
    projectId: "students-79239",
    storageBucket: "students-79239.appspot.com",
    messagingSenderId: "400928239359",
    appId: "1:400928239359:web:0e08087dc9ed2b1ab066ca",
    measurementId: "G-1N79C5WTJ5"
  };

  // Initialize Firebase

            
        const app = initializeApp(firebaseConfig);
        const auth=getAuth();
      
        function Register(email,password,name)
        {
          createUserWithEmailAndPassword(auth,email,password,name,admin).then((userCreate)=>{
              console.log(userCreate.user.uid);
      
          }).catch((error)=>{
              console.log(error.message);
              
          })
        }
      
        onAuthStateChanged(auth,(user)=>{
            if(user)
            location.assign("index.html")
        })
        

