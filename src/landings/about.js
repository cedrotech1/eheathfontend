import React from 'react';
import { Link } from "react-router-dom";
import Back from '../images2/bg22.PNG'
// import Back from '../images2/opoo.png'
// import NavBar from "./NavBar";

// import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.css';
const Contact = () => {

  function myFunction() {
        var x = document.getElementById('x');
     x.style.display = 'none';

  }
  function myFunction1() {
    // alert('1');
    var yes = document.getElementById('cl');
 yes.style.display = 'none';


}
function myFunction2() {
  var x = document.getElementById('cl');
x.style.display = 'none';

}
  // myFunction();
    return ( 
          <>
        
<section class="page-title text-center"  style={{ backgroundImage:`url(${Back})`,marginTop:'-0.4cm' }}>
    <div class="container">
        <div class="title-text">
            <h1>about us</h1>
            <ul class="title-menu clearfix">
                <li>
                <Link to="/" class='nav-link' style={{color:'blue',textDecoration:'none'}}><a href="">home &nbsp;/</a></Link>
                </li>
                <li>about us</li>
            </ul>
        </div>
    </div>
</section>

<section class="service-tab-section section">
  <div class="outer-box clearfix">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          {/* <!-- Nav tabs --> */}
          <div class="tabs mb-5">
            <ul class="nav nav-tabs justify-content-center" id="aboutTab" role="tablist">
              <li class="nav-item" role="presentation" >
                <a class="nav-link active" id="dormitory-tab"  data-toggle="tab" href="#dormitory" role="tab" aria-controls="dormitory" aria-selected="true" onClick={myFunction}>our story</a>
              </li>
              <li class="nav-item" role="presentation">
                <a class="nav-link" id="orthopedic-tab" data-toggle="tab" href="#orthopedic" role="tab" aria-controls="orthopedic" aria-selected="false" onClick={myFunction1}>vision</a>
              </li>
              <li class="nav-item" role="presentation">
                <a class="nav-link" id="sonogram-tab"  data-toggle="tab" href="#sonogram" role="tab" aria-controls="sonogram" aria-selected="false" onClick={myFunction2}>Mission</a>
              </li>
              {/* <li class="nav-item" role="presentation">
                <a class="nav-link" id="x-ray-tab" data-toggle="tab" href="#x-ray" role="tab" aria-controls="x-ray" aria-selected="false">x-ray</a>
              </li>
              <li class="nav-item" role="presentation">
                <a class="nav-link" id="diagnostic-tab" data-toggle="tab" href="#diagnostic" role="tab" aria-controls="diagnostic" aria-selected="false">diagnostic</a>
              </li> */}
            </ul>
          </div>
          {/* <!--Start single tab content--> */}
          {/* {myFunction()} */}
          <div class="tab-content" id="aboutTab" >
            <div class="service-box tab-pane fade 8show active" id="dormitory">
              <div class="row" id=''>
                <div class="col-lg-6">
                  <img loading="lazy" class="img-fluid" src="asset/images/services/service-one.jpg"  alt="service-image"/>
                </div>
              
              
                <div class="col-lg-6">
                  <div class="contents">
                    <div class="section-title">
                      <h3>Our Story</h3>
                    </div>
                    <div class="col-lg-12">
                      <div class="story-content">
                        {/* <h2></h2> */}
                        <h5 class="tagline">"to digitolise patient information is purpuse of our web application "</h5>
                        <br/>

                          <p>Its web application which will help patients  to access hospitals information 
                            and his/her treatment information across the country but only where he/she uses
                             their services(treatment).
                             <br/> <br/>
                             In a breathly patient will have to view his information and view a  historic(report) of hospital name,dates, tests,medicines he made and the doctor who made that operation.
                              </p>


                      </div>
                    </div>
                  
                  </div>
                </div>
              </div>
            </div>
            {/* <!--End single tab content-->
            <!--Start single tab content--> */}
            <div class="service-box tab-pane fade" id="orthopedic">
              <div class="row">
                <div class="col-lg-6">
                  <img loading="lazy" class="img-fluid" src="asset/images/services/service-two.jpg" alt="service-image" style={{height:'11cm'}} />
                </div>
                <div class="col-lg-6">
                  <div class="contents">
                    <div class="section-title">
                      <h3>vission</h3>
                    </div>
                    <div class="text">
                    <h6></h6>
                          <p>     

                          It is envisioned that, “By 2022, eHealth will enable widespread access to health care services,
                          health information, and securely share and exchange client's information in support to a safer, 
                          quality health care, more equitable and responsive health system for all the Rwandan people by 
                          transforming the way information<br/>

                          <p></p>

                          </p>
                      
                      
                      </div>
                    
                    <a href="services.html" class="btn btn-style-one">Read more</a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--End single tab content--> */}
            {/* <!--Start single tab content--> */}
            <div class="service-box tab-pane fade" id="sonogram">
              <div class="row">
                <div class="col-lg-6">
                  <img loading="lazy" class="img-fluid" src="asset/images/services/service-three.jpg" alt="service-image" style={{height:'11cm'}}/>
                </div>
                <div class="col-lg-6">
                  <div class="contents">
                    <div class="section-title">
                      <h3>Mision</h3>
                    </div>
                    <div class="text">
                      <p> </p>
                      <p>Through our leading technology, far-reaching partnerships, consumer advocacy and industry expertise,
                         we work tirelessly to be the online standard for finding, comparing and buying individual, family,
                          small business and Medicare health insurance. Our customer care specialists and licensed agents are 
                          available to provide personalized assistance 24 hours a day, 7 days a week over the internet, telephone,
                           email, fax or online chat. When private insurance is not an option, we can connect people
                         to public assistance programs to help them find the care they need. Anyone in need of access 
                         to health coverage has an ally in eHealth.</p>
                         <br/>
                    </div>
                    
                    <a href="services.html" class="btn btn-style-one" style={{backgroungColor:'whitesmoke'}}>Read more</a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--End single tab content--> */}
            {/* <!--Start single tab content--> */}
          
            {/* <!--End single tab content--> */}
            {/* <!--Start single tab content--> */}
         
            {/* <!--End single tab content--> */}
          </div>




          <div class="tab-content" id="aboutTab x" style={{marginTop:'-14cm'}}>
          <div class="" id="">
              <div class="row" id='cl'>
                <div class="col-lg-6">
                  <img loading="lazy" class="img-fluid" src="asset/images/services/service-one.jpg" alt="service-image" style={{borderRadius:'0.5cm'}}/>
                </div>
              
              
                <div class="col-lg-6" id='cl cl2 cl3'>
                  <div class="contents">
                    <div class="section-title">
                      <h3>Our Story</h3><br/><br/>
                    </div>
                    <div class="col-lg-12">
                      <div class="story-content">
                        {/* <h2></h2> */}
                        <h5 class="tagline">"to digitolise patient information is purpuse of our web application "</h5>
                        <br/>

                          <p>Its web application which will help patients  to access hospitals information 
                            and his/her treatment information across the country but only where he/she uses
                             their services(treatment).
                             <br/> <br/>
                             In a breathly patient will have to view his information and view a  historic(report) of hospital name,dates, tests,medicines he made and the doctor who made that operation.
                              </p>


                      </div>
                    </div>
                  
                  </div>
                </div>
              </div>
            </div>
            </div>



        </div>
      </div>
    </div>
  </div>
</section>



<section class="promo-video">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="block text-center">
          <h6>About Our Hospital</h6>
          <h1>The World <br/>
            Class Hospitality
          </h1>
          <a data-fancybox
            href="https://www.youtube.com/watch?v=_sI_Ps7JSEk&amp;autoplay=1&amp;rel=0&amp;controls=0&amp;showinfo=0"><i class="fas fa-play"></i></a>
        </div>
      </div>
    </div>
  </div>
</section>





<section class="appoinment-section section">
  <div class="container">
    <div class="row">
      <div class="col-lg-6">
        <div class="accordion-section">
  <div class="section-title">
    <h3>FAQ</h3>
  </div>
  <div class="accordion-holder">
    <div class="accordion" id="accordionGroup" role="tablist" aria-multiselectable="true">
      <div class="card">
        <div class="card-header" role="tab" id="headingOne">
          <h4 class="card-title">
            <a role="button" data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Why Should I choose Medical Health
            </a>
          </h4>
        </div>
        <div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordionGroup">
          <div class="card-body" style={{fontSize:'19px'}}>
            To choose e-health web application is application which will help patient by providing necessary information either hospital info or repart about recently Medical report
            <br/>patient have full access to view his information treatments but he can not edit it one think he can edit is his/her password
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header" role="tab" id="headingTwo">
          <h4 class="card-title">
            <a class="collapsed" role="button" data-toggle="collapse" href="#collapseTwo"
              aria-expanded="false" aria-controls="collapseTwo">
              What are the Centre’s visiting hours?
            </a>
          </h4>
        </div>
        <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordionGroup">
          <div class="card-body" style={{fontSize:'19px'}}>
          our services is always available as 24/24 hours. at any moment patient will be able to access his information even if system can crush but patient can save 
          as pdf file
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header" role="tab" id="headingThree">
          <h4 class="card-title">
            <a class="collapsed" role="button" data-toggle="collapse" href="#collapseThree"
              aria-expanded="false" aria-controls="collapseThree">
              How many visitors are allowed?
            </a>
          </h4>
        </div>
        <div id="collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordionGroup">
          <div class="card-body" style={{fontSize:'19px'}}>
            every one is allowed to visit this web application but only one to access information is 
            one atleat who treated by hospital which uses this system and hospital receptionist register that patient and give him clidentios 
            that enable to login in this panel
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
      <div class="col-lg-6">
<div class="contact-area pl-0 pl-lg-5">
  <div class="section-title">
    <h3>submit Your
      <span>_Idea</span>
    </h3>
  </div>
  <form name="contact_form" class="default-form contact-form" action="!#" method="post" >
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <input class="form-control" type="text" name="Name" placeholder="Name" required="" style={{fontSize:'16px'}}/>
        </div>
        <div class="form-group">
          <input class="form-control" type="email" name="Email" placeholder="Email" required="" style={{fontSize:'16px'}}/>
        </div>
        {/* <div class="form-group">
          <select class="form-control" name="subject">
            <option>Departments</option>
            <option>Diagnostic</option>
            <option>Psychological</option>
          </select>
        </div> */}
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <input class="form-control" type="text" name="Phone" placeholder="Phone" required="" style={{fontSize:'16px'}}/>
        </div>
        <div class="form-group">
          <input class="form-control" type="text" name="Date" placeholder="Date" required="" id="datepicker" autocomplete="off" style={{fontSize:'16px'}}/>
          <i class="fa fa-calendar" aria-hidden="true"></i>
        </div>
        {/* <div class="form-group">
          <select class="form-control" name="subject">
            <option>Doctor</option>
            <option>Diagnostic</option>
            <option>Psychological</option>
          </select> 
        </div> */}
      </div>
      <div class="col-md-12">
        <div class="form-group">
          <textarea class="form-control" name="form_message" placeholder="Your Message" required="" style={{fontSize:'16px'}}></textarea>
        </div>
        <div class="form-group text-center">
          <button type="submit" class="btn-style-one">submit now</button>
        </div>
      </div>
    </div>
  </form>
</div>
      </div>
    </div>
  </div>
</section>



{/* <div class="mapouter col-md-12"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=k_lab&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org">123movies</a><br/></div></div> */}
       

          </>
        
     );
}
 
export default Contact;