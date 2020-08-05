import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'
import CodeToggle from '../../../components/codetoggle'

const currentPageName = "Banner";
const currentPageNameLower = currentPageName.toLowerCase();

class BannerCode extends React.Component {
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

            <p className="intro">Banners can be used to show important information to a user. Card banners should have text that is directly related to an action that has been completed or is about to be performed.</p>

            <h2 id="globalErrorBanner">Global Error Banner
              <Link to={location.pathname + "/#globalErrorBanner"} className="button button--transparent button--copy-link"></Link>
            </h2>
            <div className="example-container">
              <header className="global-banner-container has-error global-banner--example mb-space-m">
                <div className="global-banner">
              		<i className="dashing-icon dashing-icon--alert-filled" />
              		<p>This is an error banner with an <a href="../code">action</a>.</p>
                </div>
            	</header>

              <CodeToggle>
{`<!-- Use has-error for error banners -->
  <header class="global-banner-container has-error">
    <div class="global-banner">
      <i class="dashing-icon dashing-icon--info-filled" />
      <p>This is an error banner with an <a>action</a>.</p>
    </div>
  </header>`}
              </CodeToggle>
            </div>

            <h2 id="globalWarningBanner">Global Warning Banner
              <Link to={location.pathname + "/#globalWarningBanner"} className="button button--transparent button--copy-link"></Link>
            </h2>
            <div className="example-container">
              <header className="global-banner-container has-warning global-banner--example mb-space-m">
                <div className="global-banner">
              		<i className="dashing-icon dashing-icon--info-filled" />
              		<p>This is a warning banner with an <a href="../code">action</a>.</p>
                </div>
            	</header>

              <CodeToggle>
{`<!-- Use has-error for error banners -->
<header class="global-banner-container has-warning">
  <div class="global-banner">
    <i class="dashing-icon dashing-icon--info-filled" />
    <p>This is a warning banner with an <a>action</a>.</p>
  </div>
</header>`}
              </CodeToggle>
            </div>


              <h2 className="mt-space-xl" id="defaultCardBanner">Default Card Banner
                <Link to={location.pathname + "/#defaultCardBanner"} className="button button--transparent button--copy-link"></Link>
              </h2>
              <p>Add the class <code className="example-text">.has-icon</code> to <code className="example-text">.card-header</code> when using an icon.</p>
              <div className="example-container">
                <div className="card">
                  <div className="card-header has-border">
                    <h3>Default Banner</h3>
                  </div>
                  <div className="card-content">
                    <div className="card-info no-margin">
                      <div className="card-header has-icon">
                        <i className="dashing-icon dashing-icon--info-filled" />
                        <h4 className="card-info--title">Please Note</h4>
                      </div>
                      <div className="card-content">
                        <p className="no-margin">This is an info card banner.</p>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <p>Use a banner within a card to display additional context</p>
                  </div>
                </div>
                <CodeToggle>
{`<div class="card-info no-margin">
  <div class="card-header has-icon">
    <i class="dashing-icon dashing-icon--info-filled" />
    <h4 class="card-info--title">Please Note</h4>
  </div>
  <div class="card-content">
    <p class="no-margin">This is an info card banner.</p>
  </div>
</div>`}
                </CodeToggle>
              </div>


              <h2 className="mt-space-xl" id="cardBannerWithSuccess">Card Banner with success
                <Link to={location.pathname + "/#cardBannerWithSuccess"} className="button button--transparent button--copy-link"></Link>
              </h2>
              <div className="example-container">
                <div className="card">
                  <div className="card-header has-border">
                    <h3>Success Banner</h3>
                  </div>
                  <div className="card-content">
                    <div className="card-info has-success no-margin">
                      <div className="card-header has-icon">
                        <i className="dashing-icon dashing-icon--checkmark-filled" />
                        <h4 className="card-info--title">Success</h4>
                      </div>
                      <div className="card-content">
                        <p className="no-margin">This is a success card banner.</p>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <p>Use success banners to notify users of a successful action.</p>
                  </div>
                </div>
                <CodeToggle>
{`<div class="card-info has-success no-margin">
  <div class="card-header has-icon">
    <i class="dashing-icon dashing-icon--checkmark-filled" />
    <h4 class="card-info--title">Success</h4>
  </div>
  <div class="card-content">
    <p class="no-margin">This is a success card banner.</p>
  </div>
</div>`}
                </CodeToggle>
              </div>

              <h2 className="mt-space-xl" id="cardBannerWithWarning">Card Banner with warning
                <Link to={location.pathname + "/#cardBannerWithWarning"} className="button button--transparent button--copy-link"></Link>
              </h2>
              <div className="example-container">
                <div className="card">
                  <div className="card-header has-border">
                    <h3>Warning Banner</h3>
                  </div>
                  <div className="card-content">
                    <div className="card-info has-warning no-margin">
                      <div className="card-header has-icon">
                        <i className="dashing-icon dashing-icon--alert-filled" />
                        <h4 className="card-info--title">Warning</h4>
                      </div>
                      <div className="card-content">
                        <p className="no-margin">This is a warning card banner.</p>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <p>Use warning banners to inform your user of potential errors.</p>
                  </div>
                </div>
                <CodeToggle>
{`<div class="card-info has-warning no-margin">
  <div class="card-header has-icon">
    <i class="dashing-icon dashing-icon--alert-filled" />
    <h4 class="card-info--title">Warning</h4>
  </div>
  <div class="card-content">
    <p class="no-margin">This is a warning card banner.</p>
  </div>
</div>`}
                </CodeToggle>
              </div>

              <h2 className="mt-space-xl" id="cardBannerWithError">Card Banner with error
                <Link to={location.pathname + "/#cardBannerWithError"} className="button button--transparent button--copy-link"></Link>
              </h2>
              <div className="example-container">
                <div className="card">
                  <div className="card-header has-border">
                    <h3>Error Banner</h3>
                  </div>
                  <div className="card-content">
                    <div className="card-info has-error no-margin">
                      <div className="card-header has-icon">
                        <i className="dashing-icon dashing-icon--alert-filled" />
                        <h4 className="card-info--title">Error</h4>
                      </div>
                      <div className="card-content">
                        <p className="no-margin">This is a error card banner.</p>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <p>Use error banners to display critical and important information to your user after they have performed an action.</p>
                  </div>
                </div>
                <CodeToggle>
{`<div class="card-info has-error no-margin">
  <div class="card-header has-icon">
    <i class="dashing-icon dashing-icon--alert-filled" />
    <h4 class="card-info--title">Error</h4>
  </div>
  <div class="card-content">
    <p class="no-margin">This is a error card banner.</p>
  </div>
</div>`}
                </CodeToggle>
              </div>

              <h2 className="mt-space-xl" id="cardBannerWithButton">Card Banner without header
                <Link to={location.pathname + "/#cardBannerWithButton"} className="button button--transparent button--copy-link"></Link>
              </h2>
              <p>Add the class <code className="example-text">.has-icon</code> to <code className="example-text">.card-content</code> when using an icon.</p>
              <div className="example-container">
                <div className="card">
                  <div className="card-header has-border">
                    <h3>Banner without header</h3>
                  </div>
                  <div className="card-content">
                    <div className="card-info no-margin">
                      <div className="card-content has-icon">
                        <i className="dashing-icon dashing-icon--alert-filled" />
                        <p className="no-margin">This is an error card banner with a icon.</p>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <p>Card banners can be used without a title when that additional information is not needed.</p>
                  </div>
                </div>
                <CodeToggle>
{`<!-- .has-icon is added to .card-content to give appropriate display and spacing -->
<div class="card-info no-margin">
  <div class="card-content has-icon">
    <i class="dashing-icon dashing-icon--alert-filled" />
    <p class="no-margin">This is an error card banner with a icon.</p>
  </div>
</div>`}
                </CodeToggle>
              </div>

              <h2 className="mt-space-xl" id="cardBannerWithButton">Card Banner with button
                <Link to={location.pathname + "/#cardBannerWithButton"} className="button button--transparent button--copy-link"></Link>
              </h2>
              <div className="example-container">
                <div className="card">
                  <div className="card-header has-border">
                    <h3>Banner with Button</h3>
                  </div>
                  <div className="card-content">
                    <div className="card-info no-margin">
                      <div className="card-content has-button">
                        <p className="no-margin">This is a card banner</p>
                        <button type="button" className="button button--border button--blue button--smooth" style={{ marginLeft: "auto" }}>Learn More</button>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <p>Use a banner within a card to display additional context. If you have a button make sure to add <code className="example-text">.has-button</code> to reduce the padding.</p>
                  </div>
                </div>
                <CodeToggle>
{`<div class="card">
  <div class="card-header">
    <h3>Banner with Button</h3>
  </div>
  <div class="card-content">
    <div class="card-info no-margin">
      <div class="card-content has-button">
        <p class="no-margin">This is a card banner</p>
        <button type="button" class="button button--border button--blue button--smooth" style={{ marginLeft: "auto" }}>Learn More</button>
      </div>
    </div>
  </div>
  <div class="card-footer">
    <p>Use a banner within a card to display additional context. If you have a button make sure to add <code class="example-text">.has-button</code> to reduce the padding.</p>
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

export default BannerCode;
