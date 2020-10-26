import React, { useState }  from 'react'
import { Container, Header, Left, Right } from './styles'
import logo from '../../assets/img/logo.png'
import menu from '../../assets/img/menu.png'
import configuracao from '../../assets/img/config.png'
import mensagem from '../../assets/img/message.png'
import notificacao from '../../assets/img/notification.png'
import perfil from '../../assets/img/user.png'
import close from '../../assets/img/close.png'
import Menu from '../menu/menuMenu'
import MenuConfig from '../menu/menuAdmin'
import MenuMenu from '../menu/menuMenu'
import MenuMensagem from '../menu/menuMensagens'
import MenuNotificacao from '../menu/menuNotificacao'
import MenuPerfil from '../menu/menuPerfil'
import MobileMenu from '../menu/mobileMenu/MenuMobile'


const App = () => {

  const [isMenuOpen, setMenuOpen]               = useState(false);
  const [isConfigOpen, setConfigOpen]           = useState(false);
  const [isMensagemOpen, setMensagemOpen]       = useState(false);
  const [isNotificacaoOpen, setNotificacaoOpen] = useState(false);
  const [isPerfilOpen, setPerfilOpen]           = useState(false);
  const [isMenuMobileOpen, setMenuMobileOpen]   = useState(false);


  return (
    <Container>
      <Header>
        <Left>
          <a href="#default" className="logo"><img src={logo} alt="logo"/></a>
          <div>
            <input placeholder="O que deseja encontrar?"></input>
          </div>
        </Left>
        <Right>
          {isMenuOpen ? <a onClick={() => setMenuOpen(false)} className="active" href="#home"><img src={menu}/></a>
            : <a onClick={() => setMenuOpen(true)} href="#home"><img src={menu}/></a>}   

          {isConfigOpen ? <a onClick={() => setConfigOpen(false)} className="active" href="#home"><img src={configuracao}/></a>
            : <a onClick={() => setConfigOpen(true)} href="#home"><img src={configuracao}/></a>} 

          {isMensagemOpen ? <a onClick={() => setMensagemOpen(false)} className="active" href="#home"><img src={mensagem}/></a>
            : <a onClick={() => setMensagemOpen(true)} href="#home"><img src={mensagem}/></a>} 

          {isNotificacaoOpen ? <a onClick={()  => setNotificacaoOpen(false)} className="active" href="#contact"><img src={notificacao}/></a>
            : <a onClick={() => setNotificacaoOpen(true)} href="#contact"><img src={notificacao}/></a>} 
      
          {isPerfilOpen ? <a onClick={() => setPerfilOpen(false)} className="active" href="#about"><img src={perfil}/></a>
            : <a onClick={() => setPerfilOpen(true)} href="#about"><img src={perfil}/></a>} 

          {isMenuMobileOpen ? <span className="mobile" onClick={() => setMenuMobileOpen(false)}><img src={close}/></span>
            : <span className="mobile" onClick={() => setMenuMobileOpen(true)}><img src={menu}/></span>} 
          
          
        </Right>
      </Header>

      {isMenuOpen ? MenuMenu()
        : null}

      {isConfigOpen ? MenuConfig()
        : null}

      {isMensagemOpen ? MenuMensagem()
        : null}

      {isNotificacaoOpen ? MenuNotificacao()
        : null}

      {isPerfilOpen ? MenuPerfil()
        : null}

      {isMenuMobileOpen ? MobileMenu()
        : null}
        
  </Container>
  
  );
}

export default App;
