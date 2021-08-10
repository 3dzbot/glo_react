import React from 'react';
import styled from 'styled-components';

const CountWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: auto;
    margin-bottom: auto;
    width: 100%;
    max-width: calc(100% - 60px);
`;

const CountInput = styled.input`
    width: 50px;
    font-size: 20px;

`;

const ButtonCount = styled.button`
    background: transparent;
    color: #000;
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export function CountItem({count, setCount, onChange}) {

    return (
        <CountWrapper>
            <span>Количество</span>
            <ButtonWrapper>
                <ButtonCount disabled={ count <=1 } onClick={()=>setCount(count - 1)}>-</ButtonCount>
                <CountInput type='number' min='1' max='100' value={count < 1 ? 1 : count} onChange={onChange} />
                <ButtonCount onClick={()=>setCount(count + 1)}>+</ButtonCount>
            </ButtonWrapper>  
        </CountWrapper>
    )
}