import React from 'react'
// The scss needs to be imported here for running 'gatsby build'
import '../../sass/example-page/example-page.scss'

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

	<div class="grid-phoenix">
		<header class="header">
			<a href="/templates/mobile" class="mobile-sidebar--button" id="close-button"><i class="dashing-icon dashing-icon--menu"></i></a>
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
				<a href="/templates/single-page" class="action button button--grey"><i class="dashing-icon dashing-icon--close"></i> close</a>
			</div>
		</header>

		<aside class="sidebar">
			<ul class="sidebar-nav">
				<li><i class="dashing-icon dashing-icon--locked"></i><a href="/templates/single-page">Home</a></li>
				<li><i class="dashing-icon dashing-icon--locked"></i><a href="/templates/single-page">Wallet</a></li>
				<li><i class="dashing-icon dashing-icon--locked"></i><a href="/templates/single-page">My Needs</a></li>
				<li><i class="dashing-icon dashing-icon--locked"></i><a href="/templates/single-page">Sign Out</a></li>
			</ul>
		</aside>

		<section class="app">
			<div class="content content-s">
				<div class="card">
					<div class="card--header has-border"><h3>Example Dashing Page</h3></div>
					<div class="card--content"><p>This example shows a single column layout and various uses.</p>
					</div>
				</div>

				<h1>H1 This is a Header</h1>
				<p>This example uses a perm fix majiger.</p>
				<p>Vestibulum consectetur sit amet nisi ut consectetur. Praesent efficitur, nibh vitae fringilla scelerisque, est neque faucibus quam, in iaculis purus libero eget mauris. Curabitur et luctus sapien, ac gravida orci. Aliquam erat volutpat. In hac habitasse platea dictumst. Aenean commodo, arcu a commodo efficitur, libero dolor mollis turpis, non posuere orci leo eget enim. Curabitur sit amet elementum orci, pulvinar dignissim urna. Morbi id ex eu ex congue laoreet. Aenean tincidunt dolor justo, semper pretium libero luctus nec. Ut vulputate metus accumsan leo imperdiet tincidunt. Phasellus nec rutrum dolor. Cras imperdiet sollicitudin arcu, id interdum nibh fermentum in.</p>

				<h1>H1 This is a Header</h1>
				<p>This example uses a perm fix majiger.</p>
				<p>Vestibulum consectetur sit amet nisi ut consectetur. Praesent efficitur, nibh vitae fringilla scelerisque, est neque faucibus quam, in iaculis purus libero eget mauris. Curabitur et luctus sapien, ac gravida orci. Aliquam erat volutpat. In hac habitasse platea dictumst. Aenean commodo, arcu a commodo efficitur, libero dolor mollis turpis, non posuere orci leo eget enim. Curabitur sit amet elementum orci, pulvinar dignissim urna. Morbi id ex eu ex congue laoreet. Aenean tincidunt dolor justo, semper pretium libero luctus nec. Ut vulputate metus accumsan leo imperdiet tincidunt. Phasellus nec rutrum dolor. Cras imperdiet sollicitudin arcu, id interdum nibh fermentum in.</p>

			</div>
		</section>
	</div>

</div>

)
