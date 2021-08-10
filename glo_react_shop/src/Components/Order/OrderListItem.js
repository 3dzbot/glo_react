import React from 'react';
import styled from 'styled-components';
import trashImage from '../../image/icons/trash.svg'
import { totalPriceItems } from '../Functions/secondaryFunctions';
import { parcePrice } from '../Functions/secondaryFunctions';

const OrderItemStyled = styled.li`
    display: flex;
    margin: 15px 0;
`;

const ItemName = styled.span`
    flex-grow: 1;
`;
const ItemPrice = styled.span`
    //margin-left: 20px;
    padding-left: 5px;
    //margin-right: 10px;
    padding-right: 5px;
    min-width: 125px;
    text-align: right;
`;

const TrashBtn = styled.button`
    width: 24px;
    height: 24px;
    background-color: transparent;
    background-image: url(${trashImage});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;
`;

const ItemNameWrapper = styled.div`
    flex-grow: 1;
`;

const ItemToppings = styled.div`
    display: inline-flex;
    flex-wrap: wrap;
`;

const ItemTopping = styled.span`
    font-size: 14px;
    line-height: 16px;
    color: #9A9A9A;
    margin-right: 4px;
`;

export const OrderListItem = ({ order }) => (
    <OrderItemStyled onClick={()=>console.log(order)}>
        <ItemNameWrapper>
            <ItemName>{order.name}</ItemName>
            <ItemToppings>
                {order.toppings && order.toppings.map((item, i) => (
                    <ItemTopping key={i+22}>{item}{i+1 !== order.toppings.length ? ',':''}</ItemTopping>
                ))}
        </ItemToppings>
        </ItemNameWrapper>
        <span>{order.count}</span>
        <ItemPrice>{ parcePrice(totalPriceItems(order)) }</ItemPrice>
        <TrashBtn />
    </OrderItemStyled>
);