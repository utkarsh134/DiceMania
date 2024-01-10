import styled from "styled-components";

export const Button = styled.button`


    min-width: 170px;
    height: 44px;
    background-color: #000000;
    border-radius: 8px;
    color: white;
    padding: 10px 18px;
    border: none;
    font-size: 16px;
    cursor: pointer;
    border: 1px solid transparent;
    transition: 0.5s background ease-in;

    &:hover{
        background-color: white;
        color: black;
        border: 1px solid black;
        transition: 0.3s background ease-in;

    }

`;

export const OutlineButton = styled(Button)`

    background-color: white;
    color: black;
    border: 1px solid black;
    &:hover{
        background-color: black;
        color: white;
        border: 1px solid transparent;

    }

`;