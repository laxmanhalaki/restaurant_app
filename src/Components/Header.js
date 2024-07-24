import React, { useContext, useState } from 'react'
import { ScrollContext } from '../App';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

function Header() {
	const [mobileView,setMobileView]=useState(false);
	const navigate=useNavigate()
	const {CartItems}=useSelector(state=>state.ProductSlice)
	const { pizzasRef, colddrinksRef, hotdrinksRef, mealsRef } =
		useContext(ScrollContext);
	return (
		<header
			className="absolute inset-x-0 top-0 z-50"
			style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
		>
			<nav
				className="flex items-center justify-between p-6 lg:px-8"
				aria-label="Global"
			>
				<div className="flex lg:flex-1">
					<a href="#" className="-m-1.5 p-1.5">
						<img
							className="h-8 w-auto"
							src={logo}
							alt=""
							style={{height:'60px'}}
						/>
					</a>
				</div>

				<div className="hidden lg:flex lg:gap-x-12">
					<a
						className="text-md font-semibold leading-6 text-white hover:text-primary cursor-pointer"
						onClick={() =>
							pizzasRef.current.scrollIntoView({ behavior: 'smooth' })
						}
					>
						Pizzas
					</a>
					<a
						href="#"
						className="text-md font-semibold leading-6 text-white hover:text-primary cursor-pointer"
						onClick={() =>
							colddrinksRef.current.scrollIntoView({ behavior: 'smooth' })
						}
					>
						Cold Drinks
					</a>
					<a
						href="#"
						className="text-md font-semibold leading-6 text-white hover:text-primary cursor-pointer"
						onClick={() =>
							hotdrinksRef.current.scrollIntoView({ behavior: 'smooth' })
						}
					>
						Hot Drinks
					</a>
					<a
						href="#"
						className="text-md font-semibold leading-6 text-white hover:text-primary cursor-pointer"
						onClick={() =>
							mealsRef.current.scrollIntoView({ behavior: 'smooth' })
						}
					>
						Meals
					</a>
				</div>
				<div
					className="hidden lg:flex lg:flex-1 lg:justify-end"
					style={{ position: 'relative' }}
				>
					<button
						className="bg-primary text-white rounded-md px-5 py-2"
						onClick={() => navigate('/mycart')}
					>
						<i className="fas fa-cart-shopping fa-md mr-2"></i> My Cart
					</button>
					<div
						className="font-bold text-sm
					h-6 w-6 bg-white  text-center justify-center"
						style={{
							position: 'absolute',
							top: '-10px',
							right: '-10px',
							borderRadius: '50%',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<p style={{ color: 'green' }}>{CartItems.length}</p>
					</div>
				</div>
				<button
					className=" text-white rounded-md px-5 py-2"
					onClick={() => setMobileView(!mobileView)}
				>
					<i className="fas fa-bars fa-lg lg:hidden"></i>
				</button>
			</nav>

			{/* Mobile menu, show/hide based on menu open state. */}
			{mobileView && (
				<div className="lg:hidden">
					{/* Background backdrop, show/hide based on slide-over state. */}
					<div className="fixed inset-0 z-50" />
					<div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
						<div className="flex items-center justify-between">
							<a href="#" className="-m-1.5 p-1.5">
								<span className="sr-only">Your Company</span>
								{/* <img
									className="h-8 w-auto"
									src={logo}
									alt=""
								/> */}
							</a>
							<button
								type="button"
								className="-m-2.5 rounded-md p-2.5 text-gray-700"
								onClick={() => setMobileView(!mobileView)}
							>
								<svg
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
						<div className="mt-6 flow-root">
							<div className="-my-6  ">
								<div className="space-y-2 py-6 ">
									<a
										className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:text-primary  cursor-pointer"
										onClick={() => {
											pizzasRef.current.scrollIntoView({ behavior: 'smooth' });
											setMobileView(!mobileView);
										}}
									>
										Pizzas
									</a>
									<a
										className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:text-primary cursor-pointer"
										onClick={() => {
											colddrinksRef.current.scrollIntoView({
												behavior: 'smooth',
											});
											setMobileView(!mobileView);
										}}
									>
										Cold Drinks
									</a>
									<a
										className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:text-primary cursor-pointer"
										onClick={() => {
											hotdrinksRef.current.scrollIntoView({
												behavior: 'smooth',
											});
											setMobileView(!mobileView);
										}}
									>
										Hot Drinks
									</a>
									<a
										className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:text-primary cursor-pointer"
										onClick={() => {
											mealsRef.current.scrollIntoView({
												behavior: 'smooth',
											});
											setMobileView(!mobileView);
										}}
									>
										Meals
									</a>
									<a
										className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:text-primary cursor-pointer"
										onClick={() => {
											navigate('/mycart');
											setMobileView(!mobileView);
										}}
									>
										My Cart <i className="fas fa-shopping-cart ml-2"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</header>
	);
}

export default Header