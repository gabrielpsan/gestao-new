import styled from 'styled-components';

export const Container = styled.div`
`;

export const InputDate = styled.div`
    display: flex;
    flex-direction: column;
    
    div label {
        font-size: 16px;
        color: #888888;
    }

    input {
        width: 14vw;
        margin-top: 0.8vh;
        margin-bottom: 1vh;
        margin-right: 3vh;
        border: none;
        border-bottom: 1px solid #888888;
        outline: none;
        font-size: 14px;
        color: #818181;

        @media only screen and (max-width: 1000px) {
            width: 25vw;
            margin-right: 10px;
            margin-top: 0.7vh;
        }
    }

`;
