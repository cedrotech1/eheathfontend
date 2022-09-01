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
                <br/><br/>
                <Footer/>
          


        </>
     );
}
 
export default Home;

// import React from 'react';
// import './user.css';

// const User = ({id,title,description,file}) => {

//     // const handleDelete = () => {
//     //     onDelete(id);
//     // }

//     // const handleUpdate = () => {
//     //      onUpdate(id,name,email);
//     //     // alert("hello cedro",id);
//     // }
   
   


//     return (
//         <>
        

//         <section class="testimonial-section" style={{backgroundColor:'',marginTop:'-0.4cm'}}>
//   <div class="container">
//     <div class="row">



        

//       <div class="col-lg-6">
          
//         <div class="testimonial-carousel" style={{height:'auto',backgroundColor:'white'}}>
//           {/* <!--Slide Item--> */}
          
//       </div>
//           {/* <div class="slide-item"> */}
//             <div class="inner-box text-center"  style={{height:'auto',backgroundColor:'white'}}>
//               {/* <div class="image-box">
//                 <figure>
//                   <img loading="lazy" src="asset/images/testimonials/1.png" alt=""/>
//                 </figure>
//               </div> */}
//               {/* <div class="section-title text-center" style={{Color:'black'}}>
//           <h3>What Our
//             <span>Patients Says</span>
//           </h3>
//         </div> */}
//         {/* <p>{description}</p> */}
//         <div class="col-lg-12" style={{height:'auto',backgroundColor:'white'}}>
//             <div class="testimonial-carousel">
//             <img loading="lazy" class="img-fluid" src="asset/images/services/service-two.jpg" 
//               alt="service-image" style={{height:'auto',borderRadius:'8px',objectFit: 'cover'}} />
//               <br/>
//               {/* <!--Slide Item--> */}
//               <br/>
//              <b style={{color:'black'}}><h4>{title}
//               UBUZIMA
//               </h4></b> 
//             </div>
//         <p>Uubuzima buzima ni ubuzima bukomoka kubuzima buzima ariko ubuzima buzima 
//             buba ari buzima kuko ubuzima burya ni buzima buzimye twazima  niba ufite ubuzima buzima shima Imana kuko ubuzima ni mpano
//             yubuzima
//         </p>
      
//             </div>
//           {/* </div> */}
//         </div>
//       </div>



      
//       <div class="col-lg-1"></div>
//     </div>
//   </div>
// </section>
//         </>
//     )
// }

// export default User