import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LoginBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: slideDown 1s ease-in-out;


    @keyframes slideDown{
        from {
            transform: translateY(-100%);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    h1 {
        font-size: 32px;
        letter-spacing: 1px;
        margin: 20px 0;
        color: white;
    }

    form {
        background-color: white;
        padding: 8vh 4vw;
        border-radius: 15px;

    }

    form .input-block {
        margin-bottom: 20px;
    }

    form .input-block label {
        font-size: 16px;
        color: #888888;
    }

    form .input-block input {
        width: 100%;
        display: block;
        margin-top: 8px;
        padding: 7px;
        font-size: 16px;
        color: #888888;
        border-radius: 2px;
        border: 1px solid #ccddef;
        outline-color: #33BDCD;
    }

    form .btn-login {
        display: block;
        width: 270px;
        height: 40px;
        border: none;
        background-color: #33BDCD;
        color: white;
        border-radius: 15px;
        margin: auto;
        padding: 7px;
    }

    form .btn-login:hover {
        cursor: pointer;
    }
`