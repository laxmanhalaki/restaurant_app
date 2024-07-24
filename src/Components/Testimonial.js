import React from 'react';
import profile1 from '../assets/profile1.jpg';
import profile2 from '../assets/profile2.jfif';
import profile3 from '../assets/profile3.jfif';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';


function Testimonial() {
	const customers = [
		{
			name: 'Rob Smith',
			designation: 'Account Manager',
			review:
				'Fantastic experience at Food Court! The atmosphere was cozy, the service was impeccable, and the food was simply divine. Highly recommend the steak — cooked to perfection!',
			image: profile1,
		},
		{
			name: 'Sarah W',
			designation: 'Senior HR',
			review:
				'Visited Food Court last night and it was amazing! The staff were so friendly and accommodating. Had the seafood pasta and it was bursting with flavors. Will definitely be back soon!',
			image: profile2,
		},
		{
			name: 'Michael H',
			designation: 'Data Analyst',
			review:
				'Had a wonderful evening at Food Court. The ambiance was lovely, great for a romantic dinner. Tried their signature cocktails which were delightful. The dessert menu was tempting; the chocolate lava cake was heavenly!',
			image: profile3,
		},
	];
	return (
		<div
			className="bg-bg2 py-10 px-8 "
			style={{
				display: 'flex',
				flexWrap: 'wrap',
				justifyContent: 'space-between',
				gap: '30px',
				// alignItems: 'center',
			}}
		>
			<div style={{ flex: '1 1 400px' }}>
				<p className="" style={{ fontWeight: 'bold', color: 'grey' }}>
					Testimonial
				</p>
				<h3 className="text-2xl md:text-4xl text-secondary">
					Satisfied <span className="text-primary">Customers</span>
				</h3>
				<Carousel
					autoPlay={true}
					interval={4000}
					showThumbs={false}
					showStatus={false}
					style={{ padding: '20px' }}
					infiniteLoop={true}
				>
					{customers.map((item) => {
						return (
							<div>
								<img
									src={item.image}
									style={{
										height: '80px',
										width: '80px',
										borderRadius: '40px',
										objectFit: 'cover',
										marginTop: '30px',
									}}
								/>
								<div className="mt-2">
									<h3
										className="text-primary text-xl"
										style={{ fontWeight: 'bold' }}
									>
										{item.name}
									</h3>
									<p className="">Software Engineer</p>
									<dv className="comment">
										<h2 className="text-secondary text-0.5xl md:text-xl mt-4 mb-8">
											{item.review}
										</h2>
									</dv>
								</div>
							</div>
						);
					})}
				</Carousel>
			</div>
			<div style={{ flex: '1 1 500px' }}>
				<p className="" style={{ fontWeight: 'bold', color: 'grey' }}>
					Gallery
				</p>
				<h3 className="text-2xl md:text-4xl text-secondary">
					Photo <span className="text-primary">Galleries</span>
				</h3>
				<div className="grid grid-cols-2 gap-2 mt-4">
					<div className="p-2 ">
						<img
							src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600"
							alt=""
							style={{
								width: '100%',
								height: '100%',
								objectFit: 'cover',
								borderRadius: '15px',
							}}
						/>
					</div>
					<div className="p-2">
						<img
							src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600"
							alt=""
							style={{
								width: '100%',
								height: '100%',
								objectFit: 'cover',
								borderRadius: '15px',
							}}
						/>
					</div>
					<div className="p-2">
						<img
							src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=600"
							alt=""
							style={{
								width: '100%',
								height: '100%',
								objectFit: 'cover',
								borderRadius: '15px',
							}}
						/>
					</div>
					<div className="p-2">
						<img
							src="https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=600"
							alt=""
							style={{
								width: '100%',
								height: '100%',
								objectFit: 'cover',
								borderRadius: '15px',
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Testimonial