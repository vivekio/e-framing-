import React from "react";
import Navbar from "./Navbar";
import pic1 from "./Farmer-bro.png";
import pic2 from "./Country side-pana.png";
import pic3 from "./Blood test-bro.png";
import Foote from "./Foote";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <section class="py-5">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-6">
                <h1>Welcome to E-Framing</h1>
                <p class="lead">
                  We provide high-quality digital framing services for your
                  precious memories.
                </p>
                <a href="#">
                  <button type="button" class="btn btn-dark">
                    Get Start
                  </button>
                </a>
              </div>
              <div class="col-md-6">
                <img src={pic1} alt="TrackMate XE" class="img-fluid" />
              </div>
            </div>
          </div>
        </section>
        <section class="py-5">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-6">
                <img src={pic2} alt="TrackMate XE" class="img-fluid" />
              </div>
              <div class="col-md-6">
                <h1>AGRICULTURE.</h1>
                <p class="lead">
                  Agriculture is an important part of the Indian economy. India
                  is one of the world's largest producers of milk, pulses,
                  spices, rice, wheat, cotton, and sugarcane. It is also a major
                  exporter of agricultural products. Indian agriculture is
                  characterized by small landholdings, dependence on monsoons,
                  and a diverse range of crops. The average landholding size in
                  India is less than 2 hectares, and more than 85% of farmers
                  hold less than 2 hectares of land. Indian agriculture is
                  heavily dependent on the monsoon rains, which provide about
                  70% of the country's annual rainfall. Any variation in the
                  monsoon pattern can have a significant impact on crop yields
                  and farm incomes.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section class="py-5">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-6">
                <h1>AGRICULTURE Products</h1>
                <p class="lead">
                  Agricultural products can be broadly grouped into foods,
                  fibers, fuels, and raw materials. Some examples of
                  agricultural products include:
                  <br />{" "}
                  <ul>
                    <li>
                      Foods: Cereals, vegetables, fruits, cooking oils, meat,
                      milk, eggs, and fungi
                    </li>
                    <li>
                      {" "}
                      Other foods: Pulses, nuts, sugar and starch, fiber crops,
                      narcotics, spices and condiments, and rubber forages{" "}
                    </li>
                    <li>
                      Other products: Coffee beans, palm oil, beef, cotton, and
                      rubbe
                    </li>
                  </ul>
                </p>
              </div>
              <div class="col-md-6">
                <img src={pic3} alt="TrackMate XE" class="img-fluid" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Foote></Foote>
    </>
  );
}
