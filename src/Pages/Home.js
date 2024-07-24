import React, { useEffect } from 'react'
import useTheme from '../CustomHooks/useTheme';
import Header from '../Components/Header';
import Hero from '../Components/Hero';
import About from '../Components/About';
import OurMenu from '../Components/OurMenu';
import { itemsByCategory, totalItems } from '../Redux/ThunkCalls/ProductThunk';
import { useDispatch} from 'react-redux';
import Testimonial from '../Components/Testimonial';
import Footer from '../Components/Footer';


function Home() {
	const [theme,setTheme]=useTheme();


	
	const dispatch=useDispatch();
	useEffect(()=>{
		
dispatch(itemsByCategory('pizzas'));
dispatch(itemsByCategory('colddrinks'));
dispatch(itemsByCategory('hotdrinks'));
dispatch(itemsByCategory('food'));

	},[])

	return (
		<div className="bg-white">
			<Header />
			<Hero />
			<About />
			<OurMenu  />
			<Testimonial />
			<Footer />
		</div>
	);
}

export default Home