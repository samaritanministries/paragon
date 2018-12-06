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

  <main className="grid-phoenix map">
		<header className="header header-v2">
			<a href="/templates/mobile" className="mobile-sidebar--button" id="close-button"><i className="dashing-icon dashing-icon--menu"></i></a>
			<div className="logo"><p className="text-color--white">LOGO</p></div>

			<nav className="header-nav">
				<ul>
					<li><a href="/" className="active">Home</a></li>
					<li><a href="/">Shares</a></li>
					<li><a href="/">Bill's</a></li>
				</ul>
			</nav>

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

		<nav className="sub-nav">
			<ul>
				<li><a className="active">Option 1</a></li>
				<li><a>Option 2</a></li>
				<li><a>Option 3</a></li>
			</ul>
		</nav>

		<aside className="sidebar is-hidden">
      <ul className="sidebar-nav">
        <li><i className="dashing-icon dashing-icon--locked"></i><a href="/templates/dashboard">Home</a></li>
        <li><i className="dashing-icon dashing-icon--locked"></i><a href="/templates/dashboard">Wallet</a></li>
        <li><i className="dashing-icon dashing-icon--locked"></i><a href="/templates/dashboard">My Needs</a></li>
        <li><i className="dashing-icon dashing-icon--locked"></i><a href="/templates/dashboard">Sign Out</a></li>
      </ul>
    </aside>

    <section className="app">
		<div className="content grid grid-padding" style={{maxWidth: `1200px`}}>

				<div className="grid--third">
					<h2>Funds for Sharing</h2>
					<p>Funded by you to pay your Share</p>

					<div className="card">
						<h3>Funds for Sharing</h3>
						<h1>$615.00</h1>
						<p>Available Balance is available. Are you available? ; ) Let's write more here to describe this card.</p>
						<p>Available Balance is available. Are you available? ; ) Let's write more here to describe this card.</p>
						<button>Test Button</button>
						<button>Test Button</button>
					</div>

					<h2>Account Details</h2>

					<div className="card">
						<h3>Bank Account</h3>
						<hr/>
						<h3>Monthly Statements</h3>
					</div>

					<div className="card grid">
						<h3 className="grid--half">Funds for Sharing</h3>
						<h1 className="grid--half">$615.00</h1>
						<div className="grid--full">
							<p>Available Balance is available. Are you available? ; ) Let's write more here to describe this card.</p>
							<p>Available Balance is available.</p>
						</div>
						<div className="grid--full">
							<button>Test Button</button>
							<button>Test Button</button>
						</div>
					</div>

				</div>

				<div className="grid--two-thirds">
					<h2>Share History</h2>
					<p>This is a list of all your transactions</p>

					<div className="card">
						<ol className="ordered-list--custom">
							<li>List 1</li>
							<li>List 1</li>
							<li>List 1</li>
							<li>List 1</li>
							<li>List 1</li>
							<li>List 1</li>
							<li>List 1</li>
							<li>List 1</li>
							<li>List 1</li>
						</ol>
					</div>
				</div>


	 </div>
    </section>
  </main>

</div>

)
