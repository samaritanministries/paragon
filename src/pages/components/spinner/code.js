import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'
import CodeToggle from '../../../components/codetoggle'
import CodeToggleSCSS from '../../../components/codetoggle-scss'

const currentPageName = "Spinner";
const currentPageNameLower = currentPageName.toLowerCase();

class SpinnerCode extends React.Component {
  static propTypes = { location: PropTypes.object.isRequired }

  constructor(props) {
    super(props);
    this.state = {addSpinner: false};
    this.handleClick = this.handleClick.bind(this);
  }

   handleClick() {
    this.setState(prevState => ({
      addSpinner: !prevState.addSpinner
    }));
  }

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
              <h2 className="example-header no-margin--top" id="defaultSpinner">Default Spinner
                <Link to={location.pathname + "/#defaultSpinner"} className="button button--transparent button--copy-link"></Link>
              </h2>
              <div className="row example-container">
                <div className="column column--full">
                  <div className="relative" style={{ height: "8rem" }}>
                    <div className="dash-spinner"></div>
                  </div>
                </div>
              </div>
              <CodeToggle>
{`<div class="dash-spinner"></div>`}
              </CodeToggle>
              <CodeToggleSCSS>
{`//Include this variable in your theme file to change the color of your spinner
$spinner-color: #000;`}
              </CodeToggleSCSS>

              <h2 className="example-header">Small Spinner<button className="button button--transparent button--copy-link" data-id="copyurl" id="Small_Spinner" /></h2>
              <div className="row example-container">
                <div className="column column--full">
                  <div className="relative" style={{ height: "5rem" }}>
                    <div className="dash-spinner small"></div>
                  </div>
                </div>
              </div>
              <CodeToggle>
{`<div class="dash-spinner small"></div>`}
              </CodeToggle>

              <h2 className="example-header" id="buttonSpinner">Button Spinner
                <Link to={location.pathname + "/#buttonSpinner"} className="button button--transparent button--copy-link"></Link>
              </h2>
              <div className="row example-container">
                <div className="column column--full">
                  <button onClick={this.handleClick} className={this.state.addSpinner ? 'button button--blue has-spinner' : 'button button--blue'}>
                    Click me
                  </button>
                </div>
              </div>
              <CodeToggle>
{`<button class="button button--blue has-spinner">
  Click Me
</button>`}
              </CodeToggle>

            </div>
          </div>
        </AppContent>
      </Layout>
    )
  }
}

export default SpinnerCode;
