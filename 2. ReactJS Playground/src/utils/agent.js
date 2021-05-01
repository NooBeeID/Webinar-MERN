import axios from 'axios'

export default axios.create({
    baseURL: 'https://crudcrud.com/api/aa4631bbccc94ec0be82e8dae0576558'
});

export const CancelToken = axios.CancelToken;
