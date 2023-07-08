import React from 'react'


function Register() {
  return (

    <>


      <div class="modal fade" id="registermodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">REGISTER FORM</h1>
              

            </div>
            <div class="modal-body">

              <form > 
              <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Name:</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
              <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Number</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="modal-footer" style={{ marginRight: "120px" }}>
                            <button type="button" class="btn btn-primary  " >SUBMIT</button>
                            <button type="button" class="btn btn-secondary " data-bs-dismiss="modal" aria-label="Close">CLOSE</button>
                        </div>
              </form> 
            </div>
          </div>
        </div>
      </div>





    </>
  )
}

export default Register