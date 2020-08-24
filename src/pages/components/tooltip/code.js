import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'
import CodeToggleJSX from '../../../components/codetoggle-jsx'
import { Tooltip, IconDescription } from '../../../components/tippyComponent'

const currentPageName = "Tooltip";
const currentPageNameLower = currentPageName.toLowerCase();

class TooltipCode extends React.Component {
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
              <div className="card-content no-padding--top no-padding--bottom">
                <div className="card-banner has-warning" style={{ borderRadius: "5px"}}>
                  <i className="dashing-icon dashing-icon--alert-filled"></i>
                  <p>This Component has been built for React applications</p>
                </div>
              </div>
            </div>

            <h2>Tooltip Installation</h2>
            <p className="no-margin--bottom">Paragon utilizes the <a href="https://atomiks.github.io/tippyjs/" target="_blank" rel="noopener noreferrer">Tippy.js</a> component to deliver tooltips. To use in your project you must import the following:</p>
            <ul className="no-margin">
              <li><a href="https://github.com/atomiks/tippyjs" target="_blank" rel="noopener noreferrer">Tippy.js package</a></li>
              <li><a href="https://github.com/atomiks/tippy.js-react" target="_blank" rel="noopener noreferrer">Tippy.js react component</a></li>
              <li><a href="#defaultProps">Custom Paragon Tooltip Component</a></li>
            </ul>

            <h2 className="mt-space-xl" id="defaultTooltip">Default Tooltip
              <Link to={location.pathname + "/#defaultTooltip"} className="button button--transparent button--copy-link"></Link>
            </h2>
            <div className="example-container">
              <div className="card">
                <div className="card-content">

                  <div className="grid-full mb-space-xl">
                    <span>Tooltip </span>
                    <Tooltip content="Hello Tooltip">
                      <i className="paragon-tooltip"></i>
                    </Tooltip>

                  </div>

                  <div className="grid-full">
                    <Tooltip content="You cannot delete the Primary Phone Number">
                      <span style={{ display: "inline-block" }}>
                        <button className="button" disabled>
                          This is Disabled
                        </button>
                      </span>
                    </Tooltip>

                  </div>

                </div>
              </div>
              <CodeToggleJSX>
{`/* Tooltip */
<Tooltip content="Hello Tooltip">
  <i className="paragon-tooltip"></i>
</Tooltip>

/* Tooltip on Disabled Button */
/*  You must wrap a tag around the disabled button to utilize a tooltip */
<Tooltip content="You cannot delete the Primary Phone Number">
  <span style={{ display: "inline-block" }}>
    <button className="button" disabled>
      This is Disabled
    </button>
  </span>
</Tooltip>
`}
              </CodeToggleJSX>
            </div>

            <h2 className="mt-space-xl" id="defaultTooltip">Icon Tooltip
              <Link to={location.pathname + "/#defaultTooltip"} className="button button--transparent button--copy-link"></Link>
            </h2>
            <p>Icon tooltips can be used to give the user more information about an action that is only represented by an icon. They are built to show after a 1 second delay.</p>
            <div className="example-container">
              <div className="card">
                <div className="card-content">

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
              <CodeToggleJSX>
{`/* Icon Description */
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
`}
              </CodeToggleJSX>
            </div>

            <h2 className="mt-space-xl" id="defaultProps">Tooltip Default Props
              <Link to={location.pathname + "/#defaultProps"} className="button button--transparent button--copy-link"></Link>
            </h2>
            <p>Below are the Default Props we have assigned to tooltip's in Paragon.</p>

            <div className="show-code">
              <CodeToggleJSX>
{`/* Tooltip Default Props */
export const Tooltip = props => <Tippy {...props} />
Tooltip.defaultProps = {
  animation: 'fade',
  boundary: 'viewport',
  arrow: true,
  theme: 'default',
  arrowType: 'round',
  maxWidth: 250,
}

/* Icon Description Default Props */
export const IconDescription = props => <Tippy {...props} />
IconDescription.defaultProps = {
  animation: 'fade',
  placement: 'bottom',
  boundary: 'viewport',
  arrow: false,
  theme: 'default',
  maxWidth: 250,
  delay: [1000, 0],
  distance: 5,
}
`}
              </CodeToggleJSX>
            </div>

          </div>
        </AppContent>
      </Layout>
    )
  }
}

export default TooltipCode;
