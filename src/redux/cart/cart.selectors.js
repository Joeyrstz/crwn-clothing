/*
 * Copyright (c) 2021.
 * Joey Stoetzel, github.com/Joeyrstz
 * This project is part of my portfolio and was developed for educational and presentation purposes.
 * The use of the project for internal, external or profit-oriented purposes is prohibited without my consent.
 */
import {createSelector} from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectItemCount = createSelector(
    [selectCartItems],
    items => items.reduce((accumulator, value) => accumulator + value.quantity, 0)
);
export const selectCartTotal = createSelector(
    [selectCartItems],
    items => items.reduce((acc, value) => acc + value.quantity * value.price, 0)
);
export const selectHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)