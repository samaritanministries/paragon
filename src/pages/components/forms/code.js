import React from 'react'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'
import CodeToggle from '../../../components/codetoggle'

const currentPageName = "Forms";
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
          <h2 className="example-header no-margin--top">Forms <button className="button button--transparent button--copy-link" data-id="copyurl" id="Forms" /></h2>
          <div className="row example-container">
            <fieldset className="column column--full">
              <label htmlFor="dashing-text">Dashing Text Input</label>
              <input type="text" id="dashing-text"/>
            </fieldset>

            <fieldset className="column column--full">
              <label htmlFor="dashing-text-disabled">Dashing Text Input disabled</label>
              <input type="text" id="dashing-text-disabled" value="This input is disabled" disabled />
            </fieldset>

            <fieldset className="column column--full">
              <label htmlFor="dashing-textarea">Dashing Textarea</label>
              <textarea id="dashing-textarea"></textarea>
            </fieldset>
          </div>
          <CodeToggle>
{`<!-- Default Input -->
<fieldset class="column column--full">
  <label for="dashing-text">Dashing Text Input</label>
  <input type="text" id="dashing-text"/>
</fieldset>

<!-- Disabled Input -->
<fieldset class="column column--full">
  <label for="dashing-text-disabled">Dashing Text Input disabled</label>
  <input type="text" id="dashing-text-disabled" value="This input is disabled" disabled />
</fieldset>

<fieldset class="column column--full">
  <label for="dashing-textarea">Dashing Textarea</label>
  <textarea id="dashing-textarea"></textarea>
</fieldset>`}
          </CodeToggle>

          <h2 className="example-header">Select Menu <button className="button button--transparent button--copy-link" data-id="copyurl" id="Select_Menu" /></h2>
          <p>To add the drop-down icon, add the <code className="example-text">.select--has-icon</code> class to the parent container. Ensure you also have the dashing-icon font library properly installed.</p>
          <div className="row example-container">
            <fieldset className="column column--full select--has-icon">
              <label htmlFor="dashing-menu">Dashing Select Menu</label>
              <select id="dashing-menu">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </fieldset>
          </div>
          <CodeToggle>
{`<!-- Select Element with custom icon -->
<fieldset class="column column--full select--has-icon">
  <label for="dashing-menu">Dashing Select Menu</label>
  <select id="dashing-menu">
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
</fieldset>`}
          </CodeToggle>

          <h2 className="example-header">Input Group <button className="button button--transparent button--copy-link" data-id="copyurl" id="Input_Group"/></h2>
          <p>NOTE: Due to the way the <code className="example-text">.select--has-icon</code> class works, a select menu can only be placed on the right side of the <code className="example-text">input</code>.</p>
          <div className="row example-container">
            <fieldset className="column column--full select--has-icon">
              <label htmlFor="dashing-input-group1">Input Group</label>
              <div className="input--add-on">
                <input type="text" className="add-on--before" id="dashing-input-group1" placeholder="e.g. (481) 516-2342"/>
                <select type="text" className="add-on--after">
                  <option>Home</option>
                  <option>Mobile</option>
                  <option>Work</option>
                </select>
              </div>
            </fieldset>
          </div>
          <CodeToggle>
{`<!-- Select Element with custom icon -->
<fieldset class="column column--full select--has-icon">
  <label for="dashing-input-group1">Input Group</label>
  <div class="input--add-on">
    <input type="text" class="add-on--before" id="dashing-input-group1" placeholder="e.g. (481) 516-2342"/>
    <select type="text" class="add-on--after">
      <option>Home</option>
      <option>Mobile</option>
      <option>Work</option>
    </select>
  </div>
</fieldset>`}
          </CodeToggle>

          <h2 className="example-header">Input Add-on <button className="button button--transparent button--copy-link" data-id="copyurl" id="Input_Addon" /></h2>
          <p>NOTE: There is a Chrome bug that prevents this from working when applied to <code className="example-text">fieldset</code>. Ensure your <code className="example-text">.input--add-on</code> class is applied to a <code className="example-text">div</code>.</p>
          <p><strong>This is not supported on Internet Explorer</strong></p>
          <div className="row example-container">
            <fieldset className="column column--half">
              <label htmlFor="dashing-input-action1">Add-on button</label>
              <div className="input--add-on">
                <input type="text" className="add-on--field" id="dashing-input-action1"/>
                <input type="submit" className="button button--green add-on--button" value="Submit" />
              </div>
            </fieldset>
            <fieldset className="column column--half">
              <label htmlFor="dashing-input-action2">Add-on icon</label>
              <div className="input--add-on">
                <input type="text" className="add-on--field" id="dashing-input-action2"/>
                <button className="button--icon add-on--button">
                  <i className="dashing-icon dashing-icon--calendar"></i>
                </button>
              </div>
            </fieldset>
            <fieldset className="column column--half">
              <label htmlFor="dashing-input-action3">Add-on button</label>
              <div className="input--add-on">
                <input type="text" className="add-on--field" id="dashing-input-action3"/>
                <button className="button--icon button--gray add-on--button">
                  Search
                </button>
              </div>
            </fieldset>
            <fieldset className="column column--half">
              <label htmlFor="dashing-input-action4">Add-on border icon</label>
              <div className="input--add-on">
                <input type="text" className="add-on--field" id="dashing-input-action4"/>
                <button className="button--icon button--border add-on--button">
                  <i className="dashing-icon dashing-icon--search"></i>
                </button>
              </div>
            </fieldset>
          </div>
          <CodeToggle>
{`<!-- This is an example of an add-on -->
<fieldset class="column column--half">
  <label for="dashing-input-action1">Add-on button</label>
  <div class="input--add-on">
    <input type="text" class="add-on--field" id="dashing-input-action1"/>
    <input type="submit" class="button button--green add-on--button" value="Submit">
  </div>
</fieldset>

<!-- This is an example of an add-on with an icon -->
<fieldset class="column column--half">
  <label for="dashing-input-action2">Add-on icon</label>
  <div class="input--add-on">
    <input type="text" class="add-on--field" id="dashing-input-action2"/>
    <button class="button--icon add-on--button">
      <i class="dashing-icon dashing-icon--calendar"></i>
    </button>
  </div>
</fieldset>

<!-- This is an example of an add-on -->
<fieldset class="column column--half">
  <label for="dashing-input-action3">Add-on button</label>
  <div class="input--add-on">
    <input type="text" class="add-on--field" id="dashing-input-action3"/>
    <button class="button--icon button--gray add-on--button">
      Search
    </button>
  </div>
</fieldset>

<!-- This is an example of a bordered add-on with an icon -->
<fieldset class="column column--half">
  <label for="dashing-input-action4">Add-on border icon</label>
  <div class="input--add-on">
    <input type="text" class="add-on--field" id="dashing-input-action4"/>
    <button class="button--icon button--border add-on--button">
      <i class="dashing-icon dashing-icon--search"></i>
    </button>
  </div>
</fieldset>`}
          </CodeToggle>

          <h2 className="example-header">Input Message States <button className="button button--transparent button--copy-link" data-id="copyurl" id="Input_Message_States" /></h2>
          <div className="row example-container">
            <fieldset className="column column--full">
              <label htmlFor="dashing-text-message">Dashing Text Input with message</label>
              <input type="text" id="dashing-text-message"/>
              <ul className="message">
                <li>This is a message.</li>
                <li>Default messages can be used to give additional information about an input.</li>
              </ul>
            </fieldset>

            <fieldset className="column column--full has-error">
              <label htmlFor="dashing-text-error">Dashing Text Input with error</label>
              <input type="text" id="dashing-text-error"/>
              <ul className="message">
                <li>This is an error.</li>
                <li>Error messages are used to explain system failures or user errors.</li>
              </ul>
            </fieldset>

            <fieldset className="column column--full has-warning">
              <label htmlFor="dashing-text-warning">Dashing Text Input with warning</label>
              <input type="text" id="dashing-text-warning"/>
              <ul className="message">
                <li>This is a warning.</li>
                <li>Use warnings to convey important messages to your user.</li>
              </ul>
            </fieldset>
          </div>
          <CodeToggle>
{`<!-- Default Message -->
<fieldset class="column column--full">
  <label for="dashing-text-message">Dashing Text Input with message</label>
  <input type="text" id="dashing-text-message"/>
  <ul class="message">
    <li>This is a message.</li>
    <li>Default messages can be used to give additional information about an input.</li>
  </ul>
</fieldset>

<!-- Error Message -->
<fieldset class="column column--full has-error">
  <label for="dashing-text-error">Dashing Text Input with error</label>
  <input type="text" id="dashing-text-error"/>
  <ul class="message">
    <li>This is an error.</li>
    <li>Error messages are used to explain system failures or user errors.</li>
  </ul>
</fieldset>

<!-- Warning Message -->
<fieldset class="column column--full has-warning">
  <label for="dashing-text-warning">Dashing Text Input with warning</label>
  <input type="text" id="dashing-text-warning"/>
  <ul class="message">
    <li>This is a warning.</li>
    <li>Use warnings to convey important messages to your user.</li>
  </ul>
</fieldset>`}
          </CodeToggle>

          <h2 className="example-header">Other Supported Input Types <button className="button button--transparent button--copy-link" data-id="copyurl" id="Other_Supported_Types" /></h2>
          <div className="row example-container">
            <fieldset className="column column--full">
              <label htmlFor="dashing-date">Dashing Date</label>
              <input type="date" id="dashing-date"/>
            </fieldset>

            <fieldset className="column column--full">
              <label htmlFor="dashing-time">Dashing Time</label>
              <input type="time" id="dashing-time"/>
            </fieldset>

            <fieldset className="column column--full">
              <label htmlFor="dashing-month">Dashing Month</label>
              <input type="month" id="dashing-month"/>
            </fieldset>

            <fieldset className="column column--full">
              <label htmlFor="dashing-email">Dashing Email</label>
              <input type="email" id="dashing-email" placeholder="e.g. ryan@fitzinator.com"/>
            </fieldset>

            <fieldset className="column column--full">
              <label htmlFor="dashing-password">Dashing Password</label>
              <input type="password" id="dashing-password"/>
            </fieldset>

            <fieldset className="column column--full">
              <label htmlFor="dashing-number">Dashing Number</label>
              <input type="number" id="dashing-number"/>
            </fieldset>

            <fieldset className="column column--full">
              <label htmlFor="dashing-tel">Dashing Tel</label>
              <input type="tel" id="dashing-tel"/>
            </fieldset>

            <fieldset className="column column--full">
              <label htmlFor="dashing-file">Dashing File</label>
              <input type="file" id="dashing-file"/>
            </fieldset>
          </div>
          <CodeToggle>
{`<fieldset class="column column--full">
  <label for="dashing-date">Dashing Date</label>
  <input type="date" id="dashing-date"/>
</fieldset>

<fieldset class="column column--full">
  <label for="dashing-time">Dashing Time</label>
  <input type="time" id="dashing-time"/>
</fieldset>

<fieldset class="column column--full">
  <label for="dashing-month">Dashing Month</label>
  <input type="month" id="dashing-month"/>
</fieldset>

<fieldset class="column column--full">
  <label for="dashing-email">Dashing Email</label>
  <input type="email" id="dashing-email" placeholder="e.g. ryan@fitzinator.com"/>
</fieldset>

<fieldset class="column column--full">
  <label for="dashing-password">Dashing Password</label>
  <input type="password" id="dashing-password"/>
</fieldset>

<fieldset class="column column--full">
  <label for="dashing-number">Dashing Number</label>
  <input type="number" id="dashing-number"/>
</fieldset>

<fieldset class="column column--full">
  <label for="dashing-tel">Dashing Tel</label>
  <input type="tel" id="dashing-tel"/>
</fieldset>

<fieldset class="column column--full">
  <label for="dashing-file">Dashing File</label>
  <input type="file" id="dashing-file"/>
</fieldset>`}
          </CodeToggle>

          <h2 className="example-header">Custom Range Slider <button className="button button--transparent button--copy-link" data-id="copyurl" id="Custom_Range_Slider" /></h2>
          <div className="row example-container">
            <fieldset className="column column--full range--custom">
              <label htmlFor="dashing-range">Dashing Range</label>
              <input type="range" id="dashing-range"/>
            </fieldset>
          </div>
          <CodeToggle>
{`<!-- Custom Range Slider -->
<fieldset class="column column--full range--custom">
  <label for="dashing-range">Dashing Range</label>
  <input type="range" id="dashing-range"/>
</fieldset>`}
          </CodeToggle>

        </div>
      </div>
    </AppContent>
  </Layout>
)
