import React, { useState }  from 'react'
import { Container, MenuOptionMsg } from './styles'

function MenuMensagem() {


  return (
    <Container>
      <MenuOptionMsg>
        <ul>
            <li>Mensagens</li>
            <li>Olá</li>
        </ul>
      </MenuOptionMsg>      
    </Container>
  );
}

export default MenuMensagem;