import React from 'react';
import styled from "styled-components";
import Header from './Header';
import Footer from './Footer';

const Layout = (props) => {
    return (
        <>
            <StLayoutDiv>
                <Header />
                {props.children}
            </StLayoutDiv>
            <Footer />
        </>
    );
};

export default Layout;

const StLayoutDiv = styled.div`    
    display: grid;  
    grid-template-rows: 80px auto;
`;