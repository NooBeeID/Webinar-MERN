import axios from 'axios'

export default axios.create({
    baseURL: 'https://crudcrud.com/api/69283d16b0d24823b0ee6bf9a38a4c53'
});

export const CancelToken = axios.CancelToken;