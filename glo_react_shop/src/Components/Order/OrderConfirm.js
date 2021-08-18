import React, { useContext } from 'react';
import styled from 'styled-components';
import { Overlay } from '../Modal/ModalItem';
import { OrderTitle, Total, TotalPrice } from './Order';
import { ButtonAdd } from '../Style/ButtonAdd';
import { projection } from '../Functions/secondaryFunctions';
import { totalPriceItems } from '../Functions/secondaryFunctions';
import { parcePrice } from '../Functions/secondaryFunctions';
import { Context } from '../Functions/context';

const Modal = styled.div`
    background-color: white;
    width: 600px;
    padding: 30px;
`;
const Text = styled.h3`
    text-align: center;
    margin-bottom: 30px;
`;

const rulesData = {
    itemName: ['name'],
    price: ['price'],
    count: ['count'],
    topping: ['topping', arr => arr.filter(obj => obj.checked).map(obj => obj.name),  arr => arr.length ? arr : 'no toppings'],
    choice: ['choice', item => item ? item : 'no choices'],
}

const sendOrder = (dataBase, orders, authentication) => {
    const newOrder = orders.map(projection(rulesData));
    dataBase.ref('orders').push().set({
        nameClient: authentication.displayName,
        email: authentication.email,
        order: newOrder
    });
}

export const OrderConfirm = () => {
    const {
        orders: { orders, setOrders },
        auth: { authentication },
        orderConfirm: { setOpenOrderConfirm },
        firebaseDatabase
    } = useContext(Context);
    const dataBase = firebaseDatabase();
    const total = orders.reduce((result, order) => totalPriceItems(order) + result, 0);

    return (
        <Overlay>
            <Modal>
                <OrderTitle>{authentication.displayName}</OrderTitle>
                <Text>Осталось подтвердить заказ</Text>
                <Total>
                    <span>Итого:</span>
                    <TotalPrice>{parcePrice(total)}</TotalPrice>
                </Total>
                <ButtonAdd onClick={()=>{
                    sendOrder(dataBase, orders, authentication);
                    setOrders([]);
                    setOpenOrderConfirm(false);
                }}>Подтвердить</ButtonAdd>
            </Modal>
        </Overlay>
    )

}