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
import {auth, createUserDocument} from "./firebase/firebase.utils";

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
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => this.handleAuthChange(userAuth));
    }
    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }
    render() {
        return (
            <div>
                <NavHeader currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/shop" component={ShopPage}/>
                    <Route exact path="/hats" component={HatsPage}/>
                    <Route exact path="/signIn" component={SignPage}/>
                </Switch>
            </div>
        );
    }

    async handleAuthChange(userAuth) {
        if (userAuth) {
            const userRef = await createUserDocument(userAuth);
            userRef.onSnapshot(snapShot => {
                this.setState({
                    currentUser: {
                        id: snapShot.id,
                        ...snapShot.data()
                    }
                }, () => {console.log(this.state)})
            })
        }
        else {
            this.setState({currentUser: userAuth});
        }
    }
}

export default App;
