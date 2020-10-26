import React, { useState }  from 'react'
import { Container, LoginBox } from './styles'
import logo from '../../assets/img/logo.png'



function Login() {

  return (
    <Container>
      <LoginBox>
        <div className="form-wrapper">
          <form action="">
            <span><img src={logo}/></span>
            <div className="input-block">
              <label>Usuário</label>
              <input type="text" />
            </div>
            <div className="input-block">
              <label>Senha</label>
              <input type="password"/>
            </div>
            <button type="submit" className="btn-login">Entrar</button>
          </form>
        </div>
      </LoginBox>
    </Container> 
  );
}

export default Login;
