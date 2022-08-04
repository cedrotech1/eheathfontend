import Landing from "../landings/Landing";
import NavBar from "../landings/NavBar";
import Footer from "../landings/Footer";

import 'bootstrap/dist/css/bootstrap.css';
// import Footer from "../Footer";

const Home = () => {
    return ( 
        <>
       
               <NavBar/> 
           
                <Landing/>

                <Footer/>
          


        </>
     );
}
 
export default Home;