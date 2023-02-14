import React from "react";
import { useState } from "react";
import Login from "../../components/login_form";
import SignUpForm from "../../components/signup_form";
import "./index.css"

function Auth() {

    const [isSignup, setIsSignup] = useState(true)

    const handleButtonClick = () => {
        setIsSignup(isSignup ? false : true);
    }

    return (
        <section className="auth-page">
            <div className="logo-container">
                <div>Logo</div>
                <div className="login-button" onClick={handleButtonClick}>{isSignup ? "Login" : "Sign up"}</div>
            </div>

            {isSignup ?
                <SignUpForm />
                :
                <Login />
            }

        </section>
    )
}

export default Auth;