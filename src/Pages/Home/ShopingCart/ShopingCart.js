import React, { useEffect, useState } from "react";
import "./ShopingCart.css";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import { FiTruck } from "react-icons/fi";

const ShopingCart = () => {
         const [cartProducts, setCartProducts] = useState([]);
         
         useEffect(() => {
                  fetch("./myCart.json")
                    .then((res) => res.json())
                    .then((data) => setCartProducts(data));
                }, []);
        
  return (
    <div className="cart">
      <div className="cart-and-delivery-icons d-flex flex-row justify-content-center align-items-center ">
        <BsCart2 className="cart-icon" />
        <div className="straight-line"></div>
        <MdOutlineDeliveryDining className="delivery-icon" />
      </div>
      <h6>Your Cart</h6>
      {cartProducts.map((product, index) => (
        <div className="cart-item d-flex flex-row" key={index}>
          <div className="d-flex flex-row">
            <img src={product.imageUrl} width="40px" alt="" />
            <div className="product-name-and-id">
              <p>{product.productName}</p>
              <p id="product-id"> #{product.id}</p>
            </div>
          </div>
          <p className="product-price">${product.price}</p>
        </div>
      ))}
      <div>
        <button className="total-cost-button">
          Total Cost &nbsp;&nbsp;&nbsp; $159.98{" "}
        </button>
      </div>
      <div className="d-flex flex-row justify-content-center align-items-center mt-4 gap-2">
        <FiTruck className="truck-icon" />
        <p className="m-0">
          You are $30.02 away <br /> from free shipping!
        </p>
      </div>
    </div>
  );
};

export default ShopingCart;
