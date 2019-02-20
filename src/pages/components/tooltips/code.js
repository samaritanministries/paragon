import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'
//import CodeToggle from '../../../components/codetoggle'
//import CodeToggleSCSS from '../../../components/codetoggle-scss'
import ReactTooltip from 'react-tooltip'

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

            <div className="card">
              <div className="card-content">
                <p className="mb-space-xl">Tooltip
                	<i className="dashing-tooltip" data-tip data-for='defaultTooltip'></i>
                </p>
                <ReactTooltip id="defaultTooltip" effect="solid" className="tooltip">
                  <span>Default Tooltip</span>
                </ReactTooltip>

                <button className="button button--gray" data-tip data-for='defaultClippy'>Default Button</button>
                <ReactTooltip id="defaultClippy" effect="solid" className="clippy">
                  <h4>Default Clippy</h4>
                  <p>This is a clippy message with a <Link>link</Link>.</p>
                </ReactTooltip>

              </div>
            </div>

          </div>
        </AppContent>
      </Layout>
    )
  }
}

export default ToggleCode;
