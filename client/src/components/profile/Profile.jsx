import React from 'react'
import ModalProfile from '../ModalProfil/ModalProfile'

function Profile() {
  return (
    <>

      <div className="container">
        <h4 className='text-uppercase text-danger text-center' style={{ fontFamily: "revert-layer" }}>Technicians</h4>
        <div className="container-fluid pe-2">




          {/* Cards */}
        <div class="row row-cols-1 row-cols-md-3 p-5 " style={{ marginRight: "30px" }}>
        <button className='border-0' data-bs-toggle="modal" data-bs-target="#profile"> 
            <div class="col">
              <div class="card h-100 w-100 border ">
                <img src="/asset/man.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h3 className='fst-italic text-center'>John Joe</h3>
                  <p className='fst-italic text-center text-success'>Master Plumber</p>
                  <p className='fst-italic text-center text-primary'>call: 9754245425</p>

                </div>
              </div>
            </div></button>

            {/* Cards */}
            <button className='border-0' data-bs-toggle="modal" data-bs-target="#profile"> 
            <div class="col">
              
              <div class="card h-100 w-100 border ">
                <img src="/asset/man2.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h3 className='fst-italic text-center'>Victor</h3>
                  <p className='fst-italic text-center text-success'>Industrial Plumber</p>
                  <p className='fst-italic text-center text-primary'>call: 9754245425</p>
                </div>
              </div>
            </div>
            </button>


            {/* Cards */}
            <button className='border-0' data-bs-toggle="modal" data-bs-target="#profile"> 
            <div class="col">
              <div class="card h-100 w-100 border ">
                <img src="/asset/man3.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h3 className='fst-italic text-center'>Maxwel</h3>
                  <p className='fst-italic text-center text-success'>Drainage Plumber</p>
                  <p className='fst-italic text-center text-primary'>call: 9754245425</p>
                </div>
              </div>
            </div>
            </button>

          </div>
          <div class="row row-cols-1 row-cols-md-3 p-5 " style={{ marginRight: "30px" }}>

            {/* Cards */}
            
            <div class="col">
              <div class="card h-100 w-100 border ">
                <img src="/asset/main.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h3 className='fst-italic text-center'>Augastin</h3>
                  <p className='fst-italic text-center text-success'>Pipefitter Plumber</p>
                  <p className='fst-italic text-center text-primary'>call: 9754245425</p>
                </div>
              </div>
            </div>

            {/* Cards */}



            <div class="col">
              <div class="card h-100 w-100 border ">
                <img src="/asset/man6.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h3 className='fst-italic fs-5 text-center'>Mariya</h3>
                  <p className='fst-italic text-center text-success'>Residential Plumber</p>
                  <p className='fst-italic text-center text-primary'>call: 9754245425</p>
                </div>
              </div>
            </div>


            {/* Cards */}


            <div class="col">
              <div class="card h-100 w-100 border ">
                <img src="/asset/man5.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h3 className='fst-italic text-center'>Martiness</h3>
                  <p className='fst-italic text-center text-success'>Journeyman Plumber</p>
                  <p className='fst-italic text-center text-primary'>call: 9754245425</p>
                </div>
              </div>
            </div>

          </div>


        </div>
      </div>

      <div class="modal fade" id="profile" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
      
      </div>
      <div class="modal-body">
  jhbjhdbcjbcdhjbd
  dkjdskbkds
  dcddkj
      </div>
      <div class="modal-footer">

      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Profile