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

            <h2 id="pageBanner">Page Banner
              <Link to={location.pathname + "/#pageBanner"} className="button button--transparent button--copy-link"></Link>
            </h2>
            <div className="example-container">
              <div className="page-banner" style={{ position: "relative", marginBottom: "1rem" }}>
                <h1>Page Banner</h1>
              </div>

              <CodeToggle>
{`<div class="page-banner">
  <h1>Page Banner</h1>
</div>`}
              </CodeToggle>
            </div>

            <h2 className="mt-space-xl" id="pageBannerWithSubhead">Page Banner with subhead
              <Link to={location.pathname + "/#pageBannerWithSubhead"} className="button button--transparent button--copy-link"></Link>
            </h2>
              <div className="example-container">
                <div className="page-banner" style={{ position: "relative", marginBottom: "1rem" }}>
                  <h2>Add a Bill to this Need</h2>
                  <h4>Need #481516 – Broken Arm</h4>
                </div>
                <CodeToggle>
{`<div class="page-banner">
  <h2>Add a Bill to this Need</h2>
  <h4>Need #481516 – Broken Arm</h4>
</div>`}
                </CodeToggle>
              </div>


              <h2 className="mt-space-xl" id="defaultCardBanner">Default Card Banner
                <Link to={location.pathname + "/#defaultCardBanner"} className="button button--transparent button--copy-link"></Link>
              </h2>
              <div className="example-container">
                <div className="card">
                  <div className="card-header">
                    <h3>Default Banner</h3>
                  </div>
                  <div className="card-content">
                    <div className="card-banner">
                      <p>This is a card banner</p>
                    </div>
                  </div>
                  <div className="card-footer">
                    <p>Use a banner within a card to display additional context</p>
                  </div>
                </div>
                <CodeToggle>
{`<div class="card">
  <div class="card-header">
    <h3>Default Banner</h3>
  </div>
  <div class="card-content">
    <div class="card-banner">
      <p>This is a card banner</p>
    </div>
  </div>
  <div class="card-footer">
    <p>Use a banner within a card to display additional context</p>
  </div>
</div>`}
                </CodeToggle>
              </div>


              <h2 className="mt-space-xl" id="cardBannerWithSuccess">Card Banner with success
                <Link to={location.pathname + "/#cardBannerWithSuccess"} className="button button--transparent button--copy-link"></Link>
              </h2>
              <div className="example-container">
                <div className="card">
                  <div className="card-header">
                    <h3>Success Banner</h3>
                  </div>
                  <div className="card-content">
                    <div className="card-banner has-success">
                      <i className="dashing-icon dashing-icon--checkmark-filled"></i>
                      <p>Your file is ready to upload</p>
                    </div>
                  </div>
                  <div className="card-footer">
                    <p>Use success banners to notify users of a successful action.</p>
                  </div>
                </div>
                <CodeToggle>
{`<div class="card">
  <div class="card-header">
    <h3>Success Banner</h3>
  </div>
  <div class="card-content">
    <div class="card-banner has-success">
      <i class="dashing-icon dashing-icon--checkmark-filled"></i>
      <p>Your file is ready to upload</p>
    </div>
  </div>
  <div class="card-footer">
    <p>Use success banners to notify users of a successful action.</p>
  </div>
</div>`}
                </CodeToggle>
              </div>

              <h2 className="mt-space-xl" id="cardBannerWithWarning">Card Banner with warning
                <Link to={location.pathname + "/#cardBannerWithWarning"} className="button button--transparent button--copy-link"></Link>
              </h2>
              <div className="example-container">
                <div className="card">
                  <div className="card-header">
                    <h3>Warning Banner</h3>
                  </div>
                  <div className="card-content">
                    <div className="card-banner has-warning">
                      <i className="dashing-icon dashing-icon--info-filled"></i>
                      <p>You may only submit bill information and upload images for one statement at a time. If you have multiple statements to submit, please enter them separately.</p>
                    </div>
                  </div>
                  <div className="card-footer">
                    <p>Use warning banners to inform your user of potential errors.</p>
                  </div>
                </div>
                <CodeToggle>
{`<div class="card">
  <div class="card-header">
    <h3>Warning Banner</h3>
  </div>
  <div class="card-content">
    <div class="card-banner has-warning">
      <i class="dashing-icon dashing-icon--info-filled"></i>
      <p>You may only submit bill information and upload images for one statement at a time. If you have multiple statements to submit, please enter them separately.</p>
    </div>
  </div>
  <div class="card-footer">
    <p>Use warning banners to inform your user of potential errors.</p>
  </div>
</div>`}
                </CodeToggle>
              </div>

              <h2 className="mt-space-xl" id="cardBannerWithError">Card Banner with error
                <Link to={location.pathname + "/#cardBannerWithError"} className="button button--transparent button--copy-link"></Link>
              </h2>
              <div className="example-container">
                <div className="card">
                  <div className="card-header">
                    <h3>Error Banner</h3>
                  </div>
                  <div className="card-content">
                    <div className="card-banner has-error">
                      <i className="dashing-icon dashing-icon--alert-filled"></i>
                      <p>You must complete all fields below before continuing</p>
                    </div>
                  </div>
                  <div className="card-footer">
                    <p>Use error banners to display critical and important information to your user after they have performed an action.</p>
                  </div>
                </div>
                <CodeToggle>
{`<div class="card">
  <div class="card-header">
    <h3>Error Banner</h3>
  </div>
  <div class="card-content">
    <div class="card-banner has-error">
      <i class="dashing-icon dashing-icon--alert-filled"></i>
      <p>You must complete all fields below before continuing</p>
    </div>
  </div>
  <div class="card-footer">
    <p>Use error banners to display critical and important information to your user after they have performed an action.</p>
  </div>
</div>`}
                </CodeToggle>
              </div>

              <h2 className="mt-space-xl" id="cardBannerWithButton">Card Banner with button
                <Link to={location.pathname + "/#cardBannerWithButton"} className="button button--transparent button--copy-link"></Link>
              </h2>
              <div className="example-container">
                <div className="card">
                  <div className="card-header">
                    <h3>Banner with Button</h3>
                  </div>
                  <div className="card-content">
                    <div className="card-banner has-button">
                      <p>This is a card banner</p>
                      <button type="button" className="button button--border button--gray button--smooth" style={{ marginLeft: "auto" }}>Learn More</button>
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
    <div class="card-banner has-button">
      <p>This is a card banner</p>
      <button type="button" class="button button--border button--gray button--smooth" style="margin-left: auto;">Learn More</button>
    </div>
  </div>
  <div class="card-footer">
    <p>Use a banner within a card to display additional context. If you have a button make sure to add <code class="example-text">.has-button</code> to reduce the padding.</p>
  </div>
</div>`}
                </CodeToggle>
              </div>

              <h2 className="mt-space-xl" id="cardBannerWithLink">Card Banner with link
                <Link to={location.pathname + "/#cardBannerWithLink"} className="button button--transparent button--copy-link"></Link>
              </h2>
              <div className="example-container">
                <div className="card">
                  <div className="card-header">
                    <h3>Banner with Link</h3>
                  </div>
                  <div className="card-content">
                    <div className="card-banner">
                      <p>This is a card banner with <Link to="components/banner/code">link here</Link></p>
                    </div>
                  </div>
                  <div className="card-footer">
                    <p>Links within in <code className="example-text">.card-banner</code> get an underline border and transition.</p>
                  </div>
                </div>
                <CodeToggle>
{`<div class="card">
  <div class="card-header">
    <h3>Banner with Link</h3>
  </div>
  <div class="card-content">
    <div class="card-banner">
      <p>This is a card banner with <a>link here</a></p>
    </div>
  </div>
  <div class="card-footer">
    <p>Links within in <code class="example-text">.card-banner</code> get an underline border and transition.</p>
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
