import React, { useContext } from 'react';
import styled from 'styled-components';
import { ListItem } from './ListItem';
import { BannerPage } from './BannerPage';
import { useFetsh } from '../Hooks/useFetch';
import { Context } from '../Functions/context';

const MenuStyled = styled.main`
    background-color: #ccc;
    margin-top: 80px;
    margin-left: 380px;
`;

const SectionMenu = styled.section`
padding: 30px;
`;

export const Menu = () => {
    const res = useFetsh();
    const dbMenu = res.response;
    const { openItem: { setOpenItem } } = useContext(Context);

    return (
        <MenuStyled>
            <BannerPage src={'./banners/banner.png'} alt={'banner'}></BannerPage>
            {res.response ?
                <>
                    <SectionMenu>
                        <h2>Burgers</h2>
                        <ListItem itemList={dbMenu.burger}
                            setOpenItem={setOpenItem}
                        />
                    </SectionMenu>
                    <SectionMenu>
                        <h2>Drinks</h2>
                        <ListItem itemList={dbMenu.other}
                            setOpenItem={setOpenItem} />
                    </SectionMenu>
                </> : res.error ? 
                <div>Error</div> :
                <div>Loading...</div>}
        </MenuStyled>
    )
};