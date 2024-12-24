import React from "react";
import SignIn from "./Authentication/SignIn.jsx";
import Signup from "./Authentication/SignUp.jsx";
import { Routes, Route } from "react-router-dom";
import GoogleLoginComponent from "./Authentication/GoogleLogin.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/googlelogin" element={<GoogleLoginComponent/>}/>
      </Routes>
    </>
  );
}

export default App;
