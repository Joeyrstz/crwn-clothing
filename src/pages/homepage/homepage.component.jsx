/*
 * Copyright (c) 2021. Joey Stoetzel from Moenchengladbach
 */

import React from 'react';
import "./homepage.styles.scss";
import MenuItem from "../../components/menu-item/menu-item.component";
import Directory from "../../components/directory/directory.component";

const HomePage = () => (
    <div className='homepage'>
        <Directory/>
    </div>
)

export default HomePage;