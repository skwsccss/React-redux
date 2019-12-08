import axios from 'axios';

const instance = axios.create({
 baseURL: 'http://dev-api.stringle.net:5000/api'
});

// const instance = axios.create();

export default instance;
