import React from "react";
import { Link } from "gatsby";
import AppFooter from "./footer";
import GlobalNavigation from "../components/navigation/global-navigation";
// The scss needs to be imported here for running 'gatsby build'
//import '../../sass/example-page/example-page.scss'
//import '../../sass/experimental/placeholder.scss'

class Default extends React.Component {

  render() {
    return (
      <React.Fragment>
        <GlobalNavigation />

        <main className="content">
          <div className="grid grid-padding">
            <div className="grid--full grid--half_desktop">

              <div className="card">
                <div className="card-content">
                  <h1>Primary Header</h1>
                  <p>Header description</p>
                  <Link to="/templates/overpanel">View Overpanel</Link> <br />
                </div>
              </div>

            </div>
          </div>
        </main>
        <AppFooter />
      </React.Fragment>
    );
  }

}

export default Default;
