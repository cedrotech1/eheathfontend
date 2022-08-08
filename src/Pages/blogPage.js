import Blog from "../landings/blog";
import NavBar from "../landings/NavBar";
import Footer from "../landings/Footer";

import 'bootstrap/dist/css/bootstrap.css';
// import Footer from "../Footer";

const Home = () => {
    return ( 
        <>
       
               <NavBar/> 
           
                <Blog/>

                <Footer/>
          


        </>
     );
}
 
export default Home;