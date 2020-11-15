import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { Aside, CreateDiv, FieldSet, Form, Legend, Linha, FormFieldInput, ButtonNext, InputWrapper } from '../components/form-pagebuilder';
import { Button, Image } from '../components/page-landing';
import Logo from '../assets/images/logo-short.svg';
import Arrow from '../assets/images/arrow-back.svg';
import { ButtonEdit, DivTag, InputTag } from '../components/tag';
import PageBuilderRepositories from '../repositories/pagebuilder.js';


function CreatePagebuilder() {
  const history = useHistory();
  const [pageBuilder, setPageBuilder] = useState([]);
  const [name, setName] = useState([]);

  function setValues(chave, valor) {
    setPageBuilder({
      ...pageBuilder,
      [chave]: valor, // deixa a chave dinâmica
    });
  }

  const handleChange = (event) => {
    setValues(event.target.getAttribute('name'), event.target.value);
    if (event.target.getAttribute('name') == 'nome') {
      setName([
        `dhl${event.target.value}.resource`,
        `dhlactList${event.target.value}.list.action`,
         `dhlactEdit${event.target.value}.edit.action`,
        `dhlactAdd${event.target.value}.add.action`,
        `dhlactDelete${event.target.value}.delete.action`,
        `dhl_list_${event.target.value}.mcmd`,
        `dhl_edit_${event.target.value}.mcmd`,
        `dhl_add_${event.target.value}.mcmd`,
        `dhl_delete_${event.target.value}.mcmd`,
      ]);
      if (!event.target.value) {
        setName([]);
      }
    }
  };

  const handleDelete = (event) => {
    const comandos = name.filter((n)=> {
      return !(n == event.target.getAttribute('name'));
    });
    setName(
      [...comandos]      
    )
  }

  return (
    <CreateDiv>
      <Aside>
        <Image src={Logo} width="90px" />
        <Button as="a" href="/">
          <Image src={Arrow} />
        </Button>
      </Aside>
      <Form onSubmit={(event) => {
        event.preventDefault();
        console.log(pageBuilder);
        PageBuilderRepositories.create({
          nome: pageBuilder.nome,
          descricao: pageBuilder.descricao,
          comandos: [...name]
        }).then(() => {
          console.log('cadastrado com sucesso :)!')
          history.push('/Editor');
        });
      }}>
        <FieldSet>
          <Legend>Dados Gerais</Legend>
          <Linha />
          <FormFieldInput label="Nome" name="nome" handleChange={handleChange} type="text"></FormFieldInput>
          <FormFieldInput label="Descrição" name="descricao" handleChange={handleChange} type="text"></FormFieldInput>
        </FieldSet>
        <FieldSet>
          <Legend>Actions & Commands</Legend>
          <Linha />
          <InputWrapper>
            {name.map((n, index) => {
              const key = `button_${index}`;
              
              return (
                <DivTag key={key}> 
                  <InputTag value={n} readOnly type="text" />
                  <ButtonEdit type="Button" name={n} onClick={handleDelete}>Delete</ButtonEdit>
                </DivTag>
              )
            })}
          </InputWrapper>
        </FieldSet>
        <ButtonNext>Next</ButtonNext>
      </Form>
    </CreateDiv>
  );
}

export default CreatePagebuilder;