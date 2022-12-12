import React from "react";
import './Checkout.css';
import { MDBBtn } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";


export default function Checkout({price, setCartCount}) {

const resetCart = ()=> {
  setCartCount(0)
}
 
  return (
    <div className="p-5 text-center bg-image shop-pic checkout-page">
    <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
      <div className="d-flex justify-content-center align-items-center h-100">
      <div className="container credit-box p-0">
        <div className="card px-4">
            <p className="h8 py-3">Payment Details</p>
            <div className="row gx-3">
                <div className="col-12">
                    <div className="d-flex flex-column">
                        <p className="text mb-1"> Name</p>
                        <input className="form-control mb-3" type="text" placeholder="Name" value="" required/>
                    </div>
                </div>
                <div className="col-12">
                    <div className="d-flex flex-column">
                        <p className="text mb-1">Card Number</p>
                        <input className="form-control mb-3" type="text" placeholder="1234 5678 435678" required/>
                    </div>
                </div>
                <div className="col-6">
                    <div className="d-flex flex-column">
                        <p className="text mb-1">Expiration Date</p>
                        <input className="form-control mb-3" type="text" placeholder="MM/YYYY" required/>
                    </div>
                </div>
                <div className="col-6">
                    <div className="d-flex flex-column">
                        <p className="text mb-1">CVV/CVC</p>
                        <input className="form-control mb-3 pt-2 " type="password" placeholder="***" required/>
                    </div>
                </div>
                
                <div className="col-12">
                <Link to="/confirm">
                    <div className="btn credit-btn mb-3"
                    onClick={()=> resetCart()}
                    >
                        <span className="ps-3">Pay ${price}</span>
                        <span className="fas fa-arrow-right"></span>
                    </div>
                    </Link>
                </div>
                
                <Link to="/cart">
    <MDBBtn
                        outline
                        size="lg"
                        className="sign-in font-weight-bold credit-btn mb-3"
                      >
                       Back
                      </MDBBtn>
                      </Link>
            </div>
        </div>
    </div>   
   



      </div>
    </div>
  </div>








   
  );
}

