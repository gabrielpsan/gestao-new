import styled from 'styled-components';

export const Container = styled.div`
`;

export const OptionText = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 20px;

    div label {
        font-size: 16px;
        color: #888888;
    }

    .titleOption {
        margin-bottom: 1vh;
    }
`;

export const CheckLine = styled.div`
    display: flex;
    flex-direction: row;

    input {
        margin-right: 20px;
    }

`