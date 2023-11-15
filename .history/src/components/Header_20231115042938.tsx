import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
	return (
		<header>
			<div className={'header'}>
				<div className={'subHeader'}>
					<div className={'leftSubHeader'}>
						{/*<img src={"https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-98.jpg"}/>*/}
						<Link to={`/`} className={'link'}>
							<h1>NiBeNiMe</h1>
						</Link>
						<Link to={'/search'} className={'link'}>
							<p>Поиск</p>
						</Link>
					</div>
					<div className={'rightSubHeader'}>
						<a href={''} target={'_blank'}>
							<img src={'https://smajlik.ru/wp-content/uploads/2017/12/2.png'} />
						</a>
						<a href={'https://t.me/Kirillishkop'} target={'_blank'}>
							<svg path={'../../public/Logo.svg'} />
						</a>
					</div>
				</div>
			</div>

			<div className={'outlet'}>
				<Outlet />
			</div>
		</header>
	);
};

export default Header;
