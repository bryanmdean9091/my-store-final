import React, { useState } from "react";
import "./Checkout.css";
import { Link, useNavigate } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

export default function Checkout({ loading,  user, setUser, setCartItem, tax }) {
  const [inputs, setInputs] = useState({});
  const [btn, enableBtn] = useState(true);

  const Navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    setUser(inputs.firstName);
    console.log(user);
    if (inputs.value != "") {
      enableBtn(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCartItem([])
    Navigate('/confirm')
  };

  return (
    <>
    {loading ? (
      <LoadingSpinner />
    ) : (
    <div className="p-5 text-center bg-image shop-pic checkout-page">
      <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="container p-0">
            <div className="card credit-box px-4">
              <form onSubmit={(e) => handleSubmit(e)}>
                <p className="h8 text py-3">Payment Details</p>
                <p className="h8 text mt-0 bg-success">Total:{tax.toFixed(2)}</p>
                <div className="row gx-3">
                  <div className="col-6">
                    <div className="d-flex flex-column">
                      <p className="text mb-1">First Name</p>
                      <input
                        className="form-control mb-2"
                        type="text"
                        name="firstName"
                        value={inputs.firstName || ""}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex flex-column">
                      <p className="text mb-1">Last Name</p>
                      <input
                        className="form-control mb-2 pt-2 "
                        type="text"
                        name="lastName"
                        value={inputs.lastName || ""}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="d-flex flex-column">
                      <p className="text mb-1">Street Address</p>
                      <input
                        className="form-control mb-2 pt-2 "
                        type="text"
                        name="address"
                        value={inputs.address || ""}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="d-flex flex-column">
                      <p className="text mb-1">City</p>
                      <input
                        className="form-control mb-2"
                        type="text"
                        name="city"
                        value={inputs.city || ""}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="d-flex flex-column">
                      <p className="text mb-1">State</p>
                      <input
                        className="form-control mb-2 pt-2 "
                        type="text"
                        name="state"
                        value={inputs.state || ""}
                        onChange={handleChange}

                        maxLength={2}
                        pattern="[A-Z]{2}"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="d-flex flex-column">
                      <p className="text mb-1">Zip</p>
                      <input
                        className="form-control mb-2 pt-2 "
                        type="text"
                        name="zip"
                        value={inputs.zip || ""}
                        onChange={handleChange}
                        maxLength={5}
                        pattern="[0-9]{5}"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="d-flex flex-column">
                      <p className="text mb-1">Card Number</p>
                      <input
                        className="form-control mb-2"
                        type="password"
                        name="card"
                        value={inputs.card || ""}
                        onChange={handleChange}
                        placeholder="1234 5678 1234 5678"
                        maxLength={16}
                        pattern="[0-9]{16}"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex flex-column">
                      <p className="text mb-1">Expiration Date</p>
                      <input
                        className="form-control mb-2"
                        type="text"
                        name="expire"
                        value={inputs.expire || ""}
                        onChange={handleChange}
                        placeholder="MM/YYYY"
                        maxLength={6}
                        pattern="[0-9]{6}"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex flex-column">
                      <p className="text mb-1">CVV/CVC</p>
                      <input
                        className="form-control mb-2 pt-2 "
                        type="password"
                        name="cvc"
                        value={inputs.cvc || ""}
                        onChange={handleChange}
                        placeholder="***"
                        maxLength={3}
                        minLength={3}
                        pattern="[0-9]{3}"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <Link to="/cart">
                      <i className="fas fa-angle-left checkout-back me-3 "></i>
                    </Link>
                      <input
                        type="submit"
                        className="credit-btn mb-3 subPay"
                        disabled={btn}
                      />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    )}
    </>
  );
}
