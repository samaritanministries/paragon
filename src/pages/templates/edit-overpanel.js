import React from "react";
//import "../../sass/example-page/example-page.scss";
// The scss needs to be imported here for running 'gatsby build'
//import '../../sass/example-page/example-page.scss'

export default () => (

  <div className="overpanel">
    <header className="title-bar">
      <div className="title-content">
        <div>
          <h2>Edit Address</h2>
          <p>Manage the address tied to your membership</p>
        </div>
        <button className="button button--secondary"><i className="dashing-icon dashing-icon--close" /> Close</button>
      </div>
    </header>

    <section className="app">
      <div className="content">
        <div className="grid grid-padding">
          <div className="card flex-content">

            <div className="flex-row">
              <fieldset>
                <label>Mailing Title</label>
                <input type="text" htmlFor="mailing-title" />
              </fieldset>
            </div>
            <div className="flex-row">
              <fieldset>
                <label>Address</label>
                <input type="text" htmlFor="address" />
              </fieldset>
            </div>

            <div className="flex-row">
              <fieldset>
                <label>City</label>
                <input type="text" htmlFor="mailing-title" />
              </fieldset>
              <fieldset>
                <label>State</label>
                <input type="text" htmlFor="address" />
              </fieldset>
            </div>

            <div className="flex-row">
              <fieldset>
                <label>ZIP</label>
                <input type="text" htmlFor="mailing-title" />
              </fieldset>
              <fieldset />
            </div>
            <div className="flex-row">
              <button className="button button--primary">Save Address</button>
            </div>

          </div>
        </div>
      </div>
    </section>
  </div>
);
