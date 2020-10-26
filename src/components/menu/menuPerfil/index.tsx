import React, { useState }  from 'react'
import { Container, MenuOptionPerfil } from './styles'

function MenuPerfil() {


  return (
    <Container>
      <MenuOptionPerfil>
        <ul>
            <li>Perfil</li>
            <li>Gabriel Pinheiro</li>
            <li>Estagiario</li>
        </ul>
      </MenuOptionPerfil>      
    </Container>
  );
}

export default MenuPerfil;