import React from 'react';
import { Link } from "react-router-dom";
import Back from '../images2/3.jpg'

const SignIn = () => {
    return ( 
          <>
  <div class="container">
    <div class="row" style={{marginTop:'-5cm'}}>
      <div class="col-lg-3 col-md-1 ">
        
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
          <div class="testimonial-section testimonial-carousel" >
          {/* <!--Slide Item--> */}
          <div class="slide-item">
            <div class="inner-box text-center">
            



            {/* <!-- Pills navs --> */}

{/* <!-- Pills navs --> */}

{/* <!-- Pills content --> */}
<div class="tab-contentv">
  <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
    <form>
     

      <h4 class="text-center"><b>LOGIN  FORM</b> </h4><br/>

      {/* <!-- Email input --> */}
      <div class="form-outline mb-4">
        <input type="email" id="loginName" class="form-control" placeholder=''/>
        <label class="form-label" for="loginName">Email or username</label>
      </div>

      {/* <!-- Password input --> */}
      <div class="form-outline mb-4">
        <input type="password" id="loginPassword" class="form-control" />
        <label class="form-label" for="loginPassword">Password</label>
      </div>

      {/* <!-- 2 column grid layout --> */}
      <div class="row mb-4">
        <div class="col-md-6 d-flex justify-content-center">
          {/* <!-- Checkbox --> */}
          <div class="form-check mb-3 mb-md-0">
            <input class="form-check-input" type="checkbox" value="" id="loginCheck" checked />
            <label class="form-check-label" for="loginCheck"> Remember me </label>
          </div>
        </div>

        <div class="col-md-6 d-flex justify-content-center">
          {/* <!-- Simple link --> */}
          <a href="#!">Forgot password?</a>
        </div>
      </div>

      {/* <!-- Submit button --> */}
      <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>

      {/* <!-- Register buttons --> */}
      {/* <div class="text-center">
        <p>Not a member? <a href="#!">Register</a></p>
      </div> */}
    </form>
  </div>
  {/* <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register"> */}
  
  {/* </div> */}
</div>
{/* <!-- Pills content --> */}
              
        
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