/*
 * Copyright (c) 2021.
 * Joey Stoetzel, github.com/Joeyrstz
 * This project is part of my portfolio and was developed for educational and presentation purposes.
 * The use of the project for internal, external or profit-oriented purposes is prohibited without my consent.
 */

import React from "react";
import "./checkout-item.styles.scss";
import {clearItem} from "../../redux/cart/cart.actions";
import {connect} from "react-redux";

const CheckoutItem = ({item, clearItem}) => (
  <div className="checkout-item">
      <div className="image-container">
          <img alt="item" src={item.imageUrl}/>
      </div>
      <span className="name">{item.name}</span>
      <span className="quantity">{item.quantity}</span>
      <span className="price">${item.price}</span>
      <div className="remove-button" onClick={() => clearItem(item)}>&#10008;</div>
  </div>
);
const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItem(item))
})
export default connect(null, mapDispatchToProps)(CheckoutItem);