import React from 'react'

export default () => (

<div>
	<section className="mobile-overlay is-collapsed">
		<aside className="mobile-sidebar">
			<div className="mobile-profile">
				<a href="/templates/mobile" className="mobile-sidebar--button" id="open-button" ><i className="dashing-icon dashing-icon--close"></i></a>
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
			<a href="/templates/mobile" className="mobile-sidebar--button" id="close-button"><i className="dashing-icon dashing-icon--menu"></i></a>
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
		 </div>
    </section>
  </div>
</div>

)
