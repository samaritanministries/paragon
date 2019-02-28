import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'
import CodeToggleJSX from '../../../components/codetoggle-jsx'
import { Clippy } from '../../../components/tippyComponent'

const currentPageName = "Clippy";
const currentPageNameLower = currentPageName.toLowerCase();

class ClippyCode extends React.Component {

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
              <div className="card-content no-padding--top no-padding--bottom">
                <div className="card-banner has-warning" style={{ borderRadius: "5px"}}>
                  <i className="dashing-icon dashing-icon--alert-filled"></i>
                  <p>This Component has been built for React applications</p>
                </div>
              </div>
            </div>

            <h2>Clippy Installation</h2>
            <p className="no-margin--bottom">Paragon utilizes the <a href="https://atomiks.github.io/tippyjs/" target="_blank" rel="noopener noreferrer">Tippy.js</a> component to deliver clippies. To use in your project you must import the following:</p>
            <ul className="no-margin">
              <li><a href="https://github.com/atomiks/tippyjs" target="_blank" rel="noopener noreferrer">Tippy.js package</a></li>
              <li><a href="https://github.com/atomiks/tippy.js-react" target="_blank" rel="noopener noreferrer">Tippy.js react component</a></li>
              <li>Custom Paragon Tippy Component</li>
            </ul>

            <h2 className="mt-space-xl" id="defaultClippy">Default Clippy
              <Link to={location.pathname + "/#defaultClippy"} className="button button--transparent button--copy-link"></Link>
            </h2>
            <div className="example-container">
              <Clippy content={
                <div>
                  <h4>Learn More</h4>
                  <p>This is a clippy element. Use it to show detailed information in a paragraph!</p>
                </div>
              }>
                <i className="paragon-clippy mb-space-m"></i>
              </Clippy>
              <CodeToggleJSX>
{`<Clippy content={
  <div>
    <h4>Learn More</h4>
    <p>This is a clippy element. Use it to show detailed information in a paragraph!</p>
  </div>
}>
  <i className="paragon-clippy"></i>
</Clippy>
`}
              </CodeToggleJSX>
            </div>

            <h2 className="mt-space-xl" id="interactiveClippy">Interactive Clippy
              <Link to={location.pathname + "/#interactiveClippy"} className="button button--transparent button--copy-link"></Link>
            </h2>
            <p>Use interactive clippies to add clickable links with more information</p>
            <div className="example-container">
              <div className="card">
                <div className="card-content">
                  <fieldset>
                    <label htmlFor="form-text">Text Input
                    <Clippy interactive content={
                      <div>
                        <h4>Clippy Title</h4>
                        <p>This is some content of the Clippy. It is interactive. Feel free to hover over this and click the link.</p>
                        <p>All you need to do is add <code className="example-text">interactive</code> to the Clippy component.</p>
                        <Link to="./code">Link</Link>
                      </div>
                    }>
                      <i className="paragon-clippy"></i>
                    </Clippy></label>
                    <input type="text" id="form-text"/>
                  </fieldset>
                </div>
              </div>
              <CodeToggleJSX>
{`/* Add 'interactive' to the Clippy component */
<fieldset>
  <label for="form-text">Text Input
  <Clippy interactive content={
    <div>
      <h4>Clippy Title</h4>
      <p>This is some content of the Clippy. It is interactive. Feel free to hover over this and click the link.</p>
      <p>All you need to do is add <code className="example-text">interactive</code> to the Clippy component.</p>
      <Link to="./code">Link</Link>
    </div>
  }>
    <i className="paragon-clippy"></i>
  </Clippy></label>
  <input type="text" id="form-text"/>
</fieldset>
`}
              </CodeToggleJSX>
            </div>

          </div>
        </AppContent>
      </Layout>
    )
  }
}

export default ClippyCode;
