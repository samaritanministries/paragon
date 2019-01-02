import React from 'react'
import { Link } from 'gatsby'
// The scss needs to be imported here for running 'gatsby build'
import '../../sass/example-page/example-page.scss'

export default () => (

<main>
	<header className="header">
		<Link to={"/templates/mobile"} className="mobile-sidebar--button" id="close-button"><i className="dashing-icon dashing-icon--menu"></i></Link>
		<div className="logo"><p className="text-color--white">LOGO</p></div>

		<nav className="header-nav">
			<ul>
				<li><Link to={"/"} className="active">Home</Link></li>
				<li><Link to={"/"}>Shares</Link></li>
				<li><Link to={"/"}>Bill's</Link></li>
			</ul>
		</nav>

		<div className="alert"><i className="dashing-icon dashing-icon--notification"></i><div className="count">100</div></div>
		<div className="profile">
			<div className="profile-image"><span className="initials">RF</span></div>
			<span className="profile-name">Ryan Fitzgerald</span>
			<i className="dashing-icon dashing-icon--arrow-down"></i>
		</div>

	</header>

	<nav className="sub-nav">
		<ul>
			<li><Link to={"/"} className="active">Option 1</Link></li>
			<li><Link to={"/"}>Option 2</Link></li>
			<li><Link to={"/"}>Option 3</Link></li>
		</ul>
	</nav>

	<section className="content">
		<div className="grid grid-padding">

			<div>
				<h1>Enter Information About Your Membership</h1>
				<p>Add information below.</p>
				<Link to="/templates/overpanel">Full Page</Link>
			</div>

		</div>
	</section>
</main>

)
