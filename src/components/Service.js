import React from 'react'
import Navbar from './Navbar'

export default function service() {
  return (
   <>
   <Navbar></Navbar>
   <div class="container my-5">
    <h1 class="text-center mb-5">Our Services</h1>
    <div class="row">
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="service1.jpg" class="card-img-top" alt="Service 1"/>
          <div class="card-body">
            <h5 class="card-title">Farm Management</h5>
            <p class="card-text">We provide comprehensive farm management services to help you maximize efficiency and profitability.</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="service2.jpg" class="card-img-top" alt="Service 2"/>
          <div class="card-body">
            <h5 class="card-title">Crop Monitoring</h5>
            <p class="card-text">Our advanced crop monitoring solutions help you track growth, identify issues, and make data-driven decisions.</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="service3.jpg" class="card-img-top" alt="Service 3"/>
          <div class="card-body">
            <h5 class="card-title">Precision Agriculture</h5>
            <p class="card-text">Leverage precision agriculture technologies to optimize resource use, reduce waste, and increase yields.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="service4.jpg" class="card-img-top" alt="Service 4"/>
          <div class="card-body">
            <h5 class="card-title">Soil Analysis</h5>
            <p class="card-text">Get detailed soil analysis reports and recommendations for optimal crop growth and soil health.</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="service5.jpg" class="card-img-top" alt="Service 5"/>
          <div class="card-body">
            <h5 class="card-title">Irrigation Management</h5>
            <p class="card-text">Our smart irrigation systems help you conserve water, improve crop yields, and reduce operational costs.</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="service6.jpg" class="card-img-top" alt="Service 6"/>
          <div class="card-body">
            <h5 class="card-title">Agri-Consultancy</h5>
            <p class="card-text">Get expert advice and guidance from our experienced agricultural consultants.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
   </>
  )
}

