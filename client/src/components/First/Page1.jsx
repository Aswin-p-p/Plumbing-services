import React from 'react'
import './page1.css'
import Content from '../content/Content'


function Page1() {
  return (
       <> 
    
        {/* <div className="row"> 
     
        <img src="/asset/pluber.jpg" alt="" />
         
       <div className="container-fluid" id='cont'>
       <div className="text-block">
          <Content/>
       </div>
       </div>
     

       </div>                        */}


<div class="image-container">
        <img src="/asset/pluber.jpg" alt="Image"/>
        <div class="text-overlay">
            <Content/>
        </div>
    </div>
    
       
       </>
  )
}

export default Page1