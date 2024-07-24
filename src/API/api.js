import {create} from 'apisauce'

const api = create({
	baseURL: 'https://myadmin-lu8h.onrender.com',
	accept: 'application/json',
});
export default api;