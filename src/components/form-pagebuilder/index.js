import React from 'react';
import styled, { keyframes } from 'styled-components';

const appear = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`;

const right = keyframes`
    from{
        transform: translateX(-100%);
    }
    to{
        transform: translateX(0);
    }
`;

export const CreateDiv = styled.div`
    position: relative;
    background: #E5E5E5;
    min-height: 100vh;
    width: 100%;
    display: flex;

    animation-name: ${appear};
    animation-duration: 300ms;
    animation-fill-mode: backwards;

    animation-delay: 50ms;
    
`;

export const Aside = styled.aside`
    position: fixed;
    background: linear-gradient(180deg, #15C3D6 0%, rgba(21, 195, 214, 0.34) 100%);
    height: 100vh;
    width:10vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 6.4rem 0;

    animation-name: ${right};
    animation-duration: 300ms;
    animation-fill-mode: backwards;

    animation-delay: 50ms;
`;

export const Form = styled.form`
  width: 60vw;
  margin: 2.4rem auto;
  background: white;
  border: 1px solid #d3e2e5;
  border-radius: 2rem;
  padding: 8rem;
`;

export const FieldSet = styled.fieldset`
    border: none;
    &:first-child{
      margin-bottom: 5.4rem;
  }
`;

export const Legend = styled.legend`
    width: 100%; 
    color: black;
    font-size:3.2rem;
    font-weight: 800;
`;

export const Linha = styled.hr`
`;

export const InputWrapper = styled.div`
`;

const Label = styled.label`
`;

Label.text = styled.span`
  display: block;
  margin-top:1.5rem;
  color: #8fa7b3;
  line-height: 1.5;
`;

const Input = styled.input`
    display: block;
    width: 100%;
    height: 3.9rem;
    background: #E5E5E5;
    border: none;
    border-radius: 5px;
    padding: 2rem;
    outline: none;

    &:focus {
        border-bottom: 4px solid #27ae60;
    }
`;

export function FormFieldInput({ label, name, handleChange, type })
{
    const fieldId = `id_${name}`;

    return (
        <InputWrapper>
            <Label htmlFor={fieldId}>
                <Label.text>{label}:</Label.text>
                <Input onChange={handleChange} name={name} type={type} required/>
            </Label>            
        </InputWrapper>
    );
}

export const ButtonNext = styled.button`
    width: 100%;
    height: 3.4rem;
    border: none;
    background: #27ae60;
    margin-top: 2.4rem;
    border-radius:5px;
    
    transition: background .3s;
    &:hover{
        background: #2ecc71;
    }
`;


