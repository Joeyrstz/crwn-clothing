/*
 * Copyright (c) 2021.
 * Joey Stoetzel, github.com/Joeyrstz
 * This project is part of my portfolio and was developed for educational and presentation purposes.
 * The use of the project for internal, external or profit-oriented purposes is prohibited without my consent.
 */
import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({children, isGoogleSignIn, ...Props}) => (
    <button className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`} {...Props}>
        {children}
    </button>
)
export default CustomButton;
