import React from 'react'
import { Link } from 'gatsby'
import AppFooter from './footer'
// The scss needs to be imported here for running 'gatsby build'
import '../../sass/example-page/example-page.scss'
import '../../sass/experimental/mobilemenu.scss'
import '../../sass/experimental/placeholder.scss'

export default () => (

<React.Fragment>
	<header className="header">
		<Link to={"/templates/mobile"} className="button--mobile-sidebar" id="close-button"><i className="dashing-icon dashing-icon--menu"></i></Link>
		<div className="logo"><p className="text-color--purple">LOGO</p></div>

		<nav className="header-nav">
			<ul>
				<li><Link to={"/"} className="active">Page 1</Link></li>
				<li><Link to={"/"}>Page 2</Link></li>
				<li><Link to={"/"}>Page 3</Link></li>
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

	<main className="content">
		<div className="grid grid-padding">
			<div className="grid--full grid--half_desktop">

				<div className="card">
					<div className="card-content">
						<h1>Primary Header</h1>
						<p>Header description</p>
						<Link to="/templates/default">Default Page</Link>
					</div>
				</div>

				<div className="card">
					<div className="card-content">
						<h1>Primary Header</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate massa sed lacus aliquet, nec placerat neque pellentesque. Ut aliquet gravida lacus quis aliquam. Aenean placerat tellus a ipsum hendrerit, nec bibendum elit pharetra. Pellentesque eleifend felis vitae elit maximus convallis. Donec rhoncus est ut arcu auctor, sit amet aliquam sapien malesuada. Suspendisse potenti. Fusce tortor massa, pharetra eu ligula laoreet, ultrices faucibus elit. Donec eget tortor pharetra, tincidunt libero nec, dictum metus. Nam vitae placerat dolor. Vivamus in leo bibendum, iaculis lectus sed, mollis lorem. Donec viverra ex et luctus facilisis. Aenean orci mi, efficitur quis feugiat in, venenatis ut turpis.

In mattis accumsan accumsan. Aliquam vel sapien euismod, malesuada odio non, ullamcorper magna. Aliquam a egestas enim, vitae imperdiet nulla. Suspendisse maximus nunc non lorem congue lacinia et ut ligula. Curabitur blandit porta tellus, a maximus lacus luctus non. Donec posuere gravida diam non tempor. Phasellus sed purus nunc. Morbi eu odio blandit, aliquet leo sit amet, blandit lorem. Nulla lorem nibh, molestie sit amet justo eu, ullamcorper mattis elit. Sed ac urna mollis, varius erat non, pharetra mi. Nam molestie arcu diam, vitae dignissim lacus tristique eu. In aliquam tristique dui sed sagittis. Proin tincidunt faucibus dolor, nec condimentum dui ultrices sit amet. Nam mattis magna felis, eget consectetur dui gravida at.</p>
					</div>
				</div>

			</div>
		</div>
	</main>
	<AppFooter />
</React.Fragment>

)
