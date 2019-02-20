import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'
//import CodeToggle from '../../../components/codetoggle'
//import CodeToggleSCSS from '../../../components/codetoggle-scss'
import 'react-tippy/dist/tippy.css';

import {
  Tooltip,
} from 'react-tippy';

const currentPageName = "Tooltips";
const currentPageNameLower = currentPageName.toLowerCase();

class ToggleCode extends React.Component {
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

            <div className="example-container">
              <div className="card">
                <div className="card-content">

                  <div className="grid-full mb-space-xl">
                    <span>Tooltip</span>
                    <Tooltip
                      className="tooltip"
                      title="Welcome to React"
                      position="top"
                      arrow="true"
                      animateFill="false"
                      hideOnClick="false"
                    >
                      <i className="dashing-tooltip"></i>
                    </Tooltip>
                  </div>

                  <div className="grid-full mb-space-xl">
                    <Tooltip
                      title="Edit"
                      theme="dark"
                      position="bottom"
                      animation="fade"
                      animateFill="false"
                      hideOnClick="false"
                    >
                      <button class="dashing-tooltip button button--icon button--blue">
                      	<i class="dashing-icon dashing-icon--pencil"></i>
                      </button>
                    </Tooltip>
                  </div>

                  <div className="grid-full">
                    <Tooltip
                      html={(
                        <div className="align-left">
                          <h4>Clippy Title</h4>
                          <p>Here is some comtent in a clippy to have the member learn more.</p>
                          <a>Link</a>
                        </div>
                      )}
                      theme="light"
                      interactive
                      animation="fade"
                      animateFill="false"
                      hideOnClick="false"
                    >
                      <Link>Learn More</Link>
                    </Tooltip>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </AppContent>
      </Layout>
    )
  }
}

export default ToggleCode;
