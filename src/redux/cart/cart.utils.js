/*
 * Copyright (c) 2021.
 * Joey Stoetzel, github.com/Joeyrstz
 * This project is part of my portfolio and was developed for educational and presentation purposes.
 * The use of the project for internal, external or profit-oriented purposes is prohibited without my consent.
 */
export const addItemToCart = (cartItems, newItem) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === newItem.id);
    if (existingCartItem) {
        return cartItems.map(cartItem => cartItem.id === newItem.id
            ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem);
    }
    return [...cartItems, {...newItem, quantity: 1}];
}
export const removeItemFromCart = (cartItems, removeItem) => {
    const existingCartItem = cartItems.find(item => item.id === removeItem.id);
    if (existingCartItem) {
        if (existingCartItem.quantity > 1) {
            existingCartItem.quantity = existingCartItem.quantity - 1;
        }
        else {
            return cartItems.filter(item => item !== existingCartItem);
        }
    }
    return cartItems;
}
export const clearItemFromCart = (cartItems, clearItem) => {
    return cartItems.filter(item => item.id !== clearItem.id);
}