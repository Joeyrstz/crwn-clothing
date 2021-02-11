/*
 * Copyright (c) 2021.
 * Joey Stoetzel, github.com/Joeyrstz
 * This project is part of my portfolio and was developed for educational and presentation purposes.
 * The use of the project for internal, external or profit-oriented purposes is prohibited without my consent.
 */
//React
import React from 'react';
import {Route, Switch} from "react-router-dom";
//Styling
import './App.css';
//Pages
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignPage from "./pages/sign-page/sign-page.component";
//Components
import NavHeader from "./components/navheader/navheader.component";
import { auth} from "./firebase/firebase.utils";

const HatsPage = () => (
    <div>
        <h1>HAT PAGE</h1>
    </div>
);

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({currentUser: user});
        });
    }
    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <NavHeader currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact="true" path="/" component={HomePage}/>
                    <Route exact="true" path="/shop" component={ShopPage}/>
                    <Route exact="true" path="/hats" component={HatsPage}/>
                    <Route exact="true" path="/signIn" component={SignPage}/>
                </Switch>
            </div>
        );
    }
}

export default App;
