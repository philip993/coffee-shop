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
          <h1>Items</h1>
          <div className="cartItem">
            <img className="itemImage" src={EspressoImg} alt="espresso" />
            <span>
              <h4>Espresso</h4>
              <h4>2 * $2.00</h4>
            </span>
            <h4>$4.00</h4>
          </div>
        </div>
        <div className="cartSummary">
          <h1 className="summaryTitle">Cart Summary</h1>
          <div className="summaryAmount">
            <span>
              <h4>Subtotal</h4>
              <h4>$10.00</h4>
            </span>
            <span>
              <h4>Discount</h4>
              <h4>-$2.00</h4>
            </span>
            <span>
              <h4>Total</h4>
              <h4>$8.00</h4>
            </span>
            {/* <h4>Subtotal: $10.00</h4>
            <h4>Discount: -$2.00</h4>
            <h4>Total: $8.00</h4> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
