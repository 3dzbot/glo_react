import React from 'react';
import styled from 'styled-components';
import { ButtonAdd } from '../Style/ButtonAdd';
import { CountItem } from './CountItem';
import { useCount } from '../Hooks/useCount';

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.5);
    z-index: 20;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Modal = styled.div`
    background: #fff;
    width: 600px;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 40px;
`;

const Banner = styled.div`
    width: 100%;
    height: 200px;
    background-image: url(${({img})=> img });
    background-size: cover;
    background-position: center;
    margin-bottom: 20px;
`;

const TitleWrap = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    max-width: calc(100% - 60px);
`;

const TitleElem = styled.span`
    font-family: Pacifico, sans-serif;
    font-size: 30px;
`;

const TotalPriceItem = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const totalPriceItems = order => order.price * order.count;

export const ModalItem = ({openItem, setOpenItem, orders, setOrders}) => {

    const counter = useCount()

    const  closeModal = e => {
        if(e.target.id === 'overlay'){
            setOpenItem(null);
        }
    }

    const order = {
        ...openItem,
        count: counter.count
    };

    
    
    /** добавляем к текущему заказу элементы */

    const addToOrder = () => {
        setOrders([...orders, order]);
        setOpenItem(null);
    }
    /*
    сместили условие в App.js
    if(!openItem) return null;
    */
    return (
        <Overlay id="overlay" onClick={closeModal}>
            <Modal>
                <Banner img={openItem.img} />
                <TitleWrap>
                    <TitleElem>{openItem.name}</TitleElem>
                    <TitleElem>{openItem.price.toLocaleString('ru-RU',{style:'currency', currency:'RUB'})}</TitleElem>
                </TitleWrap>
                <CountItem {...counter} />
                <TotalPriceItem>
                    <span>Цена:</span>
                    <span>{totalPriceItems(order).toLocaleString('ru-RU',{style:'currency', currency:'RUB'})}</span>
                </TotalPriceItem>
                <ButtonAdd onClick={addToOrder}>Добавить</ButtonAdd>
            </Modal>
        </Overlay>
    )
};