import React from 'react'

function Footer() {
	return (
		<div style={{ backgroundColor: 'black' }}>
			<div className="p-10" style={{ display: 'flex', flexWrap: 'wrap' }}>
				<div className="about" style={{ flex: '1 1 400px ' }}>
					<h2 className="py-8 text-white">About Project</h2>
					<p className="text-white">
						This Restaurant website is created using technologies React for UI library,Redux for State mangement,apisauce for API Integration,used express js for Backend Server
					</p>
					<h2 className="py-8 text-white">Connect</h2>
					<div className="flex item-center justify-start gap-2">
						<div
							className="bg-white  rounded-[40px] hover:bg-primary hover:text-white cursor-pointer "
							style={{
								width: '40px',
								height: '40px',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								fontSize: '18px',
							}}
						>
							<i class="fa-brands fa-instagram"></i>
						</div>
						<div
							className="bg-white  rounded-[40px] hover:bg-primary hover:text-white cursor-pointer "
							style={{
								width: '40px',
								height: '40px',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								fontSize: '18px',
							}}
						>
							<i class="fa-brands fa-whatsapp"></i>
						</div>
						<div
							className="bg-white  rounded-[40px] hover:bg-primary hover:text-white cursor-pointer "
							style={{
								width: '40px',
								height: '40px',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								fontSize: '18px',
							}}
						>
							<i class="fa-brands fa-linkedin"></i>
						</div>
						<div
							className="bg-white  rounded-[40px] hover:bg-primary hover:text-white cursor-pointer "
							style={{
								width: '40px',
								height: '40px',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								fontSize: '18px',
							}}
						>
							<i class="fa-brands fa-telegram"></i>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-3" style={{ flex: '1 1 600px' }}>
					<div>
						<h2 className="py-8 text-white">Technologies Used</h2>
						<p className="text-white">React Js</p>
						<p className="text-white">Redux</p>
						<p className="text-white">Redux Toolkit</p>
						<p className="text-white">Tailwind CSS</p>
						<p className="text-white">Font Awesome Icons</p>
					</div>
					<div>
						<h2 className="py-8 text-white">Contact</h2>
						<p className="text-white " style={{ fontWeight: 'bold' }}>
							RR Nagar Bengaluru 560049
						</p>
						<p className="text-white py-2">+91 8197735916</p>
						<p className="text-white py-2">dhlaxman234@gmail.com</p>
					</div>
				</div>
			</div>
			<div className="p-4 " >
				<h2 className="text-white text-center ">
					Copyright &#169; 2024 All Rights Reserver | This website is made by
					Laxman Halaki{' '}
				</h2>
			</div>
		</div>
	);
}

export default Footer