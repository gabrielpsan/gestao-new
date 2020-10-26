import React, { useState }  from 'react'
import { Container, MenuOptionMenu, Div, Div2} from './styles'
import menu from '../../../assets/img/menu.png'
import admin from '../../../assets/img/config.png'
import mensagem from '../../../assets/img/message.png'
import notificacao from '../../../assets/img/notification.png'
import perfil from '../../../assets/img/user.png'

function MobileMenuMenu() {


  return (
    <Container>
      <MenuOptionMenu>
        <Div>
          <ul>
              <li>Cadastros</li>
              <li>Pessoa</li>
              <li>Produto</li>
              <li>Família de produto</li>
              <li>Lista de preço</li>
              <li>Empresa</li>
              <li>Forma de pagamento</li>
              <li>Condições de pagamento</li>
              <li>Boleto bancário</li>
              <li>Segmento de negócio</li>
              <li>Área</li>
              <li>Unidade</li>
              <li>Prefixo</li>
              <li>Níveis</li>
              <li>Modelos</li>
              <li>Fabricante</li>
              <li>Cotação</li>
              <li>Tipo serviço</li>
              <li>Material</li>
          </ul>
        </Div>
        <Div2>
          <ul>
              <li>Fiscal</li>
              <li>Importar certificado</li>
              <li>Tipo de operação</li>
              <li>Histórico</li>
              <li>Alíquota</li>
              <li>CFOP</li>
              <li>CST - Origem</li>
              <li>CST - Tributação</li>
              <li>NCM</li>
          </ul>
        </Div2>
        
        {/* <ul>
            <li>Teste</li>
            <li>Teste213</li>
            <li>T2143e421ste</li>
            <li>Teste</li>
        </ul> */}
      </MenuOptionMenu> 
    </Container>
  );
}

export default MobileMenuMenu;
