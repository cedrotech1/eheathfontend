import React from 'react';
import Back from '../images2/3.jpg'
// import NavBar from "./NavBar";

// import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.css';
const Contact = () => {
    return ( 
          <>
<section class="page-title text-center contactMes" style={{ backgroundImage:`url(${Back})` }}>
    <div class="container">
        <div class="title-text">
            <h1>Contact</h1>
            <ul class="title-menu clearfix">
                <li>
                    <a href="index.html">home &nbsp;/</a>
                </li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
</section>

<section class="section contact">
  {/* <!-- container start --> */}
  <div class="container">
    <div class="row">
      <div class="col-lg-4 col-md-5 ">
        {/* <!-- address start --> */}
        <div class="address-block">
          {/* <!-- Location --> */}
          <div class="media">
            <i class="far fa-map"></i>
            <div class="media-body">
              <h3>Location</h3>
              <p>kLab Road 44 KG 548 St <br/>Kigali, Rwanda</p>
            </div>
          </div>
          {/* <!-- Phone --> */}
          <div class="media">
            <i class="fas fa-phone"></i>
            <div class="media-body">
              <h3>Phone</h3>
              <p>
              0782779773
                <br/>0782779773
              </p>
            </div>
          </div>
          {/* <!-- Email --> */}
          <div class="media">
            <i class="far fa-envelope"></i>
            <div class="media-body">
              <h3>Email</h3>
              <p>
              admin@klab.rw
                <br/>admin@klab.rw
              </p>
            </div>
          </div>
        </div>
        {/* <!-- address end --> */}
      </div>
      <div class="col-lg-8 col-md-7">
        <div class="contact-form">
          {/* <!-- contact form start --> */}
          <form action="!#" class="row">
            {/* <!-- name --> */}
            <div class="col-lg-6">
              <input type="text" name="name" class="form-control main" placeholder="Name" required/>
            </div>
            {/* <!-- email --> */}
            <div class="col-lg-6">
              <input type="email" class="form-control main" placeholder="Email" required/>
            </div>
            {/* <!-- phone --> */}
            <div class="col-lg-12">
              <input type="text" class="form-control main" placeholder="Phone" required/>
            </div>
            {/* <!-- message --> */}
            <div class="col-lg-12">
              <textarea name="message" rows="10" class="form-control main" placeholder="Your message"></textarea>
            </div>
            {/* <!-- submit button --> */}
            <div class="col-md-12 text-right">
              <button class="btn btn-style-one" type="submit">Send Message</button>
            </div>
          </form>
          {/* <!-- contact form end --> */}
        </div>
      </div>
    </div>
  </div>
  {/* <!-- container end --> */}
</section>

{/* <div class="mapouter col-md-12"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=k_lab&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org">123movies</a><br/></div></div> */}
       
<section class="map">
  {/* <!-- Google Map --> */}
  <div id="map map-container-google-1" style={{backgroundColor:''}}  class="z-depth-1-half map-container">
  <div class="mapouter col-md-12"><div class="gmap_canvas"><iframe width="1180" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=k_lab&t=&z=13&ie=UTF8&iwloc=&output=embed"
   frameborder="0" scrolling="no" marginheight="0" marginwidth="0" allowfullscreen></iframe><a href="https://123movies-to.org">123movies</a><br/></div></div>
  </div>

  {/* <div id="map-container-google-1" class="z-depth-1-half map-container" style="height: 500px">
  <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
    style="border:0" allowfullscreen></iframe>
</div> */}
  {/* <div class="mapouter" style={{position:'relative',textAlign:'right',height:'408px',width:'618px'}}><div class="gmap_canvas" style={{overflow:'hidden',background:'none!important',height:'408px',width:'618px'}}><iframe width="618" height="408" id="gmap_canvas" src="https://maps.google.com/maps?q=klab%20kigali&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.whatismyip-address.com/divi-discount/">divi discount</a><br/><style>.mapouter{}</style><a href="https://www.embedgooglemap.net">google map embed</a><style>.gmap_canvas 
    {}</style></div></div> */}
  <br/><br/>
</section><br/>
          </>
        
     );
}
 
export default Contact;