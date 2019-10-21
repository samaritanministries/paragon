import React from 'react'
import { Link } from 'gatsby'
import Modal from './defaultmodal';
import PropTypes from 'prop-types'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'
import CodeToggle from '../../../components/codetoggle'

const currentPageName = "Modal";
const currentPageNameLower = currentPageName.toLowerCase();
const cssClassFlag = "prevent-scrolling";

class OverpanelCode extends React.Component {
  static propTypes = { location: PropTypes.object.isRequired }

  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  toggleModal = () => {
     this.setState({
       isOpen: !this.state.isOpen
     });
     document.body.classList.toggle(cssClassFlag);
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

            <h2 id="default-modal">Default Modal
              <Link to={location.pathname + "/#default-modal"} className="button button--transparent button--copy-link"></Link>
            </h2>
            <p>Be sure to apply the class <code className="example-text">.prevent-scrolling</code> to the <code className="example-text">body</code> when the modal is open to prevent the background from scrolling.</p>
            <div className="example-container">
              <button onClick={this.toggleModal} className="mb-space-m">Open Modal</button>
              <Modal
                show={this.state.isOpen}
                onClose={this.toggleModal}>
                  <div className="modal-header">
                    <h3>Modal Header</h3>
                  </div>

                  <div className="modal-content">
                    <p>Modal content</p>
                  </div>

                  <div className="modal-footer align-left">
                    Modal footer
                  </div>
              </Modal>
              <CodeToggle>
{`<div class="modal-overlay">
  <div class="modal">
    <button class="button button--icon button--icon--small button--transparent modal-close">
      <i className="dashing-icon dashing-icon--close"></i>
    </button>

    <div class="modal-header">
      <h3>Modal Header</h3>
    </div>

    <div class="modal-content">
      <p>Modal content</p>
    </div>

    <div class="modal-footer align-left">
      Modal footer
    </div>

  </div>
</div>`}
              </CodeToggle>
            </div>

            <h2 className="mt-space-xl" id="modalSizes">Modal Sizes
              <Link to={location.pathname + "/#modalSizes"} className="button button--transparent button--copy-link"></Link>
            </h2>
            <p className="no-margin">To change the size of the modal, all you need to do is apply an additional class <strong>AFTER</strong> <code className="example-text">.modal</code>.</p>
            <ul className="no-margin">
              <li><strong>Small Modal (25rem):</strong> <code className="example-text">modal-small</code></li>
              <li><strong>Default Modal (35rem)</strong></li>
              <li><strong>Large Modal (45rem):</strong> <code className="example-text">modal-large</code></li>
            </ul>
            <div className="example-container">
              <div className="show-code">
              <CodeToggle>
{`<!-- Without an additional class the modal width will be the default -->
<div class="modal modal-small">
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
