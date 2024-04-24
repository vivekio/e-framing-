import React from 'react'

export default function Foote() {
  return (
    <>
    <div>
       <footer class="bg-dark text-white py-5">
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <h5>About Us</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam facilisis libero vel mauris eleifend, vitae bibendum
                  metus facilisis.
                </p>
              </div>
              <div class="col-md-4">
                <h5>Quick Links</h5>
                <ul class="list-unstyled">
                  <li>
                    <a href="/Home" class="text-white">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-white">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="/Service" class="text-white">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="/Contactus" class="text-white">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-md-4">
                <h5>Contact Us</h5>
                <ul class="list-unstyled">
                  <li>
                    <i class="fas fa-map-marker-alt"></i> GANDHIGRAM , RAJKOT 
                  </li>
                  <li>
                    <i class="fas fa-phone"></i> +91 9510558572
                  </li>
                  <li>
                    <i class="fas fa-envelope"></i> Pankhaniyavivek10@gmail.com
                  </li>
                </ul>
              </div>
            </div>
            <hr class="bg-white" />
            <div class="row">
              <div class="col-md-12 text-center">
                <p>&copy; 2024 Your Company. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
    </div>
    </>
  )
}
