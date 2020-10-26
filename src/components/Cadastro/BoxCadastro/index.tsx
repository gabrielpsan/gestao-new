import React  from 'react'
import { ContainerPessoa, Menu, Box, LeftCadastro, RightCadastro, FiltroBox,
         ContentBox, Pesquisa, ButtonPesquisa, TablePessoa } from './styles'
import procurar from '../../../assets/img/procurar.png'
import inserir from '../../../assets/img/mais.png'
import relatorios from '../../../assets/img/estatisticas.png'
import {Index} from '../Index'
import Input from '../../utils/Input'
// import Select from '../../utils/select'
import Button from '../../utils/button'
import InputData from '../../utils/inputData'
import ButtonMenu from '../../utils/buttonMenu'

function CadastroBox() {

  return (
    <Index>
      <ContainerPessoa>
          <Box>
          </Box>    
      </ContainerPessoa>
    </Index>
  );
}

export default CadastroBox;
