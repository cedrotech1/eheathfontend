import React from "react";
import { Link } from "react-router-dom";
// import './main.css';
// import './style.css';
// import './subMain.css';
const NavBar = () => {
    return ( 
<>
       
    {/* <section className="header navbar">
       <div className="navbar">
            <table>
               <tr>
                     
                     <td><label id="logo_text"></label></td>
                 </tr>
            </table>
            <ul>

               <li><Link to="/">Home</Link> </li>
                
                <li><Link to="/contact">About</Link> </li>
                 <li><Link to="/About">Contact</Link> </li>
                 <li><Link to="/Todo">To-do</Link> </li>
                 <li><Link to="/Login" id="admin_login">login</Link> </li>
            </ul>
</div>

</section> */}
<div>
<div class="header-top1" style={{backgroundColor:'black'}}>
  <div class="container">
    <div class="row align-items-center">
      <div class="col-md-6">
        <div class="top-left text-center text-md-left">
          <h6>Opening Hours : Saturday to Tuesday - 8am to 10pm</h6>
        </div>
      </div>
      <div class="col-md-6">
        <div class="top-right text-center text-md-right">
          <ul class="social-links">
            <li>
              <a href="https://themefisher.com/" aria-label="facebook">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="https://themefisher.com/" aria-label="twitter">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://themefisher.com/" aria-label="google-plus">
                <i class="fab fa-google-plus-g"></i>
              </a>
            </li>
            <li>
              <a href="https://themefisher.com/" aria-label="instagram">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://themefisher.com/" aria-label="pinterest">
                <i class="fab fa-pinterest-p"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
 {/* <!--header top--> */}



{/* <!--Header Upper--> */}
<section class="header-uper" style={{position:"",backgroundColor:'honeydew',boxShadow: "2px 2px 8px rgb(112, 112, 112)"}}> 
  <div class="container">
    <div class="row align-items-center">
      <div class="col-xl-4 col-lg-3">
        <div class="logo">
         <Link to="/"> 
            <img loading="lazy" class="img-fluid" src="asset/images/logo.png" alt="logo"/></Link> 
          
        </div>
      </div>
      <div class="col-xl-8 col-lg-9">
        <div class="right-side">
          <ul class="contact-info pl-0 mb-4 mb-md-0">
            <li class="item text-left">
              <div class="icon-box">
                <i class="far fa-envelope"></i>
              </div>
              <strong>Email</strong>
              <br/>
              <a href="mailto:info@medic.com">
                <span>info@medic.com</span>
              </a>
            </li>
            <li class="item text-left">
              <div class="icon-box">
                <i class="fas fa-phone"></i>
              </div>
              <strong>Call Now</strong>
              <br/>
              <span>+ (88017) - 123 - 4567</span>
            </li>
          </ul>
          <div class="link-btn text-center text-lg-right">
            <a href="contact.html" class="btn-style-one">Appoinment</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</div>
</>




     );
}
 
export default NavBar;