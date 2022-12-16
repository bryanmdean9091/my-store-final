import React from "react";
import "./NavBar.css";
import { MDBNavbar, MDBContainer, MDBIcon, MDBBadge } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function NavBar({cartItem}) {
 
  return (
    <MDBNavbar bgColor="#39545a" className="shadow-none">
      <MDBContainer fluid className="nav-contain d-flex align-items-center">
        <Link to="/departments">
        <div className="logo">Fill the Void &nbsp; &nbsp;Departments</div>
        </Link>
        <div className="cart-box">
          <MDBBadge pill color="danger">
            {cartItem.length}
          </MDBBadge>
          <span>
            <MDBIcon className="cart mx-2" fas icon="shopping-cart"
            ></MDBIcon>
          </span>
        </div>
      </MDBContainer>
    </MDBNavbar>
  );
}
