import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
    background: #FFFFFF;
    position: fixed;
    z-index: 999999;
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 45px;


`

export const Left = styled.div`
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        margin-top: 5px;
        width: 110px;
    }
    

    input {
        width: 20vw;
        height: 3vh;
        border-radius: 2px;
        border: none;
        border-bottom: 1px solid #4E5865;
        margin-left: 20px;
        background: rgba(255, 255, 255, 0.1);
        outline: none;

        @media only screen and (max-width: 1000px) {
            display: none;
        }
    }


`

export const Right = styled.div`
    margin-right: 10px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 45px;
        text-decoration: none;
        color: #666666;
    }

    a:hover {
        background: #EEEEEE;
    }

    a.active {
        background: #00ACC1
    }

    .mobile {
        display: none;
        @media only screen and (max-width: 1000px) {
            display: block;
            margin-right: 1vw;
        }
    }

    .mobile:hover{
        cursor: pointer
    }

    @media only screen and (max-width: 1000px) {
        a {
            display: none;
        }

        .mobile{
            display: block;
        }
    }
`