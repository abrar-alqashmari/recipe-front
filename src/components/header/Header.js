import logo from '../../assets/images/logo.png';
import { Link } from "react-router-dom";
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';

const Header = () => {
	const authCtx = useContext(AuthContext)

	return (
		<header id="header" className="transparent-header position-fixed w-100" data-sticky-shrink="false">
			<div id="header-wrap">
				<div className="container">
					<div className="header-row">
						<div id="logo">
							<Link to="/" className="standard-logo">
								{/* <img src={logo} alt="Canvas Logo" /> */}
							</Link>
							<Link to="/" className="retina-logo">
								{/* <img src={logo} alt="Canvas Logo" /> */}
							</Link>
						</div>

						<div id="primary-menu-trigger">
							<svg className="svg-trigger" viewBox="0 0 100 100">
							<path d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"></path>
							<path d="m 30,50 h 40"></path>
							<path d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"></path>
							</svg>
						</div>
						<nav className="primary-menu">
							<ul className="menu-container">
								<li className="menu-item">
									<Link className="menu-link" to="/"><div>Home</div></Link>
								</li>
								<li className="menu-item">
									<Link className="menu-link" to="/AllRecipes"><div>All Recipes</div></Link>
								</li>
								<li className="menu-item">
									<Link className="menu-link" to="#"><div>Account <i className="icon-angle-down1 d-none d-lg-inline-block"></i></div>
									</Link>
									<ul className="sub-menu-container rounded-bottom">
										{!authCtx.isAuthenticated && <>
											<li className="menu-item">
												<Link className="menu-link" to={'/signup'}><div>Sign up</div></Link>
											</li>
											<li className="menu-item">
												<Link className="menu-link" to={'/signin'}><div>Sign in</div></Link>
											</li>
										</>}

										{authCtx.isAuthenticated && <>
										<li className="menu-item">
											<Link className="menu-link" to={'/myaccount'}><div>My account</div></Link>
										</li>
										<li className="menu-item">
											<Link className="menu-link" to={'/signout'}><div>Sign out</div></Link>
										</li>
										</>}
									</ul>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
			<div className="header-wrap-clone"></div>
		</header>
	)
}

export default Header