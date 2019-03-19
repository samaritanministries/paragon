import React from 'react'
import { Link } from 'gatsby'
// The scss needs to be imported here for running 'gatsby build'
import '../../sass/example-page/example-page.scss'

export default () => (

<div>
	<header className="header">
		<Link to={"/templates/mobile"} className="button--mobile-sidebar" id="close-button"><i className="dashing-icon dashing-icon--menu"></i></Link>
		<div className="logo"><p className="text-color--white">LOGO</p></div>

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

			<h2>Accordion Title</h2>

			<div className="expandable-table">
				<ol className="expandable-table-header">
					<li className="toggle-arrow"></li>
					<li className="date">Date</li>
					<li className="provider">Provider</li>
					<li className="member">Member</li>
					<li className="sharing"><span className="sharing-label">Shareable: </span>Sharing</li>
					<li className="category">Category</li>
					<li className="status">Status</li>
				</ol>

				{/* Non-Expanded Section */}
				<ol className="expandable-table-row" id="toggleAccordionTableA">
					<li className="toggle-arrow"><i className="dashing-icon toggle-arrow"></i></li>
					<li className="date">Feb 12</li>
					<li className="provider">A Long Provider Name</li>
					<li className="member">Carl ViewSonic</li>
					<li className="sharing"><span className="sharing-label">Shareable: </span>$7175.94</li>
					<li className="category">Broken Arm</li>
					<li className="status"><i className="dashing-icon dashing-icon--heart"></i></li>
				</ol>

				{/* Expanded Section */}
				<section className="expandable-table-content grid">
					<div className="grid--half expandable-table-breakdown">
						<div className="details">
							<p className="label-class">Member:</p>
							<p className="description">Carl ViewSonic</p>
						</div>
						<div className="details">
							<p className="label-class">Date of Service:</p>
							<p className="description">02/12/19</p>
						</div>
						<div className="details">
							<p className="label-class">Provider:</p>
							<p className="description">A Long Provider Name LOLOL</p>
						</div>
						<div className="details">
							<p className="label-class">Provider Address:</p>
							<p className="description">5678 gjgjhkghjk St, wertg PL, 56787</p>
						</div>
						<div className="details">
							<p className="label-class">Description:</p>
							<p className="description">Broken Something</p>
						</div>
						<div className="details">
							<p className="label-class">Repriced Amount:</p>
							<p className="description">Your bill was repriced from this to that.</p>
						</div>
						<div className="details">
							<p className="label-class">Adjustment:</p>
							<p className="description">$Money</p>
						</div>
					</div>

					<div className="grid--half expandable-table-breakdown">
						<div className="breakdown--header">
							<p className="label-class">Unshareable</p>
							<p className="description align-right">$86.22</p>
						</div>
						<div className="breakdown">
							<p className="label-class">Co-share</p>
							<p className="description align-right">$86.22</p>
						</div>
						<div className="breakdown">
							<p className="label-class">Ineligible</p>
							<p className="description align-right">$0.00</p>
						</div>
						<div className="breakdown">
							<p className="label-class">AUA</p>
							<p className="description align-right">$0.00</p>
						</div>
						<div className="breakdown--header">
							<p className="label-class">Shareable</p>
							<p className="description align-right">$775.94</p>
						</div>
						<hr />
						<div className="breakdown--header">
							<p className="label-class">Repriced Amount</p>
							<p className="description align-right">$862.16</p>
						</div>
					</div>
				</section>

				{/* Non-Expanded Section */}
				<ol className="expandable-table-row" id="toggleAccordionTableA">
					<li className="toggle-arrow"><i className="dashing-icon toggle-arrow"></i></li>
					<li className="date">Feb 12</li>
					<li className="provider">A Long Provider Name</li>
					<li className="member">Carl ViewSonic</li>
					<li className="sharing"><span className="sharing-label">Shareable: </span>$7175.94</li>
					<li className="category">Broken Arm</li>
					<li className="status"><i className="dashing-icon dashing-icon--heart"></i></li>
				</ol>

				{/* Expanded Section */}
				<section className="expandable-table-content grid">
					<div className="grid--half expandable-table-breakdown">
						<div className="details">
							<p className="label-class">Member:</p>
							<p className="description">Carl ViewSonic</p>
						</div>
						<div className="details">
							<p className="label-class">Date of Service:</p>
							<p className="description">02/12/19</p>
						</div>
						<div className="details">
							<p className="label-class">Provider:</p>
							<p className="description">A Long Provider Name LOLOL</p>
						</div>
						<div className="details">
							<p className="label-class">Provider Address:</p>
							<p className="description">5678 gjgjhkghjk St, wertg PL, 56787</p>
						</div>
						<div className="details">
							<p className="label-class">Description:</p>
							<p className="description">Broken Something</p>
						</div>
						<div className="details">
							<p className="label-class">Repriced Amount:</p>
							<p className="description">Your bill was repriced from this to that.</p>
						</div>
						<div className="details">
							<p className="label-class">Adjustment:</p>
							<p className="description">$Money</p>
						</div>
					</div>

					<div className="grid--half expandable-table-breakdown">
						<div className="breakdown--header">
							<p className="label-class">Unshareable</p>
							<p className="description align-right">$86.22</p>
						</div>
						<div className="breakdown">
							<p className="label-class">Co-share</p>
							<p className="description align-right">$86.22</p>
						</div>
						<div className="breakdown">
							<p className="label-class">Ineligible</p>
							<p className="description align-right">$0.00</p>
						</div>
						<div className="breakdown">
							<p className="label-class">AUA</p>
							<p className="description align-right">$0.00</p>
						</div>
						<div className="breakdown--header">
							<p className="label-class">Shareable</p>
							<p className="description align-right">$775.94</p>
						</div>
						<hr />
						<div className="breakdown--header">
							<p className="label-class">Repriced Amount</p>
							<p className="description align-right">$862.16</p>
						</div>
					</div>
				</section>

				{/* Non-Expanded Section */}
				<ol className="expandable-table-row" id="toggleAccordionTableA">
					<li className="toggle-arrow"><i className="dashing-icon toggle-arrow"></i></li>
					<li className="date">Feb 12</li>
					<li className="provider">A Long Provider Name</li>
					<li className="member">Carl ViewSonic</li>
					<li className="sharing"><span className="sharing-label">Shareable: </span>$7175.94</li>
					<li className="category">Broken Arm</li>
					<li className="status"><i className="dashing-icon dashing-icon--heart"></i></li>
				</ol>

				{/* Expanded Section */}
				<section className="expandable-table-content grid">
					<div className="grid--half expandable-table-breakdown">
						<div className="details">
							<p className="label-class">Member:</p>
							<p className="description">Carl ViewSonic</p>
						</div>
						<div className="details">
							<p className="label-class">Date of Service:</p>
							<p className="description">02/12/19</p>
						</div>
						<div className="details">
							<p className="label-class">Provider:</p>
							<p className="description">A Long Provider Name LOLOL</p>
						</div>
						<div className="details">
							<p className="label-class">Provider Address:</p>
							<p className="description">5678 gjgjhkghjk St, wertg PL, 56787</p>
						</div>
						<div className="details">
							<p className="label-class">Description:</p>
							<p className="description">Broken Something</p>
						</div>
						<div className="details">
							<p className="label-class">Repriced Amount:</p>
							<p className="description">Your bill was repriced from this to that.</p>
						</div>
						<div className="details">
							<p className="label-class">Adjustment:</p>
							<p className="description">$Money</p>
						</div>
					</div>

					<div className="grid--half expandable-table-breakdown">
						<div className="breakdown--header">
							<p className="label-class">Unshareable</p>
							<p className="description align-right">$86.22</p>
						</div>
						<div className="breakdown">
							<p className="label-class">Co-share</p>
							<p className="description align-right">$86.22</p>
						</div>
						<div className="breakdown">
							<p className="label-class">Ineligible</p>
							<p className="description align-right">$0.00</p>
						</div>
						<div className="breakdown">
							<p className="label-class">AUA</p>
							<p className="description align-right">$0.00</p>
						</div>
						<div className="breakdown--header">
							<p className="label-class">Shareable</p>
							<p className="description align-right">$775.94</p>
						</div>
						<hr />
						<div className="breakdown--header">
							<p className="label-class">Repriced Amount</p>
							<p className="description align-right">$862.16</p>
						</div>
					</div>
				</section>

				{/* Non-Expanded Section */}
				<ol className="expandable-table-row" id="toggleAccordionTableA">
					<li className="toggle-arrow"><i className="dashing-icon toggle-arrow"></i></li>
					<li className="date">Feb 12</li>
					<li className="provider">A Long Provider Name</li>
					<li className="member">Carl ViewSonic</li>
					<li className="sharing"><span className="sharing-label">Shareable: </span>$7175.94</li>
					<li className="category">Broken Arm</li>
					<li className="status"><i className="dashing-icon dashing-icon--heart"></i></li>
				</ol>

				{/* Expanded Section */}
				<section className="expandable-table-content grid">
					<div className="grid--half expandable-table-breakdown">
						<div className="details">
							<p className="label-class">Member:</p>
							<p className="description">Carl ViewSonic</p>
						</div>
						<div className="details">
							<p className="label-class">Date of Service:</p>
							<p className="description">02/12/19</p>
						</div>
						<div className="details">
							<p className="label-class">Provider:</p>
							<p className="description">A Long Provider Name LOLOL</p>
						</div>
						<div className="details">
							<p className="label-class">Provider Address:</p>
							<p className="description">5678 gjgjhkghjk St, wertg PL, 56787</p>
						</div>
						<div className="details">
							<p className="label-class">Description:</p>
							<p className="description">Broken Something</p>
						</div>
						<div className="details">
							<p className="label-class">Repriced Amount:</p>
							<p className="description">Your bill was repriced from this to that.</p>
						</div>
						<div className="details">
							<p className="label-class">Adjustment:</p>
							<p className="description">$Money</p>
						</div>
					</div>

					<div className="grid--half expandable-table-breakdown">
						<div className="breakdown--header">
							<p className="label-class">Unshareable</p>
							<p className="description align-right">$86.22</p>
						</div>
						<div className="breakdown">
							<p className="label-class">Co-share</p>
							<p className="description align-right">$86.22</p>
						</div>
						<div className="breakdown">
							<p className="label-class">Ineligible</p>
							<p className="description align-right">$0.00</p>
						</div>
						<div className="breakdown">
							<p className="label-class">AUA</p>
							<p className="description align-right">$0.00</p>
						</div>
						<div className="breakdown--header">
							<p className="label-class">Shareable</p>
							<p className="description align-right">$775.94</p>
						</div>
						<hr />
						<div className="breakdown--header">
							<p className="label-class">Repriced Amount</p>
							<p className="description align-right">$862.16</p>
						</div>
					</div>
				</section>

			</div>
		</div>
	</main>
</div>

)
