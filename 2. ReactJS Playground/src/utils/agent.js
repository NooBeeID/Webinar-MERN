import axios from 'axios'

export default axios.create({
    baseURL: 'https://crudcrud.com/api/d77afb8941b44c63bce63a16dfb8a98d'
});

export const CancelToken = axios.CancelToken;