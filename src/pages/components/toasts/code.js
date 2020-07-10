import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'
import CodeToggle from '../../../components/codetoggle'

const currentPageName = "Toasts";
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
            <h2 id="toast-styles">Styles
              <Link to={location.pathname + "/#toast-styles"} className="button button--transparent button--copy-link"></Link>
            </h2>
            <div className="example-container">

            		<div className="toast-message success" style={{ position: "relative", left: "0"}}>
            			<i className="toast-message--icon"></i>
            			<p>This is a success toast message</p>
            		</div>

                <div className="toast-message warning" style={{ position: "relative", left: "0"}}>
            			<i className="toast-message--icon"></i>
            			<p>This is a warning toast message</p>
            		</div>

                <div className="toast-message error" style={{ position: "relative", left: "0"}}>
            			<i className="toast-message--icon"></i>
            			<p>This is an error toast message</p>
            		</div>

                <div className="toast-message" style={{ position: "relative", left: "0", marginBottom: "1rem"}}>
            			<i className="toast-message--icon"></i>
            			<p>This is a default toast message</p>
            		</div>

                <CodeToggle>
{`<!-- Wrap the toast message inside the toast-container -->
<div class="toast-container">

  <!-- Success Toast Message -->
  <div class="toast-message success">
    <i class="toast-message--icon"></i>
    <p>This is a success toast message</p>
  </div>

  <!-- Warning Toast Message -->
  <div class="toast-message warning">
    <i class="toast-message--icon"></i>
    <p>This is a warning toast message</p>
  </div>

  <!-- Error Toast Message -->
  <div class="toast-message error">
    <i class="toast-message--icon"></i>
    <p>This is an error toast message</p>
  </div>

  <!-- Default Toast Message -->
  <div class="toast-message">
    <i class="toast-message--icon"></i>
    <p>This is a default toast message</p>
  </div>

</div>`}
                </CodeToggle>
            </div>

          </div>
        </AppContent>
      </Layout>
    )
  }
}

export default ToggleCode;
