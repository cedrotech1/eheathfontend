import Contact from "../landings/contact";
import NavBar from "../landings/NavBar";
 import Footer from "../landings/Footer";

import 'bootstrap/dist/css/bootstrap.css';

const Home = () => {
    return ( 
        <>
       
               <NavBar/> 
           
                <Contact/>
                
                      <div class='footer_container' style={{marginTop:'3.5cm'}}>
                <Footer/>
                    </div>


        </>
     );
}
 
export default Home;