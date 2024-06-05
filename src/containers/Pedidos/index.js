import React from 'react'
import { Container } from './styles'
import Title from '../../components/Title'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'

function Pedidos() {

  const navigate = useNavigate()

  function goBack(){
      navigate(-1)
  }
  
  return (
    <>
      <Container>

       
         
          <Title> Faça seu pedido!</Title>
        

  

        <Button onClick={goBack}>Novo Pedido</Button>

      </Container>
    </>
  )
}

export default Pedidos
