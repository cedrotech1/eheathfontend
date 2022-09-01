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



<div class="header-top" style={{backgroundColor:'#f5f5f5',height:'1.8cm'}}>
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-6">
                <div class="top-left text-center text-md-left">
                <div class="link-btn text-center text-lg-right">



            <nav class="navbar  navbar-expand-lg navbar-dark" style={{backgroundColor:'#f5f5f5',marginLeft:'4cm',height:'1.8cm'}}>
              <div class="container">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarLinks" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
              
                <div class="collapse navbar-collapse" id="navbarLinks">
                  <ul class="navbar-nav">
                    
                  
                    <li class="nav-item dropdown @@blogs">
                      <a class="nav-link dropdown-toggle" href="#!" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color:'black'}}>
                        

                      <button type="button" class="btn btn-default btn-sm">
                      <h5><i class="glyphicon glyphicon-user" style={{}}></i>&nbsp;&nbsp;LOGIN &nbsp;AS</h5>  
                    </button>
                        
                        
                        
                        </a>

                      <ul class="dropdown-menu" aria-labelledby="navbarDropdown" style={{backgroundColor:'lavender'}}>
                        <li><a class="dropdown-item @@blog" href="blog.html">HOSPITAL ADMIN</a></li>
                        <li><a class="dropdown-item @@blogDetails" href="blog-details.html">DOCTOR</a></li>
                        <li class="dropdown dropdown-submenu dropright">
                          <a class="dropdown-item @@blogDetails" href="blog-details.html">RECEPTIONIST</a>
                
                          
                        </li>
                      </ul>
                    </li>
                  
                  </ul>
                </div>
            </div>
        </nav>
    </div>
   </div>
  </div>
      <div class="col-md-6">
        <div class="top-right text-center text-md-right">
          <ul class="social-links">
            <li>
              <a href="https://www.facebook.com/klabrw/" aria-label="facebook">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/klabrw?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" aria-label="twitter">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://klab.rw/" aria-label="google-plus">
                <i class="fab fa-google-plus-g"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/accounts/login/?next=/klabrwanda/" aria-label="instagram">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://hu.pinterest.com/tegopinterest/klab/" aria-label="pinterest">
                <i class="fab fa-pinterest-p"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>