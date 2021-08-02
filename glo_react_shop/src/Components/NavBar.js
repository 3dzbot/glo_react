import React from 'react';
import styled from 'styled-components';
import logoImg from '../image/logo.svg';
import userImg from '../image/icons/user.svg';

const NavBarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    height: 80px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #299B01;
    color: #fff;
`;

const Logo = styled.div`
    display: inline-flex;
    align-items: center;
`;

const H1 = styled.h1`
    font-size: 24px;
    margin-left: 15px;
`;

const ImgLogo = styled.img`
    width: 50px;
`;

const Button = styled.button`
    flex-direction: column;
`;

export const NavBar = () => (
    <NavBarStyled>
        <Logo>
            <ImgLogo src={logoImg} alt="logo"/>
            <H1>zDonald's</H1>
        </Logo>
        <Button><img src={userImg} alt="Кнопка входа"/><span>войти</span></Button>
    </NavBarStyled>
);