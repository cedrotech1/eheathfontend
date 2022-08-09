// import React from 'react';
import NavBar from './NavBar';
import Footer from "./Footer";
import SideNav from './sideNav';
import './css/style.css';


import React, { useState } from 'react';
// import Welcame from './welcome';
import { Link } from "react-router-dom";

const SignIn = () => {
  
  // const content='';

// if(nav=='home')
// {
// content=<Welcame/>;
// }


    return ( 
          <>
          {/* <div className='col-md-12' style={{position:"",backgroundColor:'honeydew'}}> */}
            <NavBar/>
          {/* </div> */}



          <section class="testimonial-section" style={{backgroundColor:'honeydew'}}>
  <div class="container">
    <div class="row">
      {/* <div class="col-lg-12">
        <div class="section-title text-center" style={{Color:'black'}}>
          <h3>What Our
            <span>Patients Says</span>
          </h3>
        </div>
      </div> */}
    </div>
    <div class="row">
      <div class="col-lg-4">
        <div class="testimonial-carousel">
          {/* <!--Slide Item--> */}
          <div class="slide-item">
            <div class="inner-box text-center">
              {/* <div class="image-box">
                <figure>
                  <img loading="lazy" src="asset/images/testimonials/1.png" alt=""/>
                </figure>
              </div> */}
              <SideNav/>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-8">
      
        <div class="testimonial-carousel">
          {/* <!--Slide Item--> */}
          <div class="slide-item">
            <div class="inner-box text-center">
              {/* <div class="image-box">
                <figure>
                  <img loading="lazy" src="asset/images/testimonials/1.png" alt=""/>
                </figure>
              </div> */}
              {/* <div class="section-title text-center" style={{Color:'black'}}>
          <h3>What Our
            <span>Patients Says</span>
          </h3>
        </div> */}
         <div class="col-lg-12 col-md-10" style={{backgroundColor:'',padding:'1cm'}}>
      <h3><b>CHANGE PASSWORD</b></h3><br/><br/>
        
      <center>
        <div class="contact-form">
          {/* <!-- contact form start --> */}
          <form action="!#" class="row">
            {/* <!-- name --> */}
            
            {/* <!-- email --> */}
          
            {/* <!-- phone --> */}
            <div class="col-lg-12 form-group">
              <input type="password" class="form-control main" placeholder="Current Password" required/>
            </div>
            {/* <!-- message --> */}
           
            <div class="col-lg-12 form-group">
              <input type="password" class="form-control main" placeholder="new Password" required/>
            </div>

            <div class="col-lg-12 form-group">
              <input type="password" class="form-control main" placeholder="Comfirm Password" required/>
            </div>
            {/* <!-- submit button --> */}
            <div class="col-md-3 text-left form-group">
            {/* <button class="btn btn-style-one  btn-bg-default form-contol" type="submit" style={{textDecoration:'none',backgroundColor:'whitesmoke'}}><Link to="/patientPanel"
             style={{textDecoration:'none',backgroundColor:'whitesmoke',width:'10cm'}}>CHANGE PASSWORD</Link></button> */}
              {/* <button class="btn btn-style-one btn-info" type="submit"><Link to="/patientPanel">home</Link></button> */}
            </div>

          </form>
          {/* <!-- contact form end --> */}
        </div></center>
      </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
























{/* <div className='col-md-12' style={{backgroundColor:'lightgray'}}> */}
            <Footer/>
          {/* </div> */}

          </>
        
     );
}
 
export default SignIn;