/*
 * Copyright (c) 2021.
 * Joey Stoetzel, github.com/Joeyrstz
 * This project is part of my portfolio and was developed for educational and presentation purposes.
 * The use of the project for internal, external or profit-oriented purposes is prohibited without my consent.
 */
import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import "./sign-page.styles.scss";
import SignUp from "../../components/sign-up/sign-up.component";

const SignPage = () => (
    <div className="sign-page">
        <SignIn/>
        <SignUp/>
    </div>
)
export default SignPage;
