import React, { useState } from 'react'
import Navbar from './Navbar'
import Foote from './Foote'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
// import { db } from '../firebase'

export default function Contactus() {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [msg,setMsg]=useState("")


  const handleSubmit=async ()=>{
    const db = getFirestore();
    const Data={
      name:name,
      emial:email,
      message:msg
    }
    console.log(Data,"data")
    // const res = await db.collection('contact Users').add(Data);
    const res = await addDoc(collection(db,"contact Users"),Data);
    console.log("contect added", res);
  }
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
                <input type="text" class="form-control mt-4" id="name" placeholder="Enter your name"
                onChange={(e)=>setName(e.target.value)}/>
              </div>
              <div class="form-group mt-4">
                <label for="email">Email</label>
                <input type="email" class="form-control mt-4" id="email" placeholder="Enter your email"
                onChange={(e)=>setEmail(e.target.value)}/>
              </div>
              <div class="form-group mt-4">
                <label for="message">Message</label>
                <textarea class="form-control mt-4" id="message" rows="5" placeholder="Enter your message"
                onChange={(e)=>setMsg(e.target.value)}></textarea>
              </div>
              <button type="button" class="btn btn-dark mt-4" onClick={handleSubmit}>Submit</button>
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
