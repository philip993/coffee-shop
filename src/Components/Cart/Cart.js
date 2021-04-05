import React from 'react';
import './CartStyle.scss';
import Navbar from '../Navbar/Navbar';
import EspressoImg from '../../img/espresso.jpg';

const Cart = () => {
  return (
    <div className="cart">
      <Navbar />
      <div className="cartFirstDiv">
        <h1>Shopping Cart</h1>
      </div>
      <div className="cartSecondDiv">
        <div className="cartItems">
          <div className="cartItem">
            <img className="itemImage" src={EspressoImg} alt="espresso" />
            <span className="info">
              <h4 className="name">Espresso</h4>
              <h4 className="quantity">Quantity: 2</h4>
              <h4 className="price">Price: $2.00</h4>
            </span>
            <span className="total">
              <h4>$4.00</h4>
            </span>
          </div>
          <div className="cartItem">
            <img className="itemImage" src={EspressoImg} alt="espresso" />
            <span className="info">
              <h4 className="name">Americano</h4>
              <h4 className="quantity">Quantity: 2</h4>
              <h4 className="price">Price: $2.00</h4>
            </span>
            <span className="total">
              <h4>$4.00</h4>
            </span>
          </div>
          <div className="cartItem">
            <img className="itemImage" src={EspressoImg} alt="espresso" />
            <span className="info">
              <h4 className="name">Decaf</h4>
              <h4 className="quantity">Quantity: 1</h4>
              <h4 className="price">Price: $2.00</h4>
            </span>
            <span className="total">
              <h4>$2.00</h4>
            </span>
          </div>
        </div>
        <div className="cartSummary">
          <div className="summaryAmount">
            <span className="title">
              <h4>Cart Summary</h4>
            </span>
            <span>
              <h4>Subtotal</h4>
              <h4 className="amount">$10.00</h4>
            </span>
            <span>
              <h4>Discount</h4>
              <h4 className="amount">-$2.00</h4>
            </span>
            <span className="total">
              <h4>Total</h4>
              <h4 className="totalAmount">$8.00</h4>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
