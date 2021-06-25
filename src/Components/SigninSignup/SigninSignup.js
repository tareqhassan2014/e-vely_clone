import React, { useState } from 'react';
import loginImage from './img/Login_image.svg';
import registerImage from './img/SignUp_image.svg';
import './SigninSignup.css';

const SigninSignup = () => {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <div className={isLogin ? 'container sign-up-mode' : 'container'}>
            <div className="forms-container">
                <div className="signin-signup">
                    <form action="#" className="sign-in-form">
                        <h2 className="title">Sign in</h2>
                        <div className="input-field">
                            <i className="fas fa-user" />
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock" />
                            <input type="password" placeholder="Password" />
                        </div>
                        <input type="submit" value="Login" className="btn solid" />
                        <p className="social-text">Or Sign in with social platforms</p>
                        <div className="social-media">
                            <a href="#1" className="social-icon">
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a href="#2" className="social-icon">
                                <i className="fab fa-twitter" />
                            </a>
                            <a href="#3" className="social-icon">
                                <i className="fab fa-google" />
                            </a>
                            <a href="#4" className="social-icon">
                                <i className="fab fa-linkedin-in" />
                            </a>
                        </div>
                    </form>
                    <form action="#" className="sign-up-form">
                        <h2 className="title">Sign up</h2>
                        <div className="input-field">
                            <i className="fas fa-user" />
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-envelope" />
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock" />
                            <input type="password" placeholder="Password" />
                        </div>
                        <input type="submit" className="btn" value="Sign up" />
                        <p className="social-text">Or Sign up with social platforms</p>
                        <div className="social-media">
                            <a href="#4" className="social-icon">
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a href="#5" className="social-icon">
                                <i className="fab fa-twitter" />
                            </a>
                            <a href="#6" className="social-icon">
                                <i className="fab fa-google" />
                            </a>
                            <a href="#7" className="social-icon">
                                <i className="fab fa-linkedin-in" />
                            </a>
                        </div>
                    </form>
                </div>
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>New here ?</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex
                            ratione. Aliquid!
                        </p>
                        <button
                            type="button"
                            className="btn transparent"
                            onClick={() => setIsLogin(!isLogin)}
                            id="sign-up-btn"
                        >
                            Sign up
                        </button>
                    </div>
                    <img src={loginImage} className="image" alt="" />
                </div>
                <div className="panel right-panel">
                    <div className="content">
                        <h3>One of us ?</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                            laboriosam ad deleniti.
                        </p>
                        <button
                            type="button"
                            className="btn transparent"
                            onClick={() => setIsLogin(!isLogin)}
                            id="sign-in-btn"
                        >
                            Sign in
                        </button>
                    </div>
                    <img src={registerImage} className="image" alt="" />
                </div>
            </div>
        </div>
    );
};

export default SigninSignup;
