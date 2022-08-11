// import React from 'react';
import NavBar from './NavBar';
import Footer from "./Footer";
import SideNav from './sideNav';
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
              <div class="section-title text-center" style={{Color:'black'}}>
          <h3>What Our
            <span>Patients Says</span>
          </h3>
        </div>
              <h6>Adam Rose</h6>
              <p class="mb-0">Neque porro quisquam est, qui dolorem ipsum quia consectetur, dolor sit amet, consectetur, numquam Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Molestias, at?</p>
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