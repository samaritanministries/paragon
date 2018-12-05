import React from 'react'

export default () => (
<div>
	<div className="grid-phoenix fullscreen">
		<header className="header signUpHeader">
			<div className="content content-m" style={{width: "100%"}}>
				<div className="progress">
					<div className="progress-bar progress-bar--1of3" data-id="progress-stepper"></div>
				</div>
				<div className="progress-labels">
					<div className="progress-label"><a>Membership</a></div>
					<div className="progress-label"><a>Agreements</a></div>
					<div className="progress-label"><a>Payment</a></div>
				</div>
			</div>
		</header>

		<section className="app">
			<div className="content content-l">
				<div className="grid grid-padding">

					<h1>Enter Information About Your Membership</h1>
					<p>Add information below.</p>

					<div className="grid--two-thirds">
						<div className="grid card">
							<span className="space-between">
								<h3>Household Information</h3>
								<span>Step 1 of 5</span>
							</span>

							<hr />

							<p>Please include every family member in your household, even if not in your membership.</p>
							<h4>Primary Information</h4>

							<fieldset className="grid--third">
								<label for="first-name">First Name</label>
								<input type="text" id="first-name"/>
							</fieldset>
							<fieldset className="grid--third">
								<label for="middle-name">Middle Name</label>
								<input type="text" id="middle-name"/>
							</fieldset>
							<fieldset className="grid--third">
								<label for="last-name">Last Name</label>
								<input type="text" id="last-name"/>
							</fieldset>

							<fieldset className="grid--third">
								<label for="date-of-birth">Date of Birth</label>
								<input type="date" id="date-of-birth"/>
							</fieldset>
							<fieldset className="grid--third select--has-icon">
								<label for="gender">Gender</label>
								<select id="gender">
									<option>Male</option>
									<option>Female</option>
								</select>
							</fieldset>
							<fieldset className="grid--third select--has-icon">
								<label for="marital-status">Marital Status</label>
								<select id="marital-status">
									<option>Married</option>
									<option>Single</option>
									<option>Divorced</option>
								</select>
							</fieldset>
							<fieldset className="grid--two-thirds select--has-icon">
								<label for="occupation">Occupation</label>
								<select id="occupation">
									<option>Accounting</option>
									<option>Doctor</option>
									<option>Teacher</option>
								</select>
							</fieldset>
							<fieldset className="grid--third">
								<label for="ssn">Last 4 Digits of Social</label>
								<input type="text" id="ssn"/>
							</fieldset>
							<div className="grid--third">
								<button className="button--gray">+ Add Dependend</button>
							</div>
						</div>

						<div className="grid card">
							<span className="space-between">
								<h3>Membership Plan</h3>
								<span>Step 2 of 5</span>
							</span>

							<hr />

							<p>Please include every family member in your household, even if not in your membership.</p>
							<ol className="ordered-list--custom">
							  <li className="no-margin"><h3>Membership Size</h3></li>
								<p>How many people would you like in your membership</p>
								<div className="memberSelector">
								  <div className="checkbox-card">
								    <input type="checkbox" name="memberCheckbox" id="member1"/>
								    <label for="member1" className="card">Ryan Fitz</label>
								  </div>
								  <div className="checkbox-card">
								    <input type="checkbox" name="memberCheckbox" id="member2" />
								    <label for="member2" className="card">Jill Fitz</label>
								  </div>
								  <div className="checkbox-card">
								    <input type="checkbox" name="memberCheckbox" id="member3" />
								    <label for="member3" className="card">Jackson Fitz</label>
								  </div>
									<div className="checkbox-card">
								    <input type="checkbox" name="memberCheckbox" id="member4" />
								    <label for="member4" className="card">Emily Fitz</label>
								  </div>
									<div className="checkbox-card">
								    <input type="checkbox" name="memberCheckbox" id="member5" />
								    <label for="member5" className="card">Karen Fitz</label>
								  </div>
								</div>

								<li className="no-margin mt-space-m"><h3>Co-Share</h3></li>
								<p>Choose your Co-Share</p>
								<div className="dialSelctor">
								  <div className="radio-card">
								    <input type="radio" name="coShareRadio" id="coShare1"/>
								    <label for="coShare1" className="card">10% + $2,500 Max</label>
								  </div>
								  <div className="radio-card">
								    <input type="radio" name="coShareRadio" id="coShare2" />
								    <label for="coShare2" className="card">15% + $3,750 Max</label>
								  </div>
								  <div className="radio-card">
								    <input type="radio" name="coShareRadio" id="coShare3" />
								    <label for="coShare3" className="card">20% + $5,000 Max</label>
								  </div>
								</div>

								<li className="no-margin mt-space-m"><h3>Annual Unshareable Amount</h3></li>
								<p>Select your annual personal responsibility</p>
								<div className="dialSelctor">
								  <div className="radio-card">
								    <input type="radio" name="AUARadio" id="AUA1"/>
								    <label for="AUA1" className="card">$1,000</label>
								  </div>
								  <div className="radio-card">
								    <input type="radio" name="AUARadio" id="AUA2" />
								    <label for="AUA2" className="card">$2,000</label>
								  </div>
								  <div className="radio-card">
								    <input type="radio" name="AUARadio" id="AUA3" />
								    <label for="AUA3" className="card">$5,000</label>
								  </div>
								</div>

							  <li className="no-margin mt-space-m"><h3>Start Date</h3></li>
								<p>When would you like to start your membership?</p>
								<fieldset className="select--has-icon membershipStartDate">
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
							<span className="space-between">
								<h3>Household Information</h3>
								<span>Step 3 of 5</span>
							</span>

							<hr />

							<p>Please include every family member in your household, even if not in your membership.</p>
							<h4>Your Information</h4>

							<fieldset className="grid--third">
								<label for="first-name">First Name</label>
								<input type="text" id="first-name"/>
							</fieldset>
							<fieldset className="grid--third">
								<label for="middle-name">Middle Name</label>
								<input type="text" id="middle-name"/>
							</fieldset>
							<fieldset className="grid--third">
								<label for="last-name">Last Name</label>
								<input type="text" id="last-name"/>
							</fieldset>

							<fieldset className="grid--third">
								<label for="date-of-birth">Date of Birth</label>
								<input type="date" id="date-of-birth"/>
							</fieldset>
							<fieldset className="grid--third select--has-icon">
								<label for="gender">Gender</label>
								<select id="gender">
									<option>Male</option>
									<option>Female</option>
								</select>
							</fieldset>
							<fieldset className="grid--third select--has-icon">
								<label for="marital-status">Marital Status</label>
								<select id="marital-status">
									<option>Married</option>
									<option>Single</option>
									<option>Divorced</option>
								</select>
							</fieldset>
							<fieldset className="grid--two-thirds select--has-icon">
								<label for="occupation">Occupation</label>
								<select id="occupation">
									<option>Accounting</option>
									<option>Doctor</option>
									<option>Teacher</option>
								</select>
							</fieldset>
							<fieldset className="grid--third">
								<label for="ssn">Last 4 Digits of Social</label>
								<input type="text" id="ssn"/>
							</fieldset>
						</div>

						<div className="grid card">
							<span className="space-between">
								<h3>Household Information</h3>
								<span>Step 4 of 5</span>
							</span>

							<hr />

							<p>Please include every family member in your household, even if not in your membership.</p>
							<h4>Your Information</h4>

							<fieldset className="grid--third">
								<label for="first-name">First Name</label>
								<input type="text" id="first-name"/>
							</fieldset>
							<fieldset className="grid--third">
								<label for="middle-name">Middle Name</label>
								<input type="text" id="middle-name"/>
							</fieldset>
							<fieldset className="grid--third">
								<label for="last-name">Last Name</label>
								<input type="text" id="last-name"/>
							</fieldset>

							<fieldset className="grid--third">
								<label for="date-of-birth">Date of Birth</label>
								<input type="date" id="date-of-birth"/>
							</fieldset>
							<fieldset className="grid--third select--has-icon">
								<label for="gender">Gender</label>
								<select id="gender">
									<option>Male</option>
									<option>Female</option>
								</select>
							</fieldset>
							<fieldset className="grid--third select--has-icon">
								<label for="marital-status">Marital Status</label>
								<select id="marital-status">
									<option>Married</option>
									<option>Single</option>
									<option>Divorced</option>
								</select>
							</fieldset>
							<fieldset className="grid--two-thirds select--has-icon">
								<label for="occupation">Occupation</label>
								<select id="occupation">
									<option>Accounting</option>
									<option>Doctor</option>
									<option>Teacher</option>
								</select>
							</fieldset>
							<fieldset className="grid--third">
								<label for="ssn">Last 4 Digits of Social</label>
								<input type="text" id="ssn"/>
							</fieldset>
						</div>

						<div className="grid card">
							<span className="space-between">
								<h3>Household Information</h3>
								<span>Step 5 of 5</span>
							</span>

							<hr />

							<p>Please include every family member in your household, even if not in your membership.</p>
							<h4>Your Information</h4>

							<fieldset className="grid--third">
								<label for="first-name">First Name</label>
								<input type="text" id="first-name"/>
							</fieldset>
							<fieldset className="grid--third">
								<label for="middle-name">Middle Name</label>
								<input type="text" id="middle-name"/>
							</fieldset>
							<fieldset className="grid--third">
								<label for="last-name">Last Name</label>
								<input type="text" id="last-name"/>
							</fieldset>

							<fieldset className="grid--third">
								<label for="date-of-birth">Date of Birth</label>
								<input type="date" id="date-of-birth"/>
							</fieldset>
							<fieldset className="grid--third select--has-icon">
								<label for="gender">Gender</label>
								<select id="gender">
									<option>Male</option>
									<option>Female</option>
								</select>
							</fieldset>
							<fieldset className="grid--third select--has-icon">
								<label for="marital-status">Marital Status</label>
								<select id="marital-status">
									<option>Married</option>
									<option>Single</option>
									<option>Divorced</option>
								</select>
							</fieldset>
							<fieldset className="grid--two-thirds select--has-icon">
								<label for="occupation">Occupation</label>
								<select id="occupation">
									<option>Accounting</option>
									<option>Doctor</option>
									<option>Teacher</option>
								</select>
							</fieldset>
							<fieldset className="grid--third">
								<label for="ssn">Last 4 Digits of Social</label>
								<input type="text" id="ssn"/>
							</fieldset>
						</div>

						<div className="accordion">
						  <div className="accordion--header" id="toggleAccordion" tabindex="0">
						    <i className="dashing-icon accordion--arrow"></i>
						    <h3 className="title">Accordion Title</h3>
						  </div>
						  <div className="accordion--content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
						</div>
					</div>



					<div className="grid--third">
						<div className="card"><h3 className="center-align">Your Monthly Share</h3></div>

						<hr />

					</div>

				</div>
			</div>
		</section>
	</div>

</div>

)
