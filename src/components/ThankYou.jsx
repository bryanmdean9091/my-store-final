import React, { useEffect } from 'react';
import './ThankYou.css';
import LoadingSpinner from './LoadingSpinner';
import { MDBBtn } from "mdb-react-ui-kit";
import { Link } from 'react-router-dom';

export default function ThankYou({ loading, user}) {

    let randomString = () =>
    {
    let chars ="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = '';
    for (var i = 8; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
    }
    let randomNumber = randomString();
    console.log(randomNumber)

   useEffect(() => {
   randomString()
   
   },[])
 


  return (
    <>
     {loading ? (
        <LoadingSpinner />
      ) : (
    <div className="p-5 text-center bg-image shop-pic ">
    <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="text-white">
          <h1 className="mb-3 store-name display-1">Fill the Void</h1>
          <h1 className='thanks'>Thank You, {user}</h1>
          <h3 className='order'>Your Order Is On Its Way!</h3>
          <h4>Your Confirmation Code is:</h4>
          <h5 className='confirmation'>{randomNumber}</h5>
          <Link to="/">
          <MDBBtn outline size="lg" className="sign-in shop-now font-weight-bold mt-3">
                  Home
                </MDBBtn>
                </Link>
        </div>
      </div>
     
    </div>
  </div>
      )}
  </>
  )
}
