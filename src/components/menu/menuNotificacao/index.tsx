import React, { useState }  from 'react'
import { Container, MenuOptionNotif } from './styles'

function MenuNotificacao() {


  return (
    <Container>
      <MenuOptionNotif>
        <ul>
            <li>Notificações</li>
            <li>Novo Cadastro!</li>
        </ul>
      </MenuOptionNotif>      
    </Container>
  );
}

export default MenuNotificacao;