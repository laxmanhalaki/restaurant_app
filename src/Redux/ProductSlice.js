import { createSlice } from '@reduxjs/toolkit';
import { totalItems } from './ThunkCalls/ProductThunk';


const ItemSlice = createSlice({
	name: 'product',
	initialState: {
		totalItems: [],
		pizzaItems: [],
		hotDrinks: [],
		coldDrinks: [],
		Meals: [],
		CartItems: [],
	},
	reducers: {
		addItem: (state, action) => {
			state.CartItems = [...state.CartItems, action.payload];
		},
		removeItem: (state, action) => {
			state.CartItems = state.CartItems.filter(
				(item) => item._id != action.payload._id
			);
		},
		addCount: (state, action) => {
			state.CartItems = state.CartItems.map((item) => {
				if (item._id == action.payload._id) {
					return { ...item, count: item.count + 1 };
				} else {
					return item;
				}
			});
		},
		reduceCount: (state, action) => {
			state.CartItems = state.CartItems.map((item) => {
				if (item._id == action.payload._id && item.count!==0 ) {
					return { ...item, count: item.count - 1 };
				} else {
					return item;
				}
			});
		},
	},
	extraReducers: (builder) => {
		builder.addCase(totalItems.fulfilled, (state, action) => {
			try {
				if (action.payload.category == 'pizzas') {
					state.pizzaItems = action.payload.data;
				} else if (action.payload.category == 'hotdrinks') {
					state.hotDrinks = action.payload.data;
				} else if (action.payload.category == 'colddrinks') {
					state.coldDrinks = action.payload.data;
				} else if (action.payload.category == 'food') {
					state.Meals = action.payload.data;
				} else {
					return null;
				}
			} catch (error) {
				console.log('error');
			}
		});
		builder.addCase(totalItems.rejected, (state, action) => {
			console.log(action.payload);
		});
	},
});
export const { addItem, removeItem,addCount,reduceCount } = ItemSlice.actions;
export default ItemSlice.reducer;
