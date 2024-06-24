import styled from "styled-components";

export const TopContent = styled.div``;

export const Img = styled.img``;

export const MediumContent = styled.div``;

export const Order = styled.div`
  height: 101px;
  width: 342px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;


  p{
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    color: #ffffff;

    &:first-child{
      order: 1;
    }

    &:nth-child(2){
      order: 3;
      font-weight: 700;
    }
  }

  button{
    order: 2;
    width: 24px;
    height: 28px;
    margin-left: auto;
    background-color: transparent;
    border: none;

    &:hover{
      transform: scale(1.3);
      cursor: pointer;
    }
  }
`;
