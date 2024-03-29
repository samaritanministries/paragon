import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'
import CodeToggle from '../../../components/codetoggle'

const currentPageName = "Overpanel";
const currentPageNameLower = currentPageName.toLowerCase();

class OverpanelCode extends React.Component {
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

            <h2 id="overpanel">Overpanel
              <Link to={location.pathname + "/#overpanel"} className="button button--transparent button--copy-link"></Link>
            </h2>
            <div className="example-container">

              <Link className="button button--primary" to="../../../templates/overpanel-example" style={{ marginBottom: "1rem" }}>View Example Overpanel</Link>

              <CodeToggle>
{`<div class="overpanel">
<header class="title-bar">
  <div class="title-content">
    <div>
      <h2 class="title">Overpanel Title</h2>
      <p>Overpanel description</p>
    </div>
    <a href="/templates/default">
      <button class="button button--secondary"><i class="dashing-icon dashing-icon--close"></i> Close</button>
    </a>
  </div>
</header>

<section class="content">
  <div class="grid grid-padding">
    <h2>Example Fullscreen Page</h2>
    <p>This example shows a fullscreen layout. Simple! This example shows a fullscreen layout. Simple! This example shows a fullscreen layout. Simple! This example shows a fullscreen layout. Simple! This example shows a fullscreen layout. Simple! This example shows a fullscreen layout. Simple!</p>
  </div>
</section>
</div>`}
              </CodeToggle>
            </div>

            <h2 className="mt-space-xl" id="overpanelWidths">Overpanel Widths
              <Link to={location.pathname + "/#overpanelWidths"} className="button button--transparent button--copy-link"></Link>
            </h2>
            <p className="no-margin">To change the max width of the overpanel and page content, all you need to do is apply an additional class <strong>AFTER</strong> <code className="example-text">overpanel</code>.</p>
            <ul className="no-margin">
              <li><strong>Extra Small Width (350px):</strong> <code className="example-text">overpanel-xs</code></li>
              <li><strong>Small Width (600px):</strong> <code className="example-text">overpanel-s</code></li>
              <li><strong>Medium Width (800px):</strong> <code className="example-text">overpanel-m</code></li>
              <li><strong>Large Width (1200px):</strong> <code className="example-text">overpanel-l</code></li>
            </ul>
            <div className="example-container">
              <div className="show-code">
              <CodeToggle>
{`<!-- By default the content width is set to overpanel-s -->
<div class="overpanel overpanel-l">
...`}
              </CodeToggle>
            </div>
            </div>

            <h2 className="mt-space-xl" id="overpanelAnimation">Overpanel Animation
              <Link to={location.pathname + "/#overpanelAnimation"} className="button button--transparent button--copy-link"></Link>
            </h2>
            <p className="no-margin">To add the sliding animation, all you need to do is apply an additional class <strong>AFTER</strong> <code className="example-text">overpanel</code>.</p>
            <div className="example-container">
              <div className="show-code">
                <CodeToggle>
{`<!-- Overpanel slides in from the bottom of the screen  -->
<div class="overpanel slide-up">
...`}
                </CodeToggle>
              </div>
            </div>

          </div>
        </AppContent>
      </Layout>
    )
  }
}

export default OverpanelCode;
