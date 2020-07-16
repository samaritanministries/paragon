import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import Toast from './toast'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'
import CodeToggle from '../../../components/codetoggle'

const currentPageName = "Toasts";
const currentPageNameLower = currentPageName.toLowerCase();

class ToggleCode extends React.Component {
  static propTypes = { location: PropTypes.object.isRequired }

  constructor(props) {
    super(props);
		this.state = { showToast: false };
    this.toggleToast = this.toggleToast.bind(this);
  }

	toggleToast() {
		this.setState({showToast: true});
    setTimeout(() => {
      this.setState({showToast: false});
    }, 4000);
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
          <div className="grid grid-padding">
            <h2 id="toast-styles">Styles
              <Link to={location.pathname + "/#toast-styles"} className="button button--transparent button--copy-link"></Link>
            </h2>
            <p>To show and animate a toast message onto the screen, add the class <code className="example-text">.is-visible</code> to the <code className="example-text">.toast-message</code>.</p>
            <div className="example-container">

            		<div className="toast-message success toast-message--example">
            			<i className="toast-message--icon"></i>
            			<p>This is a success toast message</p>
            		</div>

                <div className="toast-message warning toast-message--example">
            			<i className="toast-message--icon"></i>
            			<p>This is a warning toast message</p>
            		</div>

                <div className="toast-message error toast-message--example">
            			<i className="toast-message--icon"></i>
            			<p>This is an error toast message</p>
            		</div>

                <div className="toast-message toast-message--example mb-space-m">
            			<i className="toast-message--icon"></i>
            			<p>This is a default toast message</p>
            		</div>

                <CodeToggle>
{`<!-- Success Toast Message -->
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
`}
                </CodeToggle>
            </div>

            <h2 className="mt-space-xl" id="toast-styles">Example
              <Link to={location.pathname + "/#toast-example"} className="button button--transparent button--copy-link"></Link>
            </h2>
            <div className="example-container">
              <button className="button button--primary" onClick={this.toggleToast}>Show Toast</button>
            </div>
            { this.state.showToast && <Toast isSuccess={true} message="This is a success toast message" /> }

          </div>
        </AppContent>
      </Layout>
    )
  }
}

export default ToggleCode;
