import {create} from 'apisauce'

const api=create({baseURL:'http://localhost:5000',accept:'application/json'});
export default api;