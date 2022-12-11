import React from "react";
import "./Cart.css";
import { MDBBtn } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function ({ cartItem }) {
  return (
    <div className="p-5 text-center bg-image shop-pic head">
      <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="container-fluid product-wrap">
            <div className="col">
              <div className="card dept-card h-100">
                <img
                  src={require("../media/electronics1.png")}
                  className="card-img-top bg-img"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="dept-card-title cart-title">
                    Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor
                    (LC49HG90DMNXZA) – Super Ultrawide Screen QLED{" "}
                  </h5>
                  <p className="price-cart">$999.99</p>
                  <div className="card-footer d-flex justify-content-center">
                    <div className="remove">
                      <p>Remove </p>
                      <i class="fas fa-window-close"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card dept-card checkout-card h-100">
                <Link to="/details">
                  <MDBBtn
                    outline
                    size="lg"
                    className="sign-in font-weight-bold mt-5 mx-2 me-2"
                  >
                    Back
                  </MDBBtn>
                </Link>

                {/* <img
                  src={require("../media/electronics1.png")}
                  className="card-img-top bg-img"
                  alt="..."
                /> */}
                <div className="card-body">
                  <div className="card-footer d-flex justify-content-center">
                    <MDBBtn
                      outline
                      size="lg"
                      className="sign-in font-weight-bold checkout"
                    >
                      <i class="fas fa-check"></i>
                    </MDBBtn>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* <div>
{cartItem.map((item)=> {
  return (
      <h1 key={item.id}>{item.title}</h1>
  )
})}
</div> */
