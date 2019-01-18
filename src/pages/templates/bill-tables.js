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
		  <div className="accordion--table expanded scroll">
				<div className="scroll--width">
			    <ol className="accordion--key">
			      <li className="accordion--arrow"></li>
			      <li className="date">Date</li>
			      <li className="provider">Provider</li>
			      <li className="member">Member</li>
			      <li className="amount">Amount</li>
			      <li className="sharing">Sharing</li>
			      <li className="youpay">You Pay</li>
			      <li className="category">Category</li>
			      <li className="status">Status</li>
			    </ol>

			    <ol className="accordion--row" id="toggleAccordionTable">
			      <li className="accordion--arrow"><i className="dashing-icon accordion--arrow"></i></li>
			      <li className="date">01/12/19</li>
			      <li className="provider">A Long Provider Name</li>
			      <li className="member">Jill Throwfitz</li>
			      <li className="amount">$8624.16</li>
			      <li className="sharing">$7175.94</li>
			      <li className="youpay">$860.22</li>
			      <li className="category">Broken Arm</li>
			      <li className="status">Awaiting Shares</li>
			    </ol>

			    <section className="accordion--content" style={{ display: "block" }}>
			      <h1>Provider Name</h1>
			      <p>Description of What happened</p>
			      <span className="item"><span>$100</span><span>$100</span></span>
			    </section>

			    <ol className="accordion--row" id="toggleAccordionTable">
			      <li className="accordion--arrow"><i className="dashing-icon accordion--arrow"></i></li>
			      <li className="date">01/12/19</li>
			      <li className="provider">A Short Name</li>
			      <li className="member">Jill Throwfitz</li>
			      <li className="amount">$8999.16</li>
			      <li className="sharing">$7735.94</li>
			      <li className="youpay">$86.22</li>
			      <li className="category">Broken Arm</li>
			      <li className="status">Awaiting Shares</li>
			    </ol>

			    <section className="accordion--content">
			      <h1>Provider Name</h1>
			      <p>Description of What happened</p>
			      <span className="item"><span>$100</span><span>$100</span></span>
			    </section>

			    <ol className="accordion--row" id="toggleAccordionTable">
			      <li className="accordion--arrow"><i className="dashing-icon accordion--arrow"></i></li>
			      <li className="date">--</li>
			      <li className="provider">--</li>
			      <li className="member">Random</li>
			      <li className="amount">$0,000,000.00</li>
			      <li className="sharing">$775299.94</li>
			      <li className="youpay">$2.00</li>
			      <li className="category">--</li>
			      <li className="status">--</li>
			    </ol>

			    <section className="accordion--content">
			      <h1>Provider Name</h1>
			      <p>Description of What happened</p>
			      <span className="item"><span>$100</span><span>$100</span></span>
			    </section>
				</div>
		  </div>
		</div>
	</section>
</main>

)
