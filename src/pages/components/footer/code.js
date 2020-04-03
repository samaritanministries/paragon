import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'
import CodeToggle from '../../../components/codetoggle'
import CodeToggleSCSS from '../../../components/codetoggle-scss'

const currentPageName = "Footer";
const currentPageNameLower = currentPageName.toLowerCase();

class FooterCode extends React.Component {
  static propTypes = { location: PropTypes.object.isRequired }

  render() {
    const { location } = this.props;

    return (
      <Layout>
        <header className="subnav">
          <h1>{currentPageName}</h1>
          <SubNav pageName={currentPageNameLower}/>
        </header>
        <AppContent>
          <div className="grid grid-padding">

            <h2 id="styles">Footer
              <Link to={location.pathname + "/#footer"} className="button button--transparent button--copy-link"></Link>
            </h2>

            <div className="example-container">
              <footer className="footer" style={{ marginTop: "0" }}>

                <nav className="footer-nav">
                  <ul>
                    <li>
                      <a href="" target="_blank">
                        Careers <i className="dashing-icon dashing-icon--new-tab dashing-icon--blue" />
                      </a>
                    </li>
                    <li>
                      <a href="" target="_blank">
                      Guidelines <i className="dashing-icon dashing-icon--new-tab dashing-icon--blue" />
                      </a>
                    </li>
                    <li>
                      <a href="" target="_blank">
                        {"What's New"}
                      </a>
                    </li>
                  </ul>
                </nav>

              </footer>
            </div>
          </div>
        </AppContent>
      </Layout>
    )
  }
}

export default FooterCode;
