import Contact from "../landings/contact";
import NavBar from "../landings/NavBar";
 import Footer from "../landings/Footer";

import 'bootstrap/dist/css/bootstrap.css';

const Home = () => {
    return ( 
        <>
       
               <NavBar/> 
           
                <Contact/>
                <br/><br/>
                      <div class='footer_container' style={{marginTop:'-10cm'}}>
                <Footer/>
                    </div>


        </>
     );
}
 
export default Home;