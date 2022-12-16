import React, { useEffect } from "react";
import "./Cart.css";
import { MDBBtn } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

export default function Cart ({ cartItem, setCartItem, loading, setTotal, total }) {
  

  const subTotal = () => {
    if (cartItem.length === 0) {
      setTotal(0);
      return;
    }
    const totalItemsCost = [];
    for (let item of cartItem) {
      totalItemsCost.push(item.totalCost);
    }
    const grandTotal = totalItemsCost.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
    setTotal(grandTotal * 0.075 + grandTotal);
  };

  const cartRemove = (itemId) => {
    setCartItem((currentCart) => {
      return currentCart.filter((item) => item.id !== itemId);
    });
    subTotal();
  };

  useEffect(() => {
    subTotal();
  }, [cartItem.length]);
  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="p-5 container-fluid text-center cart-contain shop-pic ">
          <div
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="container-fluid cart-wrap">
                <div className="col mt-3">
                  <div className="card  checkout-card h-100">
                    <Link to="/details">
                      <MDBBtn
                        outline
                        size="lg"
                        className="sign-in font-weight-bold mt-3"
                      >
                        Back
                      </MDBBtn>
                    </Link>
                    <div className="card-footer checkout-footer d-flex">
                      <Link to="/checkout">
                        <MDBBtn
                          outline
                          size="lg"
                          className="sign-in font-weight-bold checkout mb-3"
                        >
                          <i className="fas fa-check"></i>
                        </MDBBtn>
                      </Link>
                      <div>
                        <MDBBtn
                          outline
                          size="lg"
                          className="sign-in font-weight-bold price mt-3"
                        >
                          ${total.toFixed(2)}
                        </MDBBtn>
                      </div>
                    </div>
                  </div>
                </div>
                {cartItem.map((item) => {
                  return (
                    <div key={item.id} className="col mt-3">
                      <div className="card cart-card h-100 ">
                        <div className="cart-pic-frame">
                          <img
                            src={item.image}
                            className="card-img-top bg-img mt-2"
                            alt={item.title}
                          />
                        </div>
                        <div className="card-body">
                          <h5 className="dept-card-title cart-title">
                            {item.title}
                          </h5>
                          <p className="price-cart">${item.price.toFixed(2)}</p>
                          <div className="card-footer cart-footer d-flex justify-content-center p-0">
                            <div className="remove">
                              <p>Remove </p>
                              <i
                                className="fas fa-window-close"
                                onClick={() => cartRemove(item.id)}
                              ></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
