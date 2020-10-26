import React from 'react';

import { Container, InputText } from './styles';

interface PropsInput{
    textLabel: string
    textDefaultValue: string
}

const Input: React.FC<PropsInput> = ({ textLabel, textDefaultValue }) => {
  return (
      <Container>
          <InputText>
            <div>
                <label htmlFor="">{textLabel}</label>
            </div>
            <input type="text"  defaultValue={`${textDefaultValue}`}/>
          </InputText>
      </Container>
  );
}

export default Input;