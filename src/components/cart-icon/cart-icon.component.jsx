/*
 * Copyright (c) 2021.
 * Joey Stoetzel, github.com/Joeyrstz
 * This project is part of my portfolio and was developed for educational and presentation purposes.
 * The use of the project for internal, external or profit-oriented purposes is prohibited without my consent.
 */

import React from "react";

import {ReactComponent as ShoppingIcon} from "../../internal-assets/shopping-bag.svg";
import "./cart-icon.styles.scss";

const CartIcon = () => (
    <div className="cart-icon">
        <ShoppingIcon className="icon-image"/>
        <span className="item-count"> 0 </span>
    </div>
)

export default CartIcon;