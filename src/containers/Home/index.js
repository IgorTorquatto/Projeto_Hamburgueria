import React from "react";
import { TopContent, MediumContent, Img, Input, InputLabel } from "./styles";
import Container from "../../components/Container";
import Title from "../../components/Title";
import Button from "../../components/Button";
import Logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import axios from 'axios' //to connect with the backend
import { useRef } from "react"; //to capture the data that comes from the input
import { useState } from "react"; //to update the state of the variable that stores the data

function Home() {

  const [orders,setOrders] = useState([])
  const inputOrder = useRef()
  const inputName = useRef()
  const navigate = useNavigate();

  async function addNewOrder(){
    const { data: newOrder } = await axios.post("http://localhost:3001/orders",{
      order: inputOrder.current.value,
      name: inputName.current.value
    })

    setOrders([...orders,newOrder])

    navigate("/pedidos")
  }

  return (
    <>
      <Container>
        <TopContent>
          <Img src={Logo} />
          <Title> Faça seu pedido!</Title>
        </TopContent>

        <MediumContent>
          <InputLabel>Pedido</InputLabel>
          <Input ref={inputOrder} placeholder="1 Hambúrguer" />

          <InputLabel>Nome do Cliente</InputLabel>
          <Input ref={inputName} placeholder="Nome" />
        </MediumContent>

        <Button isHome={true} onClick={addNewOrder}>
          Novo Pedido
        </Button>
      </Container>
    </>
  );
}

export default Home;
