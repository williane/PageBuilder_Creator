import React, { useEffect, useState } from "react";
import { getAll } from "../../api";
import { getCode } from "../../code";
import {
  ButtonAction,
  ButtonIncluir,
  ButtonSalvar,
  ButtonSalvarAll,
  DivCodigo,
  DivHeaderEditor,
  DivResourceProp,
  InputProps,
  MainTextArea,
  MainWrapper,
  SelectProps,
  TextAreaComandos,
  TextAreaEditor
} from "./style";
import { saveAs } from "file-saver";


export function Command() {
  const [pageBuilder, setPageBuilder] = useState({});

  useEffect(() => {
    getAll().then(page => {
      setPageBuilder(page[0]);
    });
  }, []);

  const isPage = () => {
    if (pageBuilder.comandos) {
      return true;
    }
    return false;
  };

  function handleClick(event) {
    const name = event.target.getAttribute("name");
    const div = document.getElementById(name);
    const divs = document.getElementsByName("div-codigo");

    const buttons = document.querySelectorAll(".comandos-button");

    buttons.forEach(b => {
      b.classList.remove("active");
    });

    divs.forEach(d => {
      d.style.display = "none";
    });

    div.style.display = "block";
    event.target.classList.add("active");
  }

  function handleSaveAll(event) {
    
    pageBuilder.comandos.map((cmd) => {
      const textarea = document.getElementById(`code_${cmd}`);
      
      let blob = new Blob([textarea.value], {
        type: "text/plain;charset=utf-8"
      });
  
      saveAs(blob, cmd.replace(/[.]\w*[.]/g, '.'));
    });

  }

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <MainWrapper>
      <DivHeaderEditor>
        <h2>Arquivos</h2>
        <ButtonSalvarAll onClick={handleSaveAll}>Salvar tudo</ButtonSalvarAll>
      </DivHeaderEditor>
      {isPage() &&
        pageBuilder.comandos.map((cmd, index) => {
          return (
            <ButtonAction
              onClick={handleClick}
              key={index}
              name={cmd}
              className="comandos-button"
            >
              {cmd}
            </ButtonAction>
          );
        })}
        
    </MainWrapper>
  );
}

export function Codes() {
  const [pageBuilder, setPageBuilder] = useState({});
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    getAll().then(page => {
      setPageBuilder(page[0]);
    });
    setProperties([
      ...properties,
    ]);
  }, []);

  const isPage = () => {
    if (pageBuilder.comandos) {
      return true;
    }
    return false;
  };

  function handleSave(event) {
    const name = event.target.getAttribute("name");
    const textarea = document.getElementById(name);

    let blob = new Blob([textarea.value], {
      type: "text/plain;charset=utf-8"
    });

    saveAs(blob, name.replace("code_", "").replace(/[.]\w*[.]/g, '.'));
  }

  function handleIncluir(event) {
    event.preventDefault();
    const nome = document.getElementById("nome");
    const description = document.getElementById("descricao");
    const select_pk = document.getElementById("pk");
    const select_type = document.getElementById("type");

    const pk = select_pk.options[select_pk.selectedIndex];
    const type = select_type.options[select_type.selectedIndex];

    setProperties([
      ...properties,
      {
        nome: nome.value,
        descricao: description.value,
        pk: pk.text,
        type: type.text
      }
    ]);

    nome.value = null;
    description.value = null;
  }

  return (
    <MainTextArea>
      {isPage() &&
        pageBuilder.comandos.map((cmd, index) => {
          if (cmd.split(".")[1] == "resource") {
            return (
              <DivCodigo key={index} id={cmd} name="div-codigo">
                <DivHeaderEditor>
                  <h2>{cmd}</h2>
                  <ButtonSalvar onClick={handleSave} name={`code_${cmd}`}>
                    Salvar
                  </ButtonSalvar>
                </DivHeaderEditor>
                <DivResourceProp>
                  <InputProps name="nome" texto="Nome:" tipo="Text" />
                  <SelectProps
                    name="pk"
                    texto="PK:"
                    options={["true", "false"]}
                  />
                  <SelectProps
                    name="type"
                    texto="Type:"
                    options={["string", "int"]}
                    cb={(e) => e.target.classList.add('selected') }
                  />
                  <InputProps name="descricao" texto="Descrição:" tipo="Text" />
                  <ButtonIncluir onClick={handleIncluir}>Incluir</ButtonIncluir>
                </DivResourceProp>
                <DivHeaderEditor>
                  <h2>Código</h2>
                </DivHeaderEditor>
                <TextAreaEditor
                  id={`code_${cmd}`}
                  value={getCode(
                    cmd,
                    pageBuilder.nome,
                    pageBuilder.descricao,
                    properties,
                    pageBuilder.comandos
                  )[cmd.split(".")[1]][0].replace(new RegExp([','], 'g'), ' ')} readOnly
                />
              </DivCodigo>
            );
          }
          if (
            cmd.split(".")[1] == "list" ||
            cmd.split(".")[1] == "edit" ||
            cmd.split(".")[1] == "add" ||
            cmd.split(".")[1] == "delete"
          ) {
            return (
              <DivCodigo key={index} id={cmd} name="div-codigo">
                <DivHeaderEditor>
                  <h2>{cmd}</h2>
                  <ButtonSalvar onClick={handleSave} name={cmd}>
                    Salvar
                  </ButtonSalvar>
                </DivHeaderEditor>
                <TextAreaEditor
                id={`code_${cmd}`}
                  value={
                    getCode(cmd,
                      pageBuilder.nome,
                      pageBuilder.descricao,
                      properties,
                      pageBuilder.comandos)[
                      cmd.split(".")[1]
                    ][0].replace('{}', '').replace(new RegExp(['>,'], 'g'), '>')
                  }readOnly
                />
              </DivCodigo>
            );
          }
          if (cmd.split(".")[1] == "mcmd") {
            return (
              <DivCodigo key={index} id={cmd} name="div-codigo">
                <DivHeaderEditor>
                  <h2>{cmd}</h2>
                  <ButtonSalvar onClick={handleSave} name={cmd}>
                    Salvar
                  </ButtonSalvar>
                </DivHeaderEditor>

                <TextAreaComandos
                id={`code_${cmd}`}
                  defaultValue={
                    getCode(cmd,
                      pageBuilder.nome,
                      pageBuilder.descricao,
                      properties,
                      pageBuilder.comandos)[
                      "command"
                    ][0]
                  }
                />
              </DivCodigo>
            );
          }
        })}
    </MainTextArea>
  );
}
