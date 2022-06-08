import axios from "axios";

const movieDB = axios.create({
     baseURL: 'https://api.themoviedb.org/3/movie',
     params: {
          api_key: '8486241eff6dea37e13e87312ef184a1',
          language: 'es-ES',
     },
});

export default movieDB;
