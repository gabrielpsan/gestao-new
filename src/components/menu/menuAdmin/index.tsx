import React, { useState }  from 'react'
import { Container, MenuOptionAdmin } from './styles'

function MenuAdmin() {


  return (
    <Container>
      <MenuOptionAdmin>
        <ul>
            <li>Administração</li>
            <li>Usuários</li>
            <li>Usuários Niveis</li>
            <li>Grupos de Usuários</li>
            <li>Usuários e filiais </li>
            <li>Alçadas</li>
            <li>Permissões</li>
            <li>Regiões</li>
            <li>Dicionário</li>
            <li>Regiões</li>
            <li>Auditoria</li>
            <li>Editor de config.</li>
            <li>Atualizações</li>
            <li>Instalar novos módulos</li>
            <li>Importar backup</li>
        </ul>
      </MenuOptionAdmin>      
    </Container>
  );
}

export default MenuAdmin;