import React from 'react'

export default () => (

	<div className="grid-phoenix fullscreen">

    <section className="app">
			<div className="content center-align" style={{maxWidth: "400px"}}>
	      <h1>Sign In</h1>
	      <p>or <a>create an account</a></p>
				
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
    </section>
  </div>

)
