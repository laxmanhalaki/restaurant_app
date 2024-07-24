import api from "./api"

const getProducts=()=>{
return api.get('/products')
}
const productsByCategory = (category) => {
	return api.get(`/products/${category}`);
};
export { getProducts, productsByCategory };