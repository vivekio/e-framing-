import React from 'react'
import Navbar from './Navbar'
import Foote from './Foote'

export default function Contactus() {
  return (
    <>
    <Navbar></Navbar>
    <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header bg-custom">
            <h4>Contact Us</h4>
          </div>
          <div class="card-body">
            <form >
              <div class="form-group mt-4">
                <label for="name">Name</label>
                <input type="text" class="form-control mt-4" id="name" placeholder="Enter your name"/>
              </div>
              <div class="form-group mt-4">
                <label for="email">Email</label>
                <input type="email" class="form-control mt-4" id="email" placeholder="Enter your email"/>
              </div>
              <div class="form-group mt-4">
                <label for="message">Message</label>
                <textarea class="form-control mt-4" id="message" rows="5" placeholder="Enter your message"></textarea>
              </div>
              <button type="button" class="btn btn-dark mt-4">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Foote></Foote>
    </>
  )
}
