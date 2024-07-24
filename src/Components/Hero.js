import React from 'react'

function Hero() {
	return (
		<div
			className="relative isolate px-6 pt-14 lg:px-8"
			style={{
				background: `linear-gradient(to bottom,rgba(0,0,0,0.8), rgba(0,0,0,0.2)), url(https://images.pexels.com/photos/4577179/pexels-photo-4577179.jpeg?auto=compress&cs=tinysrgb&w=800) no-repeat`,
				backgroundSize: '100% 100%',
			}}
		>
			<div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
				<div className="hidden sm:mb-8 sm:flex sm:justify-center">
					<div
						className="relative  px-3 py-1 text-md leading-6 text-white "
						style={{ fontWeight: 'bolder' }}
					>
						Enjoy Your Healthy Delicios Food.{' '}
					</div>
				</div>
				<div className="text-center">
					<h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
						Treat Yourself
					</h1>
					<p className="mt-6 text-lg leading-8 text-white">
						Welcome to Food Court, your ultimate destination for a
						delightful dining experience in Bangaluru
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<button className="btn rounded-lg bg-primary text-white px-4 py-2">
							Explore Now
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero