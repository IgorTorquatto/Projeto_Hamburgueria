import React, { useState, useEffect } from "react";
import Container from "../../components/Container";
import Title from "../../components/Title";
import Button from "../../components/Button";
import { TopContent, Img, MediumContent, Order } from "./styles";
import OrderImg from "../../assets/burger (1) 1.png";
import Trash from "../../assets/trash.svg"
import { useNavigate } from "react-router-dom";
import axios from 'axios'

function Pedidos() {
  const [orders, setOrders] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchOrders() {
      try {
        const { data: newOrders } = await axios.get("http://localhost:3001/orders")
        setOrders(newOrders)
      } catch (error) {
        console.log("Erro ao buscar pedido", error)
      }
    }

    fetchOrders()
  }, [])

  function goBack() {
    navigate(-1);
  }

  async function deleteOrder(orderId){
    // we are saying that we want to create a new list using the filter function that will only contain elements whose id is not equal to the id of the element we want to delete
    const newOrders = orders.filter(order => order.id !== orderId)
    setOrders(newOrders)

    //we are sending the command to delete the order with this id
    await axios.delete(`http://localhost:3001/orders/${orderId}`)
  }

  return (
    <>
      <Container>
        <TopContent>
          <Img src={OrderImg} />
          <Title>Pedidos</Title>
        </TopContent>

        <MediumContent>
          {
            orders.map((order) => (
              <Order>
                <p>{order.order}</p>
                <p>{order.name}</p>
                <button onClick={ ()=> deleteOrder(order.id)} ><img alt="image-trash" src={Trash} /></button>
              </Order>
            ))
          }
        </MediumContent>

        <Button onClick={goBack}>Voltar</Button>
      </Container>
    </>
  );
}

export default Pedidos;
