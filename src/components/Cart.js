import React from "react";
import Navbar from "./Navbar";
import Foote from "./Foote";

export default function Cart() {
  return (
    <>
      <Navbar></Navbar>
      
      <div class="container my-5">
        <h1 class="text-center mb-5">Shopping Cart</h1>
        <div class="row">
          <div class="col-md-8">
            <table class="table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <img
                        src="product1.jpg"
                        class="img-fluid rounded"
                        style={{ maxWidth: 100 }}
                        alt="Product 1"
                      />
                      <div class="ml-3">
                        <h5>Product 1</h5>
                        <p class="mb-0">Description of Product 1</p>
                      </div>
                    </div>
                  </td>
                  <td>$19.99</td>
                  <td>
                    <input
                      type="number"
                      class="form-control"
                      value="1"
                      min="1"
                      max="10"
                    />
                  </td>
                  <td>$19.99</td>
                  <td>
                    <button class="btn btn-danger">Remove</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <img
                        src="product2.jpg"
                        class="img-fluid rounded"
                        style={{ maxWidth: 100 }}
                        alt="Product 2"
                      />
                      <div class="ml-3">
                        <h5>Product 2</h5>
                        <p class="mb-0">Description of Product 2</p>
                      </div>
                    </div>
                  </td>
                  <td>$29.99</td>
                  <td>
                    <input
                      type="number"
                      class="form-control"
                      value="2"
                      min="1"
                      max="10"
                    />
                  </td>
                  <td>$59.98</td>
                  <td>
                    <button class="btn btn-danger">Remove</button>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="3" class="text-right font-weight-bold">
                    Total:
                  </td>
                  <td class="font-weight-bold">$79.97</td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div class="col-md-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Cart Summary</h5>
                <p class="card-text">Subtotal: $79.97</p>
                <p class="card-text">Shipping: $5.00</p>
                <hr />
                <p class="card-text font-weight-bold">Total: $84.97</p>
                <a href="#" class="btn btn-primary btn-block">
                  Checkout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Foote></Foote>
      </>
  );
}
