const URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://branquinhoflix.herokuapp.com';

export default {
  URL,
};
