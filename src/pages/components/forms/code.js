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
		<div className="grid grid-padding">

      <h2>Forms <button className="button button--transparent button--copy-link" data-id="copyurl" id="Forms" /></h2>
      <div className="example-container">
        <div className="card">
          <div className="card-content">
            <fieldset>
              <label htmlFor="form-text">Text Input</label>
              <input type="text" id="form-text"/>
            </fieldset>

            <fieldset>
              <label htmlFor="form-text-disabled">Text Input disabled</label>
              <input type="text" id="form-text-disabled" value="This input is disabled" disabled />
            </fieldset>

            <fieldset>
              <label htmlFor="form-textarea">Textarea</label>
              <textarea id="form-textarea"></textarea>
            </fieldset>
          </div>
        </div>
        <CodeToggle>
{`<!-- Default Input -->
<div class="card">
<div class="card-content">
  <fieldset>
    <label for="form-text">Text Input</label>
    <input type="text" id="form-text"/>
  </fieldset>

  <fieldset>
    <label for="form-text-disabled">Text Input disabled</label>
    <input type="text" id="form-text-disabled" value="This input is disabled" disabled />
  </fieldset>

  <fieldset>
    <label for="form-textarea">Textarea</label>
    <textarea id="form-textarea"></textarea>
  </fieldset>
</div>
</div>`}
        </CodeToggle>
      </div>

      <h2 className="mt-space-xl">Select Menu <button className="button button--transparent button--copy-link" data-id="copyurl" id="Forms" /></h2>
      <p>To add the drop-down icon, add the <code className="example-text">.select--has-icon</code> class to the parent container. Ensure you also have the dashing-icon font library properly installed.</p>
      <div className="example-container">
        <div className="card">
          <div className="card-content">
            <fieldset className="select--has-icon">
              <label htmlFor="form-add-on-menu">Select Menu</label>
              <select id="form-add-on-menu">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </fieldset>
          </div>
        </div>
        <CodeToggle>
{`<!-- Select Element with custom icon -->
<div card="card">
<div card="card-content">
  <fieldset class="select--has-icon">
    <label for="form-add-on-menu">Select Menu</label>
    <select id="form-add-on-menu">
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </select>
  </fieldset>
</div>
</div>`}
        </CodeToggle>
      </div>

      <h2 className="mt-space-xl">Input Groups <button className="button button--transparent button--copy-link" data-id="copyurl" id="Input_Addon" /></h2>
      <div className="example-container">
        <div className="card">
          <div className="card-content flex-content">
            <div className="flex-row">
              <fieldset className="select--has-icon">
                <label htmlFor="form-input-group">Input Group</label>
                <div className="input--add-on">
                  <input type="text" className="add-on--before" id="form-input-group" placeholder="e.g. (481) 516-2342"/>
                  <select type="text" className="add-on--after">
                    <option>Home</option>
                    <option>Mobile</option>
                    <option>Work</option>
                  </select>
                </div>
              </fieldset>
            </div>
            <div className="flex-row">
              <fieldset>
                <label htmlFor="form-input-action1">Add-on button</label>
                <div className="input--add-on">
                  <input type="text" className="add-on--before" id="form-input-action1"/>
                  <input type="submit" className="button button--green add-on--after" value="Submit" />
                </div>
              </fieldset>
              <fieldset>
                <label htmlFor="form-input-action4">Add-on border icon</label>
                <div className="input--add-on">
                  <input type="text" className="add-on--before" id="form-input-action4"/>
                  <button className="button--icon button--border add-on--after">
                    <i className="dashing-icon dashing-icon--search"></i>
                  </button>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
        <CodeToggle>

{`<!-- This is an example of an add-on -->
<div class="card">
<div class="card-content flex-content">
  <div class="flex-row">
    <fieldset class="select--has-icon">
      <label for="form-input-group">Input Group</label>
      <div class="input--add-on">
        <input type="text" class="add-on--before" id="form-input-group" placeholder="e.g. (481) 516-2342"/>
        <select type="text" class="add-on--after">
          <option>Home</option>
          <option>Mobile</option>
          <option>Work</option>
        </select>
      </div>
    </fieldset>
  </div>
  <div class="flex-row">
    <fieldset>
      <label for="form-input-action1">Add-on button</label>
      <div class="input--add-on">
        <input type="text" class="add-on--before" id="form-input-action1"/>
        <input type="submit" class="button button--green add-on--after" value="Submit" />
      </div>
    </fieldset>
    <fieldset>
      <label for="form-input-action4">Add-on border icon</label>
      <div class="input--add-on">
        <input type="text" class="add-on--before" id="form-input-action4"/>
        <button class="button--icon button--border add-on--after">
          <i class="dashing-icon dashing-icon--search"></i>
        </button>
      </div>
    </fieldset>
  </div>
</div>
</div>`}
        </CodeToggle>
      </div>

      <h2 className="mt-space-xl">Input Message States <button className="button button--transparent button--copy-link" data-id="copyurl" id="Input_Message_States" /></h2>
      <div className="example-container">
        <div className="card">
          <div className="card-content">
            <fieldset>
              <label htmlFor="dashing-text-message">Dashing Text Input with message</label>
              <input type="text" id="dashing-text-message"/>
              <div className="message">Default messages can be used to give additional information about an input.</div>
            </fieldset>

            <fieldset className="has-error">
              <label htmlFor="dashing-text-error">Dashing Text Input with error</label>
              <input type="text" id="dashing-text-error"/>
              <div className="message">Error messages are used to explain system failures or user errors.</div>
            </fieldset>

            <fieldset className="has-warning">
              <label htmlFor="dashing-text-warning">Dashing Text Input with warning</label>
              <input type="text" id="dashing-text-warning"/>
              <div className="message">Use warnings to convey important messages to your user.</div>
            </fieldset>
          </div>
        </div>

      <CodeToggle>
{`<!-- Default Message -->
<div class="card">
<div class="card-content">
  <fieldset>
    <label for="dashing-text-message">Dashing Text Input with message</label>
    <input type="text" id="dashing-text-message"/>
    <div class="message">Default messages can be used to give additional information about an input.</div>
  </fieldset>

  <fieldset class="has-error">
    <label for="dashing-text-error">Dashing Text Input with error</label>
    <input type="text" id="dashing-text-error"/>
    <div class="message">Error messages are used to explain system failures or user errors.</div>
  </fieldset>

  <fieldset class="has-warning">
    <label for="dashing-text-warning">Dashing Text Input with warning</label>
    <input type="text" id="dashing-text-warning"/>
    <div class="message">Use warnings to convey important messages to your user.</div>
  </fieldset>
</div>
</div>`}
          </CodeToggle>
        </div>

        <h2 className="mt-space-xl">Other Supported Input Types <button className="button button--transparent button--copy-link" data-id="copyurl" id="Other_Supported_Types" /></h2>
        <div className="example-container">
          <div className="card">
            <div className="card-content">
              <fieldset>
                <label htmlFor="dashing-date">Dashing Date</label>
                <input type="date" id="dashing-date"/>
              </fieldset>

              <fieldset>
                <label htmlFor="dashing-time">Dashing Time</label>
                <input type="time" id="dashing-time"/>
              </fieldset>

              <fieldset>
                <label htmlFor="dashing-month">Dashing Month</label>
                <input type="month" id="dashing-month"/>
              </fieldset>

              <fieldset>
                <label htmlFor="dashing-email">Dashing Email</label>
                <input type="email" id="dashing-email" placeholder="e.g. ryan@fitzinator.com"/>
              </fieldset>

              <fieldset>
                <label htmlFor="dashing-password">Dashing Password</label>
                <input type="password" id="dashing-password"/>
              </fieldset>

              <fieldset>
                <label htmlFor="dashing-number">Dashing Number</label>
                <input type="number" id="dashing-number"/>
              </fieldset>

              <fieldset>
                <label htmlFor="dashing-tel">Dashing Tel</label>
                <input type="tel" id="dashing-tel"/>
              </fieldset>

              <fieldset>
                <label htmlFor="dashing-file">Dashing File</label>
                <input type="file" id="dashing-file"/>
              </fieldset>
            </div>
          </div>
          <CodeToggle>
{`<div class="card">
<div class="card-content">
  <fieldset>
    <label for="dashing-date">Dashing Date</label>
    <input type="date" id="dashing-date"/>
  </fieldset>

  <fieldset>
    <label for="dashing-time">Dashing Time</label>
    <input type="time" id="dashing-time"/>
  </fieldset>

  <fieldset>
    <label for="dashing-month">Dashing Month</label>
    <input type="month" id="dashing-month"/>
  </fieldset>

  <fieldset>
    <label for="dashing-email">Dashing Email</label>
    <input type="email" id="dashing-email" placeholder="e.g. ryan@fitzinator.com"/>
  </fieldset>

  <fieldset>
    <label for="dashing-password">Dashing Password</label>
    <input type="password" id="dashing-password"/>
  </fieldset>

  <fieldset>
    <label for="dashing-number">Dashing Number</label>
    <input type="number" id="dashing-number"/>
  </fieldset>

  <fieldset>
    <label for="dashing-tel">Dashing Tel</label>
    <input type="tel" id="dashing-tel"/>
  </fieldset>

  <fieldset>
    <label for="dashing-file">Dashing File</label>
    <input type="file" id="dashing-file"/>
  </fieldset>
</div>
</div>`}
          </CodeToggle>
        </div>

        <h2 className="mt-space-xl">Custom Range Slider <button className="button button--transparent button--copy-link" data-id="copyurl" id="Custom_Range_Slider" /></h2>
        <p className="text-color--red">Not supported in Internet Explorer</p>
        <div className="example-container">
          <div className="card">
            <div className="card-content">
              <fieldset className="range--custom">
                <label htmlFor="dashing-range">Dashing Range</label>
                <input type="range" id="dashing-range"/>
              </fieldset>
            </div>
          </div>

          <CodeToggle>
{`<!-- Custom Range Slider -->
<fieldset class="range--custom">
<label for="dashing-range">Dashing Range</label>
<input type="range" id="dashing-range"/>
</fieldset>`}
          </CodeToggle>
        </div>

        <h2 className="mt-space-xl">Form Example <button className="button button--transparent button--copy-link" data-id="copyurl" id="Custom_Range_Slider" /></h2>
        <div className="example-container">
          <div className="card">
            <div className="card-header has-border">
              <h2 className="no-margin">Card Header</h2>
            </div>

            <div className="card-content flex-content">
              <div className="flex-row">
                <fieldset>
                  <label htmlFor="form-text">Text Input</label>
                  <input type="text" id="form-text"/>
                </fieldset>
                <fieldset>
                  <label htmlFor="form-text2">Text Input</label>
                  <input type="text" id="form-text2"/>
                </fieldset>
              </div>
              <div className="flex-row">
                <fieldset>
                  <label htmlFor="form-date">Date Input</label>
                  <input type="date" id="form-date"/>
                </fieldset>
                <fieldset className="select--has-icon">
                  <label htmlfor="form-select">Select</label>
                  <select id="form-select">
                    <option>Option 1</option>
                    <option>Option 2</option>
                  </select>
                </fieldset>
                <fieldset className="spacer"></fieldset>
              </div>
              <div className="flex-row">
                <fieldset>
                  <label htmlFor="form-textarea">Textarea</label>
                  <textarea id="form-textarea"></textarea>
                </fieldset>
              </div>
            </div>
            <div className="card-footer">
              <button className="mr-space-xs">Submit</button>
              <button className="button--transparent button--gray">Cancel</button>
            </div>
          </div>
          <CodeToggle>
{`<!-- Custom Range Slider -->
<div class="card">
<div class="card-header has-border">
  <h2 class="no-margin">Card Header</h2>
</div>

<div class="card-content flex-content">
  <div class="flex-row">
    <fieldset>
      <label for="form-text">Text Input</label>
      <input type="text" id="form-text"/>
    </fieldset>
    <fieldset>
      <label for="form-text2">Text Input</label>
      <input type="text" id="form-text2"/>
    </fieldset>
  </div>
  <div class="flex-row">
    <fieldset>
      <label for="form-date">Date Input</label>
      <input type="date" id="form-date"/>
    </fieldset>
    <fieldset class="select--has-icon">
      <label for="form-select">Select</label>
      <select id="form-select">
        <option>Option 1</option>
        <option>Option 2</option>
      </select>
    </fieldset>
    <fieldset class="spacer"></fieldset>
  </div>
  <div class="flex-row">
    <fieldset>
      <label for="form-textarea">Textarea</label>
      <textarea id="form-textarea"></textarea>
    </fieldset>
  </div>
</div>
<div class="card-footer">
  <button class="mr-space-xs">Submit</button>
  <button class="button--transparent button--gray">Cancel</button>
</div>
</div>`}
          </CodeToggle>
        </div>

    </div>
    </AppContent>
  </Layout>
)
