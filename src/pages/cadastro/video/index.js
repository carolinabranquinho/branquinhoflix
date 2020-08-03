import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import ButtonLink from '../../../components/ButtonLink';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoriasRepository.getAll().then((categoriasFromServer) => {
      setCategorias(categoriasFromServer);
    });
  }, []);

  console.log(categorias);
  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const categoriaEscolhida = categorias.find((categoria) => {
            return categoria.titulo === values.categoria;
          });

          videosRepository
            .create({
              titulo: values.titulo,
              url: values.url,
              categoriaId: categoriaEscolhida.id,
            })
            .then(() => {
              history.push('/');
            });
        }}
      >
        <FormField
          label="Nome do Video: "
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL: "
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria: "
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <ButtonLink type="submit">Cadastrar</ButtonLink>
      </form>
      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </PageDefault>
  );
}

export default CadastroVideo;
