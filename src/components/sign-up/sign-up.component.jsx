/*
 * Copyright (c) 2021.
 * Joey Stoetzel, github.com/Joeyrstz
 * This project is part of my portfolio and was developed for educational and presentation purposes.
 * The use of the project for internal, external or profit-oriented purposes is prohibited without my consent.
 */

import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-up.styles.scss";

import { auth, createUserDocument} from "../../firebase/firebase.utils";

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }
    handleChange = event => {
        const { value, name } = event.target;
        this.setState({[name]: value});
    }
    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert("Passwords don't match!");
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserDocument(user, {displayName});
            this.setState({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: ""
            });
        }
        catch(error) {
            console.error(error);
        }
    }
    render() {
        const {displayName, email, password, confirmPassword } = this.state;
        return(
            <div className="sign-up">
                <h2 className="title">I do not have an account.</h2>
                <span>Sign up with your email and password.</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput name="displayName" label="Name" value={displayName} type="text" onChange={this.handleChange} required/>
                    <FormInput name="email" label="E-Mail" value={email} type="email" onChange={this.handleChange} required/>
                    <FormInput name="password" label="Password" value={password} type="password" onChange={this.handleChange} required/>
                    <FormInput name="confirmPassword" label="Confirm Password" value={confirmPassword} type="password" onChange={this.handleChange} required/>

                    <CustomButton type="submit">Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}
export default SignUp;