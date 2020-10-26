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
   

`;
