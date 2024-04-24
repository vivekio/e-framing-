import React from 'react'
import Navbar from './Navbar'
import Foote from './Foote'

export default function Product() {
  return (
  <>
  <Navbar>
  </Navbar>
  <div class="container my-5">
    <h1 class="text-center mb-5">Our Products</h1>
    <div class="row">
      <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
        <div class="card">
          <img src="product1.jpg" class="card-img-top" alt="Product 1"/>
          <div class="card-body">
            <h5 class="card-title">Product 1</h5>
            <p class="card-text">Description of Product 1.</p>
            <a href="#" class="btn btn-primary">Buy Now</a>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
        <div class="card">
          <img src="product2.jpg" class="card-img-top" alt="Product 2"/>
          <div class="card-body">
            <h5 class="card-title">Product 2</h5>
            <p class="card-text">Description of Product 2.</p>
            <a href="#" class="btn btn-primary">Buy Now</a>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
        <div class="card">
          <img src="product3.jpg" class="card-img-top" alt="Product 3"/>
          <div class="card-body">
            <h5 class="card-title">Product 3</h5>
            <p class="card-text">Description of Product 3.</p>
            <a href="#" class="btn btn-primary">Buy Now</a>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
        <div class="card">
          <img src="product4.jpg" class="card-img-top" alt="Product 4"/>
          <div class="card-body">
            <h5 class="card-title">Product 4</h5>
            <p class="card-text">Description of Product 4.</p>
            <a href="#" class="btn btn-primary">Buy Now</a>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
        <div class="card">
          <img src="product5.jpg" class="card-img-top" alt="Product 5"/>
          <div class="card-body">
            <h5 class="card-title">Product 5</h5>
            <p class="card-text">Description of Product 5.</p>
            <a href="#" class="btn btn-primary">Buy Now</a>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
        <div class="card">
          <img src="product6.jpg" class="card-img-top" alt="Product 6"/>
          <div class="card-body">
            <h5 class="card-title">Product 6</h5>
            <p class="card-text">Description of Product 6.</p>
            <a href="#" class="btn btn-primary">Buy Now</a>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
        <div class="card">
          <img src="product7.jpg" class="card-img-top" alt="Product 7"/>
          <div class="card-body">
            <h5 class="card-title">Product 7</h5>
            <p class="card-text">Description of Product 7.</p>
            <a href="#" class="btn btn-primary">Buy Now</a>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
        <div class="card">
          <img src="product8.jpg" class="card-img-top" alt="Product 8"/>
          <div class="card-body">
            <h5 class="card-title">Product 8</h5>
            <p class="card-text">Description of Product 8.</p>
            <a href="#" class="btn btn-primary">Buy Now</a>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
        <div class="card">
          <img src="product9.jpg" class="card-img-top" alt="Product 9"/>
          <div class="card-body">
            <h5 class="card-title">Product 9</h5>
            <p class="card-text">Description of Product 9.</p>
            <a href="#" class="btn btn-primary">Buy Now</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Foote></Foote>
    </>
  )
}
