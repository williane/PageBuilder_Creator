import styled, { css } from 'styled-components';

export const DivTag = styled.div`
    display: grid;
    grid-template-columns: 5fr 1fr;
    column-gap: 2%;

    ${({hidden})=>{
        return !hidden && css`
            display: none;
        `;
    }};
`;


export const InputTag = styled.input`
    display: flex;
    width: 100%;
    height: 3.9rem;
    background: #E5E5E5;
    border: none;
    border-radius: 5px;
    padding: 2rem;
    outline: none;
    margin-top: 1.5rem;
`;

export const ButtonEdit = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #bdc3c7;
    margin-top: 1.5rem;
    border-radius: 5px;
    border: none;
    width: 100%;
    height: 3.9rem;

`;