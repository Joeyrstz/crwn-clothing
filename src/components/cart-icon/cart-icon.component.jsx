/*
 * Copyright (c) 2021.
 * Joey Stoetzel, github.com/Joeyrstz
 * This project is part of my portfolio and was developed for educational and presentation purposes.
 * The use of the project for internal, external or profit-oriented purposes is prohibited without my consent.
 */

import React from "react";

import {ReactComponent as ShoppingIcon} from "../../internal-assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import "./cart-icon.styles.scss";
import {selectItemCount} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="icon-image"/>
        <span className="item-count">{itemCount}</span>
    </div>
)

const mapStateToProps = createStructuredSelector({
    itemCount: selectItemCount//Selector for itemCount
})
const mapDispatchToProps = dispatch => (
    {
        toggleCartHidden: () => dispatch(toggleCartHidden())
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);