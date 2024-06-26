import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const Navigate = useNavigate ();
  const loginInfo = JSON.parse(localStorage.getItem('login'));
  const isLogin = loginInfo
  console.log(loginInfo,"login info")

  function Loginbtn() {
    Navigate("/Login")
    
  } 

  const handleLogout=()=>{
    localStorage.removeItem('login') 
    Navigate('/login')
  }
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand" href="#">
            {" "}
            E - FRAMING
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Product">
                  Product
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Service">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Contactus">
                  Contact Us
                </a>
              </li>
              <li class="nav-item">
                <a class="cart-icon" href="/Cart">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="#198754"
                    class="bi bi-cart-fill"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                  </svg>
                </a>
              </li>
             { !isLogin ? <li class="nav-item">
                <button type="button" class="btn btn-success" onClick={Loginbtn} >
                  login 
                </button>
              </li> :
              <li class="nav-item">
              <button type="button" class="btn btn-success" onClick={handleLogout} >
                Logout
              </button>
            </li>
              }
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
