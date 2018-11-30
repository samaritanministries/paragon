import React from 'react'

export default () => (
<div>

	<section class="mobile-overlay is-collapsed">
		<aside class="mobile-sidebar">
			<div class="mobile-profile">
				<a href="/templates/mobile" class="mobile-sidebar--button" id="open-button" ><i class="dashing-icon dashing-icon--close"></i></a>
				<a href="/templates/single-page" class="mobile-profile--account">
					<div class="profile-image"><i class="dashing-icon dashing-icon--face-good"></i></div>
					<div class="profile-edit"><i class="dashing-icon dashing-icon--pencil"></i></div>
					<h3 class="profile-name">Nitsua Cholbonk</h3>
					<span class="profile-email">nitsua.cholbonk@mailinator.com</span>
				</a>
			</div>
			<ul class="mobile-sidebar-nav">
				<li><i class="dashing-icon dashing-icon--locked"></i><a href="/">Dashboard</a></li>
				<li><i class="dashing-icon dashing-icon--locked"></i><a href="/single-page">Single Column Layout in Dashboard</a></li>
				<li><i class="dashing-icon dashing-icon--locked"></i><a href="/fullscreen">Fullscreen Layout in Dashboard</a></li>
				<li><i class="dashing-icon dashing-icon--locked"></i><a href="/mobile">Open Mobile Menu</a></li>
			</ul>
		</aside>
	</section>

	<div class="grid-phoenix fullscreen">
		<header class="header">
			<div class="column column--full">
				<div class="progress">
					<div class="progress-bar progress-bar--2of3" data-id="progress-stepper"></div>
				</div>
				<div class="progress-labels">
					<div class="progress-label progress-label--completed"><a>Step 1</a></div>
					<div class="progress-label"><a>Step 2</a></div>
					<div class="progress-label"><a>Step 3</a></div>
				</div>
			</div>
		</header>

		<section class="app">
			<div class="content content-l">
				<h1>Enter Information About Your Membership</h1>
				<p>Add information below.</p>

				<div className="grid grid-padding">

					<div className="grid grid--third card">

					</div>

					<div className="grid grid--two-thirds card">
						<span class="space-between">
							<h3>Household Information</h3>
							<span>Step 1 of 5</span>
						</span>

						<hr />

						<p>Please include every family member in your household, even if not in your membership.</p>
						<h4>Your Information</h4>

						<fieldset class="grid--third">
							<label for="first-name">First Name</label>
							<input type="text" id="first-name"/>
						</fieldset>
						<fieldset class="grid--third">
							<label for="middle-name">Middle Name</label>
							<input type="text" id="middle-name"/>
						</fieldset>
						<fieldset class="grid--third">
							<label for="last-name">Last Name</label>
							<input type="text" id="last-name"/>
						</fieldset>

						<fieldset class="grid--third">
							<label for="date-of-birth">Date of Birth</label>
							<input type="date" id="date-of-birth"/>
						</fieldset>
						<fieldset class="grid--third select--has-icon">
							<label for="gender">Gender</label>
							<select id="gender">
								<option>Male</option>
								<option>Female</option>
							</select>
						</fieldset>
						<fieldset class="grid--third select--has-icon">
							<label for="marital-status">Marital Status</label>
							<select id="marital-status">
								<option>Married</option>
								<option>Single</option>
								<option>Divorced</option>
							</select>
						</fieldset>
					</div>
				</div>
			</div>
		</section>
	</div>

</div>

)
