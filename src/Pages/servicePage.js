import Service from "../landings/service";
import NavBar from "../landings/NavBar";
 import Footer from "../landings/Footer";

import 'bootstrap/dist/css/bootstrap.css';

const Home = () => {
    return ( 
        <>
       
               <NavBar/> 
           
                <Service/>
                <br/><br/><br/><br/>
                <Footer/>
          


        </>
     );
}
 
export default Home;