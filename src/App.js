/*
 * Copyright (c) 2021.
 * Joey Stoetzel, github.com/Joeyrstz
 * This project is part of my portfolio and was developed for educational and presentation purposes.
 * The use of the project for internal, external or profit-oriented purposes is prohibited without my consent.
 */
//React
import React from 'react';
import {Route, Switch, Redirect } from "react-router-dom";
import {connect} from "react-redux";
//Styling
import './App.css';
//Pages
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignPage from "./pages/sign-page/sign-page.component";
//Components
import NavHeader from "./components/navheader/navheader.component";
import {auth, createUserDocument} from "./firebase/firebase.utils";
import {setCurrentUser} from "./redux/user/user.actions";
import {selectCurrentUser} from "./redux/user/user.selectors";
import {createStructuredSelector} from "reselect";

const HatsPage = () => (
    <div>
        <h1>HAT PAGE</h1>
    </div>
);

class App extends React.Component {

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
                <NavHeader/>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/shop" component={ShopPage}/>
                    <Route exact path="/hats" component={HatsPage}/>
                    <Route exact path="/signIn" render={() => this.props.currentUser ? (<Redirect to="/"/>) : (<SignPage/>)}/>
                </Switch>
            </div>
        );
    }

    async handleAuthChange(userAuth) {
        const {setCurrentUser} = this.props;
        if (userAuth) {
            const userRef = await createUserDocument(userAuth);
            userRef.onSnapshot(snapShot => {
                setCurrentUser({
                    id: snapShot.id,
                    ...snapShot.data()
                });
            });
        }
        else {
            setCurrentUser(userAuth);
        }
        //ToDo Redirect to Home or Shop
    }
}
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});


const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
