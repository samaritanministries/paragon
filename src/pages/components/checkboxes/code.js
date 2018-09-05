import React from 'react'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'
import CodeToggle from '../../../components/codetoggle'
import CodeToggleSCSS from '../../../components/codetoggle-scss'

const currentPageName = "Checkboxes";
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

        <h2 class="example-header no-margin--top">Custom Checkboxes <button class="button button--transparent button--copy-link" data-id="copyurl" id="Custom_Checkboxes"></button></h2>
    		<p>To use custom checkboxes, be sure to include your input <strong>before</strong> your label. Failing to do so will break styles.</p>
    		<div class="row example-container">
    		  <fieldset class="column column--third">
    		    <label>Checkboxes</label>
    		    <div class="checkbox--custom">
    		      <input type="checkbox" id="dashing-checkbox1--custom"/>
    		      <label for="dashing-checkbox1--custom">Option 1</label>
    		    </div>
    		    <div class="checkbox--custom">
    		      <input type="checkbox" id="dashing-checkbox2--custom"/>
    		      <label for="dashing-checkbox2--custom">Option 2</label>
    		    </div>
    		    <div class="checkbox--custom">
    		      <input type="checkbox" id="dashing-checkbox3--custom"/>
    		      <label for="dashing-checkbox3--custom">Option 3 is much longer and indents when it goes beyond one line</label>
    		    </div>
    		  </fieldset>

    		  <fieldset class="column column--full">
    		    <label>Disabled Checkbox</label>
    		    <div class="checkbox--custom">
    		      <input type="checkbox" id="dashing-checkbox--custom-disabled" disabled checked/>
    		      <label for="dashing-checkbox--custom-disabled">Disabled</label>
    		    </div>
    		    <div class="checkbox--custom">
    		      <input type="checkbox" id="dashing-checkbox--custom-disabled2" disabled/>
    		      <label for="dashing-checkbox--custom-disabled2">Disabled</label>
    		    </div>
    		  </fieldset>

    		  <fieldset class="column column--full has-error">
    		    <label>Checkboxes with Errors</label>
    		    <div class="checkbox--custom">
    		      <input type="checkbox" id="dashing-checkbox--error1"/>
    		      <label for="dashing-checkbox--error1">Option 1</label>
    		    </div>
    		    <div class="checkbox--custom">
    		      <input type="checkbox" id="dashing-checkbox--error2" />
    		      <label for="dashing-checkbox--error2">Option 2</label>
    		    </div>
    		    <div class="checkbox--custom">
    		      <input type="checkbox" id="dashing-checkbox--error3" />
    		      <label for="dashing-checkbox--error3">Option 3</label>
    		    </div>
    		  </fieldset>

    		  <fieldset class="column column--full has-warning">
    		    <label>Checkboxes with Warnings</label>
    		    <div class="checkbox--custom">
    		      <input type="checkbox" id="dashing-checkbox--warning1" />
    		      <label for="dashing-checkbox--warning1">Option 1</label>
    		    </div>
    		    <div class="checkbox--custom">
    		      <input type="checkbox" id="dashing-checkbox--warning2" />
    		      <label for="dashing-checkbox--warning2">Option 2</label>
    		    </div>
    		    <div class="checkbox--custom">
    		      <input type="checkbox" id="dashing-checkbox--warning3" />
    		      <label for="dashing-checkbox--warning3">Option 3</label>
    		    </div>
    		  </fieldset>

    		  <fieldset class="column column--full">
    		    <label>Inline Checkboxes</label>
    		    <div class="checkbox--custom inline">
    		      <input type="checkbox" id="dashing-checkbox--custom-inline1" />
    		      <label for="dashing-checkbox--custom-inline1">Option 1</label>
    		    </div>
    		    <div class="checkbox--custom inline">
    		      <input type="checkbox" id="dashing-checkbox--custom-inline2"/>
    		      <label for="dashing-checkbox--custom-inline2">Option 2</label>
    		    </div>
    		    <div class="checkbox--custom inline">
    		      <input type="checkbox" id="dashing-checkbox--custom-inline3"/>
    		      <label for="dashing-checkbox--custom-inline3">Option 3</label>
    		    </div>
    		  </fieldset>
    		</div>

        <CodeToggle>
{`<!-- Custom Checkboxes -->
<fieldset class="column column--third">
  <label>Checkboxes</label>
  <div class="checkbox--custom">
    <input type="checkbox" id="dashing-checkbox1--custom" checked/>
    <label for="dashing-checkbox1--custom">Option 1</label>
  </div>
  <div class="checkbox--custom">
    <input type="checkbox" id="dashing-checkbox2--custom"/>
    <label for="dashing-checkbox2--custom">Option 2</label>
  </div>
  <div class="checkbox--custom">
    <input type="checkbox" id="dashing-checkbox3--custom"/>
    <label for="dashing-checkbox3--custom">Option 3 is much longer and indents when it goes beyond one line</label>
  </div>
</fieldset>

<fieldset class="column column--full">
  <label>Disabled Checkbox</label>
  <div class="checkbox--custom">
    <input type="checkbox" id="dashing-checkbox--custom-disabled" disabled checked/>
    <label for="dashing-checkbox--custom-disabled">Disabled</label>
  </div>
  <div class="checkbox--custom">
    <input type="checkbox" id="dashing-checkbox--custom-disabled2" disabled/>
    <label for="dashing-checkbox--custom-disabled2">Disabled</label>
  </div>
</fieldset>

<!-- Add the class .has-error to the parent container to apply error styles -->
<fieldset class="column column--full has-error">
  <label>Checkboxes with Errors</label>
  <div class="checkbox--custom">
    <input type="checkbox" id="dashing-checkbox--error1" checked/>
    <label for="dashing-checkbox--error1">Option 1</label>
  </div>
  <div class="checkbox--custom">
    <input type="checkbox" id="dashing-checkbox--error2" />
    <label for="dashing-checkbox--error2">Option 2</label>
  </div>
  <div class="checkbox--custom">
    <input type="checkbox" id="dashing-checkbox--error3" />
    <label for="dashing-checkbox--error3">Option 3</label>
  </div>
</fieldset>

<!-- Add the class .has-warning to the parent container to apply warning styles -->
<fieldset class="column column--full has-warning">
  <label>Checkboxes with Warnings</label>
  <div class="checkbox--custom">
    <input type="checkbox" id="dashing-checkbox--warning1" checked/>
    <label for="dashing-checkbox--warning1">Option 1</label>
  </div>
  <div class="checkbox--custom">
    <input type="checkbox" id="dashing-checkbox--warning2" />
    <label for="dashing-checkbox--warning2">Option 2</label>
  </div>
  <div class="checkbox--custom">
    <input type="checkbox" id="dashing-checkbox--warning3" />
    <label for="dashing-checkbox--warning3">Option 3</label>
  </div>
</fieldset>

<!-- Add the class .inline to the .checkbox--custom element to list your checkboxes vertially -->
<fieldset class="column column--full">
  <label>Inline Checkboxes</label>
  <div class="checkbox--custom inline">
    <input type="checkbox" id="dashing-checkbox--custom-inline1" checked/>
    <label for="dashing-checkbox--custom-inline1">Option 1</label>
  </div>
  <div class="checkbox--custom inline">
    <input type="checkbox" id="dashing-checkbox--custom-inline2"/>
    <label for="dashing-checkbox--custom-inline2">Option 2</label>
  </div>
  <div class="checkbox--custom inline">
    <input type="checkbox" id="dashing-checkbox--custom-inline3"/>
    <label for="dashing-checkbox--custom-inline3">Option 3</label>
  </div>
</fieldset>`}
        </CodeToggle>
        <CodeToggleSCSS>
{`//Include these variables in your theme file to change the color of your checkbox
$checkbox--active: $blue !default; //Color of checkbox when checked
$checkbox--icon: $white !default; //Color of check icon when checked
$checkbox--focus: $blue-300 !default; //Color of border around checkbox when focused
$checkbox--disabled: $gray-150 !default; //Color of checkbox when checked and disabled
$checkbox--icon-disabled: $gray-500 !default; //Color of check icon when checked and disabled`}
        </CodeToggleSCSS>

        <h2 class="example-header">Default Checkbox Card <button class="button button--transparent button--copy-link" id="Default_Checkbox_Card"></button></h2>
    		<p>To use smaller checkbox cards apply the <code class="example-text">.checkbox-card--small</code> class to the <code class="example-text">.checkbox-card</code>.</p>
    		<div class="row example-container">
    		  <fieldset class="column column--full">
    		    <label>Checkbox Card</label>
    		    <div class="checkbox-card">
    		      <input type="checkbox" name="checkbox-inline" id="checkbox-inline1" />
    		      <label for="checkbox-inline1" class="card">Option 1</label>
    		    </div>
    		    <div class="checkbox-card">
    		      <input type="checkbox" name="checkbox-inline" id="checkbox-inline2" />
    		      <label for="checkbox-inline2" class="card">Option 2</label>
    		    </div>
    		    <div class="checkbox-card">
    		      <input type="checkbox" name="checkbox-inline" id="checkbox-inline3" disabled />
    		      <label for="checkbox-inline3" class="card disabled">Disabled</label>
    		    </div>
    		  </fieldset>
    		</div>

        <CodeToggle>
{`<fieldset class="column column--full">
  <label>Checkbox Card</label>
  <div class="checkbox-card">
    <input type="checkbox" name="checkbox-inline" id="checkbox-inline1" checked/>
    <label for="checkbox-inline1" class="card">Option 1</label>
  </div>
  <div class="checkbox-card">
    <input type="checkbox" name="checkbox-inline" id="checkbox-inline2" />
    <label for="checkbox-inline2" class="card">Option 2</label>
  </div>
  <div class="checkbox-card">
    <input type="checkbox" name="checkbox-inline" id="checkbox-inline3" disabled />
    <label for="checkbox-inline3" class="card disabled">Disabled</label>
  </div>
</fieldset>`}
        </CodeToggle>
        <CodeToggleSCSS>
{`//Include these variables in your theme file to change the color or padding of your checkbox button cards
$card-checkbox--active: $blue !default; //Color of checkbox and card when checked
$card-checkbox--focus: $blue-300 !default; //Color of border around card-checkbox when focused
$card-checkbox--padding: 1rem !default; //Padding of checkbox`}
        </CodeToggleSCSS>

        <h2 class="example-header">Small Checkbox Card <button class="button button--transparent button--copy-link" data-id="copyurl" id="Small_Checkbox_Card"></button></h2>
    		<p>To use smaller checkbox cards apply the <code class="example-text">.checkbox-card--small</code> class to the <code class="example-text">.checkbox-card</code>.</p>
    		<div class="row example-container">
    			<fieldset class="column column--full">
    				<label>Small Checkbox Card</label>
    				<div class="checkbox-card checkbox-card--small">
    					<input type="checkbox" name="checkbox-small" id="checkbox-small1" />
    					<label for="checkbox-small1" class="card">Option 1</label>
    				</div>
    				<div class="checkbox-card checkbox-card--small">
    					<input type="checkbox" name="checkbox-small" id="checkbox-small2" />
    					<label for="checkbox-small2" class="card">Option 2</label>
    				</div>
    				<div class="checkbox-card checkbox-card--small">
    					<input type="checkbox" name="checkbox-small" id="checkbox-small3" disabled />
    					<label for="checkbox-small3" class="card disabled">Disabled</label>
    				</div>
    			</fieldset>
    		</div>

        <CodeToggle>
{`<fieldset class="column column--full">
  <label>Small Checkbox Card</label>
  <div class="checkbox-card checkbox-card--small">
    <input type="checkbox" name="checkbox-small" id="checkbox-small1" checked/>
    <label for="checkbox-small1" class="card">Option 1</label>
  </div>
  <div class="checkbox-card checkbox-card--small">
    <input type="checkbox" name="checkbox-small" id="checkbox-small2" />
    <label for="checkbox-small2" class="card">Option 2</label>
  </div>
  <div class="checkbox-card checkbox-card--small">
    <input type="checkbox" name="checkbox-small" id="checkbox-small3" disabled />
    <label for="checkbox-small3" class="card disabled">Disabled</label>
  </div>
</fieldset>`}
        </CodeToggle>

        <h2 class="example-header">Block Checkbox Card <button class="button button--transparent button--copy-link" data-id="copyurl" id="Block_Checkbox_Card"></button></h2>
    		<p>To use block style checkbox cards apply the <code class="example-text">.is-block</code> class to the <code class="example-text">.checkbox-card</code>.</p>
    		<div class="row example-container">
    		  <fieldset class="column column--half">
    		    <label>Block Checkbox Card</label>
    		    <div class="checkbox-card is-block">
    		      <input type="checkbox" name="checkbox-block" id="checkbox-block1" />
    		      <label for="checkbox-block1" class="card">Option 1</label>
    		    </div>
    		    <div class="checkbox-card is-block">
    		      <input type="checkbox" name="checkbox-block" id="checkbox-block2" />
    		      <label for="checkbox-block2" class="card">Option 2</label>
    		    </div>
    		    <div class="checkbox-card is-block">
    		      <input type="checkbox" name="checkbox-block" id="checkbox-block3" disabled />
    		      <label for="checkbox-block3" class="card disabled">Disabled</label>
    		    </div>
    		  </fieldset>
    		</div>

        <CodeToggle>
{`<fieldset class="column column--half">
  <label>Block Checkbox Card</label>
  <div class="checkbox-card is-block">
    <input type="checkbox" name="checkbox-block" id="checkbox-block1" checked/>
    <label for="checkbox-block1" class="card">Option 1</label>
  </div>
  <div class="checkbox-card is-block">
    <input type="checkbox" name="checkbox-block" id="checkbox-block2" />
    <label for="checkbox-block2" class="card">Option 2</label>
  </div>
  <div class="checkbox-card is-block">
    <input type="checkbox" name="checkbox-block" id="checkbox-block3" disabled />
    <label for="checkbox-block3" class="card disabled">Disabled</label>
  </div>
</fieldset>`}
        </CodeToggle>

      </div>
    </div>
    </AppContent>
  </Layout>
)
