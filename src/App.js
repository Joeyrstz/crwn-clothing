import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import NavHeader from "./components/navheader/navheader.component";
import {Route, Switch} from "react-router-dom";

const HatsPage = () => (
    <div>
        <h1>HAT PAGE</h1>
    </div>
);

function App() {
    return (
        <div>
            <NavHeader/>
            <Switch>
                <Route exact="true" path="/" component={HomePage}/>
                <Route exact="true" path="/shop" component={ShopPage}/>
                <Route exact="true" path="/hats" component={HatsPage}/>
            </Switch>
        </div>
    );
}

export default App;
