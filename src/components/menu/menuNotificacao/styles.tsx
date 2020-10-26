import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    @media only screen and (max-width: 1000px) {
        display: none;
    }
`

export const MenuOptionNotif = styled.div`
    background: #ffffff;
    position: fixed;
    width: 13%;
    /* height: 100%; */
    top: 45px;
    right: 55px;
    /* bottom: 0; */
    /* left: 0; */
    z-index: 99999;
    animation: slideDown 0.4s ease-out;
    -webkit-box-shadow: 0px 1px 9px -3px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 1px 9px -3px rgba(0,0,0,0.75);
    box-shadow: 0px 1px 9px -3px rgba(0,0,0,0.75);

    ul {
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin: 0;
        padding: 0;
    }

    li:first-child{
        padding: 6px 0;
        background: #444444;
        color: #ffffff;
        text-align: center;
    }

    li {
        width: 100%;
        /* padding: 6px 1vw; */
        padding-top: 1vh;
        padding-bottom: 1vh;
        list-style-type: none;
        color: #111111;
        font-size: 14px;
        animation: aparecerLi 0.6s ease-out;
    }

    li:hover {
        cursor: pointer;
        background: #00ACC1;
        color: #ffffff
    }

    li:first-child:hover {
        background: #444444;
    }

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