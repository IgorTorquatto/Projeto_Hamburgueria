import styled from "styled-components";

export const Container = styled.div`
    background-color: #0A0A10;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
`

export const TopContent = styled.div`

`

export const Img = styled.img`
    height: 360px;
    width: 360px;
    margin-top: 20px;
`


export const MediumContent = styled.div`
`

export const InputLabel = styled.p`
    color: #eeeeee;
    font-size: 18px;
    font-weight: 700;
    margin: 0px 0px 5px 5px;

    &:nth-of-type(2) {
    margin-top: 40px; 
  }
`

export const Input = styled.input`
    width: 342px;
    height: 58px;
    border-radius: 14px;
    color: #ffffff;
    border: none;
    outline: none;
    background: rgba(255,255,255,0.25);
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    font-size: 18px;
    font-weight: 300;
    line-height: 21px;
    padding: 15px;

    &::placeholder {
        color: rgba(255, 255, 255, 0.5);
    }

`

