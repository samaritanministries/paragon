import React from "react";
// The scss needs to be imported here for running 'gatsby build'
//import '../../sass/example-page/example-page.scss'

export default () => (
  <div>

    <section className="mobile-overlay is-collapsed">
      <aside className="mobile-sidebar">
        <div className="mobile-profile">
          <a href="/templates/mobile" className="button--mobile-sidebar" id="open-button"><i className="dashing-icon dashing-icon--close" /></a>
          <a href="/templates/single-page" className="mobile-profile--account">
            <div className="profile-image"><i className="dashing-icon dashing-icon--face-good" /></div>
            <div className="profile-edit"><i className="dashing-icon dashing-icon--pencil" /></div>
            <h3 className="profile-name">Nitsua Cholbonk</h3>
            <span className="profile-email">nitsua.cholbonk@mailinator.com</span>
          </a>
        </div>
        <ul className="mobile-sidebar-nav">
          <li><i className="dashing-icon dashing-icon--locked" /><a href="/">Dashboard</a></li>
          <li><i className="dashing-icon dashing-icon--locked" /><a href="/single-page">Single Column Layout in Dashboard</a></li>
          <li><i className="dashing-icon dashing-icon--locked" /><a href="/fullscreen">Fullscreen Layout in Dashboard</a></li>
          <li><i className="dashing-icon dashing-icon--locked" /><a href="/mobile">Open Mobile Menu</a></li>
        </ul>
      </aside>
    </section>

    <div className="grid-phoenix">
      <header className="header">
        <a href="/templates/mobile" className="button--mobile-sidebar" id="close-button"><i className="dashing-icon dashing-icon--menu" /></a>
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
          <a href="/templates/single-page" className="action button button--grey"><i className="dashing-icon dashing-icon--close" /> close</a>
        </div>
      </header>

      <aside className="sidebar">
        <ul className="sidebar-nav">
          <li><i className="dashing-icon dashing-icon--locked" /><a href="/templates/single-page">Home</a></li>
          <li><i className="dashing-icon dashing-icon--locked" /><a href="/templates/single-page">Wallet</a></li>
          <li><i className="dashing-icon dashing-icon--locked" /><a href="/templates/single-page">My Needs</a></li>
          <li><i className="dashing-icon dashing-icon--locked" /><a href="/templates/single-page">Sign Out</a></li>
        </ul>
      </aside>

      <section className="app">
        <div className="content content-s">
          <div className="card">
            <div className="card--header has-border"><h3>Example Dashing Page</h3></div>
            <div className="card--content"><p>This example shows a single column layout and various uses.</p>
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

);
