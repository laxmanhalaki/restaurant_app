import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import no_image_small from '../assets/no_image_small.svg.png';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../Redux/ProductSlice';

function SliderItem({item,width}) {
	const navigate = useNavigate();
	const dispatch=useDispatch();
	const [added,setAdded]=useState(false);
	  
	return (
		<div
			className="p-1 slider_card"
			style={{ cursor: 'pointer', position: 'relative',height:'100%' }}
			// onClick={() => {
			// 	navigate(`/details/${item.id}/${item.original_language}`);
			// }}
		>
			<div
				className="second_block px-2 py-1 w-52 md:w-56 "
				style={{
					// width: width ? width : '300px',
					// border: '1px solid rgba(0,0,0,0.4)',
					borderRadius: '10px',
					backgroundColor: 'white',
					// boxShadow:'2px 0px 2px rgba(0,0,0,0.4)'
				}}
			>
				<img
					src={item.url ? item.url : no_image_small}
					style={{
						objectFit: 'cover',
						width: '100%',
						height: '160px',
					}}
				/>
				<div style={{}} className=" item-center my-4">
					<p
						style={{
							fontSize: '20px',
							fontWeight: 'bolder',
							// color: 'white',
						}}
						className="pb-4"
					>
						{item.name}
					</p>
					<div className="flex justify-between item-center">
						<button
							className="btn   border-15 text-white"
							style={{ padding: '6px 10px', borderRadius: '10px',backgroundColor:added?'green':'orangered' }}
							onClick={()=>{added?dispatch(removeItem(item)):dispatch(addItem({...item,count:1}));setAdded(!added)}}
						>
							<i
								className="fas fa-shopping-cart mr-2 text-0.5xl md:text-xl"
								
							/>
							{added?'Added':'Add'}
						</button>
						<div>
							<p
								className="text-xl"
								style={{ fontWeight: 'bolder'}}
							>
								Price : <span className="text-green">₹ {item.price}</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SliderItem;

