import React from "react";
// The scss needs to be imported here for running 'gatsby build'
//import '../../sass/example-page/example-page.scss'

export default () => (
  <div>

    <section className="mobile-overlay">
      <aside className="mobile-sidebar">
        <div className="mobile-profile">
          <a href="/templates/mobile" className="button--mobile-sidebar" id="open-button"><i className="dashing-icon dashing-icon--close" /></a>
          <a href="/templates/mobile" className="mobile-profile--account">
            <div className="profile-image"><i className="dashing-icon dashing-icon--face-good" /></div>
            <div className="profile-edit"><i className="dashing-icon dashing-icon--pencil" /></div>
            <h3 className="profile-name">Nitsua Cholbonk</h3>
            <span className="profile-email">nitsua.cholbonk@mailinator.com</span>
          </a>
        </div>
        <ul className="mobile-sidebar-nav">
          <li><i className="dashing-icon dashing-icon--locked" /><a href="/templates/mobile">Home</a></li>
          <li><i className="dashing-icon dashing-icon--locked" /><a href="/templates/mobile">Wallet</a></li>
          <li><i className="dashing-icon dashing-icon--locked" /><a href="/templates/mobile">My Needs</a></li>
          <li><i className="dashing-icon dashing-icon--locked" /><a href="/templates/mobile">Sign Out</a></li>
        </ul>
      </aside>
    </section>

    <div className="grid-phoenix">
      <header className="header">
        <a href="/mobile" className="button--mobile-sidebar" id="close-button"><i className="dashing-icon dashing-icon--menu" /></a>
        <div className="logo"><p className="text-color--purple no-margin">LOGO</p></div>
        <div className="crumbs">A Title of This Page</div>
        <div className="alert"><i className="dashing-icon dashing-icon--notification" /><div className="count">100</div></div>
        <div className="profile"><i className="dashing-icon dashing-icon--face-good" /></div>

        <div className="spacer" />
        <div className="title">
					Example Fullscreen Page
          <p className="subtitle">A Subtle Subtitle</p>
        </div>
        <div className="spacer">
          <a href="/templates/mobile" className="action button button--grey"><i className="dashing-icon dashing-icon--close" /> close</a>
        </div>
      </header>

      <aside className="sidebar">
        <ul className="sidebar-nav">
          <li><i className="dashing-icon dashing-icon--locked" /><a href="/templates/mobile">Home</a></li>
          <li><i className="dashing-icon dashing-icon--locked" /><a href="/templates/mobile">Wallet</a></li>
          <li><i className="dashing-icon dashing-icon--locked" /><a href="/templates/mobile">My Needs</a></li>
          <li><i className="dashing-icon dashing-icon--locked" /><a href="/templates/mobile">Sign Out</a></li>
        </ul>
      </aside>

      <section className="app">
        <div className="content">
          <h1>Example Dashing Page</h1>
          <p>This example shows the dashboard layout. (Sidebar, Header, App, and Mobile Menu) Content starts within this section.</p>
        </div>
      </section>
    </div>
  </div>

);
