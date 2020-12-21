import { NavLink } from 'react-router-dom';

function Header() {
	return (
		<header>
			<div className='container'>
				<h1 className='news__heading h2 my-3 text-center'>
					Science and Business news
				</h1>
			</div>

			<nav className='navbar'>
				<ul className='navbar-nav flex-row mx-auto'>
					<li className='nav-item mx-2 btn '>
						<NavLink to='/science'>Science</NavLink>
					</li>
					<li className='nav-item mx-2 btn '>
						<NavLink to='/business'>Business</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
