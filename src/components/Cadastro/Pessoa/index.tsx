import React  from 'react'
import { ContainerPessoa, Menu, Box, LeftCadastro, RightCadastro, FiltroBox,
         ContentBox, Pesquisa, ButtonPesquisa, TablePessoa } from './styles'
import procurar from '../../../assets/img/procurar.png'
import inserir from '../../../assets/img/mais.png'
import relatorios from '../../../assets/img/estatisticas.png'
import {Index} from '../Index'
import Input from '../../utils/Input'
import Select from '../../utils/select'
import Button from '../../utils/button'
import InputData from '../../utils/inputData'
import ButtonMenu from '../../utils/buttonMenu'
import Option from '../../utils/inputLabel'

function Pessoa() {

  const options = [
    {title: 'teste1'},
    {title: 'teste2'},
  ]

  return (
    <Index>
      <ContainerPessoa>
          <Box>
            <Menu>
              <LeftCadastro>
                <select>
                  <option value="valor1" selected>Mais relatórios...</option> 
                </select>
              </LeftCadastro>
              <RightCadastro>
                <ButtonMenu iconButton={procurar} textDefaultValue="Pesquisar"/>
                <ButtonMenu iconButton={inserir} textDefaultValue="Inserir"/>
                <ButtonMenu iconButton={relatorios} textDefaultValue="Relatório"/>
                <select>
                  <option value="valor0" selected disabled>Opções</option> 
                  <option value="valor1" >Pesquisar</option> 
                  <option value="valor2" >Inserir</option> 
                  <option value="valor3" >Virada</option> 
                  <option value="valor4" >Requisição</option> 
                  <option value="valor5" >Relatório</option> 
                </select>
              </RightCadastro>
            </Menu>
            <ContentBox >
              <Pesquisa>
                <Option posts={options} textLabel="Opções adicionais" />
                <Select textLabel="Página" textDefaultValue=""/>
                <Input textLabel="CPF/CNPJ" textDefaultValue=""/>
                <Input textLabel="Nome" textDefaultValue=""/>
                <InputData textLabel="Data" textDefaultValue=""/>
              </Pesquisa>
              <ButtonPesquisa>
                  <Button typeButton="limpar" textDefaultValue="Limpar"/>
                  <Button typeButton="gerarMala" textDefaultValue="Gerar Mala Direta"/>
                  <Button typeButton="enviar" textDefaultValue="Pesquisar"/>
                  {/* <Button typeButton="exportar" textDefaultValue="Exportar"/> */}
              </ButtonPesquisa>
              <TablePessoa>
              </TablePessoa>
            </ContentBox>
          </Box>
          
      </ContainerPessoa>
    </Index>
  );
}

export default Pessoa;
