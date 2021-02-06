/*
 * Copyright (c) 2021.
 * Joey Stoetzel, github.com/Joeyrstz
 * This project is part of my portfolio and was developed for educational and presentation purposes.
 * The use of the project for internal, external or profit-oriented purposes is prohibited without my consent.
 */
import React from "react";
import "./collection-item.styles.scss";

const CollectionItem = ({id, name, imageUrl, price}) => (
    <div className="collection-item">
        <div className="image" style={{backgroundImage: `url(${imageUrl})`}}>
            <button className="button">Hello</button>
        </div>
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
    </div>
)
export default CollectionItem;