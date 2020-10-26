import React, { useState }  from 'react'
import { Container, Options, DivButton} from './styles'
import menu from '../../../../assets/img/menu.png'
import admin from '../../../../assets/img/config.png'
import mensagem from '../../../../assets/img/message.png'
import notificacao from '../../../../assets/img/notification.png'
import perfil from '../../../../assets/img/user.png'
import MobileMenuMenu from '../mobileMenuMenu'

function MobileMenu() {

  // const [isMobileOpen, setMobileOpen] = useState(false);

  return (
    <Container>
        <Options>
            <ul>
                <li><img src={menu}/>Menu</li>
                <li><img src={admin}/>Administração</li>
                <li><img src={mensagem}/>Mensagens</li>
                <li><img src={notificacao}/>Notificações</li>
                <li><img src={perfil}/>Perfil</li>
            </ul>
            <DivButton>
                <button>Voltar</button>
            </DivButton>
        </Options>

        {/* { isMobileOpen ? MobileMenuMenu()
        : null} */}

    </Container>
  );
}

export default MobileMenu;
