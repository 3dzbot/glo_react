import styled from 'styled-components';

export const ButtonAdd = styled.button`
    width: 250px;
    height: 65px;
    background-color: #299B01;
    color: #fff;
    font-size: 21px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid #fff;
    margin-top: auto;
    transition-property: color, background-color, border-color;
    transition-duration: .2s;
    &:hover {
        background-color: #fff;
        color: #299B01;
        border-color: #299B01;
    }
`;