/*
 * Copyright (c) 2021.
 * Joey Stoetzel, github.com/Joeyrstz
 * This project is part of my portfolio and was developed for educational and presentation purposes.
 * The use of the project for internal, external or profit-oriented purposes is prohibited without my consent.
 */
import { CartActionTypes } from "./cart.types";
export const toggleCartHidden = () => (
    {
        type: CartActionTypes.TOGGLE_CART_HIDDEN
    }
)
export const addItem = cartItem => ({
    type: CartActionTypes.ADD_ITEM,
    payload: cartItem
})
export const removeItem = cartItem => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: cartItem
})
export const clearItem = cartItem => ({
    type: CartActionTypes.CLEAR_ITEM,
    payload: cartItem
})
