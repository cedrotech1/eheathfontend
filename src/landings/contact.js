// import React from 'react';
import Form from './Form';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Back from '../images2/bg22.PNG'

const Contact = () => {

  const [users, setUsers] = useState([]);


  const onAdd = async (message, email) => {
    await fetch("https://ehealthbackend-project.herokuapp.com/api/health/suggest", 
    {
      method: "POST",
      body: JSON.stringify({
        message: message,
        email: email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setUsers((users) => [...users, data]);
        alert(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
    return ( 
          <>
<section class="page-title text-center contactMes" style={{ backgroundImage:`url(${Back})`,marginTop:'-1.8cm'  }}>
    <div class="container">
        <div class="title-text">
            <h1>Contact</h1>
            <ul class="title-menu clearfix">
                <li>
                   <Link to="/" class='nav-link' style={{color:'blue',textDecoration:'none'}}><a href="">home &nbsp;/</a></Link>
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
            <i class="far fa-map i1"></i>
            <div class="media-body">
              <h3>Location</h3>
              <p>kLab Road 44 KG 548 St <br/>Kigali, Rwanda</p>
            </div>
          </div>
          {/* <!-- Phone --> */}
          <div class="media">
            <i class="fas fa-phone i1"></i>
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
            <i class="far fa-envelope i1"></i>
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
      <Form onAdd={onAdd}/>
      </div>
    </div>
  </div>
  {/* <!-- container end --> */}
</section>

{/* <div class="mapouter col-md-12"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=k_lab&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org">123movies</a><br/></div></div> */}
    <center> 
      <section class="map">
        {/* <!-- Google Map --> */}
        <iframe width="1180" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=k_lab&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameborder="0" scrolling="no" marginheight="0" marginwidth="0" allowfullscreen></iframe>
        {/* <div id="map-container-google-1" class="z-depth-1-half map-container" style="height: 500px">
        <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
          style="border:0" allowfullscreen></iframe>
      </div> */}
        {/* <div class="mapouter" style={{position:'relative',textAlign:'right',height:'408px',width:'618px'}}><div class="gmap_canvas" style={{overflow:'hidden',background:'none!important',height:'408px',width:'618px'}}><iframe width="618" height="408" id="gmap_canvas" src="https://maps.google.com/maps?q=klab%20kigali&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.whatismyip-address.com/divi-discount/">divi discount</a><br/><style>.mapouter{}</style><a href="https://www.embedgooglemap.net">google map embed</a><style>.gmap_canvas 
          {}</style></div></div> */}
        
      </section>
</center>  
          </>
        
     );
}
 
export default Contact;