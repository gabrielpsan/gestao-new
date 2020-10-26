import styled from 'styled-components';

export const Container = styled.div`

`;

export const ButtonText = styled.div`
    display: flex;
    flex-direction: column;

    div label {
        font-size: 16px;
        color: #888888;
    }

    button:hover {
        cursor: pointer;
    }

    .limpar {
        height: 33px;
        width: 28vw;
        margin-top: 2vh;
        margin-bottom: 2vh;
        margin-right: 3vh;
        border: none;
        border-radius: 4px;
        outline: none;
        font-size: 14px;
        background: #d32e23;
        color: #FFFFFF;
        
        @media only screen and (max-width: 1000px) {
            width: 25vw;
        }
    }

    .enviar {
        height: 33px;
        width: 28vw;
        margin-top: 2vh;
        margin-bottom: 2vh;
        margin-right: 3vh;
        border: none;
        border-radius: 4px;
        outline: none;
        font-size: 14px;
        background:#2a9c2e;
        color: #FFFFFF;
        @media only screen and (max-width: 1000px) {
            width: 25vw;
        }
    }
    
    .gerarMala {
        height: 33px;
        width: 28vw;
        margin-top: 2vh;
        margin-bottom: 2vh;
        margin-right: 3vh;
        border: none;
        border-radius: 4px;
        outline: none;
        font-size: 14px;
        background:#13B9CE;
        color: #FFFFFF;
        @media only screen and (max-width: 1000px) {
            width: 25vw;
        }
    }

    .exportar {
        height: 33px;
        width: 28vw;
        margin-bottom: 2vh;
        margin-top: 2vh;
        margin-right: 3vh;
        border: none;
        border-radius: 4px;
        outline: none;
        font-size: 14px;
        background:#13B9CE;
        color: #FFFFFF;
        @media only screen and (max-width: 1000px) {
            width: 25vw;
        }
    }

`;
