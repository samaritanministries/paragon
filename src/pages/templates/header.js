import React from 'react'

export default () => (

<div>
	<section class="mobile-overlay is-collapsed">
		<aside class="mobile-sidebar">
			<div class="mobile-profile">
				<a href="/templates/mobile" class="mobile-sidebar--button" id="open-button" ><i class="dashing-icon dashing-icon--close"></i></a>
        <a href="/templates/dashboard" class="mobile-profile--account">
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

  <main class="grid-phoenix map">
		<header class="header header-v2">
			<a href="/templates/mobile" class="mobile-sidebar--button" id="close-button"><i class="dashing-icon dashing-icon--menu"></i></a>
			<div class="logo"><p class="text-color--white">LOGO</p></div>

			<nav class="header-nav">
				<ul>
					<li><a className="active">Home</a></li>
					<li><a>Shares</a></li>
					<li><a>Bill's</a></li>
				</ul>
			</nav>

			<div class="alert"><i class="dashing-icon dashing-icon--notification"></i><div class="count">100</div></div>
			<div class="profile"><i class="dashing-icon dashing-icon--face-good"></i></div>

			<div class="spacer">
			</div>
			<div class="title">
				Example Fullscreen Page
				<p class="subtitle">A Subtle Subtitle</p>
			</div>
			<div class="spacer">
      	<a href="/templates/dashboard" class="action button button--grey"><i class="dashing-icon dashing-icon--close"></i> close</a>
			</div>
		</header>

		<nav className="sub-nav">
			<ul>
				<li><a className="active">Home</a></li>
				<li><a>Shares</a></li>
				<li><a>Bill's</a></li>
			</ul>
		</nav>

		<aside class="sidebar is-hidden">
      <ul class="sidebar-nav">
        <li><i class="dashing-icon dashing-icon--locked"></i><a href="/templates/dashboard">Home</a></li>
        <li><i class="dashing-icon dashing-icon--locked"></i><a href="/templates/dashboard">Wallet</a></li>
        <li><i class="dashing-icon dashing-icon--locked"></i><a href="/templates/dashboard">My Needs</a></li>
        <li><i class="dashing-icon dashing-icon--locked"></i><a href="/templates/dashboard">Sign Out</a></li>
      </ul>
    </aside>

    <section class="app">
			<div class="content">
	      <h1>Example Dashing Page</h1>
	      <p>This example shows the dashboard layout. (Sidebar, Header, App, and Mobile Menu) Content starts within this section.</p>
			</div>
    </section>
  </main>

</div>

)
