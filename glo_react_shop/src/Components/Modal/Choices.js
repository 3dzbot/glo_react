import React from 'react';
import styled from 'styled-components';

const ChoiseWrap = styled.div`
    column-count: 2;
    max-width: 500px;
    margin: 0 auto;
    column-gap: 15px;
`;

const ChoiseRadio = styled.input`
    cursor: pointer;
    margin-right: 5px;
`;

const ChoiceLabel = styled.label`
    cursor: pointer;
    display: block;
`;

export function Choices({ openItem, choice, changeChoices }) {

    return (
        <>
            <h3>Choices</h3>
            <ChoiseWrap>
                {openItem.choices.map((item,i) => (
                    <ChoiceLabel key={i}> 
                        <ChoiseRadio 
                            type="radio" 
                            name="choices" 
                            checked={choice === item }
                            value={item}
                            onChange={changeChoices}
                            /> 
                            {item} 
                        </ChoiceLabel>
                ))}
            </ChoiseWrap>
        </>
    )
}