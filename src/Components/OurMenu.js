import React, { useContext } from 'react'
import { useSelector } from 'react-redux';
import ItemSlider from './ItemSlider';
import { ScrollContext } from '../App';

function OurMenu() {
		const { pizzasRef, colddrinksRef, hotdrinksRef, mealsRef } =
			useContext(ScrollContext);
	const { pizzaItems, hotDrinks, coldDrinks, Meals } = useSelector(
		(state) => state.ProductSlice
	);
	return (
		<div style={{}} className="">
			<h1
				className="text-2xl md:text-4xl self-center pb-2 "
				style={{ fontWeight: 'bolder', textAlign: 'center' }}
			>
				OUR MENU
			</h1>
			<div className="bg-bg1 p-4 px-8" style={{ width: '100%' }}>
				<h2
					className="text-xl md:text-2xl pl-2 py-2"
					style={{ fontWeight: 'bolder' }}
					ref={pizzasRef}
				>
					Pizzas
				</h2>
				<ItemSlider data={pizzaItems} />
				<h2
					className="text-xl md:text-2xl pl-2 py-2"
					style={{ fontWeight: 'bolder' }}
					ref={colddrinksRef}
				>
					Cold Drinks
				</h2>
				<ItemSlider data={coldDrinks} />
				<h2
					className="text-xl md:text-2xl pl-2 py-2"
					style={{ fontWeight: 'bolder' }}
					ref={hotdrinksRef}
				>
					Hot Drinks
				</h2>
				<ItemSlider data={hotDrinks} />
				<h2
					className="text-xl md:text-2xl pl-2 py-2"
					style={{ fontWeight: 'bolder' }}
					ref={mealsRef}
				>
					Meals
				</h2>
				<ItemSlider data={Meals} />
			</div>
		</div>
	);
}

export default OurMenu