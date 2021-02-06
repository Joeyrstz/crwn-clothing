/*
 * Copyright (c) 2021.
 * Joey Stoetzel, github.com/Joeyrstz
 * This project is part of my portfolio and was developed for educational and presentation purposes.
 * The use of the project for internal, external or profit-oriented purposes is prohibited without my consent.
 */
import React from "react";
import { Link } from "react-router-dom";
import {ReactComponent as Logo } from "../../internal-assets/crown.svg";
import "./navheader.styles.scss";

const NavHeader = () => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/Contact">CONTACT</Link>
        </div>
    </div>
)

export default NavHeader;