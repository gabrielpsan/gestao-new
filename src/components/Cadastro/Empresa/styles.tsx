import styled from 'styled-components';

export const ContainerPessoa = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Box = styled.div`
    margin-top: 15vw;
    margin-bottom: 20vh;
    width: 95%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    border-radius: 3px;
    -webkit-box-shadow: 0px 1px 9px -3px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 1px 9px -3px rgba(0,0,0,0.75);
    box-shadow: 0px 1px 9px -3px rgba(0,0,0,0.75);
/* 
    @media only screen and (max-width: 1000px) {
        margin-top: 20vh;
    } */
`


export const Menu = styled.div`
    width: 97%;
    height: 7vh;
    background: #00ACC1;
    border-radius: 4px;
    position: relative;
    bottom: 48%;
    /* text-align: right; */
    /* align-content: center; */
    display: flex;
    justify-content: space-between;



`
export const LeftCadastro = styled.div`
    margin-left: 20px;
    margin-top: 0.8%;

    select {
        background: rgba(255,255,255, 0.00001);
        background :#069BAD; 
        border: none;
        outline: none;
        color: #ffffff;
        width: 10vw;
        padding: 4px 4px;
    }

    select:hover {
        cursor: pointer;
    }

`

export const RightCadastro = styled.div`
    button {
        height: 5.2vh;
        background: rgba(255,255,255,0.00001);
        outline: none;
        border: none;
        color: #ffffff;
        font-size: 17px;
        margin-right: 20px;
        border-radius: 5px;
        margin-top: 1%;
    }

    button:hover {
        background :#069BAD; 
        cursor: pointer;
    }

    button:active {
        background: #59C9E2;
    }
`
