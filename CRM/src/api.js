import axios from 'axios';

const API = axios.create({
  baseURL: 'https://your-crm-backend.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;
