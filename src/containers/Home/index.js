import React from 'react'
import { Container,TopContent,MediumContent,Img,Input,InputLabel } from './styles'
import Title from '../../components/Title'
import Button from '../../components/Button'
import Logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'

function Home() {

  const navigate = useNavigate()

  function newRequest(){
      navigate("/pedidos")
  }
  
  return (
    <>
      <Container>

        <TopContent>
          <Img src={Logo}/>
          <Title> Faça seu pedido!</Title>
        </TopContent>

        <MediumContent>
          <InputLabel>Pedido</InputLabel>
          <Input placeholder='1 Hambúrguer'/>

          <InputLabel>Nome do Cliente</InputLabel>
          <Input placeholder='Nome'/>
        </MediumContent>

        <Button isHome={true} onClick={newRequest}>Novo Pedido</Button>

      </Container>
    </>
  )
}

export default Home
