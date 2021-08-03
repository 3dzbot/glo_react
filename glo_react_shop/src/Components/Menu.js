import React from 'react';
import styled from 'styled-components';
import dbMenu from './DBMenu';
import { ListItem } from './ListItem';
import { BannerPage } from './BannerPage';

const MenuStyled = styled.main`
    background-color: #ccc;
    margin-top: 80px;
`;

const SectionMenu = styled.section`
padding: 30px;
`;

export const Menu = () => (
<MenuStyled>
    <BannerPage src={'./banners/banner.png'} alt={'banner'}></BannerPage>
    <SectionMenu>
        <h2>Burgers</h2>
        <ListItem itemList={dbMenu.burger}/>
    </SectionMenu>
    <SectionMenu>
        <h2>Drinks</h2>
        <ListItem itemList={dbMenu.other}/>
    </SectionMenu>
</MenuStyled>
);