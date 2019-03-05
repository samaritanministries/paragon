import React from 'react'
// The scss needs to be imported here for running 'gatsby build'
import '../../sass/example-page/example-page.scss'

export default () => (

<div>
	<section className="mobile-overlay is-collapsed">
		<aside className="mobile-sidebar">
			<div className="mobile-profile">
				<a href="/templates/mobile" className="button--mobile-sidebar" id="open-button" ><i className="dashing-icon dashing-icon--close"></i></a>
        <a href="/templates/dashboard" className="mobile-profile--account">
          <div className="profile-image"><i className="dashing-icon dashing-icon--face-good"></i></div>
          <div className="profile-edit"><i className="dashing-icon dashing-icon--pencil"></i></div>
          <h3 className="profile-name">Nitsua Cholbonk</h3>
          <span className="profile-email">nitsua.cholbonk@mailinator.com</span>
        </a>
			</div>
			<ul className="mobile-sidebar-nav">
				<li><i className="dashing-icon dashing-icon--locked"></i><a href="/">Dashboard</a></li>
				<li><i className="dashing-icon dashing-icon--locked"></i><a href="/single-page">Single Column Layout in Dashboard</a></li>
				<li><i className="dashing-icon dashing-icon--locked"></i><a href="/fullscreen">Fullscreen Layout in Dashboard</a></li>
				<li><i className="dashing-icon dashing-icon--locked"></i><a href="/mobile">Open Mobile Menu</a></li>
			</ul>
		</aside>
	</section>

  <div className="grid-phoenix fullscreen">
		<header className="header">
			<a href="/templates/mobile" className="button--mobile-sidebar" id="close-button"><i className="dashing-icon dashing-icon--menu"></i></a>
			<div className="logo"><p className="text-color--white">LOGO</p></div>
			<div className="crumbs">A Title of This Page</div>
			<div className="alert"><i className="dashing-icon dashing-icon--notification"></i><div className="count">100</div></div>
			<div className="profile"><i className="dashing-icon dashing-icon--face-good"></i></div>

			<div className="spacer">
			</div>
			<div className="title">
				Example Fullscreen Page
				<p className="subtitle">A Subtle Subtitle</p>
			</div>
			<div className="spacer">
      	<a href="/templates/dashboard" className="action button button--grey"><i className="dashing-icon dashing-icon--close"></i> close</a>
			</div>
		</header>

		<aside className="sidebar">
      <ul className="sidebar-nav">
        <li><i className="dashing-icon dashing-icon--locked"></i><a href="/templates/dashboard">Home</a></li>
        <li><i className="dashing-icon dashing-icon--locked"></i><a href="/templates/dashboard">Wallet</a></li>
        <li><i className="dashing-icon dashing-icon--locked"></i><a href="/templates/dashboard">My Needs</a></li>
        <li><i className="dashing-icon dashing-icon--locked"></i><a href="/templates/dashboard">Sign Out</a></li>
      </ul>
    </aside>

    <section className="app">
			<div className="content" style={{maxWidth: `600px`}}>
	      <h1>Example Dashing Page</h1>
	      <p>This example shows the dashboard layout. (Sidebar, Header, App, and Mobile Menu) Content starts within this section.</p>

				<h2>Test Traditional Dashing Grid</h2>
				<div className="row row--nested">
					<div className="column column--full" style={{ backgroundColor: `#84a7ed`, textAlign: `center`, border: `2px solid #3f70c9` }}>full</div>
				</div>

				<div className="row row--nested">
					<div className="column column--three-fourths" style={{ backgroundColor: `#84a7ed`, textAlign: `center`, border: `2px solid #3f70c9` }}>three-fourths</div>
					<div className="column column--fourth" style={{ backgroundColor: `#84a7ed`, textAlign: `center`, border: `2px solid #3f70c9` }}>fourth</div>
				</div>

				<div className="row row--nested">
					<div className="column column--two-thirds" style={{ backgroundColor: `#84a7ed`, textAlign: `center`, border: `2px solid #3f70c9` }}>two-thirds</div>
					<div className="column column--third" style={{ backgroundColor: `#84a7ed`, textAlign: `center`, border: `2px solid #3f70c9` }}>third</div>
				</div>

				<div className="row row--nested">
					<div className="column column--half" style={{ backgroundColor: `#84a7ed`, textAlign: `center`, border: `2px solid #3f70c9` }}>half</div>
					<div className="column column--half" style={{ backgroundColor: `#84a7ed`, textAlign: `center`, border: `2px solid #3f70c9` }}>half</div>
				</div>

				<div className="row row--nested">
					<div className="column column--third" style={{ backgroundColor: `#84a7ed`, textAlign: `center`, border: `2px solid #3f70c9` }}>third</div>
					<div className="column column--third" style={{ backgroundColor: `#84a7ed`, textAlign: `center`, border: `2px solid #3f70c9` }}>third</div>
					<div className="column column--third" style={{ backgroundColor: `#84a7ed`, textAlign: `center`, border: `2px solid #3f70c9` }}>third</div>
				</div>

				<div className="row row--nested">
					<div className="column column--fourth" style={{ backgroundColor: `#84a7ed`, textAlign: `center`, border: `2px solid #3f70c9` }}>fourth</div>
					<div className="column column--fourth" style={{ backgroundColor: `#84a7ed`, textAlign: `center`, border: `2px solid #3f70c9` }}>fourth</div>
					<div className="column column--fourth" style={{ backgroundColor: `#84a7ed`, textAlign: `center`, border: `2px solid #3f70c9` }}>fourth</div>
					<div className="column column--fourth" style={{ backgroundColor: `#84a7ed`, textAlign: `center`, border: `2px solid #3f70c9` }}>fourth</div>
				</div>

				<div className="row row--nested">
					<div className="column column--sixth" style={{ backgroundColor: `#84a7ed`, textAlign: `center`, border: `2px solid #3f70c9` }}>sixth</div>
					<div className="column column--sixth" style={{ backgroundColor: `#84a7ed`, textAlign: `center`, border: `2px solid #3f70c9` }}>sixth</div>
					<div className="column column--sixth" style={{ backgroundColor: `#84a7ed`, textAlign: `center`, border: `2px solid #3f70c9` }}>sixth</div>
					<div className="column column--sixth" style={{ backgroundColor: `#84a7ed`, textAlign: `center`, border: `2px solid #3f70c9` }}>sixth</div>
					<div className="column column--sixth" style={{ backgroundColor: `#84a7ed`, textAlign: `center`, border: `2px solid #3f70c9` }}>sixth</div>
					<div className="column column--sixth" style={{ backgroundColor: `#84a7ed`, textAlign: `center`, border: `2px solid #3f70c9` }}>sixth</div>
				</div>

				<div className="row row--nested">
					<div className="column column--eighth" style={{ backgroundColor: `#84a7ed`, textAlign: `center`, border: `2px solid #3f70c9`}}>eighth</div>
					<div className="column column--eighth" style={{ backgroundColor: `#84a7ed`, textAlign: `center`, border: `2px solid #3f70c9` }}>eighth</div>
					<div className="column column--eighth" style={{ backgroundColor: `#84a7ed`, textAlign: `center`, border: `2px solid #3f70c9` }}>eighth</div>
					<div className="column column--eighth" style={{ backgroundColor: `#84a7ed`, textAlign: `center`, border: `2px solid #3f70c9` }}>eighth</div>
					<div className="column column--eighth" style={{ backgroundColor: `#84a7ed`, textAlign: `center`, border: `2px solid #3f70c9` }}>eighth</div>
					<div className="column column--eighth" style={{ backgroundColor: `#84a7ed`, textAlign: `center`, border: `2px solid #3f70c9` }}>eighth</div>
					<div className="column column--eighth" style={{ backgroundColor: `#84a7ed`, textAlign: `center`, border: `2px solid #3f70c9` }}>eighth</div>
					<div className="column column--eighth" style={{ backgroundColor: `#84a7ed`, textAlign: `center`, border: `2px solid #3f70c9` }}>eighth</div>
				</div>

				<h2>Test Span Grid (has a 1rem grid-gap)</h2>

				<div class="grid">
				  <div class="grid--full" style={{ backgroundColor: `#84a7ed`, textAlign: `center`, border: `2px solid #3f70c9` }}>.grid--full</div>
				  <div class="grid--half" style={{ backgroundColor: `#84a7ed`, textAlign: `center`, border: `2px solid #3f70c9` }}>.grid--half</div>
				  <div class="grid--half" style={{ backgroundColor: `#84a7ed`, textAlign: `center`, border: `2px solid #3f70c9` }}>.grid--half</div>
				  <div class="grid--three-fourths" style={{ backgroundColor: `#84a7ed`, textAlign: `center`, border: `2px solid #3f70c9` }}>.grid--three-fourths</div>
				  <div class="grid--fourth" style={{ backgroundColor: `#84a7ed`, textAlign: `center`, border: `2px solid #3f70c9` }}>.grid--fourth</div>
				  <div class="grid--fourth" style={{ backgroundColor: `#84a7ed`, textAlign: `center`, border: `2px solid #3f70c9` }}>.grid--fourth</div>
				  <div class="grid--fourth" style={{ backgroundColor: `#84a7ed`, textAlign: `center`, border: `2px solid #3f70c9` }}>.grid--fourth</div>
				  <div class="grid--fourth" style={{ backgroundColor: `#84a7ed`, textAlign: `center`, border: `2px solid #3f70c9` }}>.grid--fourth</div>
				  <div class="grid--fourth" style={{ backgroundColor: `#84a7ed`, textAlign: `center`, border: `2px solid #3f70c9` }}>.grid--fourth</div>
				  <div class="grid--two-thirds" style={{ backgroundColor: `#84a7ed`, textAlign: `center`, border: `2px solid #3f70c9` }}>.grid--two-thirds</div>
				  <div class="grid--third" style={{ backgroundColor: `#84a7ed`, textAlign: `center`, border: `2px solid #3f70c9` }}>.grid--third</div>
				  <div class="grid--five-sixth" style={{ backgroundColor: `#84a7ed`, textAlign: `center`, border: `2px solid #3f70c9` }}>.grid--five-sixth</div>
				  <div class="grid--sixth" style={{ backgroundColor: `#84a7ed`, textAlign: `center`, border: `2px solid #3f70c9` }}>.grid--sixth</div>
				  <div class="grid--sixth" style={{ backgroundColor: `#84a7ed`, textAlign: `center`, border: `2px solid #3f70c9` }}>.grid--sixth</div>
				  <div class="grid--sixth" style={{ backgroundColor: `#84a7ed`, textAlign: `center`, border: `2px solid #3f70c9` }}>.grid--sixth</div>
				  <div class="grid--sixth" style={{ backgroundColor: `#84a7ed`, textAlign: `center`, border: `2px solid #3f70c9` }}>.grid--sixth</div>
				  <div class="grid--sixth" style={{ backgroundColor: `#84a7ed`, textAlign: `center`, border: `2px solid #3f70c9` }}>.grid--sixth</div>
				  <div class="grid--sixth" style={{ backgroundColor: `#84a7ed`, textAlign: `center`, border: `2px solid #3f70c9` }}>.grid--sixth</div>
				</div>

				<h2>Most common structures: </h2>

				<div class="grid">
				  <div class="grid--full" style={{ backgroundColor: `#84a7ed`, textAlign: `center`, border: `2px solid #3f70c9`, padding: `1rem`}}><div className="card">.grid--full</div></div>
				  <div class="grid--half" style={{ backgroundColor: `#84a7ed`, textAlign: `center`, border: `2px solid #3f70c9`, padding: `1rem`}}><div className="card">.grid--half</div></div>
				  <div class="grid--half" style={{ backgroundColor: `#84a7ed`, textAlign: `center`, border: `2px solid #3f70c9`, padding: `1rem`}}><div className="card">.grid--half</div></div>
				  <div class="grid--two-thirds" style={{ backgroundColor: `#84a7ed`, textAlign: `center`, border: `2px solid #3f70c9`, padding: `1rem`}}><div className="card">.grid--two-thirds</div></div>
				  <div class="grid--third" style={{ backgroundColor: `#84a7ed`, textAlign: `center`, border: `2px solid #3f70c9`, padding: `1rem`}}><div className="card">.grid--third</div></div>
					<div class="grid--third" style={{ backgroundColor: `#84a7ed`, textAlign: `center`, border: `2px solid #3f70c9`, padding: `1rem`}}><div className="card">.grid--third</div></div>
					<div class="grid--two-thirds" style={{ backgroundColor: `#84a7ed`, textAlign: `center`, border: `2px solid #3f70c9`, padding: `1rem`}}><div className="card">.grid--two-thirds</div></div>
				</div>

				<h2>Paragrid:</h2>

				<div className="paragrid">
					<div className="one grid-style">
						<div className="card">
							<h1>Title</h1>
							<p>1</p>
						</div>
					</div>
					<div className="two grid-style">
						<div className="card">
							2
						</div>
					</div>
					<div className="three grid-style">
						<div className="card">
							3
						</div>
					</div>
					<div className="four grid-style">
						<div className="card">
							4
						</div>
					</div>
					<div className="five grid-style">
						<div className="card">
							5
						</div>
					</div>
					<div className="six grid-style">
						<div className="card">
							6
						</div>
					</div>
					<div className="seven grid-style">
						<div className="card">
							7
						</div>
					</div>
				</div>

				<p>More information here</p>

			</div>

    </section>
  </div>
</div>

)
