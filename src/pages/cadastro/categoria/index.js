import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import '../../../components/Menu/menu.css';
import ButtonLink from '../../../components/ButtonLink';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const valores = {
    titulo: '',
    descricao: '',
    color: '',
  };

  const { handleChange, values, clearForm } = useForm(valores);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://branquinhoflix.herokuapp.com/categorias';
    fetch(URL).then(async (response) => {
      const resposta = await response.json();
      setCategorias([...resposta]);
    });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastrar Categoria:
        {values.titulo}
      </h1>

      <form
        onSubmit={function handleSubmit(event) {
          event.preventDefault();
          setCategorias([...categorias, values]);
          clearForm();
        }}
      >
        <FormField
          label="Nome da Categoria: "
          type="text"
          name="titulo"
          value={values.titulo}
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
          <li key={key}>{value.titulo}</li>
        ))}
      </ul>
      <Link to="/">Voltar para Home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
