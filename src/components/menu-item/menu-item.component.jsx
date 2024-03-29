/*
 * Copyright (c) 2021.
 * Joey Stoetzel, github.com/Joeyrstz
 * This project is part of my portfolio and was developed for educational and presentation purposes.
 * The use of the project for internal, external or profit-oriented purposes is prohibited without my permission.
 */

import React from "react";
import {withRouter} from "react-router-dom";
import "./menu-item.styles.scss";

const MenuItem = ({title, imageUrl, size, history, match}) => (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${title}`)}>
        <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}}/>
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
)

export default withRouter(MenuItem);