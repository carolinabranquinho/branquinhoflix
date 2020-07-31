import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import '../../../components/Menu/menu.css';
import ButtonLink from '../../../components/ButtonLink';

function CadastroCategoria() {
  const valores = {
    nome: '',
    descricao: '',
    color: '',
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
    setValue(event.target.getAttribute('name'), value);
  }

  useEffect(() => {
    const URL = 'http://localhost:8080/categorias';
    fetch(URL).then(async (response) => {
      const resposta = await response.json();
      setCategorias([...resposta]);
    });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastrar Categoria:
        {values.nome}
      </h1>

      <form
        onSubmit={function handleSubmit(event) {
          event.preventDefault();
          setCategorias([...categorias, values]);
          setValues(valores);
        }}
      >
        <FormField
          label="Nome da Categoria: "
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição da Categoria: "
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor:"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />

        <ButtonLink>Cadastrar</ButtonLink>
        <br />
      </form>

      <ul>
        {categorias.map((value, key) => (
          <li key={key}>{value.nome}</li>
        ))}
      </ul>
      <Link to="/">Voltar para Home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
