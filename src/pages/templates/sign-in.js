import React from 'react'
import { Link } from 'gatsby'
// The scss needs to be imported here for running 'gatsby build'
import '../../sass/example-page/example-page.scss'

export default () => (

	<div className="content content-s center-align">
    <h1>Sign In</h1>
    <p>or <Link to={"/"}>create an account</Link></p>

		<fieldset>
			<label>Email</label>
			<input type="email" for="email"/>
			<label>Password</label>
			<input type="password" for="password"/>
		</fieldset>

		<span className="space-between">
			<fieldset className="checkbox--custom">
		    <input type="checkbox" id="remember-me"/>
		    <label for="remember-me">Remember me</label>
		  </fieldset>
			<button className="button button--transparent">
				Forgot your password
			</button>
		</span>
		<button className="button button-block">Sign in</button>
	</div>

)
