import React from 'react';
import styled from "styled-components";
import Layout from '../components/Layout';
import './action.css'

const Login = () => {
    return (
        <Layout>
            <StLoginWrap>
                <h6 className="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
                <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                <label for="reg-log"></label>
                <div className='card-3d-wrap'>
                    <div className="card-3d-wrapper">
                        <div className="card-front">
                            <div className="center-wrap">
                                <div className="section text-center">
                                    <h4 className="mb-4 pb-3">Log In</h4>
                                    <div className="form-group">
                                        <input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autocomplete="off" />
                                        <i className="input-icon uil uil-at"></i>
                                    </div>
                                    <div className="form-group mt-2">
                                        <input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autocomplete="off" />
                                        <i className="input-icon uil uil-lock-alt"></i>
                                    </div>
                                    <StSubmitBtn href="#" className="btn mt-4">Login</StSubmitBtn>
                                </div>
                            </div>
                        </div>
                        <div className="card-back">
                            <div className="center-wrap">
                                <div className="section text-center">
                                    <h4 className="mb-4 pb-3">Sign Up</h4>
                                    <div className="form-group">
                                        <input type="text" name="logname" className="form-style" placeholder="Your ID" id="logname" autocomplete="off" />
                                        <i className="input-icon uil uil-user"></i>
                                    </div>
                                    <div className="form-group mt-2">
                                        <input type="email" name="logemail" className="form-style" placeholder="Your Password" id="logemail" autocomplete="off" />
                                        <i className="input-icon uil uil-at"></i>
                                    </div>
                                    <div className="form-group mt-2">
                                        <input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autocomplete="off" />
                                        <i className="input-icon uil uil-lock-alt"></i>
                                    </div>
                                    <StSubmitBtn href="#" className="btn mt-4">Join</StSubmitBtn>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </StLoginWrap>
        </Layout>
    );
};

export default Login;

const StLoginWrap = styled.div`    
    display:flex;
    flex-direction : column;
    justify-content: center;
    align-items :center;
    height : 51rem;
    @media screen and (max-width: 900px) {
        height : 38rem;
    }
`
const StSubmitBtn = styled.a`
    color: #c4c3ca;
    background-color : #1f2029;
    &:hover {
        background-color : #c4c3ca;
        color: #1f2029;
        box-shadow: 0 8px 24px 0 rgba(255,235,167,.2);
    }
`