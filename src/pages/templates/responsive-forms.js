import React from 'react'
import { Link } from 'gatsby'
import CodeToggle from '../../components/codetoggle'
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
			<i className="dashing-icon dashing-icon--arrow-down dashing-icon--black"></i>
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
			<div className="grid--half">

				<div className="card">
					<div className="card-header has-border">
						<h2 className="no-margin">Flex form updates</h2>
					</div>

					<div className="card-content flex-content">
						<p className="mb-space-m">Gives fieldsets a min-width. They will break to the next line if they get to small.</p>
						<div className="flex-row">
							<fieldset>
								<label htmlFor="first-name">First Name</label>
								<input type="text" id="first-name"/>
							</fieldset>
							<fieldset>
								<label htmlFor="middle-name">Middle Name</label>
								<input type="text" id="middle-name"/>
							</fieldset>
							<fieldset>
								<label htmlFor="last-name">Last Name</label>
								<input type="text" id="last-name"/>
							</fieldset>
						</div>
						<div className="flex-row">
							<fieldset>
								<label htmlFor="birthday">Date of Birth</label>
								<input type="date" id="birthday"/>
							</fieldset>
							<fieldset className="select--has-icon">
								<label htmlFor="gender">Gender</label>
								<select id="gender">
									<option>Male</option>
									<option>Female</option>
								</select>
							</fieldset>
							<fieldset className="spacer"></fieldset>
						</div>
						<div className="flex-row">
							<fieldset className="select--has-icon">
								<label htmlFor="Occupation">Occupation</label>
								<select id="Occupation">
									<option>1</option>
									<option>2</option>
								</select>
							</fieldset>
							<fieldset className="spacer"></fieldset>
						</div>
					</div>
					<div className="card-footer">
						<button className="mr-space-xs">Submit</button>
						<button className="button--transparent button--gray">Cancel</button>
					</div>
				</div>

				<div className="show-code">
					<CodeToggle>
{`<div className="card-content flex-content">
	<div className="flex-row">
		<fieldset>
			<label htmlFor="first-name">First Name</label>
			<input type="text" id="first-name"/>
		</fieldset>
		<fieldset>
			<label htmlFor="middle-name">Middle Name</label>
			<input type="text" id="middle-name"/>
		</fieldset>
		<fieldset>
			<label htmlFor="last-name">Last Name</label>
			<input type="text" id="last-name"/>
		</fieldset>
	</div>
	<div className="flex-row">
		<fieldset>
			<label htmlFor="birthday">Date of Birth</label>
			<input type="date" id="birthday"/>
		</fieldset>
		<fieldset className="select--has-icon">
			<label htmlFor="gender">Gender</label>
			<select id="gender">
				<option>Male</option>
				<option>Female</option>
			</select>
		</fieldset>
		<fieldset className="spacer"></fieldset>
	</div>
	<div className="flex-row">
		<fieldset className="select--has-icon">
			<label htmlFor="Occupation">Occupation</label>
			<select id="Occupation">
				<option>1</option>
				<option>2</option>
			</select>
		</fieldset>
		<fieldset className="spacer"></fieldset>
	</div>
</div>`}
						</CodeToggle>
					</div>

			</div>

			<div className="grid--half">
				<h3>Changes</h3>
				<ul>
					<li>Give <code className="example-text">fieldset</code> in flex-row's margin left instead of right so when they wrap it lines up correctly.</li>
					<li>Give the flex-row negative left margin to offset the fieldet left margins</li>
				</ul>
			</div>

			{/* <div className="grid--half">

				<div className="card">
					<div className="card-header has-border">
						<h2 className="no-margin">Card Header</h2>
					</div>

					<div className="card-content grid">
							<fieldset className="grid--half grid--third_desktop">
								<label htmlFor="first-name">First Name</label>
								<input type="text" id="first-name"/>
							</fieldset>
							<fieldset className="grid--half grid--third_desktop">
								<label htmlFor="middle-name">Middle Name</label>
								<input type="text" id="middle-name"/>
							</fieldset>
							<fieldset className="grid--half grid--third_desktop">
								<label htmlFor="last-name">Last Name</label>
								<input type="text" id="last-name"/>
							</fieldset>

							<fieldset className="grid--half grid--third_desktop">
								<label htmlFor="birthday">Date of Birth</label>
								<input type="date" id="birthday"/>
							</fieldset>
							<fieldset className="grid--half grid--third_desktop select--has-icon">
								<label htmlFor="gender">Gender</label>
								<select id="gender">
									<option>Male</option>
									<option>Female</option>
								</select>
							</fieldset>

					</div>
					<div className="card-footer">
						<button className="mr-space-xs">Submit</button>
						<button className="button--transparent button--gray">Cancel</button>
					</div>
				</div>

				<h3>Notes</h3>
				<ul>
					<li>Keep grid-gap on mobile for input spacing</li>
					<li>Grid-half on small tablet has overflow issues (might need grid-full on tablet?)</li>
				</ul>

				<div className="show-code">
					<CodeToggle>
{`<div className="card-content grid">
	<fieldset className="grid--half grid--third_desktop">
		<label htmlFor="first-name">First Name</label>
		<input type="text" id="first-name"/>
	</fieldset>
	<fieldset className="grid--half grid--third_desktop">
		<label htmlFor="middle-name">Middle Name</label>
		<input type="text" id="middle-name"/>
	</fieldset>
	<fieldset className="grid--half grid--third_desktop">
		<label htmlFor="last-name">Last Name</label>
		<input type="text" id="last-name"/>
	</fieldset>

	<fieldset className="grid--half grid--third_desktop">
		<label htmlFor="birthday">Date of Birth</label>
		<input type="date" id="birthday"/>
	</fieldset>
	<fieldset className="grid--half grid--third_desktop select--has-icon">
		<label htmlFor="gender">Gender</label>
		<select id="gender">
			<option>Male</option>
			<option>Female</option>
		</select>
	</fieldset>

</div>`}
						</CodeToggle>
					</div>

			</div> */}
		</div>
	</main>
</React.Fragment>

)
