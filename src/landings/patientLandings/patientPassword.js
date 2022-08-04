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
          
          <section class="section contact" >
  {/* <!-- container start --> */}
  <div class="container-fluid" >
    <div class="row">
    
     <div class="col-lg-1 col-md-12">
     {/* <SideNav/> */}
      </div>
     
     {/* <div class="col-lg-3 col-md-12"> */}
        <SideNav/>
      {/* </div> */}
      <div class="col-lg-1 col-md-12">
      </div>

     <div class="col-lg-6 col-md-10" style={{backgroundColor:'',padding:'1cm',boxShadow: "1px 1px 8px rgb(112, 112, 112)"}}>
      <h3><b>CHANGE PASSWORD</b></h3><br/><br/>
        
      <center>
        <div class="contact-form">
          {/* <!-- contact form start --> */}
          <form action="!#" class="row">
            {/* <!-- name --> */}
            
            {/* <!-- email --> */}
          
            {/* <!-- phone --> */}
            <div class="col-lg-12">
              <input type="password" class="form-control main" placeholder="Current Password" required/>
            </div>
            {/* <!-- message --> */}
           
            <div class="col-lg-12">
              <input type="password" class="form-control main" placeholder="new Password" required/>
            </div>

            <div class="col-lg-12">
              <input type="password" class="form-control main" placeholder="Comfirm Password" required/>
            </div>
            {/* <!-- submit button --> */}
            <div class="col-md-3 text-left">
              <button class="btn btn-style-one btn-info" type="submit"><Link to="/patientPanel">home</Link></button>
            </div>

          </form>
          {/* <!-- contact form end --> */}
        </div></center>
      </div>
      <div class="col-lg-1 col-md-12">
      </div>
      {/* <div class="col-lg-3 col-md-1 "> */}
        {/* <!-- address start --> */}
       
        {/* <!-- address end --> */}
      {/* </div> */}
    </div>
  </div>
  {/* <!-- container end --> */}
</section>


{/* <div className='col-md-12' style={{backgroundColor:'lightgray'}}> */}
            <Footer/>
          {/* </div> */}

          </>
        
     );
}
 
export default SignIn;