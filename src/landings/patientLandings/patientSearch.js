// import React from 'react';
import NavBar from './NavBar';
import Footer from "./Footer";
import SideNav from './sideNav';
import './css/style.css';


import React, { useState } from 'react';
// import Welcame from './welcome';
import { Link } from "react-router-dom";

const Report = () => {
  
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
        <h2><b>SEARCH HOSPITAL</b></h2>
                <div class="col-lg-12 col-md-12" style={{backgroundColor:'',padding:'1cm'}}>
      <div class="container mt-3">
<div class="topnav">
  <input type="text" placeholder="Search.."/>
  {/* <button className='btn btn-info'>search</button> */}
</div>

  <br/> <br/>        
  <table class="table">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
      <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
      </tr>
    </tbody>
  </table>
</div>

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
 
export default Report;