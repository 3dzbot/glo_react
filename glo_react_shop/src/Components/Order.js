import React from 'react';
import styled from 'styled-components';
import { ButtonAdd } from './ButtonAdd';
import { OrderListItem } from './OrderListItem';

const OrderStyled = styled.section`
    position: fixed;
    top: 80px;
    left: 0;
    bottom: 0;
    background: #fff;
    min-width: 380px;
    box-shadow: 3px 4px 5px rgba(0,0,0,.25);
    padding: 20px;
    display: flex;
    flex-direction: column;
`;

const OrderTitle = styled.h2`
    margin-bottom: 30px;
`;

const OrderContent = styled.div`
    flex-grow: 1;
`;

const OrderList = styled.ul`
`;

const Total = styled.div`
    display: flex;
    margin-bottom: 30px;
    & span:first-child {
        flex-grow: 1;
    }
`;

const TotalPrice = styled.span`
    text-align: right;
    min-width: 65px;
    margin-left: 20px;
`;

export const Order = () => {
    return (
        <OrderStyled>
            <OrderTitle>Ваш заказ</OrderTitle>
            <OrderContent>
                <OrderList>
                    <OrderListItem></OrderListItem>
                    <OrderListItem></OrderListItem>
                    <OrderListItem></OrderListItem>
                </OrderList>
            </OrderContent>
            <Total>
                <span>Итого</span>
                <span>5</span>
                <TotalPrice>850 Р</TotalPrice>
            </Total>
            <ButtonAdd>Оформить</ButtonAdd>
        </OrderStyled>
    )
}