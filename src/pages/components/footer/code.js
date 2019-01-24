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
          <div className="row">
            <div className="column column--full">
              <h2 className="example-header no-margin--top" id="footer">Footer
                <Link to={location.pathname + "/#footer"} className="button button--transparent button--copy-link"></Link>
              </h2>
              <div className="row example-container">
                <div className="column column--full" style={{ overflow: "auto" }}>
                  <footer className="app-footer example--footer" style={{ position: "relative" }}>
                    <div className="row no-padding">
                      <button className="button button--primary float-left">Save</button>
                      <button className="button button--primary button--green float-right">Submit</button>
                    </div>
                  </footer>
                </div>
              </div>
              <CodeToggle>
{`<!-- Apply the fixed class to the app-footer element to fix it to the bottom -->
<footer class="app-footer fixed">
  <div class="row no-padding">
    <button class="float-left">Save</button>
    <button class="button--green float-right">Submit</button>
  </div>
</footer>`}
              </CodeToggle>
              <CodeToggleSCSS>
{`//Include these variables in your theme file to change the color theme of your footer
$footer-color: $white !default; //Override this variable to change the color of your footer
$footer-border-color: $gray-200 !default; //Override this variable to change the color of the top border of your footer`}
              </CodeToggleSCSS>

            </div>
          </div>
        </AppContent>
      </Layout>
    )
  }
}

export default FooterCode;
