import React from 'react';

import { Container, SelectText } from './styles';

interface PropsSelect{
    textLabel: string
    textDefaultValue: string
    // options: []
}

const Select: React.FC<PropsSelect> = ({ textLabel, textDefaultValue }) => {
  // let rows = []

  // for(let i = 0; options.length; i++){
  //   rows.push(<option>{options[i]}</option>)
  //   console.log(options[i])
  // }
  
  return (
      <Container>
          <SelectText>
            <div>
                <label htmlFor="">{textLabel}</label>
            </div>
            <select>
              <option selected disabled>Todos</option>
              {/* <option>{options}</option> */}
              <option>Fornecedores</option>
              <option>Funcionários</option>
              <option>Clientes</option>
              <option>Empresas</option>
              <option>Transportadoras</option>
              <option>Inativos</option>
            </select>
          </SelectText>
      </Container>
  );
}

export default Select;