import React from 'react';
import './user.css';

const User = ({id,title,description,file}) => {

    // const handleDelete = () => {
    //     onDelete(id);
    // }

    // const handleUpdate = () => {
    //      onUpdate(id,name,email);
    //     // alert("hello cedro",id);
    // }
   
   


    return (
        <>
        
        {/* <div className='list' key={id}>
            <span>{id}</span>
            <span>{title}</span>
            <span>{description}</span>
            <span>{file}</span>
        <img loading="lazy" src={`url(${file})`} alt=""/>
           src={`${file}`}
        </div> */}

{/* <div class="col-lg-1"></div> */}
        <br/><br/>
      <div class="col-lg-5" style={{height:'auto',backgroundColor:''}}>
          
          {/* <div class="testimonial-carousel" >
            {/* <!--Slide Item--> */}
            
        {/* </div>  */}
            {/* <div class="slide-item"> */}
              {/* <div class="inner-box text-center"  style={{height:'auto',backgroundColor:''}}> */}
                {/* <div class="image-box">
                  <figure>
                    <img loading="lazy" src="asset/images/testimonials/1.png" alt=""/>
                  </figure>
                </div> */}
                {/* <div class="section-title text-center" style={{Color:'black'}}>
            <h3>What Our
              <span>Patients Says</span>
            </h3>
          </div> */}
          {/* <p>{description}</p> */}
          <div class="col-lg-12" style={{height:'auto',backgroundColor:'',padding:'1cm',boxShadow:'1px  1px 4px rgb(112, 112, 112)',borderRadius:'8px' }}>
              <div class="testimonial-carousel">
              <img loading="lazy" class="img-fluid" src={`${file}`} 
                alt="service-image" style={{height:'auto',borderRadius:'8px',objectFit: 'cover'}} />
                <br/>
                {/* <!--Slide Item--> */}
                <br/>
               <b style={{color:'black',textTransform:'uppercase',fontSize:'22px'}}><h4>{title}
                {/* UBUZIMA */}
                </h4></b> 
              </div>
          <p>
            {description}
          </p>
        
              </div>
            {/* </div> */}
          {/* </div> */}
        </div>
        {/* <div class="col-lg-1"></div> */}
        
  




        </>
    )
}

export default User