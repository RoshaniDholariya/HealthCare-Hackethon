import React from "react";
import SignIn from "./Authentication/SignIn.jsx";
import Signup from "./Authentication/SignUp.jsx";
import { Routes, Route } from "react-router-dom";
import PatientForm from "./Authentication/Addinformation.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/patientform" element={<PatientForm/>}/>
      </Routes>
    </>
  );
}

export default App;
