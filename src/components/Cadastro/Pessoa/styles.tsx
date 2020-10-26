import styled from 'styled-components';

export const ContainerPessoa = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Box = styled.div`
    width: 95%;
    /* height: 80vh; */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 200px;
    margin-bottom: 20vh;
    background: #ffffff;
    border-radius: 3px;
    -webkit-box-shadow: 0px 1px 9px -3px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 1px 9px -3px rgba(0,0,0,0.75);
    box-shadow: 0px 1px 9px -3px rgba(0,0,0,0.75);

    @media only screen and (max-width: 1000px) {
        margin-top: 25vh;
    }
`


export const Menu = styled.div`
    margin-top: -1%;
    width: 97%;
    height: 45px;
    background: #00ACC1;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
`
export const LeftCadastro = styled.div`
    margin-left: 20px;
    /* margin-top: 0.8%; */
    display: flex;
    justify-content: center;
    align-items: center;

    select {

        width: 10vw;
        height: 3vh;
        background: rgba(255,255,255, 0.00001);
        background :#069BAD; 
        border: none;
        outline: none;
        color: #ffffff;
        /* padding: 4px 4px; */
        @media only screen and (max-width: 1000px) {
            display: none;
        }
    }

    select:hover {
        cursor: pointer;
    }

`

export const RightCadastro = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    select {
        display: none;
        
        @media only screen and (max-width: 1000px) {
            display: block;
            width: 35vw;
            height: 4vh;
            margin-right: 6%;
            border: none;
            border-radius: 4px;
            background: #069BAD;
            color: #ffffff;
            outline: none;
        }
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        background: rgba(255,255,255,0.00001);
        outline: none;
        border: none;
        color: #ffffff;
        font-size: 15px;
        margin-right: 20px;
        border-radius: 5px;
        /* margin-top: 1%; */

        img {
            margin-right: 8%;
        }

        @media only screen and (max-width: 1000px) {
            display: none;
        }

    }

    button:hover {
        background :#069BAD; 
        cursor: pointer;
    }

    button:active {
        background: #59C9E2;
    }
`
export const FiltroBox = styled.div`

`

export const ContentBox = styled.div`
    margin-top: 2%;
    width: 97%;

`

export const Pesquisa = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const ButtonPesquisa = styled.div`
    display: flex;
    justify-content: center;
    /* border-bottom: 1px solid #89898989; */
    flex-wrap: wrap;
    border-bottom: 1px solid #069BAD;
    width: 100%;
`

export const TablePessoa = styled.div`
    display: flex;
    flex-wrap: wrap;
`