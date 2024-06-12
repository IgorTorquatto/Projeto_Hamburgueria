import React from "react";
import Container from "../../components/Container";
import Title from "../../components/Title";
import Button from "../../components/Button";
import { TopContent, Img, MediumContent,Order } from "./styles";
import OrderImg from "../../assets/burger (1) 1.png";
import Trash from "../../assets/trash.svg"
import { useNavigate } from "react-router-dom";

function Pedidos() {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return (
    <>
      <Container>
        <TopContent>
          <Img src={OrderImg} />
          <Title>Pedidos</Title>
        </TopContent>

        <MediumContent>
            <Order> 
              <p>Coca Cola</p>
              <p>Júnior</p>
              <img src={Trash}/></Order>
        </MediumContent>

        <Button onClick={goBack}>Voltar</Button>
      </Container>
    </>
  );
}

export default Pedidos;
