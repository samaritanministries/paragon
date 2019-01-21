import React from 'react'
// The scss needs to be imported here for running 'gatsby build'
import '../../sass/example-page/example-page.scss'

export default () => (
	<div>

		<section class="mobile-overlay">
			<aside class="mobile-sidebar">
				<div class="mobile-profile">
					<a href="/templates/mobile" class="button--mobile-sidebar" id="open-button" ><i class="dashing-icon dashing-icon--close"></i></a>
					<a href="/templates/mobile" class="mobile-profile--account">
						<div class="profile-image"><i class="dashing-icon dashing-icon--face-good"></i></div>
						<div class="profile-edit"><i class="dashing-icon dashing-icon--pencil"></i></div>
						<h3 class="profile-name">Nitsua Cholbonk</h3>
						<span class="profile-email">nitsua.cholbonk@mailinator.com</span>
					</a>
				</div>
				<ul class="mobile-sidebar-nav">
					<li><i class="dashing-icon dashing-icon--locked"></i><a href="/templates/mobile">Home</a></li>
					<li><i class="dashing-icon dashing-icon--locked"></i><a href="/templates/mobile">Wallet</a></li>
					<li><i class="dashing-icon dashing-icon--locked"></i><a href="/templates/mobile">My Needs</a></li>
					<li><i class="dashing-icon dashing-icon--locked"></i><a href="/templates/mobile">Sign Out</a></li>
				</ul>
			</aside>
		</section>

		<div class="grid-phoenix">
			<header class="header">
				<a href="/mobile" class="button--mobile-sidebar" id="close-button"><i class="dashing-icon dashing-icon--menu"></i></a>
				<div class="logo"><p class="text-color--white">LOGO</p></div>
				<div class="crumbs">A Title of This Page</div>
				<div class="alert"><i class="dashing-icon dashing-icon--notification"></i><div class="count">100</div></div>
				<div class="profile"><i class="dashing-icon dashing-icon--face-good"></i></div>

				<div class="spacer">
				</div>
				<div class="title">
					Example Fullscreen Page
					<p class="subtitle">A Subtle Subtitle</p>
				</div>
				<div class="spacer">
					<a href="/templates/mobile" class="action button button--grey"><i class="dashing-icon dashing-icon--close"></i> close</a>
				</div>
			</header>

			<aside class="sidebar">
				<ul class="sidebar-nav">
					<li><i class="dashing-icon dashing-icon--locked"></i><a href="/templates/mobile">Home</a></li>
					<li><i class="dashing-icon dashing-icon--locked"></i><a href="/templates/mobile">Wallet</a></li>
					<li><i class="dashing-icon dashing-icon--locked"></i><a href="/templates/mobile">My Needs</a></li>
					<li><i class="dashing-icon dashing-icon--locked"></i><a href="/templates/mobile">Sign Out</a></li>
				</ul>
			</aside>

			<section class="app">
				<div class="content">
					<h1>Example Dashing Page</h1>
					<p>This example shows the dashboard layout. (Sidebar, Header, App, and Mobile Menu) Content starts within this section.</p>
				</div>
			</section>
		</div>
  </div>

)
