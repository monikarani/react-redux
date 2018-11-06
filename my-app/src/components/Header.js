/* 
      *                                                            *
    *****                                                        *****                             
      *                                                            *
        ==========================================================
        ==========                                      ==========
        ==========          Page for Header             ==========
        ==========                                      ==========
        ==========================================================
      *                                                            *
    *****                                                        *****   
      *                                                            *
*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedIn: false,
			open: false,
			loaderStatus: false,
		};
	}
	

	/********* render function ********/
	render() {
		return (
			<header className="frontHeader">
				<div className="main">
					<div className="container headerTop">
						<nav className="navbar navbar-default">
							<div className="container-fluid">
								<div className="navbar-header">
									<Link className="navbar-brand" to="/">
										<img src="/images/competitionTab.png" alt=""/>
									</Link>
								</div>

								<button
									type="button"
									className="navbar-toggle"
									data-toggle="collapse"
									data-target="#myNavbar"
								>
									<span className="icon-bar" />
									<span className="icon-bar" />
									<span className="icon-bar" />
								</button>
								<div className="collapse navbar-collapse" id="myNavbar">
									<ul className="nav navbar-nav navbar-right">
										<li>
											<Link to="/">Home</Link>
										</li>
										<li><Link to="/login">Login</Link>
										</li>
										<li>Sign Up
										</li>
									</ul>
								</div>
							</div>
						</nav>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;
