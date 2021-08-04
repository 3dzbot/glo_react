import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    width: 250px;
    height: 65px;
    background-color: #299B01;
    color: #fff;
    font-size: 21px;
    margin-bottom: 40px;
    margin-top: auto;
`;

export const ButtonAdd = () => (
    <Button>
        Добавить
    </Button>
);