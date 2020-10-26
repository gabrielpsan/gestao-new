import React from 'react';

import { Container, ButtonText } from './styles';

interface PropsInput{
    textDefaultValue: string
    typeButton: string
}

const Button: React.FC<PropsInput> = ({ textDefaultValue, typeButton }) => {
  return (
      <Container>
          <ButtonText>
            {/* <div>
                <label htmlFor="">{textLabel}</label>
            </div> */}
            <button className={`${typeButton}`} type="submit">{`${textDefaultValue}`}</button>
          </ButtonText>
      </Container>
  );
}

export default Button;