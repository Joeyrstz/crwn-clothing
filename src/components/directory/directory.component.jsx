/*
 * Copyright (c) 2021.
 * Joey Stoetzel, github.com/Joeyrstz
 * This project is part of my portfolio and was developed for educational and presentation purposes.
 * The use of the project for internal, external or profit-oriented purposes is prohibited without my consent.
 */
import React from "react";
import './directory.styles.scss';
import MenuItem from "../menu-item/menu-item.component";
const imagesPath = process.env.PUBLIC_URL + '/assets/images/';



class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [{
                title: 'hats',
                imageUrl: `${imagesPath}hats.png`,
                id: 1,
                linkUrl: 'shop/hats'
            },
                {
                    title: 'jackets',
                    imageUrl: `${imagesPath}jackets.png`,
                    id: 2,
                    linkUrl: 'shop/jackets'
                },
                {
                    title: 'sneakers',
                    imageUrl: `${imagesPath}sneakers.png`,
                    id: 3,
                    linkUrl: 'shop/sneakers'
                },
                {
                    title: 'women',
                    imageUrl: `${imagesPath}women.png`,
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/women'
                },
                {
                    title: 'men',
                    imageUrl: `${imagesPath}men.png`,
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/men'
                }]
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({id,title, imageUrl, size}) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                    ))
                }
            </div>
        );
    }
}

export default Directory;
