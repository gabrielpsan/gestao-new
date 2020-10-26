import React  from 'react'
import { ContainerPessoa, Menu, Box, LeftCadastro, RightCadastro } from './styles'

function Pessoa() {
  return (
    <ContainerPessoa>
        <Box>
          <Menu>
            <LeftCadastro>
              <select>
                <option value="valor1" selected>Mais relatórios...</option> 
              </select>
            </LeftCadastro>
            <RightCadastro>
              <button>Pesquisar</button>
              <button>Inserir</button>
              <button>Virada</button>
              <button>Requisição</button>
              <button>Relatório</button>
            </RightCadastro>
          </Menu>
        </Box>
    </ContainerPessoa>
  );
}

export default Pessoa;
