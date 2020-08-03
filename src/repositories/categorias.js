import config from '../config';

const URL_CATEGORIES = `${config.URL}/categorias`;

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`).then(async (resposta) => {
    if (resposta.ok) {
      const res = await resposta.json();
      return res;
    }

    throw new Error('Não foi possível pegar os dados');
  });
}

function getAll() {
  return fetch(`${URL_CATEGORIES}`).then(async (resposta) => {
    if (resposta.ok) {
      const res = await resposta.json();
      return res;
    }

    throw new Error('Não foi possível pegar os dados');
  });
}

export default {
  getAllWithVideos,
  getAll,
};
