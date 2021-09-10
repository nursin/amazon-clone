import axios from 'axios';

const instance = axios.create({
  baseUrl: '...' // THE API (cloud function) URL
});

export default instance;