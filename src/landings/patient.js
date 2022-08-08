import React from 'react';
import { Link } from "react-router-dom";
import Back from '../images2/3.jpg'

const SignIn = () => {
    return ( 
          <>
  {/* <section class="page-title text-center"  style={{ backgroundImage:`url(${Back})`,height:'5cm' }}>
    <div class="container">
        <div class="title-text">
            <h1>about us</h1>
            <ul class="title-menu clearfix">
                <li>
                    <a href="index.html">home &nbsp;/</a>
                </li>
                <li>Patients</li>
            </ul>
        </div>
    </div>
</section> */}
          {/* <section class="section contact"> */}
  {/* <!-- container start --> */}
  <div class="container">
    <div class="row">
      <div class="col-lg-3 col-md-1 ">
        {/* <!-- address start --> */}
       
        {/* <!-- address end --> */}
      </div>
      <div class="col-lg-6 col-md-10" style={{backgroundColor:'',padding:'1cm'}}>
      
      <div class="row">
          <div class="col-lg-4"></div>
            
          
          <div class="col-lg-4">
         
            {/* <center><h1><b>Login </b></h1></center> */}
          </div>

          <div class="col-lg-4"></div>
      </div>
      <br/><br/>
      {/* 1px 1px 8px rgb(112, 112, 112) */}
        
      
        <div class="contact-form">
          {/* <!-- contact form start --> */}
          <div class="testimonial-section testimonial-carousel">
          {/* <!--Slide Item--> */}
          <div class="slide-item">
            <div class="inner-box text-center" style={{backgroundColor:'',padding:'1cm',boxShadow:'3px 2px 8px rgb(112, 112, 112)'}}>
              <div class="image-box">
                <figure>
                  <img loading="lazy" src="asset/images/testimonials/1.png" alt=""/>
                </figure>
              </div>
              
              <form action="!#" class="row">
            {/* <!-- name --> */}
          
            <div>
            <br/><h6><b>LOGIN</b> </h6>
            </div>
            {/* <!-- email --> */}
            <div class="col-lg-12 form-group">
              <input type="email" class="form-control main" placeholder="Email" required/>
            </div>
            {/* <!-- phone --> */}
            <div class="col-lg-12 form-group">
              <input type="password" class="form-control main" placeholder="Password" required/>
            </div>
            {/* <!-- message --> */}
           
            {/* <!-- submit button --> */}
            <div class="text-left form-group">
              <button class="btn btn-style-one btn-md btn-bg-default form-contol" type="submit" style={{textDecoration:'none',backgroundColor:'whitesmoke'}}><Link to="/patientPanel" style={{textDecoration:'none',backgroundColor:'whitesmoke'}}>Login</Link></button>
            </div>
          </form>
            </div>
          </div>
        </div>
         
          {/* <!-- contact form end --> */}
        </div>
      </div>
      <div class="col-lg-3 col-md-1 ">
        {/* <!-- address start --> */}
       
        {/* <!-- address end --> */}
      </div>
    </div>
  </div>
  {/* <!-- container end --> */}
{/* </section> */}

          </>
        
     );
}
 
export default SignIn;