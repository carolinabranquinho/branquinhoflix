import React, { useState } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";
import FormField from "../../../components/FormField";

function CadastroCategoria() {
  const valores = {
    nome: "",
    descricao: "",
    color: "",
  };

  const [values, setValues] = useState(valores);
  const [categorias, setCategorias] = useState([]);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(event) {
    const { value } = event.target;
    setValue(event.target.getAttribute("name"), value);
  }

  return (
    <PageDefault>
      <h1>Cadastrar Categoria: {values.nome}</h1>

      <form
        onSubmit={function handleSubmit(event) {
          event.preventDefault();
          setCategorias([...categorias, values]);
          setValues(valores);
        }}
      >
        <FormField
          label={"Nome da Categoria: "}
          type={"text"}
          name={"nome"}
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label={"Descrição da Categoria: "}
          type={"text"}
          name={"descricao"}
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label={"Cor da Categoria:"}
          type={"color"}
          name={"color"}
          value={values.color}
          onChange={handleChange}
        />

        <button>Cadastrar</button>
        <br />
      </form>

      <ul>
        {categorias.map((value, key) => {
          return <li key={key}>{value.nome}</li>;
        })}
      </ul>
      <Link to="/">Voltar para Home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
