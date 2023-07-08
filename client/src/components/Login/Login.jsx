import React from 'react'

function Login() {
  return (
    <>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header content-center">
                            <h1 class="modal-title fs-5 text-center" id="exampleModalLabel">LOGIN FORM</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" />
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer" style={{ marginRight: "120px" }}>
                            <button type="button" class="btn btn-primary">LOGIN</button>
                     <a type="button" class="btn btn-success"  data-bs-toggle="modal" data-bs-target="#registermodal">REGISTRATION</a> 
                        </div>
                    </div>
                </div>
            </div>

    </>
  )
}

export default Login