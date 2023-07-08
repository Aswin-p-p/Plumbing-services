import React from 'react'

function Footer() {
  return (
    <>
    <div className="all">
    <div class="container" >
  <footer class="py-5">
    <div class="row" >
      <div class="col-6 col-md-2 mb-3">
        <h5>Address</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><p>Calicut SM Street ,kerala</p></li>
          <li class="nav-item mb-2"><p>PHONE : 9645343637</p></li>
          <li class="nav-item mb-2"><p>aswinpp684@gmail.com</p></li>
          <li class="nav-item mb-2"><p>FAQs</p></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted"><p className='text-white'>About</p></a></li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3">
        <h5>Opening Hour</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><p>Monday to Friday:</p></li>
          <li class="nav-item mb-2"><p>09.00AM - 09.00PM</p></li>
          <li class="nav-item mb-2">Saturday to Sunday</li>
          <li class="nav-item mb-2"><p>09:00AM - 12.00 PM</p></li>
          <li class="nav-item mb-2"><p>Emergancy Available</p></li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3">
        <h5>SERVICES</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><p>Dran cleaning</p></li>
          <li class="nav-item mb-2"><p>Sewer Line</p></li>
          <li class="nav-item mb-2"><p>Water Heating</p></li>
          <li class="nav-item mb-2"><p>Toilet cleaning</p></li>
          <li class="nav-item mb-2"><p>Broken Pipe</p></li>
        </ul>
      </div>

      <div class="col-md-5 offset-md-1 mb-3">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div class="d-flex flex-column flex-sm-row w-100 gap-2">
            <label for="newsletter1" class="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" class="form-control" placeholder="Email address"/>
            <button class="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>&copy; 2022 Company, Inc. it's me pp.</p>
      <ul class="list-unstyled d-flex">
        <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use href="#twitter"/></svg></a></li>
        <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use href="#instagram"/></svg></a></li>
        <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use href="#facebook"/></svg></a></li>
      </ul>
    </div>
  </footer>
</div>
</div>
    </>
  )
}

export default Footer