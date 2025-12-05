import axios from 'axios';

const api = axios.create({
  //QUANDO FOREM RODAR LOCALMENTE, DESCOMENTAR A LINHA 5 E COMENTAR A LINHA 6
  //baseURL: process.env.NEXT_PUBLIC_API_URL,
  baseURL: 'https://pta-squad-nalivia.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;