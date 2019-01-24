import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'
import CodeToggle from '../../../components/codetoggle'
import CodeToggleSCSS from '../../../components/codetoggle-scss'

const currentPageName = "Radio Buttons";
const currentPageNameLower = currentPageName.toLowerCase();

export default () => (
  <Layout>
    <header className="subnav">
      <h1>{currentPageName}</h1>
      <SubNav pageName={currentPageNameLower}/>
    </header>
    <AppContent>
      <div className="row">
        <div className="column column--full">
        <h2 className="example-header no-margin--top" id="customRadioButtons">Custom Radio Buttons
          <Link to={window.location.pathname + "/#customRadioButtons"} className="button button--transparent button--copy-link"></Link>
        </h2>
        <p>To use custom radio buttons, be sure to include your input <strong>before</strong> your label. Failing to do so will break styles.</p>
        <div className="row example-container">
          <fieldset className="column column--third">
            <label>Radio Buttons</label>
            <div className="radio--custom">
              <input type="radio" name="dashing-radio--custom" id="dashing-radio1--custom" defaultChecked={true}/>
              <label htmlFor="dashing-radio1--custom">Option 1</label>
            </div>
            <div className="radio--custom">
              <input type="radio" name="dashing-radio--custom" id="dashing-radio2--custom"/>
              <label htmlFor="dashing-radio2--custom">Option 2</label>
            </div>
            <div className="radio--custom">
              <input type="radio" name="dashing-radio--custom" id="dashing-radio3--custom"/>
              <label htmlFor="dashing-radio3--custom">Option 3 is much longer and indents when it goes beyond one line</label>
            </div>
          </fieldset>

          <fieldset className="column column--full">
            <label>Disabled Radio Button</label>
            <div className="radio--custom">
              <input type="checkbox" id="dashing-radio--custom-disabled" disabled defaultChecked={true}/>
              <label htmlFor="dashing-radio--custom-disabled">Disabled</label>
            </div>
            <div className="radio--custom">
              <input type="checkbox" id="dashing-radio--custom-disabled2" disabled/>
              <label htmlFor="dashing-radio--custom-disabled2">Disabled</label>
            </div>
          </fieldset>

          <fieldset className="column column--full has-error">
            <label>Radio Buttons with Error</label>
            <div className="radio--custom">
              <input type="radio" name="dashing-radio--error" id="dashing-radio--error1" defaultChecked={true}/>
              <label htmlFor="dashing-radio--error1">Option 1</label>
            </div>
            <div className="radio--custom">
              <input type="radio" name="dashing-radio--error" id="dashing-radio--error2" />
              <label htmlFor="dashing-radio--error2">Option 2</label>
            </div>
            <div className="radio--custom">
              <input type="radio" name="dashing-radio--error" id="dashing-radio--error3" />
              <label htmlFor="dashing-radio--error3">Option 3</label>
            </div>
          </fieldset>

          <fieldset className="column column--full has-warning">
            <label>Radio Buttons with Warning</label>
            <div className="radio--custom">
              <input type="radio" name="dashing-radio--warning" id="dashing-radio--warning1" defaultChecked={true}/>
              <label htmlFor="dashing-radio--warning1">Option 1</label>
            </div>
            <div className="radio--custom">
              <input type="radio" name="dashing-radio--warning" id="dashing-radio--warning2" />
              <label htmlFor="dashing-radio--warning2">Option 2</label>
            </div>
            <div className="radio--custom">
              <input type="radio" name="dashing-radio--warning" id="dashing-radio--warning3" />
              <label htmlFor="dashing-radio--warning3">Option 3</label>
            </div>
          </fieldset>

          <fieldset className="column column--full">
            <label>Radio Buttons</label>
            <div className="radio--custom inline">
              <input type="radio" name="dashing-radio--custom--inline" id="dashing-radio--custom--inline1" defaultChecked={true}/>
              <label htmlFor="dashing-radio--custom--inline1">Option 1</label>
            </div>
            <div className="radio--custom inline">
              <input type="radio" name="dashing-radio--custom--inline" id="dashing-radio--custom--inline2"/>
              <label htmlFor="dashing-radio--custom--inline2">Option 2</label>
            </div>
            <div className="radio--custom inline">
              <input type="radio" name="dashing-radio--custom--inline" id="dashing-radio--custom--inline3"/>
              <label htmlFor="dashing-radio--custom--inline3">Option 3</label>
            </div>
          </fieldset>
        </div>
          <CodeToggle>
{`<!-- Custom Radio Button -->
<fieldset class="column column--full">
  <label>Radio Buttons</label>
  <div class="radio--custom">
    <input type="radio" name="dashing-radio--custom" id="dashing-radio1--custom" checked/>
    <label for="dashing-radio1--custom" class="inline">Option 1</label>
  </div>
  <div class="radio--custom">
    <input type="radio" name="dashing-radio--custom" id="dashing-radio2--custom"/>
    <label for="dashing-radio2--custom" class="inline">Option 2</label>
  </div>
  <div class="radio--custom">
    <input type="radio" name="dashing-radio--custom" id="dashing-radio3--custom"/>
    <label for="dashing-radio3--custom" class="inline">Option 3</label>
  </div>
</fieldset>

<fieldset class="column column--full">
  <label>Disabled Radio Button</label>
  <div class="radio--custom">
    <input type="checkbox" id="dashing-radio--custom-disabled" disabled checked/>
    <label for="dashing-radio--custom-disabled" class="inline">Disabled</label>
  </div>
  <div class="radio--custom">
    <input type="checkbox" id="dashing-radio--custom-disabled2" disabled/>
    <label for="dashing-radio--custom-disabled2" class="inline">Disabled</label>
  </div>
</fieldset>

<!-- Add the class .has-error to the parent container to apply error styles -->
<fieldset class="column column--full has-error">
  <label>Radio Buttons with Error</label>
  <div class="radio--custom">
    <input type="radio" name="dashing-radio--error" id="dashing-radio--error1" checked/>
    <label for="dashing-radio--error1" class="inline">Option 1</label>
  </div>
  <div class="radio--custom">
    <input type="radio" name="dashing-radio--error" id="dashing-radio--error2" />
    <label for="dashing-radio--error2" class="inline">Option 2</label>
  </div>
  <div class="radio--custom">
    <input type="radio" name="dashing-radio--error" id="dashing-radio--error3" />
    <label for="dashing-radio--error3" class="inline">Option 3</label>
  </div>
</fieldset>

<!-- Add the class .has-warning to the parent container to apply warning styles -->
<fieldset class="column column--full has-warning">
  <label>Radio Buttons with Warning</label>
  <div class="radio--custom">
    <input type="radio" name="dashing-radio--warning" id="dashing-radio--warning1" checked/>
    <label for="dashing-radio--warning1" class="inline">Option 1</label>
  </div>
  <div class="radio--custom">
    <input type="radio" name="dashing-radio--warning" id="dashing-radio--warning2" />
    <label for="dashing-radio--warning2" class="inline">Option 2</label>
  </div>
  <div class="radio--custom">
    <input type="radio" name="dashing-radio--warning" id="dashing-radio--warning3" />
    <label for="dashing-radio--warning3" class="inline">Option 3</label>
  </div>
</fieldset>

<!-- Add the class .inline to the .radio--custom element to list your checkboxes vertially -->
<fieldset class="column column--full">
  <label>Radio Buttons</label>
  <div class="radio--custom inline">
    <input type="radio" name="dashing-radio--custom--inline" id="dashing-radio--custom--inline1" checked/>
    <label for="dashing-radio--custom--inline1">Option 1</label>
  </div>
  <div class="radio--custom inline">
    <input type="radio" name="dashing-radio--custom--inline" id="dashing-radio--custom--inline2"/>
    <label for="dashing-radio--custom--inline2">Option 2</label>
  </div>
  <div class="radio--custom inline">
    <input type="radio" name="dashing-radio--custom--inline" id="dashing-radio--custom--inline3"/>
    <label for="dashing-radio--custom--inline3">Option 3</label>
  </div>
</fieldset>`}
          </CodeToggle>
          <CodeToggleSCSS>
{`//Include these variables in your theme file to change the color of your radio button
$radio--active: $blue !default; //Color of radio button when checked
$radio--icon: $white !default; //Color of radio icon when checked
$radio--focus: $blue-300 !default; //Color of border around radio when focused
$radio--disabled: $gray-150 !default; //Color of radio when checked and disabled
$radio--icon-disabled: $gray-500 !default; //Color of radio icon when checked and disabled`}
          </CodeToggleSCSS>

          <h2 className="example-header" id="defaultRadioCard">Default Radio Card
            <Link to={window.location.pathname + "/#defaultRadioCard"} className="button button--transparent button--copy-link"></Link>
          </h2>
      		<p>To use smaller radio cards apply the <code className="example-text">.radio-card--small</code> class to the parent <code className="example-text">.radio-card</code>.</p>
      		<div className="row example-container">
      		  <fieldset className="column column--full">
      		    <label>Radio Card</label>
      		    <div className="radio-card">
      		      <input type="radio" name="radio-inline" id="radio-inline1" defaultChecked={true}/>
      		      <label htmlFor="radio-inline1" className="card">Option 1</label>
      		    </div>
      		    <div className="radio-card">
      		      <input type="radio" name="radio-inline" id="radio-inline2" />
      		      <label htmlFor="radio-inline2" className="card">Option 2</label>
      		    </div>
      		    <div className="radio-card">
      		      <input type="radio" name="radio-inline" id="radio-inline3" disabled />
      		      <label htmlFor="radio-inline3" className="card disabled">Disabled</label>
      		    </div>
      		  </fieldset>
      		</div>
          <CodeToggle>
{`<!-- Radio Button Cards -->
<fieldset class="column column--full">
  <label>Radio Card</label>
  <div class="radio-card">
    <input type="radio" name="radio-inline" id="radio-inline1" checked/>
    <label for="radio-inline1" class="card">Option 1</label>
  </div>
  <div class="radio-card">
    <input type="radio" name="radio-inline" id="radio-inline2" />
    <label for="radio-inline2" class="card">Option 2</label>
  </div>
  <div class="radio-card">
    <input type="radio" name="radio-inline" id="radio-inline3" disabled />
    <label for="radio-inline3" class="card disabled">Disabled</label>
  </div>
</fieldset>`}
          </CodeToggle>
          <CodeToggleSCSS>
{`//Include these variables in your theme file to change the color or padding of your radio button cards
$card-checkbox--active: $blue !default; //Color of checkbox and card when checked
$card-checkbox--focus: $blue-300 !default; //Color of border around card-checkbox when focused
$card-checkbox--padding: 1rem !default; //Padding of checkbox`}
          </CodeToggleSCSS>

          <h2 className="example-header" id="smallRadioCard">Small Radio Card
            <Link to={window.location.pathname + "/#smallRadioCard"} className="button button--transparent button--copy-link"></Link>
          </h2>
      		<p>To use smaller radio cards apply the <code className="example-text">.radio-card--small</code> className to the parent <code className="example-text">.radio-card</code>.</p>
      		<div className="row example-container">
      			<fieldset className="column column--full">
      				<label>Small Radio Card</label>
      				<div className="radio-card radio-card--small">
      					<input type="radio" name="radio-small" id="radio-small1" defaultChecked={true}/>
      					<label htmlFor="radio-small1" className="card">Option 1</label>
      				</div>
      				<div className="radio-card radio-card--small">
      					<input type="radio" name="radio-small" id="radio-small2" />
      					<label htmlFor="radio-small2" className="card">Option 2</label>
      				</div>
      				<div className="radio-card radio-card--small">
      					<input type="radio" name="radio-small" id="radio-small3" disabled />
      					<label htmlFor="radio-small3" className="card disabled">Disabled</label>
      				</div>
      			</fieldset>
      		</div>
          <CodeToggle>
{`<!-- Small Radio Button Cards -->
<fieldset class="column column--full">
  <label>Small Radio Card</label>
  <div class="radio-card radio-card--small">
    <input type="radio" name="radio-small" id="radio-small1" checked/>
    <label for="radio-small1" class="card">Option 1</label>
  </div>
  <div class="radio-card radio-card--small">
    <input type="radio" name="radio-small" id="radio-small2" />
    <label for="radio-small2" class="card">Option 2</label>
  </div>
  <div class="radio-card radio-card--small">
    <input type="radio" name="radio-small" id="radio-small3" disabled />
    <label for="radio-small3" class="card disabled">Disabled</label>
  </div>
</fieldset>`}
          </CodeToggle>

          <h2 className="example-header" id="blockRadioCard">Block Radio Card 
            <Link to={window.location.pathname + "/#blockRadioCard"} className="button button--transparent button--copy-link"></Link>
          </h2>
      		<p>To use block style radio cards apply the <code className="example-text">.is-block</code> class to the <code className="example-text">.radio-card</code>.</p>
      		<div className="row example-container">
      		  <fieldset className="column column--half">
      		    <label>Block Radio Card</label>
      		    <div className="radio-card is-block">
      		      <input type="radio" name="radio-block" id="radio-block1" defaultChecked={true}/>
      		      <label htmlFor="radio-block1" className="card">Option 1</label>
      		    </div>
      		    <div className="radio-card is-block">
      		      <input type="radio" name="radio-block" id="radio-block2" />
      		      <label htmlFor="radio-block2" className="card">Option 2</label>
      		    </div>
      		    <div className="radio-card is-block">
      		      <input type="radio" name="radio-block" id="radio-block3" disabled />
      		      <label htmlFor="radio-block3" className="card disabled">Disabled</label>
      		    </div>
      		  </fieldset>
      		</div>
          <CodeToggle>
{`<!-- Block Style Radio Button Cards -->
<fieldset class="column column--full">
  <label>Block Radio Card</label>
  <div class="radio-card is-block">
    <input type="radio" name="radio-block" id="radio-block1" checked/>
    <label for="radio-block1" class="card">Option 1</label>
  </div>
  <div class="radio-card is-block">
    <input type="radio" name="radio-block" id="radio-block2" />
    <label for="radio-block2" class="card">Option 2</label>
  </div>
  <div class="radio-card is-block">
    <input type="radio" name="radio-block" id="radio-block3" disabled />
    <label for="radio-block3" class="card disabled">Disabled</label>
  </div>
</fieldset>`}
          </CodeToggle>

        </div>
      </div>
    </AppContent>
  </Layout>
)
