import styled from "styled-components";

export const Btn = styled.button`
    border: none;
    background-color: ${props=> props.isHome ? '#D93856' : '#ffffff'};
    width: 342px;
    height: 68px;
    color: #ffffff;
    font-size: 17px;
    font-weight: 900;
    margin-bottom: 20px;

    &:hover{
        cursor: pointer;
    }
`