import React from 'react';

import { Container, InputDate } from './styles';

interface PropsInput{
    textLabel: string
    textDefaultValue: string
}

const InputData: React.FC<PropsInput> = ({ textLabel, textDefaultValue }) => {
  return (
      <Container>
          <InputDate>
            <div>
                <label htmlFor="">{textLabel}</label>
            </div>
            <input type="date"  defaultValue={`${textDefaultValue}`}/>
          </InputDate>
      </Container>
  );
}

export default InputData;