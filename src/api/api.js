
import axios from 'axios';

// Create an instance of Axios with a base URL
const api = axios.create({
    baseURL: 'https://api.example.com', // Replace 'https://api.example.com' with your base URL
});

export default api;