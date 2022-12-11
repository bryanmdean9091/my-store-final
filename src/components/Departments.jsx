import React from "react";
import "./Departments.css";
 import { Link } from "react-router-dom";

export default function Departments({categoryFunc}) {
  

  return (
    <header>
      <div className="p-5 text-center bg-image shop-pic head">
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="container-fluid product-wrap">
              <div className="col">
              <Link to="/products">
                <div
                  className="card dept-card h-100"
                   onClick={() => categoryFunc("electronics")}
                >
                  <img
                    src={require("../media/electronics1.png")}
                    className="card-img-top bg-img"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="dept-card-title text-black">Electronics</h5>
                    <div className="card-footer d-flex justify-content-center"></div>
                  </div>
                </div>
                </Link>
              </div>
              <div className="col">
              <Link to="/products">
                <div
                  className="card dept-card h-100"
                  onClick={() => categoryFunc("jewelery")}
                >
                  <img
                    src={require("../media/jewelery2.png")}
                    className="card-img-top bg-img"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="dept-card-title text-black">Jewelery</h5>
                    <div className="card-footer d-flex justify-content-center"></div>
                  </div>
                </div>
                </Link>
              </div>
              <div className="col"> 
              <Link to="/products">
                <div
                  className="card dept-card h-100"
                  onClick={() => categoryFunc("men's clothing")}
                >
                  <img
                    src={require("../media/men5.png")}
                    className="card-img-top bg-img"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="dept-card-title text-black">
                      Men's Clothing
                    </h5>
                    <div className="card-footer d-flex justify-content-center"></div>
                  </div>
                </div>
                </Link>
              </div>
              <div className="col">
              <Link to="/products">
                <div
                  className="card dept-card h-100"
                  onClick={() => categoryFunc("women's clothing")}
                >
                  <img
                    src={require("../media/women2.png")}
                    className="card-img-top bg-img"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="dept-card-title text-black">
                      Women's Clothing
                    </h5>
                    <div className="card-footer d-flex justify-content-center"></div>
                  </div>
                </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}