import React from "react";
import { Link } from "gatsby";
// The scss needs to be imported here for running 'gatsby build'
//import '../../sass/example-page/example-page.scss'

export default () => (

  <div>
    <section className="mobile-overlay is-collapsed">
      <aside className="mobile-sidebar">
        <div className="mobile-profile">
          <Link to={"/templates/mobile"} className="button--mobile-sidebar" id="open-button"><i className="dashing-icon dashing-icon--close" /></Link>
          <Link to={"/templates/dashboard"} className="mobile-profile--account">
            <div className="profile-image"><i className="dashing-icon dashing-icon--face-good" /></div>
            <div className="profile-edit"><i className="dashing-icon dashing-icon--pencil" /></div>
            <h3 className="profile-name">Nitsua Cholbonk</h3>
            <span className="profile-email">nitsua.cholbonk@mailinator.com</span>
          </Link>
        </div>
        <ul className="mobile-sidebar-nav">
          <li><i className="dashing-icon dashing-icon--locked" /><Link to={"/"}>Dashboard</Link></li>
          <li><i className="dashing-icon dashing-icon--locked" /><Link to={"/single-page"}>Single Column Layout in Dashboard</Link></li>
          <li><i className="dashing-icon dashing-icon--locked" /><Link to={"/fullscreen"}>Fullscreen Layout in Dashboard</Link></li>
          <li><i className="dashing-icon dashing-icon--locked" /><Link to={"/mobile"}>Open Mobile Menu</Link></li>
        </ul>
      </aside>
    </section>

    <main>
      <header className="header">
        <Link to={"/templates/mobile"} className="button--mobile-sidebar" id="close-button"><i className="dashing-icon dashing-icon--menu" /></Link>
        <div className="logo"><p className="text-color--purple">LOGO</p></div>

        <nav className="header-nav">
          <ul>
            <li><Link to={"/"} className="active">Home</Link></li>
            <li><Link to={"/"}>Shares</Link></li>
            <li><Link to={"/"}>Bill's</Link></li>
          </ul>
        </nav>

        <div className="alert"><i className="dashing-icon dashing-icon--notification" /><div className="count">100</div></div>
        <div className="profile"><i className="dashing-icon dashing-icon--face-good" /></div>

        <div className="spacer" />
        <div className="title">
				Example Fullscreen Page
          <p className="subtitle">A Subtle Subtitle</p>
        </div>
        <div className="spacer">
      	<Link to={"/templates/dashboard"} className="action button button--grey"><i className="dashing-icon dashing-icon--close" /> close</Link>
        </div>
      </header>

      <nav className="sub-nav">
        <ul>
          <li><Link to={"/"} className="active">Option 1</Link></li>
          <li><Link to={"/"}>Option 2</Link></li>
          <li><Link to={"/"}>Option 3</Link></li>
        </ul>
      </nav>

      <section className="app">
        <div className="content grid grid-padding" style={{ maxWidth: "1200px" }}>

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
              <hr />
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

);
