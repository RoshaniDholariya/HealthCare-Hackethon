import React from "react";
import SignIn from "./Authentication/SignIn.jsx";
import Signup from "./Authentication/SignUp.jsx";
import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import PatientForm from "./Authentication/Addinformation.jsx";
=======
import GoogleLoginComponent from "./Authentication/GoogleLogin.jsx";
>>>>>>> b0d03a11e3d9c2a052f63643e150566e44095f09

function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/signin" element={<SignIn />}/>
<<<<<<< HEAD
        <Route path="/patientform" element={<PatientForm/>}/>
=======
        <Route path="/googlelogin" element={<GoogleLoginComponent/>}/>
>>>>>>> b0d03a11e3d9c2a052f63643e150566e44095f09
      </Routes>
    </>
  );
}

export default App;
