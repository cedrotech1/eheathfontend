// import react from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import ReactDOM from 'react-dom/client';
import Home from "./Pages/LandingPage";
// import LoginPage from "./Pages/LoginPage";
// import About from "./About";
import Patient from "./Pages/PatientLogin";
import About from "./Pages/aboutUsPage";
import Contact from "./Pages/contactUsPage";
import Service from "./Pages/servicePage";
import Blog from "./Pages/blogPage";

import P_home from "./landings/patientLandings/patientHome";
import P_seach from "./landings/patientLandings/patientSearch";
import P_report from "./landings/patientLandings/patientGetRep";
import P_password from "./landings/patientLandings/patientPassword";

import ViewRep from "./landings/patientLandings/viewReport";

// import TodoList from "./Pages/TodoList";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        
       < Route path="/" element={<Home />} exact={true} />
       {/* < Route path="/Login" element={<LoginPage />}/>  */}
       < Route path="/patient" element={<Patient/>}/>
       < Route path="/patientPanel" element={<P_home/>}/>
       < Route path="/patientSeach" element={<P_seach/>}/>
       < Route path="/viewReport" element={<ViewRep/>}/>
       < Route path="/patientGetRep" element={<P_report/>}/>
       < Route path="/patientPassword" element={<P_password/>}/>

       < Route path="/blog" element={<Blog/>}/>
       < Route path="/about" element={<About />}/>
       < Route path="/service" element={<Service/>}/>
       < Route path="/contact" element={<Contact />}/> 
       {/* < Route path="/todo" element={<TodoList />}/> */}
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
