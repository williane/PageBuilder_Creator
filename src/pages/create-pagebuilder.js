import React, { useState } from 'react';
import { Aside, CreateDiv, FieldSet, Form, Legend, Linha, FormFieldInput } from '../components/form-pagebuilder';
import { Button, Image } from '../components/page-landing';
import Logo from '../assets/images/logo-short.svg';
import Arrow from '../assets/images/arrow-back.svg';
import { ButtonEdit, DivTag, InputTag } from '../components/tag';


function CreatePagebuilder() {

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
    console.log(event.target.getAttribute('name'));
    if(event.target.getAttribute('name') == 'nome'){
      setName({
        resource: `dhl${event.target.value}`,
        actionlist: `dhlactList${event.target.value}`,
        actionedit: `dhlactEdit${event.target.value}`,
        mcmdlist: `dhl_list_${event.target.value}`,
        mcmdedit: `dhl_edit_${event.target.value}`,
      });
      if(!event.target.value){
        setName({
          resource: ``,
          actionlist: ``,
          actionedit: ``,
          mcmdlist: ``,
          mcmdedit: ``,
        });
      }
    }
  };



  return (
    <CreateDiv>
      <Aside>
        <Image src={Logo} width="90px" />
        <Button as="a" href="/">
          <Image src={Arrow} />
        </Button>
      </Aside>
      <Form>
        <FieldSet>
          <Legend>Dados Gerais</Legend>
          <Linha />
          <FormFieldInput label="Nome" name="nome" handleChange={handleChange} type="text"></FormFieldInput>
          <FormFieldInput label="Descrição" name="descricao" handleChange={handleChange} type="text"></FormFieldInput>
        </FieldSet>
        <FieldSet>
          <Legend>Actions & Commands</Legend>
          <Linha />
          <DivTag hidden = {name.resource ? "Exibir" : ""}>
            <InputTag value={name.resource} readOnly type="text" />
            <ButtonEdit type="Button">Edit</ButtonEdit>
            <ButtonEdit type="Button">Delete</ButtonEdit>
            <InputTag value={name.actionlist} readOnly type="text" />
            <ButtonEdit type="Button">Edit</ButtonEdit>
            <ButtonEdit type="Button">Delete</ButtonEdit>
            <InputTag value={name.actionedit} readOnly type="text" />
            <ButtonEdit type="Button">Edit</ButtonEdit>
            <ButtonEdit type="Button">Delete</ButtonEdit>
            <InputTag value={name.mcmdlist} readOnly type="text" />
            <ButtonEdit type="Button">Edit</ButtonEdit>
            <ButtonEdit type="Button">Delete</ButtonEdit>
            <InputTag value={name.mcmdedit} readOnly type="text" />
            <ButtonEdit type="Button">Edit</ButtonEdit>
            <ButtonEdit type="Button">Delete</ButtonEdit>
          </DivTag>
        </FieldSet>
      </Form>
    </CreateDiv>
  );
}

export default CreatePagebuilder;