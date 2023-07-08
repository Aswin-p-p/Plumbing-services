import React from 'react'
import Register from '../Register/Register'
import Login from '../Login/Login'

function MainNav() {
    return (
        <>
            <nav class="navbar navbar-expand-lg  p-0  "
                style={{ backgroundColor: "white", margin: "0px" }}
            >
                <div class="container-fluid d-flex " >
                    <a class="navbar-brand fs-1 fw-bold ps-5 text-info" style={{ fontFamily: 'Lora', SerifFontFamily: 'Stylish', }}>Dr.Plumber</a>
                    <button class="navbar-toggler  fst-italic" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul class="navbar-nav ">
                            <li class="nav-item  ">
                                <a class="nav-link fs-6 fst-italic fw-bold p-2 text-info" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link fs-6 fst-italic fw-bold ms-3" href="#about">ABOUT</a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link fs-6 fst-italic fw-bold ms-3" href="#">SERVICES</a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link fs-6 fst-italic fw-bold ms-3" href="#">TECHNITIANS</a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link fs-6 fst-italic fw-bold ms-3" href="#">REVIEW</a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link fs-6 fst-italic fw-bold ms-3" href="#">CONTACT</a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link fs-6 fst-italic fw-bold ms-3" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">LOGIN</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

         <Login/>

        <Register/>






        </>
    )
}

export default MainNav