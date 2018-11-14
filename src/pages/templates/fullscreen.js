import React from 'react'

export default () => (

	<div class="grid-phoenix fullscreen">
		<header class="header">
			<a href="/templates/fullscreen" class="mobile-sidebar--button" id="close-button"><i class="dashing-icon dashing-icon--menu"></i></a>
			<div class="logo"><p class="text-color--white">LOGO</p></div>
			<div class="crumbs">A Title of This Page</div>
			<div class="alert"><i class="dashing-icon dashing-icon--notification"></i><div class="count">100</div></div>
			<div class="profile"><i class="dashing-icon dashing-icon--face-good"></i></div>

			<div class="spacer back">
			</div>

			<div class="title">
				Example Fullscreen Page
				<p class="subtitle">A Subtle Subtitle</p>
			</div>

			<div class="spacer cancel">
      	<a href="/templates/fullscreen" class="action button button--grey button--small"><i class="dashing-icon dashing-icon--close"></i>&nbsp;close</a>
			</div>

		</header>

		<aside class="sidebar">
      <ul class="sidebar-nav">
        <li><i class="dashing-icon dashing-icon--locked"></i><a href="/templates/fullscreen">Home</a></li>
        <li><i class="dashing-icon dashing-icon--locked"></i><a href="/templates/fullscreen">Wallet</a></li>
        <li><i class="dashing-icon dashing-icon--locked"></i><a href="/templates/fullscreen">My Needs</a></li>
        <li><i class="dashing-icon dashing-icon--locked"></i><a href="/templates/fullscreen">Sign Out</a></li>
      </ul>
    </aside>

    <section class="app">
			<div class="content content--reader-width">
	      <h1>Example Fullscreen Page</h1>
	      <p>This example shows a fullscreen dashboard layout. This is still a dashboard template, but it makes use of the class "fullscreen" to disable common interface elements to help focus a user on a specific task.</p>
			</div>
    </section>
  </div>

)
