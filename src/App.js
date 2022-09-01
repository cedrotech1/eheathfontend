// import react from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
/* DIFFERENT USER LOGINS */


/* LANDINGS PAGE*/
import Home from "./Pages/LandingPage";
import About from "./Pages/aboutUsPage";
import Contact from "./Pages/contactUsPage";
import Service from "./Pages/servicePage";
import Blog from "./Pages/blogPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
       < Route path="/" element={<Home />} exact={true} />
       {/* DIFFERENT LOGINS */}
      
       
      {/* LANDINGS PAGE */}
       < Route path="/blog" element={<Blog/>}/>
       < Route path="/about" element={<About />}/>
       < Route path="/service" element={<Service/>}/>
       < Route path="/contact" element={<Contact />}/> 
    
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
