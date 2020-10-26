import React from 'react';
import { Container, ButtonText } from './styles';
import { ContainerPessoa } from '../../Cadastro/Pessoa/styles';

interface PropsInput{
    textDefaultValue: string
    iconButton: string
}

const Button: React.FC<PropsInput> = ({ textDefaultValue, iconButton }) => {
  console.log(iconButton)
  return (
      <Container>
          <ButtonText>
            {/* <div>
                <label htmlFor="">{textLabel}</label>
            </div> */}
            <button type="submit"><img src={iconButton}/>{`${textDefaultValue}`}</button>
          </ButtonText>
      </Container>
  );
}

export default Button;