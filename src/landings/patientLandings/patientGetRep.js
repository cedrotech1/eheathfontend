// import React from 'react';
import NavBar from './NavBar';
import Footer from "./Footer";
import SideNav from './sideNav';
import './css/style.css';
// import { Link } from "react-router-dom";


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
          
          <section class="section contact" >
  {/* <!-- container start --> */}
  <div class="container-fluid" >
    <div class="row">

      <div class="col-lg-1 col-md-12"></div>
      

     <SideNav/>

     <div class="col-lg-1 col-md-12"></div>
      
      <div class="col-lg-6 col-md-12" style={{backgroundColor:'honeydew',padding:'1cm',boxShadow: "1px 1px 8px rgb(112, 112, 112)"}}>
      <div class="container mt-3">
<div class="topnav">
  
  <input type="text" placeholder="Search.."/>
  {/* <button className='btn btn-info'>search</button> */}
</div>

  <br/> <br/>  <br/> <br/>         
  <table class="table">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
        <th>modfy</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
        <td> <Link to="/viewReport" class='nav-link'>&nbsp; &nbsp; view</Link></td>
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
      <div class="col-lg-1 col-md-12"></div>
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
 
export default Report;