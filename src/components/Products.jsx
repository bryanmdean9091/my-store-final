// import { useEffect, useState } from "react";
import "./Products.css";
import { MDBBtn } from "mdb-react-ui-kit";
 import { Link } from "react-router-dom";

function Products({filteredProducts, productFunc}) {
 


  return (
    <>
   
      <div className="p-5 text-center bg-image shop-pic head">
   
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="container-fluid product-wrap">
              {filteredProducts.map((item) => (
                
                  <div key={item.id}>
                  <Link to="/details">
                    <img
                      src={item.image}
                      className="rounded-3 img-fluid prdct m-4 "
                      alt={item.title}
                      onClick={() => productFunc(item.id)}
                    />
                    </Link>
                  </div>
               
              ))}
              {/* <Link to="/departments">
          <MDBBtn
            outline
            size="lg"
            className="sign-in font-weight-bold back-product"
            // onClick={() => callApi(data.category)}
          >
           Back
          </MDBBtn>
        </Link> */}
            </div>
          </div>
        </div>
      </div>
      <div className="product-backBtn">
      <Link to="/departments">
    <MDBBtn
      outline
      size="lg"
      className="sign-in font-weight-bold back-product"
      // onClick={() => callApi(data.category)}
    >
      <i className="fas fa-angle-left "></i>
    </MDBBtn>
  </Link>
  </div>
    
      </>
  );
}
export default Products;