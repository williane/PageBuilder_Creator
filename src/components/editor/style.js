/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import styled from "styled-components";

export const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  border: 1px dashed;
  padding: 1.5rem;
  width: 50%;
`;

export const MainTextArea = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px dashed;
  padding: 1.5rem;
  margin-left: 2rem;
  width: 100%;
`;

export const DivCodigo = styled.div`
  position: absolute;
  top: 10px;
  display: flex;
  flex-direction: column;
  width: 98%;
  max-width: 98%;
  height: 93%;

  display: none;
`;

export const DivGrid = styled.div`
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
  display: flex;
  padding: 2.4rem;
  min-height: 100vh;
`;

export const TextAreaEditor = styled.textarea`
  display: flex;
  resize: none;
  height: 60%;
  width: 100%;
  border: 1px solid #fff;
  padding: 2.4rem;

  &:last-child {
    border-radius: 0 0 5px 5px;
  }
`;

export const TextAreaComandos = styled.textarea`
  display: flex;
  resize: none;
  height: 98%;
  width: 100%;
  border: 1px solid #fff;
  padding: 2.4rem;

  &:last-child {
    border-radius: 0 0 5px 5px;
  }
`;

export const DivHeaderEditor = styled.div`
  display: flex;
  flex-direction: row;
  background: #16a085;
  justify-content: space-between;
  margin-right: 1rem;
  border: 1px solid #fff;
  height: 5vh;
  width: 100%;
  border-radius: 5px 5px 0 0;
  padding: 1rem;
`;

export const ButtonAction = styled.button`
  background: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  margin: 0.2rem;
  height: 5vh;

  transition: background 0.3s ease;

  &.active {
    background: #1abc9c;
  }
`;

export const ButtonSalvar = styled.button`
  background: #34495e;
  border: 1px solid #2c3e50;
  border-radius: 5px;
  height: 30px;
  width: 65px;
  color: #fff;
`;

export const ButtonSalvarAll = styled.button`
  background: #34495e;
  border: 1px solid #2c3e50;
  border-radius: 5px;
  height: 30px;
  width: 120px;
  color: #fff;
`;


export const DivResourceProp = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr .5fr 3fr 1fr 3fr;
  column-gap: 2%;
  row-gap: 10%;
  border: 1px solid #fff;
  height: 15vh;
  padding: 2.4rem;
`;

export const InputProp = styled.input`
  border-radius: 5px;
  width: 350px;
  height: 40px;
  padding: 1.5rem;
`;

export const Select = styled.select`
  border-radius: 5px;
  width: 100px;
  height: 40px;
`;

export const Options = styled.option``;

export const Label = styled.label`
    color: #fff;
    font-size: 15px;
`;

export const ButtonIncluir= styled.button`
    grid-column-start: 4;
    grid-column-end: 5;
    height: 40px;
    width: 100px;
    border-radius: 5px;
    background: #27ae60;
`;

export function InputProps({ name, texto, tipo }) {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope,
    <>
      <Label htmlFor={name}>{texto}</Label>
      <InputProp type={tipo} name={name} id={name}/>
    </>
  );
}

export function SelectProps({ name, texto, options, cb }) {
    return (
      // eslint-disable-next-line react/react-in-jsx-scope,
      <>
        <Label htmlFor={name}>{texto}</Label>
        <Select id={name}>
            {options.map((o, index)=>{
                return(
                    <Options key={index} value={o} onChange={cb}>{o}</Options>
                )
            })
            }
        </Select>
      </>
    );
  }
