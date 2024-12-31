import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { useDispatch, useSelector } from 'react-redux';
import { addCount, reduceCount, removeItem } from '../Redux/ProductSlice';
import emptycart from '../assets/empty_cart.png';

function MyCart() {
	const {CartItems}=useSelector(state=>state.ProductSlice);
	const dispatch=useDispatch();
	return (
		<div style={{}}>
			{/* <Header /> */}
			<div className="px-4 md:px-8 py-4">
				<h1 className="text-2xl" style={{ fontWeight: 'bold' }}>
					<i className="fas fa-shopping-cart mr-3 text-primary"></i> My Cart
					Items
				</h1>
				{CartItems.length > 0 ? (
					<div
						className="py-4"
						style={{ maxWidth: '900px', minHeight: '500px' }}
					>
						<table
							className="table-auto border-spacing-1 "
							style={{ width: '100%' }}
						>
							<tbody>
								{CartItems.map((item) => {
									return (
										<tr>
											<td className='p-2 md:p-4'>
												{' '}
												<div className="flex items-center">
													<img
														src={item.url}
														style={{
															height: '50px',
															width: '50px',
															borderRadius: '30px',
															objectFit: 'cover',
														}}
													/>
													<h3 className="text-0.5xl md:text-xl ml-2">{item.name}</h3>
												</div>
											</td>
											<td>
												<p className="font-bold ">₹ {item.price}</p>
											</td>
											<td>
												<div className="flex items-center justify-center">
													<span
														className="py-1 px-1 rounded-md hover:text-primary font-extrabold cursor-pointer"
														onClick={() => dispatch(addCount(item))}
													>
														+
													</span>
													<p className="px-2">{item.count}</p>
													<span
														className="py-1 px-1  hover:text-primary rounded-md font-extrabold cursor-pointer"
														onClick={() => dispatch(reduceCount(item))}
													>
														-
													</span>
												</div>
											</td>
											<td>
												<button
													type="button"
													className=" text-0.5xl bg-red text-white px-2 md:px-4 py-1 rounded-md"
													onClick={() => dispatch(removeItem(item))}
												>
													<i className='fas fa-trash'></i>
												</button>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
						​
						{/* {CartItems.map((item) => {
						return (
							<div
								style={{
									display: 'flex',
									justifyContent: 'space-between',
									alignItems: 'center',

									borderBottom: '1px solid lightgrey',
									paddingBottom: '10px',
								}}
							>
								<div className="flex items-center">
									<img
										src={item.url}
										style={{
											height: '50px',
											width: '50px',
											borderRadius: '30px',
											objectFit: 'cover',
										}}
									/>
									<h3 className=" text-xl ml-2">{item.name}</h3>
								</div>
								<p className="font-bold">{item.price}</p>
								<div className="flex items-center justify-center">
									<span className="py-1 px-2 bg-primary text-white rounded-md font-bold cursor-pointer">
										+
									</span>
									<p className="px-2">1</p>
									<span className="py-1 px-2 bg-primary text-white rounded-md font-bold cursor-pointer">
										-
									</span>
								</div>
								<button
									type="button"
									className="bg-red text-white px-4 py-1 rounded-md"
								>
									Delete
								</button>
							</div>
						);
					})} */}
						{/* bill  summary */}
						<div
							style={{
								display: 'flex',
								justifyContent: 'left',
								paddingTop: '10px',
							}}
						>
							<h2 className="font-bold text-xl md:text-2xl">
								Bill Amount :{' '}
								<span className="text-green">
									₹{' '}
									{CartItems.reduce(
										(total, next) => total + next.price * next.count,
										0
									)}
								</span>
							</h2>
						</div>
					</div>
				) : (
					<div style={{height:'500px',display:'flex',maxWidth:'600px',flexDirection:'column',alignItems:'center',justifyContent:'center',alignSelf:'center',marginBottom:'30px',marginLeft:'auto',marginRight:'auto'}}>
						<img src={emptycart} alt="" style={{height:'100%',width:'100%',objectFit:'contain'}} />
						<h1 className='font-bold text-center'>No Items Added</h1>
					</div>
				)}
			</div>
			<Footer />
		</div>
	);
}

export default MyCart