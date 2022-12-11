import React, { useState} from "react";
import "./Details.css";
import { MDBBtn } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";


export default function Details({filteredItems, cartCount, setCartCount, cartUse, setCartItem}) {


  const cartAdd = (itemId) => {
    setCartCount(cartCount + 1)
    cartUse(itemId)
  
  }
  const cartRemove = (itemId) => {
     setCartItem(currentCart => {
      return currentCart.filter(item => item.id != itemId)
     })
      
    
  }
 
  return (
    <header>
      <div className="p-5 text-center shop-pic bg-image details-head head">
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
          <div className="d-flex  align-items-center h-100 mx-5 page">
            {filteredItems.map((item) => (
            <>
              <div key={item.id} className="container detailsPic-box">
                <img
                  src={item.image}
                  className="rounded-3 img-luid details-pic"
                  alt={item.title}
                />
              </div>
              <div className="container product-name">
                <h2 className="name-txt">{item.title}</h2>
                <p className="product-details">{item.description}</p>
                <div className="flex-column"></div>
                <div className="d-flex flex-row align-items-center justify-content-center me-5">
                  <h5 className="rating mx-1">Rating</h5>
                  <div className="ratings-box">
                    <p>{item.rating.rate}</p>
                  </div>
                  <h5 className="price mx-1">Price$</h5>
                  <div className="price-box">{item.price}</div>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-center mt-4 doo">
                <div className="cartBtns">
                  <MDBBtn
                    outline
                    size="lg"
                    className="sign-in font-weight-bold mx-1 "
                    // disabled='false'
                    onClick={()=> cartAdd(item.id)}
                  >
                    Add to Cart
                  </MDBBtn>
                  <MDBBtn
                    outline
                    size="lg"
                    className="sign-in font-weight-bold mx-1"
                    onClick={()=> cartRemove(item.id)}
                  >
                    Remove Item
                  </MDBBtn>
                  </div>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-center mt-4 doo">
                <div className="viewCart">
                  <Link to="/products">
                    <MDBBtn
                      outline
                      size="lg"
                      className="sign-in font-weight-bold mx-1 cart-btn"
                    >
                     <i size="2x" className="fas fa-angle-left "></i>
                    </MDBBtn>
                  </Link>
                  <Link to="/cart">
                    <MDBBtn
                      outline
                      size="lg"
                      className="sign-in font-weight-bold mx-1 cart-btn"
                    >
                     View Cart
                    </MDBBtn>
                  </Link>
                  </div>
                </div>
              </div>
            </>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}