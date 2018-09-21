import React from 'react'

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
        <h2 class="example-header no-margin--top">Custom Radio Buttons <button class="button button--transparent button--copy-link" data-id="copyurl" id="Custom_Radio_Buttons"></button></h2>
        <p>To use custom radio buttons, be sure to include your input <strong>before</strong> your label. Failing to do so will break styles.</p>
        <div class="row example-container">
          <fieldset class="column column--third">
            <label>Radio Buttons</label>
            <div class="radio--custom">
              <input type="radio" name="dashing-radio--custom" id="dashing-radio1--custom" defaultChecked={true}/>
              <label for="dashing-radio1--custom">Option 1</label>
            </div>
            <div class="radio--custom">
              <input type="radio" name="dashing-radio--custom" id="dashing-radio2--custom"/>
              <label for="dashing-radio2--custom">Option 2</label>
            </div>
            <div class="radio--custom">
              <input type="radio" name="dashing-radio--custom" id="dashing-radio3--custom"/>
              <label for="dashing-radio3--custom">Option 3 is much longer and indents when it goes beyond one line</label>
            </div>
          </fieldset>

          <fieldset class="column column--full">
            <label>Disabled Radio Button</label>
            <div class="radio--custom">
              <input type="checkbox" id="dashing-radio--custom-disabled" disabled defaultChecked={true}/>
              <label for="dashing-radio--custom-disabled">Disabled</label>
            </div>
            <div class="radio--custom">
              <input type="checkbox" id="dashing-radio--custom-disabled2" disabled/>
              <label for="dashing-radio--custom-disabled2">Disabled</label>
            </div>
          </fieldset>

          <fieldset class="column column--full has-error">
            <label>Radio Buttons with Error</label>
            <div class="radio--custom">
              <input type="radio" name="dashing-radio--error" id="dashing-radio--error1" defaultChecked={true}/>
              <label for="dashing-radio--error1">Option 1</label>
            </div>
            <div class="radio--custom">
              <input type="radio" name="dashing-radio--error" id="dashing-radio--error2" />
              <label for="dashing-radio--error2">Option 2</label>
            </div>
            <div class="radio--custom">
              <input type="radio" name="dashing-radio--error" id="dashing-radio--error3" />
              <label for="dashing-radio--error3">Option 3</label>
            </div>
          </fieldset>

          <fieldset class="column column--full has-warning">
            <label>Radio Buttons with Warning</label>
            <div class="radio--custom">
              <input type="radio" name="dashing-radio--warning" id="dashing-radio--warning1" defaultChecked={true}/>
              <label for="dashing-radio--warning1">Option 1</label>
            </div>
            <div class="radio--custom">
              <input type="radio" name="dashing-radio--warning" id="dashing-radio--warning2" />
              <label for="dashing-radio--warning2">Option 2</label>
            </div>
            <div class="radio--custom">
              <input type="radio" name="dashing-radio--warning" id="dashing-radio--warning3" />
              <label for="dashing-radio--warning3">Option 3</label>
            </div>
          </fieldset>

          <fieldset class="column column--full">
            <label>Radio Buttons</label>
            <div class="radio--custom inline">
              <input type="radio" name="dashing-radio--custom--inline" id="dashing-radio--custom--inline1" defaultChecked={true}/>
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

          <h2 class="example-header">Default Radio Card <button class="button button--transparent button--copy-link" data-id="copyurl" id="Default_Radio_Card"></button></h2>
      		<p>To use smaller radio cards apply the <code class="example-text">.radio-card--small</code> class to the parent <code class="example-text">.radio-card</code>.</p>
      		<div class="row example-container">
      		  <fieldset class="column column--full">
      		    <label>Radio Card</label>
      		    <div class="radio-card">
      		      <input type="radio" name="radio-inline" id="radio-inline1" defaultChecked={true}/>
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

          <h2 class="example-header">Small Radio Card <button class="button button--transparent button--copy-link" data-id="copyurl" id="Small_Radio_Card"></button></h2>
      		<p>To use smaller radio cards apply the <code class="example-text">.radio-card--small</code> class to the parent <code class="example-text">.radio-card</code>.</p>
      		<div class="row example-container">
      			<fieldset class="column column--full">
      				<label>Small Radio Card</label>
      				<div class="radio-card radio-card--small">
      					<input type="radio" name="radio-small" id="radio-small1" defaultChecked={true}/>
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

          <h2 class="example-header">Block Radio Card <button class="button button--transparent button--copy-link" data-id="copyurl" id="Block_Radio_Card"></button></h2>
      		<p>To use block style radio cards apply the <code class="example-text">.is-block</code> class to the <code class="example-text">.radio-card</code>.</p>
      		<div class="row example-container">
      		  <fieldset class="column column--half">
      		    <label>Block Radio Card</label>
      		    <div class="radio-card is-block">
      		      <input type="radio" name="radio-block" id="radio-block1" defaultChecked={true}/>
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
