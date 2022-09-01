// import React from 'react';
import React, { useEffect, useState } from "react";
import './user.css';

// const User = ({id,title,description,file}) => {

    const AddUser = ({ onAdd }) => {

        const handleOnSubmit = (e) => {
            e.preventDefault();
            onAdd(e.target.message.value,e.target.email.value);
            e.target.message.value = "";
            e.target.email.value = "";

            // alert(e.target.message.value);
        }
        


    return (
        <>
        
        <div class="contact-form">
          {/* <!-- contact form start --> */}
          <form action="!#" class="row" onSubmit={handleOnSubmit}>
            {/* <!-- name --> */}
            {/* <div class="col-lg-6">
              <input type="text" name="name" class="form-control main" placeholder="Name" required style={{fontSize:'16px'}}/>
            </div> */}
            {/* <!-- email --> */}
            <div class="col-lg-12">
              <input type="email" name="email" class="form-control main" placeholder="Email" required  style={{fontSize:'16px'}}/>
            </div>
            
            {/* <!-- message --> */}
            <div class="col-lg-12">
              <textarea name="message" rows="10" class="form-control main" placeholder="Your message" style={{marginLeft:'1cm',fontSize:'16px'}}/>
            </div>
            {/* <!-- submit button --> */}
            <div class="col-md-12 text-right">
              <button class="btn btn-style-one btn-bg-blue" type="submit" style={{backgroundColor:'skyblue',width:'3cm'}} onSubmit={handleOnSubmit}>Send Message</button>
            </div>
          </form>
          {/* <!-- contact form end --> */}
        </div>

        </>
    )
}

export default AddUser