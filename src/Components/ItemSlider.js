import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import SliderItem from './SliderItem';


function ItemSlider(props) {

	const sliderref = useRef();
	const scrollLeft = () => {
		sliderref.current.scrollLeft -= 300;
	};
	const scrollRight = () => {
		sliderref.current.scrollLeft += 300;
	};

	return (
		<div
			className="slider_main"
			style={{ fontFamily: 'poppins', width: '100%', flex: 1 }}
		>
			
			<div style={{ position: 'relative' }}>
				<div
					onClick={scrollLeft}
					style={{
						width: '30px',
						height: '100%',
						position: 'absolute',
						backgroundColor: 'rgba(0,0,0,0.4)',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						zIndex: '5',
						left: '0px',
					}}
				>
					<p className="text-white hover:text-purple">
						<i className="fas fa-chevron-left"></i>
					</p>
				</div>
				<div
					className="flex flex-row gap-1 slider_box"
					style={{ overflowX: 'scroll', scrollBehavior: 'smooth' }}
					ref={sliderref}
				>
					{props.data.map((item) => {
						return <SliderItem item={item} />;
					})}
					<div
						onClick={scrollRight}
						style={{
							width: '30px',
							height: '100%',
							position: 'absolute',
							backgroundColor: 'rgba(0,0,0,0.4)',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							zIndex: '5',
							right: '0px',
						}}
					>
						<p className="text-white hover:text-purple">
							<i className="fas fa-chevron-right"></i>
						</p>
					</div>
					{/* <div
						className="flex flex-row gap-2 slider_box"
						style={{ overflowX: 'scroll', scrollBehavior: 'smooth' }}
						ref={sliderref}
					></div> */}
				</div>
			</div>
		</div>
	);
}

export default ItemSlider;
