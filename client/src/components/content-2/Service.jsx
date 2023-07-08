import React from 'react'
import './service.css'

function Service() {

  return (
    <>
    
    <div className="container">
      <div className="container-fluid pe-2">


      <div class="row row-cols-1 row-cols-md-3 p-5 " style={{marginRight:"30px"}}>
        <div class="col">
          <div class="card h-75 w-100 border ">
            <img src="/asset/main.jpg" class="card-img-top" alt="..." />
            <div class="card-body bg-secondary bg-gradient">
            <a href="/resident" className='text-success'>  <button type="button" class="btn btn"><h5 class="card-title">Residential Plumbing <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-right-square ms-4" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
              </svg></h5></button></a>

            </div>
          </div>
        </div>
        <div class="col ">
          <div class="card h-75 w-100 border   " >
            
            <img src="/asset/pluber1.jpg" class="card-img-top" alt="..." />

            <div class="card-body bg-secondary bg-gradient ">
            <a href="/comertial" className='text-success'>   <button type="button" class="btn btn">   <h5 class="card-title">Comercial Plumbing
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-right-square ms-4" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                </svg>
              </h5>
              </button></a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-75 w-100 border">
            <img src="/asset/plumber.jpg" class="card-img-top " alt="..." />
            <div class="card-body bg-secondary bg-gradient">
            <a href="/emer" className='text-success'>    <button type="button" class="btn btn"><h5 class="card-title">Emergency Servicing <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-right-square ms-4" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
              </svg></h5></button></a>

            </div>

          </div>
        </div>
      </div>


      </div>
    </div>
    </>
  )
}

export default Service