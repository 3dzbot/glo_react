import React from 'react';
import styled from 'styled-components';
import dbMenu from './DBMenu';
import { ListItem } from './ListItem';
import { BannerPage } from './BannerPage';

const MenuStyled = styled.main`
    background-color: #ccc;
    margin-top: 80px;
    margin-left: 380px;
`;

const SectionMenu = styled.section`
padding: 30px;
`;

export const Menu = ({setOpenItem}) => (
<MenuStyled>
    <BannerPage src={'./banners/banner.png'} alt={'banner'}></BannerPage>
    <SectionMenu>
        <h2>Burgers</h2>
        <ListItem itemList={dbMenu.burger}
                setOpenItem={setOpenItem}
        />
    </SectionMenu>
    <SectionMenu>
        <h2>Drinks</h2>
        <ListItem itemList={dbMenu.other}
        setOpenItem={setOpenItem}/>
    </SectionMenu>
</MenuStyled>
);