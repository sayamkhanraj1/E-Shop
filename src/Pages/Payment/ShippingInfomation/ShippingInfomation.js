import React from 'react';
import { NavLink } from 'react-router-dom';
import './ShippingInformation.css'

const ShippingInfomation = () => {
         return (
                  <div className="container">
                     <div className="me-auto my-4">
                        <NavLink to="/login">
                        <button className="regular-btn">LOGIN</button>
                        </NavLink>
                        <NavLink to="/singup">
                        <button className="regular-btn">
                        SIGN UP
                        </button>
                        </NavLink>
                      </div>
                     <div>
                              <h5 className="ms-3 my-4">Shipping Information</h5>
                             <div className="d-flex">
                             <input className="shipping-form" type="text" placeholder="Email"></input>
                              <input className="shipping-form" type="text" placeholder="Address"></input>
                             </div>
                     </div>
                     <div>
                     <div className="d-flex">
                             <input className="shipping-form" type="text" placeholder="Frist Name"></input>
                              <input className="shipping-form" type="text" placeholder="City"></input>
                             </div>
                     </div>
                     <div>
                     <div className="d-flex">
                            <div>
                            <input className="shipping-form" type="text" placeholder="Last Name"></input>
                              <input className="shipping-form" type="text" placeholder="Postal Code / Zip"></input>
                            </div>
                             </div>
                     </div>
                     <div>
                     <div className="d-flex">
                             <input className="shipping-form" type="text" placeholder="Phone Number"></input>
                              <input className="shipping-form" type="text" placeholder="Poland"></input>
                             </div>
                     </div>
                  </div>
         );
};

export default ShippingInfomation;