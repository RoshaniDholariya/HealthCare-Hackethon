import React from "react";
import SignIn from "./Authentication/SignIn.jsx";
import Signup from "./Authentication/SignUp.jsx";
// import Home from "./Home.jsx";
import { Routes, Route } from "react-router-dom";
import PatientForm from "./Authentication/Addinformation.jsx";
// import HospitalLocator from "./Map.jsx";
import LandingPage from "./Home.jsx";
import HospitalLocator from "./Map/Maptemp.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/patientform" element={<PatientForm />} />
        {/* <Route path="/map" element={<HospitalLocator />} /> */}
        <Route path="/mapt" element={<HospitalLocator />} />
      </Routes>
    </>
  );
}

export default App;
