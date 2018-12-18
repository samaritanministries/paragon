import React from 'react'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'
import CodeToggle from '../../../components/codetoggle'

const currentPageName = "Card";
const currentPageNameLower = currentPageName.toLowerCase();

export default () => (
  <Layout>
    <header className="subnav">
      <h1>{currentPageName}</h1>
      <SubNav pageName={currentPageNameLower}/>
    </header>

    <AppContent>
    <main className="content content-m">
			<div className="grid grid-padding">

        <h2>Form</h2>
        <div className="example-container">
          <div className="card">
            <div className="card-header has-border">
              <h2 className="no-margin">Card Header</h2>
            </div>

            <div className="card-content flex-content">
              <div className="flex-row">
                <fieldset>
                  <label htmlFor="first-name">First Name</label>
                  <input type="text" id="first-name"/>
                </fieldset>
                <fieldset>
                  <label htmlFor="middle-name">Middle Name</label>
                  <input type="text" id="middle-name"/>
                </fieldset>
                <fieldset>
                  <label htmlFor="last-name">Last Name</label>
                  <input type="text" id="last-name"/>
                </fieldset>
              </div>
              <div className="flex-row">
                <fieldset>
                  <label htmlFor="birthday">Date of Birth</label>
                  <input type="date" id="birthday"/>
                </fieldset>
                <fieldset className="select--has-icon">
                  <label htmlFor="gender">Gender</label>
                  <select id="gender">
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </fieldset>
                <fieldset className="spacer"></fieldset>
              </div>
            </div>
            <div className="card-footer">
              <button className="mr-space-xs">Submit</button>
              <button className="button--transparent button--gray">Cancel</button>
            </div>
          </div>
          <CodeToggle>
{`<!-- Form within a card -->
<div class="card">
  <div class="card-header has-border">
    <h2 class="no-margin">Card Header</h2>
  </div>

  <div class="card-content flex-content">
    <div class="flex-row">
      <fieldset>
        <label for="first-name">First Name</label>
        <input type="text" id="first-name"/>
      </fieldset>
      <fieldset>
        <label for="middle-name">Middle Name</label>
        <input type="text" id="middle-name"/>
      </fieldset>
      <fieldset>
        <label for="last-name">Last Name</label>
        <input type="text" id="last-name"/>
      </fieldset>
    </div>
    <div class="flex-row">
      <fieldset>
        <label for="birthday">Date of Birth</label>
        <input type="date" id="birthday"/>
      </fieldset>
      <fieldset class="select--has-icon">
        <label for="gender">Gender</label>
        <select id="gender">
          <option>Male</option>
          <option>Female</option>
        </select>
      </fieldset>
      <fieldset class="spacer"></fieldset>
    </div>
  </div>
  <div class="card-footer">
    <button class="mr-space-xs">Submit</button>
    <button class="button--transparent button--gray">Cancel</button>
  </div>
</div>`}
          </CodeToggle>
        </div>

        <h2 className="mt-space-xl">States</h2>
        <div className="example-container">
          <div className="card">
            <div className="card-header">
              <h3>Default</h3>
            </div>
            <div className="card-content">
              <p>This is a default card.</p>
            </div>
          </div>

          <div className="card is-selectable">
            <div className="card-header">
              <h3>Selectable</h3>
            </div>
            <div className="card-content">
              <p>To use a selectable card, apply <code className="example-text">.is-selectable</code> to the <code className="example-text">.card</code>.</p>
            </div>
          </div>

          <div className="card is-selectable is-disabled">
            <div className="card-header">
              <h3>Disabled</h3>
            </div>
            <div className="card-content">
              <p>To use a disabled card, apply <code className="example-text">.is-disabled</code> to the <code className="example-text">.card</code>.</p>
            </div>
          </div>

          <div className="card card--dashed">
            <div className="card-header">
              <h3>Dashed</h3>
            </div>
            <div className="card-content">
              <p>To use a dashed card, apply <code className="example-text">.card--dashed</code> to the <code className="example-text">.card</code>.</p>
            </div>
          </div>
          <CodeToggle>
{`<!-- Different states of cards -->
<div class="card">
  <div class="card-header">
    <h3>Default</h3>
  </div>
  <div class="card-content">
    <p>This is a default card.</p>
  </div>
</div>

<div class="card is-selectable">
  <div class="card-header">
    <h3>Selectable</h3>
  </div>
  <div class="card-content">
    <p>To use a selectable card, apply <code class="example-text">.is-selectable</code> to the <code class="example-text">.card</code>.</p>
  </div>
</div>

<div class="card is-selectable is-disabled">
  <div class="card-header">
    <h3>Disabled</h3>
  </div>
  <div class="card-content">
    <p>To use a disabled card, apply <code class="example-text">.is-disabled</code> to the <code class="example-text">.card</code>.</p>
  </div>
</div>

<div class="card card--dashed">
  <div class="card-header">
    <h3>Dashed</h3>
  </div>
  <div class="card-content">
    <p>To use a dashed card, apply <code class="example-text">.card--dashed</code> to the <code class="example-text">.card</code>.</p>
  </div>
</div>`}
          </CodeToggle>
        </div>

        <h2 className="mt-space-xl">Lists</h2>
        <div className="example-container">
          <div className="card">
            <div className="card-header">
              <h3>Simple List</h3>
            </div>
            <div className="card-content">
              <ul className="text-list">
                <li className="text-list_item">List Item 1</li>
                <li className="text-list_item">List Item 2</li>
                <li className="text-list_item">List Item 3</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="card-header has-border">
              <h2>Selectable List</h2>
            </div>
            <ul className="card-list is-selectable">
              <li className="space-between"><span>Ryan Fitz</span><i className="dashing-icon dashing-icon--arrow-right"></i></li>
              <li className="space-between"><span>Jill Fitz</span><i className="dashing-icon dashing-icon--arrow-right"></i></li>
              <li className="space-between"><span>Jackson Fitz</span><i className="dashing-icon dashing-icon--arrow-right"></i></li>
              <li className="space-between"><span>Emily Fitz</span><i className="dashing-icon dashing-icon--arrow-right"></i></li>
            </ul>
          </div>
          <CodeToggle>
{`<!-- Different types of lists within cards -->
<div className="card">
  <div className="card-header">
    <h3>Simple List</h3>
  </div>
  <div className="card-content">
    <ul className="text-list">
      <li className="text-list_item">List Item 1</li>
      <li className="text-list_item">List Item 2</li>
      <li className="text-list_item">List Item 3</li>
    </ul>
  </div>
</div>

<div className="card">
  <div className="card-header has-border">
    <h2>Selectable List</h2>
  </div>
  <ul className="card--list is-selectable">
    <li className="space-between"><span>Ryan Fitz</span><i className="dashing-icon dashing-icon--arrow-right"></i></li>
    <li className="space-between"><span>Jill Fitz</span><i className="dashing-icon dashing-icon--arrow-right"></i></li>
    <li className="space-between"><span>Jackson Fitz</span><i className="dashing-icon dashing-icon--arrow-right"></i></li>
    <li className="space-between"><span>Emily Fitz</span><i className="dashing-icon dashing-icon--arrow-right"></i></li>
  </ul>
</div>`}
          </CodeToggle>
        </div>
      </div>
    </main>

    </AppContent>
  </Layout>
)
