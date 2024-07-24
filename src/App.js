import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import { createContext, useRef } from 'react';
import MyCart from './Pages/MyCart';
export const ScrollContext = createContext();
function App() {
  
  const pizzasRef=useRef();
  const colddrinksRef = useRef();
  const hotdrinksRef = useRef();
  const mealsRef = useRef();
  return (
		<ScrollContext.Provider
			value={{ pizzasRef, colddrinksRef, hotdrinksRef, mealsRef }}
		>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/mycart" element={<MyCart />} />
			</Routes>
		</ScrollContext.Provider>
	);
}

export default App;
