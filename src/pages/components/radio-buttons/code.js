import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'
import CodeToggle from '../../../components/codetoggle'
import CodeToggleSCSS from '../../../components/codetoggle-scss'

const currentPageName = "Radio Buttons";
const currentPageNameLower = currentPageName.toLowerCase();

class RadioButtonsCode extends React.Component {
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

        <p className="intro">Radio buttons are used to allow for exactly one choice in a short list of two or more options. Selecting one option will deselect any previously selected option.</p>
        <h2 id="RadioButtonStyles">Styles
          <Link to={location.pathname + "/#RadioButtonStyles"} className="button button--transparent button--copy-link"></Link>
        </h2>
        <p>To make a radio button flow inline, apply the <code className="example-text">.inline</code> class to each <code className="example-text">radio-custom</code> element</p>
        <div className="example-container">
          <div className="card">
            <div className="card-content">
              <fieldset>
                <label>Radio Buttons</label>
                <div className="radio--custom">
                  <input type="radio" name="radio" id="radio1" defaultChecked={true}/>
                  <label htmlFor="radio1">Option 1</label>
                </div>
                <div className="radio--custom">
                  <input type="radio" name="radio" id="radio2"/>
                  <label htmlFor="radio2">Option 2</label>
                </div>
                <div className="radio--custom">
                  <input type="radio" name="radio" id="radio3"/>
                  <label htmlFor="radio3">Option 3</label>
                </div>
              </fieldset>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <fieldset>
                <label>Inline Radio Buttons</label>
                <div className="radio--custom inline">
                  <input type="radio" name="inline-radio" id="inline-radio1" defaultChecked={true}/>
                  <label htmlFor="inline-radio1">Option 1</label>
                </div>
                <div className="radio--custom inline">
                  <input type="radio" name="inline-radio" id="inline-radio2"/>
                  <label htmlFor="inline-radio2">Option 2</label>
                </div>
                <div className="radio--custom inline">
                  <input type="radio" name="inline-radio" id="inline-radio3"/>
                  <label htmlFor="inline-radio3">Option 3</label>
                </div>
              </fieldset>
            </div>
          </div>
          <CodeToggle>
{`<!-- Default -->
<fieldset>
  <label>Radio Buttons</label>
  <div class="radio--custom">
    <input type="radio" name="radio" id="radio1" checked/>
    <label for="radio1">Option 1</label>
  </div>
  <div class="radio--custom">
    <input type="radio" name="radio" id="radio2"/>
    <label for="radio2">Option 2</label>
  </div>
  <div class="radio--custom">
    <input type="radio" name="radio" id="radio3"/>
    <label for="radio3">Option 3</label>
  </div>
</fieldset>

<!-- Inline -->
<fieldset>
  <label>Inline Radio Buttons</label>
  <div class="radio--custom inline">
    <input type="radio" name="inline-radio" id="inline-radio1" checked/>
    <label for="inline-radio1">Option 1</label>
  </div>
  <div class="radio--custom inline">
    <input type="radio" name="inline-radio" id="inline-radio2"/>
    <label for="inline-radio2">Option 2</label>
  </div>
  <div class="radio--custom inline">
    <input type="radio" name="inline-radio" id="inline-radio3"/>
    <label for="inline-radio3">Option 3</label>
  </div>
</fieldset>`}
          </CodeToggle>
        </div>

        <h2 className="mt-space-xl" id="RadioButtonStates">States
          <Link to={location.pathname + "/#RadioButtonStates"} className="button button--transparent button--copy-link"></Link>
        </h2>
        <div className="example-container">
          <div className="card">
            <div className="card-content">
              <fieldset>
                <label>Default Radio Buttons</label>
                <div className="radio--custom">
                  <input type="radio" name="default-radio" id="default-radio1" defaultChecked={true}/>
                  <label htmlFor="default-radio1">Option 1</label>
                </div>
                <div className="radio--custom">
                  <input type="radio" name="default-radio" id="default-radio2"/>
                  <label htmlFor="default-radio2">Option 2</label>
                </div>
                <div className="radio--custom">
                  <input type="radio" name="default-radio" id="default-radio3"/>
                  <label htmlFor="default-radio3">Option 3</label>
                </div>
              </fieldset>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <fieldset>
                <label>Disabled Radio Buttons</label>
                <div className="radio--custom">
                  <input type="radio" name="disabled-radio" id="disabled-radio1" disabled defaultChecked={true}/>
                  <label htmlFor="disabled-radio1">Option 1</label>
                </div>
                <div className="radio--custom">
                  <input type="radio" name="disabled-radio" id="disabled-radio2" disabled/>
                  <label htmlFor="disabled-radio2">Option 2</label>
                </div>
                <div className="radio--custom">
                  <input type="radio" name="disabled-radio" id="disabled-radio3" disabled/>
                  <label htmlFor="disabled-radio3">Option 3</label>
                </div>
              </fieldset>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <fieldset className="has-error">
                <label>Error Radio Buttons</label>
                <div className="radio--custom">
                  <input type="radio" name="error-radio" id="error-radio1" defaultChecked={true}/>
                  <label htmlFor="error-radio1">Option 1</label>
                </div>
                <div className="radio--custom">
                  <input type="radio" name="error-radio" id="error-radio2"/>
                  <label htmlFor="error-radio2">Option 2</label>
                </div>
                <div className="radio--custom">
                  <input type="radio" name="error-radio" id="error-radio3"/>
                  <label htmlFor="error-radio3">Option 3</label>
                </div>
              </fieldset>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <fieldset className="has-warning">
                <label>Warning Radio Buttons</label>
                <div className="radio--custom">
                  <input type="radio" name="warning-radio" id="warning-radio1" defaultChecked={true}/>
                  <label htmlFor="warning-radio1">Option 1</label>
                </div>
                <div className="radio--custom">
                  <input type="radio" name="warning-radio" id="warning-radio2"/>
                  <label htmlFor="warning-radio2">Option 2</label>
                </div>
                <div className="radio--custom">
                  <input type="radio" name="warning-radio" id="warning-radio3"/>
                  <label htmlFor="warning-radio3">Option 3</label>
                </div>
              </fieldset>
            </div>
          </div>
          <CodeToggle>
{`<!-- Default -->
<fieldset>
  <label>Default Radio Buttons</label>
  <div class="radio--custom">
    <input type="radio" name="default-radio" id="default-radio1" checked/>
    <label for="default-radio1">Option 1</label>
  </div>
  <div class="radio--custom">
    <input type="radio" name="default-radio" id="default-radio2"/>
    <label for="default-radio2">Option 2</label>
  </div>
  <div class="radio--custom">
    <input type="radio" name="default-radio" id="default-radio3"/>
    <label for="default-radio3">Option 3</label>
  </div>
</fieldset>

<!-- Disabled -->
<fieldset>
  <label>Disabled Radio Buttons</label>
  <div class="radio--custom">
    <input type="radio" name="disabled-radio" id="disabled-radio1" disabled checked/>
    <label for="disabled-radio1">Option 1</label>
  </div>
  <div class="radio--custom">
    <input type="radio" name="disabled-radio" id="disabled-radio2" disabled/>
    <label for="disabled-radio2">Option 2</label>
  </div>
  <div class="radio--custom">
    <input type="radio" name="disabled-radio" id="disabled-radio3" disabled/>
    <label for="disabled-radio3">Option 3</label>
  </div>
</fieldset>

<!-- Error -->
<fieldset class="has-error">
  <label>Error Radio Buttons</label>
  <div class="radio--custom">
    <input type="radio" name="error-radio" id="error-radio1" checked/>
    <label for="error-radio1">Option 1</label>
  </div>
  <div class="radio--custom">
    <input type="radio" name="error-radio" id="error-radio2"/>
    <label for="error-radio2">Option 2</label>
  </div>
  <div class="radio--custom">
    <input type="radio" name="error-radio" id="error-radio3"/>
    <label for="error-radio3">Option 3</label>
  </div>
</fieldset>

<!-- Warning -->
<fieldset class="has-warning">
  <label>Warning Radio Buttons</label>
  <div class="radio--custom">
    <input type="radio" name="warning-radio" id="warning-radio1" checked/>
    <label for="warning-radio1">Option 1</label>
  </div>
  <div class="radio--custom">
    <input type="radio" name="warning-radio" id="warning-radio2"/>
    <label for="warning-radio2">Option 2</label>
  </div>
  <div class="radio--custom">
    <input type="radio" name="warning-radio" id="warning-radio3"/>
    <label for="warning-radio3">Option 3</label>
  </div>
</fieldset>`}
          </CodeToggle>
        </div>

        <h1 className="mt-space-xl">Radio Card</h1>
        <h2 className="mt-space-xl" id="RadioCardStates">States
          <Link to={location.pathname + "/#RadioCardStates"} className="button button--transparent button--copy-link"></Link>
        </h2>
        <div className="example-container">
          <div className="card">
            <div className="card-content">
        		  <fieldset>
        		    <label>Default Radio Card</label>
        		    <div className="radio-card">
        		      <input type="radio" name="radio-card" id="radio-card1" defaultChecked={true}/>
        		      <label htmlFor="radio-card1" className="card">Option 1</label>
        		    </div>
        		    <div className="radio-card">
        		      <input type="radio" name="radio-card" id="radio-card2" />
        		      <label htmlFor="radio-card2" className="card">Option 2</label>
        		    </div>
        		    <div className="radio-card">
        		      <input type="radio" name="radio-card" id="radio-card3" />
        		      <label htmlFor="radio-card3" className="card">Option 3</label>
        		    </div>
        		  </fieldset>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
        		  <fieldset>
        		    <label>Disabled Radio Card</label>
        		    <div className="radio-card">
        		      <input type="radio" name="disabled-radio-card" id="disabled-radio-card1" disabled defaultChecked={true}/>
        		      <label htmlFor="disabled-radio-card1" className="card">Option 1</label>
        		    </div>
        		    <div className="radio-card">
        		      <input type="radio" name="disabled-radio-card" id="disabled-radio-card2" disabled/>
        		      <label htmlFor="disabled-radio-card2" className="card">Option 2</label>
        		    </div>
        		    <div className="radio-card">
        		      <input type="radio" name="disabled-radio-card" id="disabled-radio-card3" disabled/>
        		      <label htmlFor="disabled-radio-card3" className="card">Option 3</label>
        		    </div>
        		  </fieldset>
            </div>
          </div>
          <CodeToggle>
{`<!-- Radio Cards -->
<fieldset>
  <label>Default Radio Card</label>
  <div class="radio-card">
    <input type="radio" name="radio-card" id="radio-card1" checked/>
    <label for="radio-card1" class="card">Option 1</label>
  </div>
  <div class="radio-card">
    <input type="radio" name="radio-card" id="radio-card2" />
    <label for="radio-card2" class="card">Option 2</label>
  </div>
  <div class="radio-card">
    <input type="radio" name="radio-card" id="radio-card3" />
    <label for="radio-card3" class="card">Option 3</label>
  </div>
</fieldset>

<!-- Disabled Radio Cards -->
<fieldset>
  <label>Disabled Radio Card</label>
  <div class="radio-card">
    <input type="radio" name="disabled-radio-card" id="disabled-radio-card1" disabled checked/>
    <label for="disabled-radio-card1" class="card">Option 1</label>
  </div>
  <div class="radio-card">
    <input type="radio" name="disabled-radio-card" id="disabled-radio-card2" disabled/>
    <label for="disabled-radio-card2" class="card">Option 2</label>
  </div>
  <div class="radio-card">
    <input type="radio" name="disabled-radio-card" id="disabled-radio-card3" disabled/>
    <label for="disabled-radio-card3" class="card">Option 3</label>
  </div>
</fieldset>`}
          </CodeToggle>
        </div>

        <h2 className="mt-space-xl" id="RadioCardSizes">Sizes
          <Link to={location.pathname + "/#RadioCardSizes"} className="button button--transparent button--copy-link"></Link>
        </h2>
        <div className="example-container">
          <div className="card">
            <div className="card-content">
              <fieldset>
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
                  <input type="radio" name="radio-small" id="radio-small3" />
                  <label htmlFor="radio-small3" className="card">Option 3</label>
                </div>
              </fieldset>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <fieldset>
                <label>Default Radio Card</label>
                <div className="radio-card">
                  <input type="radio" name="radio-normal" id="radio-normal1" defaultChecked={true}/>
                  <label htmlFor="radio-normal1" className="card">Option 1</label>
                </div>
                <div className="radio-card">
                  <input type="radio" name="radio-normal" id="radio-normal2" />
                  <label htmlFor="radio-normal2" className="card">Option 2</label>
                </div>
                <div className="radio-card">
                  <input type="radio" name="radio-normal" id="radio-normal3" />
                  <label htmlFor="radio-normal3" className="card">Option 3</label>
                </div>
              </fieldset>
            </div>
          </div>
          <div className="card">
            <div className="card-content flex-content">
              <fieldset>
                <label>Flex Radio Card</label>
                <div className="flex-row">
                  <div className="radio-card">
                    <input type="radio" name="radio-flex" id="radio-flex1" defaultChecked={true}/>
                    <label htmlFor="radio-flex1" className="card">Option 1</label>
                  </div>
                  <div className="radio-card">
                    <input type="radio" name="radio-flex" id="radio-flex2" />
                    <label htmlFor="radio-flex2" className="card">Option 2</label>
                  </div>
                  <div className="radio-card">
                    <input type="radio" name="radio-flex" id="radio-flex3" />
                    <label htmlFor="radio-flex3" className="card">Option 3</label>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <fieldset>
                <label>Block Radio Card</label>
                <div className="radio-card radio-card--block">
                  <input type="radio" name="radio-block" id="radio-block1" defaultChecked={true}/>
                  <label htmlFor="radio-block1" className="card">Option 1</label>
                </div>
                <div className="radio-card radio-card--block">
                  <input type="radio" name="radio-block" id="radio-block2" />
                  <label htmlFor="radio-block2" className="card">Option 2</label>
                </div>
                <div className="radio-card radio-card--block">
                  <input type="radio" name="radio-block" id="radio-block3" />
                  <label htmlFor="radio-block3" className="card">Option 3</label>
                </div>
              </fieldset>
            </div>
          </div>
          <CodeToggle>
{`<!-- Small Radio Card -->
<fieldset>
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
    <input type="radio" name="radio-small" id="radio-small3" />
    <label for="radio-small3" class="card">Option 3</label>
  </div>
</fieldset>

<!-- Default Radio Card -->
<fieldset>
  <label>Default Radio Card</label>
  <div class="radio-card">
    <input type="radio" name="radio-normal" id="radio-normal1" checked/>
    <label for="radio-normal1" class="card">Option 1</label>
  </div>
  <div class="radio-card">
    <input type="radio" name="radio-normal" id="radio-normal2" />
    <label for="radio-normal2" class="card">Option 2</label>
  </div>
  <div class="radio-card">
    <input type="radio" name="radio-normal" id="radio-normal3" />
    <label for="radio-normal3" class="card">Option 3</label>
  </div>
</fieldset>

<!-- Flex Radio Card -->
<div class="card">
  <div class="card-content flex-content">
    <fieldset>
      <label>Flex Radio Card</label>
      <div class="flex-row">
        <div class="radio-card">
          <input type="radio" name="radio-flex" id="radio-flex1" checked/>
          <label for="radio-flex1" class="card">Option 1</label>
        </div>
        <div class="radio-card">
          <input type="radio" name="radio-flex" id="radio-flex2" />
          <label for="radio-flex2" class="card">Option 2</label>
        </div>
        <div class="radio-card">
          <input type="radio" name="radio-flex" id="radio-flex3" />
          <label for="radio-flex3" class="card">Option 3</label>
        </div>
      </div>
    </fieldset>
  </div>
</div>

<!-- Block Radio Card -->
<fieldset>
  <label>Block Radio Card</label>
  <div class="radio-card radio-card--block">
    <input type="radio" name="radio-block" id="radio-block1" checked/>
    <label for="radio-block1" class="card">Option 1</label>
  </div>
  <div class="radio-card radio-card--block">
    <input type="radio" name="radio-block" id="radio-block2" />
    <label for="radio-block2" class="card">Option 2</label>
  </div>
  <div class="radio-card radio-card--block">
    <input type="radio" name="radio-block" id="radio-block3" />
    <label for="radio-block3" class="card">Option 3</label>
  </div>
</fieldset>`}
          </CodeToggle>
        </div>

        <h1 className="mt-space-xl">Theme</h1>
        <h2 className="mt-space-xl" id="RadioButtonTheme">Radio Button Theme
          <Link to={location.pathname + "/#RadioButtonTheme"} className="button button--transparent button--copy-link"></Link>
        </h2>
        <div className="example-container">
          <div className="card hide-HTML-code">
            <div className="card-content">
              <fieldset>
                <label>Radio Buttons</label>
                <div className="radio--custom">
                  <input type="radio" name="radio-theme" id="radio-theme1" defaultChecked={true}/>
                  <label htmlFor="radio-theme1">Option 1</label>
                </div>
                <div className="radio--custom">
                  <input type="radio" name="radio-theme" id="radio-theme2"/>
                  <label htmlFor="radio-theme2">Option 2</label>
                </div>
              </fieldset>
            </div>
          </div>

          <CodeToggle>
          </CodeToggle>
          <CodeToggleSCSS>
{`//Include these variables in your theme file
$radio--active: $blue !default; //Color of radio button when checked
$radio--icon: $color-white !default; //Color of radio icon when checked
$radio--focus: $blue-300 !default; //Color of border around radio when focused
$radio--disabled: $gray-150 !default; //Color of radio when checked and disabled
$radio--icon-disabled: $gray-500 !default; //Color of radio icon when checked and disabled`}
          </CodeToggleSCSS>
        </div>

        <h2 className="mt-space-xl" id="RadioCardTheme">Radio Card Theme
          <Link to={location.pathname + "/#RadioCardTheme"} className="button button--transparent button--copy-link"></Link>
        </h2>
        <div className="example-container">
          <div className="card hide-HTML-code">
            <div className="card-content">
              <fieldset>
                <label>Radio Buttons</label>
                <div className="radio-card">
                  <input type="radio" name="radio-card-theme" id="radio-card-theme1" defaultChecked={true}/>
                  <label htmlFor="radio-card-theme1" className="card">Option 1</label>
                </div>
                <div className="radio-card">
                  <input type="radio" name="radio-card-theme" id="radio-card-theme2" />
                  <label htmlFor="radio-card-theme2" className="card">Option 2</label>
                </div>
              </fieldset>
            </div>
          </div>

        <CodeToggle>
        </CodeToggle>
        <CodeToggleSCSS>
{`//Include these variables in your theme file
$card-checkbox--active: $blue !default; //Color of checkbox and card when checked
$card-checkbox--focus: $blue-300 !default; //Color of border around card-checkbox when focused
$card-checkbox--padding: 1rem !default; //Padding of checkbox`}
        </CodeToggleSCSS>
      </div>
      </div>
    </AppContent>
  </Layout>
)
}
}

export default RadioButtonsCode;
