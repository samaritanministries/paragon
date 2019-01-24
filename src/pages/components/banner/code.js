import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'
import CodeToggle from '../../../components/codetoggle'

const currentPageName = "Banner";
const currentPageNameLower = currentPageName.toLowerCase();

export default () => (
  <Layout>
    <header className="subnav">
      <h1>{currentPageName}</h1>
      <SubNav pageName={currentPageNameLower}/>
    </header>
    <AppContent>
      <div className="grid grid-padding">

        <h2>Page Banner <button className="button button--transparent button--copy-link" id="Page_Banner"/></h2>
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

          <h2 className="mt-space-xl">Page Banner with subhead <button className="button button--transparent button--copy-link" id="Page_Banner_With_Subhead"/></h2>
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


          <h2 className="mt-space-xl">Default Card Banner <button className="button button--transparent button--copy-link" id="Default_Card_Banner"/></h2>
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


          <h2 className="mt-space-xl" id="cardBannerSuccess">Card Banner with success <button className="button button--transparent button--copy-link" id="Card_Banner_With_Success"/></h2>
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

          <h2 className="mt-space-xl" id="cardBannerWarning">Card Banner with warning <button className="button button--transparent button--copy-link" id="Card_Banner_With_Warning"/></h2>
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

          <h2 className="mt-space-xl" id="cardBannerError">Card Banner with error <button className="button button--transparent button--copy-link" id="Card_Banner_With_Error"/></h2>
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

          <h2 className="mt-space-xl" id="cardBannerButton">Card Banner with button <button className="button button--transparent button--copy-link" id="Card_Banner_With_Button"/></h2>
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

          <h2 className="mt-space-xl" id="cardBannerLink">Card Banner with link <button className="button button--transparent button--copy-link" id="Card_Banner_With_Link" /></h2>
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
