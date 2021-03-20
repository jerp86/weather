import axios from 'axios';

export const KEY = '579b1e51';

const api = axios.create({
  baseURL: `https://api.hgbrasil.com/`
});

export default api;
