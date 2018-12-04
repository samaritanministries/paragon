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
		<header class="header" style={{backgroundColor: "#FFFFFF"}}>
			<div class="content content-m" style={{width: "100%"}}>
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
				<div className="grid grid-padding">

					<h1>Enter Information About Your Membership</h1>
					<p>Add information below.</p>

					<div className="grid--two-thirds">
						<div className="grid card">
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
							<fieldset class="grid--two-thirds select--has-icon">
								<label for="occupation">Occupation</label>
								<select id="occupation">
									<option>Accounting</option>
									<option>Doctor</option>
									<option>Teacher</option>
								</select>
							</fieldset>
							<fieldset class="grid--third">
								<label for="ssn">Last 4 Digits of Social</label>
								<input type="text" id="ssn"/>
							</fieldset>
						</div>

						<div className="grid card">
							<span class="space-between">
								<h3>Membership Plan</h3>
								<span>Step 2 of 5</span>
							</span>

							<hr />

							<p>Please include every family member in your household, even if not in your membership.</p>
							<ol class="ordered-list--custom">
							  <li className="no-margin"><h3>Membership Size</h3></li>
								<p>How many people would you like in your membership</p>
								<fieldset >
								  <div class="checkbox-card">
								    <input type="checkbox" name="memberCheckbox" id="member1"/>
								    <label for="member1" class="card">Ryan Fitz</label>
								  </div>
								  <div class="checkbox-card">
								    <input type="checkbox" name="memberCheckbox" id="member2" />
								    <label for="member2" class="card">Jill Fitz</label>
								  </div>
								  <div class="checkbox-card">
								    <input type="checkbox" name="memberCheckbox" id="member3" />
								    <label for="member3" class="card">Jackson Fitz</label>
								  </div>
								</fieldset>

								<li className="no-margin mt-space-m"><h3>Co-Share</h3></li>
								<p>Choose your Co-Share</p>
								<fieldset>
								  <div class="radio-card">
								    <input type="radio" name="coShareRadio" id="coShare1"/>
								    <label for="coShare1" class="card">10% + $2,500 Max</label>
								  </div>
								  <div class="radio-card">
								    <input type="radio" name="coShareRadio" id="coShare2" />
								    <label for="coShare2" class="card">15% + $3,750 Max</label>
								  </div>
								  <div class="radio-card">
								    <input type="radio" name="coShareRadio" id="coShare3" />
								    <label for="coShare3" class="card">20% + $5,000 Max</label>
								  </div>
								</fieldset>

								<li className="no-margin mt-space-m"><h3>Annual Unshareable Amount</h3></li>
								<p>Select your annual personal responsibility</p>
								<fieldset>
								  <div class="radio-card">
								    <input type="radio" name="AUARadio" id="AUA1"/>
								    <label for="AUA1" class="card">$1,000</label>
								  </div>
								  <div class="radio-card">
								    <input type="radio" name="AUARadio" id="AUA2" />
								    <label for="AUA2" class="card">$2,000</label>
								  </div>
								  <div class="radio-card">
								    <input type="radio" name="AUARadio" id="AUA3" />
								    <label for="AUA3" class="card">$5,000</label>
								  </div>
								</fieldset>

							  <li className="no-margin mt-space-m"><h3>Start Date</h3></li>
								<p>When would you like to start your membership?</p>
								<fieldset className="grid--third select--has-icon">
									<select type="text" id="first-name">
										<option>Today</option>
										<option>12/1/2018</option>
										<option>1/1/2019</option>
										<option>2/1/2019</option>
									</select>
								</fieldset>
							</ol>
						</div>

						<div className="grid card">
							<span class="space-between">
								<h3>Household Information</h3>
								<span>Step 3 of 5</span>
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
							<fieldset class="grid--two-thirds select--has-icon">
								<label for="occupation">Occupation</label>
								<select id="occupation">
									<option>Accounting</option>
									<option>Doctor</option>
									<option>Teacher</option>
								</select>
							</fieldset>
							<fieldset class="grid--third">
								<label for="ssn">Last 4 Digits of Social</label>
								<input type="text" id="ssn"/>
							</fieldset>
						</div>

						<div className="grid card">
							<span class="space-between">
								<h3>Household Information</h3>
								<span>Step 4 of 5</span>
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
							<fieldset class="grid--two-thirds select--has-icon">
								<label for="occupation">Occupation</label>
								<select id="occupation">
									<option>Accounting</option>
									<option>Doctor</option>
									<option>Teacher</option>
								</select>
							</fieldset>
							<fieldset class="grid--third">
								<label for="ssn">Last 4 Digits of Social</label>
								<input type="text" id="ssn"/>
							</fieldset>
						</div>

						<div className="grid card">
							<span class="space-between">
								<h3>Household Information</h3>
								<span>Step 5 of 5</span>
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
							<fieldset class="grid--two-thirds select--has-icon">
								<label for="occupation">Occupation</label>
								<select id="occupation">
									<option>Accounting</option>
									<option>Doctor</option>
									<option>Teacher</option>
								</select>
							</fieldset>
							<fieldset class="grid--third">
								<label for="ssn">Last 4 Digits of Social</label>
								<input type="text" id="ssn"/>
							</fieldset>
						</div>

						<div class="accordion">
						  <div class="accordion--header" id="toggleAccordion" tabindex="0">
						    <i class="dashing-icon accordion--arrow"></i>
						    <h3 class="title">Accordion Title</h3>
						  </div>
						  <div class="accordion--content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
						</div>
					</div>



					<div className="grid--third">
						<div className="card"><h3 class="center-align">Your Monthly Share</h3></div>

						<hr />

					</div>

				</div>
			</div>
		</section>
	</div>

</div>

)
