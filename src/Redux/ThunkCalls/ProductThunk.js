import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts, productsByCategory } from "../../API/ApiHandler";

const totalItems=createAsyncThunk('products',async ()=>{

    const response = await getProducts();
		console.log(response.data)
    try {
        return response.data.products;
    } catch (error) {
        console.log('error while fetching popular movies',error)
    }

});
const itemsByCategory = createAsyncThunk('products', async (category) => {
	const response = await productsByCategory(category);
	try {
		return {category, data:response.data.products};
	} catch (error) {
		console.log('error while fetching popular movies', error);
	}
});

export { totalItems, itemsByCategory };