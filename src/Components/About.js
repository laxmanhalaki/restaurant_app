import React from 'react'

function About() {
	return (
		<div className="p-4 md:p-8  " style={{display:'flex',flexWrap:'wrap'}}>
			<div
				style={{ flex: '1 1 500px', alignItems: 'center' }}
				className="flex item-center justify-center flex-col p-8"
			>
				<h2
					className="text-2xl nd:text-4xl text-red"
					style={{ fontFamily: 'cursive' }}
				>
					Discover
				</h2>
				<h
					className="text-4xl md:text-6xl text-secondary py-2"
					style={{ fontWeight: 'bolder' }}
				>
					Welcome
				</h>
				<p className="pt-8 text-0.5xl md:text-xl text-center text-secondary">
					we take pride in our diverse menu that caters to every palate. Indulge
					in our mouthwatering pizzas, crafted with fresh ingredients and baked
					to perfection. Pair your meal with our selection of aromatic hot
					drinks like espresso and chai latte, or cool down with our refreshing
					iced coffees and fruit smoothies.
				</p>
			</div>
			<div style={{ flex: '1 1 400px' }} className="p-8">
				<img
					src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600"
					alt="food item"
					style={{ height: '100%', width: '100%', borderRadius: '20px' }}
				/>
			</div>
		</div>
	);
}

export default About