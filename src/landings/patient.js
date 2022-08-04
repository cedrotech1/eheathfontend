import React from 'react';
import { Link } from "react-router-dom";
import Back from '../images2/3.jpg'

const SignIn = () => {
    return ( 
          <>
  <section class="page-title text-center"  style={{ backgroundImage:`url(${Back})`,height:'5cm' }}>
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
</section>
          <section class="section contact">
  {/* <!-- container start --> */}
  <div class="container">
    <div class="row">
      <div class="col-lg-3 col-md-1 ">
        {/* <!-- address start --> */}
       
        {/* <!-- address end --> */}
      </div>
      <div class="col-lg-6 col-md-10">
      <h1><b>Login </b>
        
      </h1>
        <div class="contact-form">
          {/* <!-- contact form start --> */}
          <form action="!#" class="row">
            {/* <!-- name --> */}
            
            {/* <!-- email --> */}
            <div class="col-lg-12">
              <input type="email" class="form-control main" placeholder="Email" required/>
            </div>
            {/* <!-- phone --> */}
            <div class="col-lg-12">
              <input type="password" class="form-control main" placeholder="Password" required/>
            </div>
            {/* <!-- message --> */}
           
            {/* <!-- submit button --> */}
            <div class="col-md-3 text-left">
              <button class="btn btn-style-one btn-info" type="submit"><Link to="/patientPanel">Login</Link></button>
            </div>
          </form>
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
</section>

          </>
        
     );
}
 
export default SignIn;