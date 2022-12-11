import React from 'react';
import './Home.css'
// import {  MDBBtn } from "mdb-react-ui-kit";
import { Link } from 'react-router-dom';

export default function Home({fetchProducts}) {
  return (
    <>
    <div className="p-5 text-center bg-image shop-pic head">
    <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="text-white">
          <h1 className="mb-3 store-name display-1">Fill the Void</h1>
          <h3 className="mb-3 title-2">..with more stuff</h3>
          <Link to="/departments">
          <button onClick={()=> fetchProducts()} className="sign-in font-weight-bold">
            Shop Now!
          </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
</>
  )
}
