import React, {Component, Children}  from 'react'
import { Container, ContainerPessoa, Menu, Box, LeftCadastro, RightCadastro, FiltroBox } from './styles'
import procurar from '../../../assets/img/procurar.png'
import inserir from '../../../assets/img/mais.png'
import relatorios from '../../../assets/img/estatisticas.png'

export const Index = (props: any) => (
      <ContainerPessoa>
        {props.children}
      </ContainerPessoa>
    )
  