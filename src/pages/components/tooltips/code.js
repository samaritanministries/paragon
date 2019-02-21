import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'
//import CodeToggle from '../../../components/codetoggle'
//import CodeToggleSCSS from '../../../components/codetoggle-scss'
import { Tooltip, Clippy, IconDescription } from './tippyComponent'

const currentPageName = "Tooltips";
const currentPageNameLower = currentPageName.toLowerCase();

class ToggleCode extends React.Component {
  static propTypes = { location: PropTypes.object.isRequired }

  render() {
//    const { location } = this.props;

    return (
      <Layout>
        <header className="subnav">
          <h1>{currentPageName}</h1>
          <SubNav pageName={currentPageNameLower}/>
        </header>
        <AppContent>
          <div className="grid grid-padding">
            <h2>Default Tooltip</h2>
            <div className="example-container">
              <div className="card">
                <div className="card-content">

                  <div className="grid-full mb-space-xl">
                    <span>Tooltip </span>
                    <Tooltip content="Hello Tooltip">
                      <i className="dashing-tooltip"></i>
                    </Tooltip>

                  </div>

                  <div className="grid-full mb-space-xl">
                    <span>Clippy </span>
                    <Clippy content={
                      <div>
                        <h4>Clippy Title</h4>
                        <p>This is some content of the Clippy. It is interactive. Feel free to hover over this and click the link.</p>
                        <Link to="./code">Link</Link>
                      </div>
                    }>
                      <i className="dashing-tooltip"></i>
                    </Clippy>

                  </div>

                  <div className="grid-full">
                    <IconDescription content="Delete">
                      <button className="button button--red button--icon button--transparent">
                        <i className="dashing-icon dashing-icon--trash"></i>
                      </button>
                    </IconDescription>
                    <IconDescription content="Add">
                      <button className="button button--icon button--icon--main">
                        <i className="dashing-icon dashing-icon--add"></i>
                      </button>
                    </IconDescription>
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
