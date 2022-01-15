 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
 import { getAuth ,onAuthStateChanged,signOut} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
        const firebaseConfig = {
            apiKey: "AIzaSyBmMcEKWrE0tbweuAHin4yl2PsvwJNgvbk",
            authDomain: "students-79239.firebaseapp.com",
            projectId: "students-79239",
            storageBucket: "students-79239.appspot.com",
            messagingSenderId: "400928239359",
            appId: "1:400928239359:web:3aee40bf0a2ab4d9b066ca",
            measurementId: "G-6HVMDMYNPD"
        };


 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth=getAuth();
 onAuthStateChanged(auth,(user)=>{
     if(user)
     {
         document.getElementById("para").innerText=user.email;
     }
     else{
         location.assign("signup.html");
     }
 })

 window.Logout=Logout;
 function Logout()
 {
    signOut(auth);

 }

