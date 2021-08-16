import React from 'react';
import styled from 'styled-components';
import { ButtonAdd } from '../Style/ButtonAdd';
import { OrderListItem } from './OrderListItem';
import { totalPriceItems } from '../Functions/secondaryFunctions';
import { parcePrice } from '../Functions/secondaryFunctions';

const OrderStyled = styled.section`
    position: fixed;
    top: 80px;
    left: 0;
    bottom: 0;
    background: #fff;
    width: 380px;
    max-width: 100%;
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

const EmptyList = styled.p`
    text-align: center;
`;

const TotalPrice = styled.span`
    text-align: right;
    min-width: 65px;
    margin-left: 20px;
`;

export const Order = ({ orders, setOrders, setOpenItem, authentication, logIn }) => {

    const deleteItem = index => {
        const newOrders = [...orders];
        newOrders.splice(index, 1);
        setOrders(newOrders);
    }

    const total = orders.reduce((result, order) => totalPriceItems(order) + result, 0);

    const tatalCounter = orders.reduce((result, order) => order.count + result, 0);

    return (
        <OrderStyled>
            <OrderTitle>Ваш заказ</OrderTitle>
            <OrderContent>
                {orders.length ?
                    <OrderList>
                        {orders.map((order, index) => <OrderListItem
                            key={index}
                            order={order}
                            deleteItem={deleteItem}
                            index={index}
                            setOpenItem={setOpenItem}
                        />)}
                    </OrderList> :
                    <EmptyList>Список заказа пуст</EmptyList>}
            </OrderContent>
            <Total>
                <span>Итого</span>
                <span>{tatalCounter}</span>
                <TotalPrice>{parcePrice(total)}</TotalPrice>
            </Total>
            {authentication ?
                <ButtonAdd>Оформить</ButtonAdd> :
                <ButtonAdd onClick={logIn}>Авторизируйтесь</ButtonAdd>
            }

        </OrderStyled>
    )
}