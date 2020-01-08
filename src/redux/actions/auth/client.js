var axios = require('axios');

var axiosInstance = axios.create({
    baseURL: 'http://localhost:3001/api/',
    /* other custom settings */
});

module.exports = axiosInstance; 