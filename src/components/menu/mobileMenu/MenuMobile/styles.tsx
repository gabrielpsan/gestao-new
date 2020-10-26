import styled from 'styled-components';

export const Container = styled.div`
    display: none;
    @media only screen and (max-width: 1000px) {
        display: block;
        height: 100vh;
        width: 100%;
        background: #EEEEEE;
        animation: mobileMenu 0.5s ease-in-out;

        @keyframes mobileMenu{
            from{
                height: 0vh;
            }
            to {
                height: 100vh;
            }
        }
    }

`

export const Options = styled.div`
    @media only screen and (max-width: 1000px) {
        ul {
            padding: 5% 0px;
            margin: 0;
        }

        li {
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 5% 10%;
            list-style-type: none;
            font-size: 18px;
            font-weight: 570;
            animation: mobileLi 1.1s ease-in-out;

            img {
                height: 2.5vh;
                margin-right: 3%;
            }
        }



        @keyframes mobileLi{
            from{
                opacity: 0;
            }
            to {
                opacity: 100;
            }
        } 
    }


`

export const DivButton = styled.div`
    @media only screen and (max-width: 1000px) {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20%;

        button {
            width: 80%;
            height: 6vh;
            border: none;
            border-radius: 6px;
            background: #00ACC1; 
            animation: mobileButton 0.8s ease-in-out;
            font-size: 15px;
            font-weight: 500;
            color: #FFFFFF;
        }

        @keyframes mobileButton{
            from{
                opacity: 0;
            }
            to {
                opacity: 100;
            }
        }
    }
    
`