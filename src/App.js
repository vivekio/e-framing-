import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Product from "./components/Product"
import Service from "./components/Service"
import Contactus from "./components/Contactus"
import Login from "./components/Login";
import Cart from "./components/Cart";
import Foote from "./components/Foote";

// import { firebaseConfig } from './firebase.config';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Product" element={<Product/>}></Route>
          <Route path="/Service" element={<Service/>}></Route>
          <Route path="/Contactus" element={<Contactus/>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
          <Route path="/Cart" element={<Cart/>}></Route>
          <Route path="/Foote" element={<Foote/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
