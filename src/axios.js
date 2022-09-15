import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8001/',
  // baseURL: 'https://tinder-backend2598.herokuapp.com',
  
});

export default instance;

