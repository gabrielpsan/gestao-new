import styled from 'styled-components';

export const ContainerPessoa = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Container = styled.div`
`

export const Box = styled.div`
    width: 95%;
    height: 80vh;
    display: flex;
    justify-content: center;
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
    width: 97%;
    height: 45px;
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