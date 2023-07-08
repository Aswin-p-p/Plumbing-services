import React from 'react'

function About() {
  return (
   <>
   <div id='about'>
   <div class="card mb-3 p-5 border-0" style={{maxWidth: "540px;"}} id=''>
  <div class="row g-0">
    <div class="col-md-4 ">
      <img src="/asset/plumbers.jpg" class="img-fluid rounded-start " alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h6 class="card-title text-danger fst-italic">ABOUT US</h6>
        <h1 className='mb-4' style={{fontFamily:"serif"}}>We Are Trusted Plumbing Company Since 2022</h1>
            <p className='mb-4 fw-bold' style={{fontFamily:"sans-serif"}}>
            Quality Plumbing Solutions, at your service! We provide reliable and efficient plumbing services for all your needs.
             Contact us today for a free quote and 
            let us fix your plumbing issues with expertise and professionalism.
            </p>
            <p className='fw-medium text-primary'>
                <i className='fa fa-check text-primary me-3 text-success'> Residential & commercial plumbing</i>
            </p>
            <p className='fw-medium text-primary'>
                <i className='fa fa-check text-primary me-3 text-success'>Quality services at affordable prices</i>
            </p>
            <p className='fw-medium text-primary'>
                <i className='fa fa-check text-primary me-3 text-success'>Immediate 24/ 7 emergency services</i>
            </p>
            <h3>Emergancy 24/7 </h3> <p className='text-danger'> Call: 0496 2255</p>
      </div>
    </div>
  </div>
</div>
</div>

   </>
  )
}

export default About