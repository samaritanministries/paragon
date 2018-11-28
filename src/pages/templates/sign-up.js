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
			<div class="content">
				<h1>Enter Information About Your Membership</h1>
				<p>Add information below.</p>

				<div class="row">
					<div class="column column--third float-right">
						<div class="card no-padding">
							<div class="card--header has-border">
								<h3>Your Monthly Share</h3>
							</div>
							<div class="card--content">
								<fieldset>
									<label>Co-Share</label>
									<p class="no-margin">None Selected</p>
								</fieldset>
								<fieldset>
									<label>Annual Unshareable Amount</label>
									<p class="no-margin">$1,000.00</p>
								</fieldset>
								<fieldset>
									<label>Membership Size</label>
									<p class="no-margin">2 Person Membership</p>
								</fieldset>
							</div>
						</div>
					</div>


					<div class="column column--two-thirds">
						<div class="card no-padding">
							<div class="card--header has-border space-between">
								<h3>Household Information</h3>
								<span>Step 1 of 5</span>
							</div>
							<div class="card--content">
								<p>Please include every family member in your household, even if not in your membership.</p>
								<h4>Your Information</h4>
								<fieldset class="row">
									<div class="column column--third">
										<label for="first-name">First Name</label>
										<input type="text" id="first-name"/>
									</div>
									<div class="column column--third">
										<label for="middle-name">Middle Name</label>
										<input type="text" id="middle-name"/>
									</div>
									<div class="column column--third">
										<label for="last-name">Last Name</label>
										<input type="text" id="last-name"/>
									</div>
								</fieldset>
								<fieldset class="row">
									<div class="column column--third">
										<label for="date-of-birth">Date of Birth</label>
										<input type="date" id="date-of-birth"/>
									</div>
									<div class="column column--third select--has-icon">
										<label for="gender">Gender</label>
										<select id="gender">
											<option>Male</option>
											<option>Female</option>
										</select>
									</div>
									<div class="column column--third select--has-icon">
										<label for="marital-status">Marital Status</label>
										<select id="marital-status">
											<option>Married</option>
											<option>Single</option>
											<option>Divorced</option>
										</select>
									</div>
								</fieldset>
							</div>
						</div>
					</div>

					<div class="column column--two-thirds">
						<div class="accordion">
						  <div class="accordion--header space-between" id="toggleAccordion" tabindex="0">
						    <span>
									<i class="dashing-icon accordion--arrow"></i>
							    <h3 class="title">Membership Information</h3>
								</span>
								<span>Step 2 of 5</span>
						  </div>
						  <div class="accordion--content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
						</div>
					</div>

					<div class="column column--two-thirds">
						<div class="accordion">
						  <div class="accordion--header space-between" id="toggleAccordion" tabindex="0">
						    <span>
									<i class="dashing-icon accordion--arrow"></i>
							    <h3 class="title">Medical History</h3>
								</span>
								<span>Step 3 of 5</span>
						  </div>
						  <div class="accordion--content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
						</div>
					</div>

					<div class="column column--two-thirds">
						<div class="accordion">
						  <div class="accordion--header space-between" id="toggleAccordion" tabindex="0">
						    <span>
									<i class="dashing-icon accordion--arrow"></i>
							    <h3 class="title">Church Information</h3>
								</span>
								<span>Step 4 of 5</span>
						  </div>
						  <div class="accordion--content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
						</div>
					</div>

					<div class="column column--two-thirds">
						<div class="accordion">
						  <div class="accordion--header space-between" id="toggleAccordion" tabindex="0">
						    <span>
									<i class="dashing-icon accordion--arrow"></i>
							    <h3 class="title">Other Information</h3>
								</span>
								<span>Step 5 of 5</span>
						  </div>
						  <div class="accordion--content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
						</div>
					</div>
				</div>



			</div>
		</section>
	</div>

</div>

)
