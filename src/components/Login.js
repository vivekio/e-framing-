import React, { useState } from "react";
import Navbar from "./Navbar";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { TextField } from "@mui/material";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebase";

export default function Login() {
  const [phone, setphone] = useState("");
  const [user, setuser] = useState(null);
  const [otp, setotp] = useState("");

  const sendOtp = async () => {
    try {
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
      const confirmation = signInWithPhoneNumber(auth, phone, recaptcha);
      console.log(confirmation);
      setuser(confirmation);
    } catch (error) {
      console.log(error);
    }
  };

  const verifyOtp = async () => {
    try {
      await user.confirm({ otp });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div class="container my-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8 col-lg-6">
          <div class="card">
          <div class="card-header bg-custom">
            <h4>Login Page</h4>
          </div>

            <div class="form-group ">
              <PhoneInput
                class="form-control mt-4"
                country={"in"}
                value={phone}
                onChange={(phone) => setphone("+" + phone)}
              />
            </div>
            <div class="form-group">
              <button
                onClick={sendOtp}
                variant="contained"
                class="btn btn-primary"
              >
                Send OTP
              </button>
            </div>
            <div id="recaptcha"></div>
            <br />
            <div class="form-group mt-4">
              <TextField
                onChange={(e) => setotp(e.target.value)}
                size="small"
                class="form-control"
              ></TextField>
            </div>
            <br />
            <div class="form-group mt-4">
              <button
                onClick={verifyOtp}
                variant="contained"
                class="btn btn-primary"
              >
                Verify OTP
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      {/* <div>
        <PhoneInput
          country={"in"}
          value={phone}
          onChange={(phone)=>setphone("+" + phone)}
        />
        <button onClick={sendOtp} variant="contained">send otp</button>
        <div id="recaptcha"></div>
        <br />
        <TextField onChange={(e)=> setotp(e.target.value)} size="small"></TextField>
        <br />
        <button onClick={verifyOtp} variant="contained">verify otp </button>
      </div> */}
    </>
  );
}
