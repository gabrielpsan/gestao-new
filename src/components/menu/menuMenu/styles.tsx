import styled from 'styled-components';

export const Container = styled.div`
    @media only screen and (max-width: 1000px) {
        display: none;
    }
`

export const MenuOptionMenu = styled.div`
    background: #444444;
    position: fixed;
    /* width: 850px; */
    top: 45px;
    right: 0;
    /* bottom: 0; */
    /* left: 0; */
    z-index: 99999;
    animation: slideDown 0.4s ease-out;
    display: flex;

    ul {
        margin-right: 10px;
    }

    li:first-child{
        color: #ffffff;
        font-size: 16px;
        margin-bottom: 2vh;
        border-bottom: 1px solid #888888;
    }

    li {
        /* width: 17%; */
        list-style-type: none;
        color:#b3b3b3;
        animation: aparecerLi 0.4s ease-out;
        font-size: 14px;
        margin-bottom: 0.5vh;

    }

    li:hover {
        cursor: pointer;
        color:  #00ACC1;
    }

    /* @keyframes abrir {
        from {
            height: 0;
        }

        to {
            height: auto;
        }
    } */

    @keyframes slideDown{
        from {
            transform: translatex(120%);
            opacity: 0;
        }
        to {
            transform: translatex(0);
            opacity: 1;
        }
    }

    @keyframes aparecerLi {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }
`

export const Div = styled.div`
`
export const Div2 = styled.div`
`