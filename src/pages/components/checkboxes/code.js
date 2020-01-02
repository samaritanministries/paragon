import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'
import CodeToggle from '../../../components/codetoggle'
import CodeToggleSCSS from '../../../components/codetoggle-scss'

const currentPageName = "Checkboxes";
const currentPageNameLower = currentPageName.toLowerCase();

class CheckboxesCode extends React.Component {
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

      <p className="intro">Checkboxes are used as an "on/off" function to select any number of options from a list. Each checkbox is independent from the others in the list, so checking one item should never uncheck another.</p>
      <h2 id="CheckboxStyles">Styles
        <Link to={location.pathname + "/#CheckboxStyles"} className="button button--transparent button--copy-link"></Link>
      </h2>
      <div className="example-container">
        <div className="card">
          <div className="card-content">
            <fieldset>
      		    <label>Checkboxes</label>
      		    <div className="checkbox--custom">
      		      <input type="checkbox" id="checkbox1" defaultChecked={true}/>
      		      <label htmlFor="checkbox1">Option 1</label>
      		    </div>
      		    <div className="checkbox--custom">
      		      <input type="checkbox" id="checkbox2"/>
      		      <label htmlFor="checkbox2">Option 2</label>
      		    </div>
      		    <div className="checkbox--custom">
      		      <input type="checkbox" id="checkbox3"/>
      		      <label htmlFor="checkbox3">Option 3</label>
      		    </div>
      		  </fieldset>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <fieldset>
              <label>Inline Checkboxes</label>
              <div className="checkbox--custom inline">
      		      <input type="checkbox" id="inline-checkbox1" defaultChecked={true}/>
      		      <label htmlFor="inline-checkbox1">Option 1</label>
      		    </div>
      		    <div className="checkbox--custom inline">
      		      <input type="checkbox" id="inline-checkbox2"/>
      		      <label htmlFor="inline-checkbox2">Option 2</label>
      		    </div>
      		    <div className="checkbox--custom inline">
      		      <input type="checkbox" id="inline-checkbox3"/>
      		      <label htmlFor="inline-checkbox3">Option 3</label>
      		    </div>
            </fieldset>
          </div>
        </div>
        <CodeToggle>
{`<!-- Default -->
<fieldset>
  <label>Checkboxes</label>
  <div class="checkbox--custom">
    <input type="checkbox" id="checkbox1" checked/>
    <label for="checkbox1">Option 1</label>
  </div>
  <div class="checkbox--custom">
    <input type="checkbox" id="checkbox2"/>
    <label for="checkbox2">Option 2</label>
  </div>
  <div class="checkbox--custom">
    <input type="checkbox" id="checkbox3"/>
    <label for="checkbox3">Option 3</label>
  </div>
</fieldset>

<!-- Inline -->
<fieldset>
  <label>Inline Checkboxes</label>
  <div class="checkbox--custom inline">
    <input type="checkbox" id="inline-checkbox1" checked/>
    <label for="inline-checkbox1">Option 1</label>
  </div>
  <div class="checkbox--custom inline">
    <input type="checkbox" id="inline-checkbox2"/>
    <label for="inline-checkbox2">Option 2</label>
  </div>
  <div class="checkbox--custom inline">
    <input type="checkbox" id="inline-checkbox3"/>
    <label for="inline-checkbox3">Option 3</label>
  </div>
</fieldset>`}
        </CodeToggle>
      </div>

      <h2 className="mt-space-xl" id="CheckboxStates">States
        <Link to={location.pathname + "/#CheckboxStates"} className="button button--transparent button--copy-link"></Link>
      </h2>
      <div className="example-container">
        <div className="card">
          <div className="card-content">
            <fieldset>
      		    <label>Default Checkboxes</label>
      		    <div className="checkbox--custom">
      		      <input type="checkbox" id="default-checkbox1" defaultChecked={true}/>
      		      <label htmlFor="default-checkbox1">Option 1</label>
      		    </div>
      		    <div className="checkbox--custom">
      		      <input type="checkbox" id="default-checkbox2"/>
      		      <label htmlFor="default-checkbox2">Option 2</label>
      		    </div>
      		    <div className="checkbox--custom">
      		      <input type="checkbox" id="default-checkbox3"/>
      		      <label htmlFor="default-checkbox3">Option 3</label>
      		    </div>
      		  </fieldset>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <fieldset>
      		    <label>Disabled Checkboxes</label>
      		    <div className="checkbox--custom">
      		      <input type="checkbox" id="disabled-checkbox1" disabled defaultChecked={true}/>
      		      <label htmlFor="disabled-checkbox1">Option 1</label>
      		    </div>
      		    <div className="checkbox--custom">
      		      <input type="checkbox" id="disabled-checkbox2" disabled/>
      		      <label htmlFor="disabled-checkbox2">Option 2</label>
      		    </div>
      		    <div className="checkbox--custom">
      		      <input type="checkbox" id="disabled-checkbox3" disabled/>
      		      <label htmlFor="disabled-checkbox3">Option 3</label>
      		    </div>
      		  </fieldset>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <fieldset className="has-error">
      		    <label>Error Checkboxes</label>
      		    <div className="checkbox--custom">
      		      <input type="checkbox" id="error-checkbox1" defaultChecked={true}/>
      		      <label htmlFor="error-checkbox1">Option 1</label>
      		    </div>
      		    <div className="checkbox--custom">
      		      <input type="checkbox" id="error-checkbox2"/>
      		      <label htmlFor="error-checkbox2">Option 2</label>
      		    </div>
      		    <div className="checkbox--custom">
      		      <input type="checkbox" id="error-checkbox3"/>
      		      <label htmlFor="error-checkbox3">Option 3</label>
      		    </div>
      		  </fieldset>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <fieldset className="has-warning">
      		    <label>Warning Checkboxes</label>
      		    <div className="checkbox--custom">
      		      <input type="checkbox" id="warning-checkbox1" defaultChecked={true}/>
      		      <label htmlFor="warning-checkbox1">Option 1</label>
      		    </div>
      		    <div className="checkbox--custom">
      		      <input type="checkbox" id="warning-checkbox2"/>
      		      <label htmlFor="warning-checkbox2">Option 2</label>
      		    </div>
      		    <div className="checkbox--custom">
      		      <input type="checkbox" id="warning-checkbox3"/>
      		      <label htmlFor="warning-checkbox3">Option 3</label>
      		    </div>
      		  </fieldset>
          </div>
        </div>
        <CodeToggle>
{`<!-- Default -->
<fieldset>
  <label>Default Checkboxes</label>
  <div className="checkbox--custom">
    <input type="checkbox" id="default-checkbox1" defaultChecked={true}/>
    <label htmlFor="default-checkbox1">Option 1</label>
  </div>
  <div className="checkbox--custom">
    <input type="checkbox" id="default-checkbox2"/>
    <label htmlFor="default-checkbox2">Option 2</label>
  </div>
  <div className="checkbox--custom">
    <input type="checkbox" id="default-checkbox3"/>
    <label htmlFor="default-checkbox3">Option 3</label>
  </div>
</fieldset>

<!-- Disabled -->
<fieldset>
  <label>Disabled Checkboxes</label>
  <div className="checkbox--custom">
    <input type="checkbox" id="disabled-checkbox1" disabled defaultChecked={true}/>
    <label htmlFor="disabled-checkbox1">Option 1</label>
  </div>
  <div className="checkbox--custom">
    <input type="checkbox" id="disabled-checkbox2" disabled/>
    <label htmlFor="disabled-checkbox2">Option 2</label>
  </div>
  <div className="checkbox--custom">
    <input type="checkbox" id="disabled-checkbox3" disabled/>
    <label htmlFor="disabled-checkbox3">Option 3</label>
  </div>
</fieldset>

<!-- Error -->
<fieldset className="has-error">
  <label>Error Checkboxes</label>
  <div className="checkbox--custom">
    <input type="checkbox" id="error-checkbox1" defaultChecked={true}/>
    <label htmlFor="error-checkbox1">Option 1</label>
  </div>
  <div className="checkbox--custom">
    <input type="checkbox" id="error-checkbox2"/>
    <label htmlFor="error-checkbox2">Option 2</label>
  </div>
  <div className="checkbox--custom">
    <input type="checkbox" id="error-checkbox3"/>
    <label htmlFor="error-checkbox3">Option 3</label>
  </div>
</fieldset>

<!-- Warning -->
<fieldset className="has-warning">
  <label>Warning Checkboxes</label>
  <div className="checkbox--custom">
    <input type="checkbox" id="warning-checkbox1" defaultChecked={true}/>
    <label htmlFor="warning-checkbox1">Option 1</label>
  </div>
  <div className="checkbox--custom">
    <input type="checkbox" id="warning-checkbox2"/>
    <label htmlFor="warning-checkbox2">Option 2</label>
  </div>
  <div className="checkbox--custom">
    <input type="checkbox" id="warning-checkbox3"/>
    <label htmlFor="warning-checkbox3">Option 3</label>
  </div>
</fieldset>`}
        </CodeToggle>
      </div>

      <h1 className="mt-space-xl">Checkbox Card</h1>
      <h2 id="CheckboxCardStates">States
        <Link to={location.pathname + "/#CheckboxCardStates"} className="button button--transparent button--copy-link"></Link>
      </h2>
      <div className="example-container">
        <div className="card">
          <div className="card-content">
            <fieldset>
      		    <label>Default Checkbox Card</label>
      		    <div className="checkbox-card">
      		      <input type="checkbox" name="checkbox-card" id="checkbox-card1" defaultChecked={true}/>
      		      <label htmlFor="checkbox-card1" className="card">Option 1</label>
      		    </div>
      		    <div className="checkbox-card">
      		      <input type="checkbox" name="checkbox-card" id="checkbox-card2" />
      		      <label htmlFor="checkbox-card2" className="card">Option 2</label>
      		    </div>
      		    <div className="checkbox-card">
      		      <input type="checkbox" name="checkbox-card" id="checkbox-card3" />
      		      <label htmlFor="checkbox-card3" className="card">Option 3</label>
      		    </div>
      		  </fieldset>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <fieldset>
      		    <label>Disabled Checkbox Card</label>
      		    <div className="checkbox-card">
      		      <input type="checkbox" name="disabled-checkbox-card" id="disabled-checkbox-card1" disabled defaultChecked={true} />
      		      <label htmlFor="disabled-checkbox-card1" className="card">Option 1</label>
      		    </div>
      		    <div className="checkbox-card">
      		      <input type="checkbox" name="disabled-checkbox-card" id="disabled-checkbox-card2" disabled />
      		      <label htmlFor="disabled-checkbox-card2" className="card">Option 2</label>
      		    </div>
      		    <div className="checkbox-card">
      		      <input type="checkbox" name="disabled-checkbox-card" id="disabled-checkbox-card3" disabled />
      		      <label htmlFor="disabled-checkbox-card3" className="card">Option 3</label>
      		    </div>
      		  </fieldset>
          </div>
        </div>
        <CodeToggle>
{`<!-- Checkbox Cards -->
<fieldset>
  <label>Default Checkbox Card</label>
  <div class="checkbox-card">
    <input type="checkbox" name="checkbox-card" id="checkbox-card1" checked/>
    <label for="checkbox-card1" class="card">Option 1</label>
  </div>
  <div class="checkbox-card">
    <input type="checkbox" name="checkbox-card" id="checkbox-card2" />
    <label for="checkbox-card2" class="card">Option 2</label>
  </div>
  <div class="checkbox-card">
    <input type="checkbox" name="checkbox-card" id="checkbox-card3" />
    <label for="checkbox-card3" class="card">Option 3</label>
  </div>
</fieldset>

<!-- Disabled Checkbox Cards -->
<fieldset>
  <label>Disabled Checkbox Card</label>
  <div class="checkbox-card">
    <input type="checkbox" name="disabled-checkbox-card" id="disabled-checkbox-card1" disabled checked/>
    <label for="disabled-checkbox-card1" class="card">Option 1</label>
  </div>
  <div class="checkbox-card">
    <input type="checkbox" name="disabled-checkbox-card" id="disabled-checkbox-card2" disabled />
    <label for="disabled-checkbox-card2" class="card">Option 2</label>
  </div>
  <div class="checkbox-card">
    <input type="checkbox" name="disabled-checkbox-card" id="disabled-checkbox-card3" disabled />
    <label for="disabled-checkbox-card3" class="card">Option 3</label>
  </div>
</fieldset>`}
        </CodeToggle>
      </div>

      <h2 className="mt-space-xl" id="CheckboxCardSizes">Sizes
        <Link to={location.pathname + "/#CheckboxCardSizes"} className="button button--transparent button--copy-link"></Link>
      </h2>
      <div className="example-container">
        <div className="card">
          <div className="card-content">
            <fieldset>
      				<label>Small Checkbox Card</label>
      				<div className="checkbox-card checkbox-card--small">
      					<input type="checkbox" name="checkbox-small" id="checkbox-small1" defaultChecked={true}/>
      					<label htmlFor="checkbox-small1" className="card">Option 1</label>
      				</div>
      				<div className="checkbox-card checkbox-card--small">
      					<input type="checkbox" name="checkbox-small" id="checkbox-small2" />
      					<label htmlFor="checkbox-small2" className="card">Option 2</label>
      				</div>
      				<div className="checkbox-card checkbox-card--small">
      					<input type="checkbox" name="checkbox-small" id="checkbox-small3" />
      					<label htmlFor="checkbox-small3" className="card">Option 3</label>
      				</div>
      			</fieldset>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <fieldset>
      				<label>Default Checkbox Card</label>
      				<div className="checkbox-card">
      					<input type="checkbox" name="checkbox-card-normal" id="checkbox-card-normal1" defaultChecked={true}/>
      					<label htmlFor="checkbox-card-normal1" className="card">Option 1</label>
      				</div>
      				<div className="checkbox-card">
      					<input type="checkbox" name="checkbox-card-normal" id="checkbox-card-normal2" />
      					<label htmlFor="checkbox-card-normal2" className="card">Option 2</label>
      				</div>
      				<div className="checkbox-card">
      					<input type="checkbox" name="checkbox-card-normal" id="checkbox-card-normal3" />
      					<label htmlFor="checkbox-card-normal3" className="card">Option 3</label>
      				</div>
      			</fieldset>
          </div>
        </div>
        <div className="card">
          <div className="card-content flex-content">
            <fieldset>
              <label>Flex Checkbox Card</label>
              <div className="flex-row">
                <div className="checkbox-card">
        					<input type="checkbox" name="checkbox-card-flex" id="checkbox-card-flex1" defaultChecked={true}/>
        					<label htmlFor="checkbox-card-flex1" className="card">Option 3</label>
        				</div>
                <div className="checkbox-card">
        					<input type="checkbox" name="checkbox-card-flex" id="checkbox-card-flex2" />
        					<label htmlFor="checkbox-card-flex2" className="card">Option 3</label>
        				</div>
                <div className="checkbox-card">
        					<input type="checkbox" name="checkbox-card-flex" id="checkbox-card-flex3" />
        					<label htmlFor="checkbox-card-flex3" className="card">Option 3</label>
        				</div>
              </div>
            </fieldset>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <fieldset>
      		    <label>Block Checkbox Card</label>
      		    <div className="checkbox-card checkbox-card--block">
      		      <input type="checkbox" name="checkbox-card-block" id="checkbox-card-block1" defaultChecked={true}/>
      		      <label htmlFor="checkbox-card-block1" className="card">Option 1</label>
      		    </div>
      		    <div className="checkbox-card checkbox-card--block">
      		      <input type="checkbox" name="checkbox-card-block" id="checkbox-card-block2" />
      		      <label htmlFor="checkbox-card-block2" className="card">Option 2</label>
      		    </div>
      		    <div className="checkbox-card checkbox-card--block">
      		      <input type="checkbox" name="checkbox-card-block" id="checkbox-card-block3" />
      		      <label htmlFor="checkbox-card-block3" className="card">Option 3</label>
      		    </div>
      		  </fieldset>
          </div>
        </div>
        <CodeToggle>
{`<!-- Small Checkbox Card -->
<fieldset>
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
    <input type="checkbox" name="checkbox-small" id="checkbox-small3" />
    <label for="checkbox-small3" class="card">Option 3</label>
  </div>
</fieldset>

<!-- Default Radio Card -->
<fieldset>
  <label>Default Checkbox Card</label>
  <div class="checkbox-card">
    <input type="checkbox" name="checkbox-card-normal" id="checkbox-card-normal1" checked/>
    <label for="checkbox-card-normal1" class="card">Option 1</label>
  </div>
  <div class="checkbox-card">
    <input type="checkbox" name="checkbox-card-normal" id="checkbox-card-normal2" />
    <label for="checkbox-card-normal2" class="card">Option 2</label>
  </div>
  <div class="checkbox-card">
    <input type="checkbox" name="checkbox-card-normal" id="checkbox-card-normal3" />
    <label for="checkbox-card-normal3" class="card">Option 3</label>
  </div>
</fieldset>

<!-- Flex Radio Card -->
<fieldset>
  <label>Flex Checkbox Card</label>
  <div class="flex-row">
    <div class="checkbox-card">
      <input type="checkbox" name="checkbox-card-flex" id="checkbox-card-flex1" checked/>
      <label for="checkbox-card-flex1" class="card">Option 3</label>
    </div>
    <div class="checkbox-card">
      <input type="checkbox" name="checkbox-card-flex" id="checkbox-card-flex2" />
      <label for="checkbox-card-flex2" class="card">Option 3</label>
    </div>
    <div class="checkbox-card">
      <input type="checkbox" name="checkbox-card-flex" id="checkbox-card-flex3" />
      <label for="checkbox-card-flex3" class="card">Option 3</label>
    </div>
  </div>
</fieldset>

<!-- Block Radio Card -->
<fieldset>
  <label>Block Checkbox Card</label>
  <div class="checkbox-card checkbox-card--block">
    <input type="checkbox" name="checkbox-card-block" id="checkbox-card-block1" checked/>
    <label for="checkbox-card-block1" class="card">Option 1</label>
  </div>
  <div class="checkbox-card checkbox-card--block">
    <input type="checkbox" name="checkbox-card-block" id="checkbox-card-block2" />
    <label for="checkbox-card-block2" class="card">Option 2</label>
  </div>
  <div class="checkbox-card checkbox-card--block">
    <input type="checkbox" name="checkbox-card-block" id="checkbox-card-block3" />
    <label for="checkbox-card-block3" className="card">Option 3</label>
  </div>
</fieldset>`}
        </CodeToggle>
      </div>

      <h1 className="mt-space-xl">Theme</h1>
      <h2 id="CheckboxTheme">Checkbox Theme
        <Link to={location.pathname + "/#CheckboxTheme"} className="button button--transparent button--copy-link"></Link>
      </h2>
      <div className="example-container">
        <div className="card hide-HTML-code">
          <div className="card-content">
            <fieldset>
              <label>Checkbox</label>
              <div className="checkbox--custom">
                <input type="checkbox" name="checkbox-theme" id="checkbox-theme1" defaultChecked={true}/>
                <label htmlFor="checkbox-theme1">Option 1</label>
              </div>
              <div className="checkbox--custom">
                <input type="checkbox" name="checkbox-theme" id="checkbox-theme2"/>
                <label htmlFor="checkbox-theme2">Option 2</label>
              </div>
            </fieldset>
          </div>
        </div>

        <CodeToggle>
        </CodeToggle>
        <CodeToggleSCSS>
{`//Include these variables in your theme file to change the color of your checkbox
$checkbox--active: $blue !default; //Color of checkbox when checked
$checkbox--icon: $color-white !default; //Color of check icon when checked
$checkbox--focus: $blue-300 !default; //Color of border around checkbox when focused
$checkbox--disabled: $gray-150 !default; //Color of checkbox when checked and disabled
$checkbox--icon-disabled: $gray-500 !default; //Color of check icon when checked and disabled`}
        </CodeToggleSCSS>
      </div>

      <h2 className="mt-space-xl" id="CheckboxCardTheme">Checkbox Card Theme
        <Link to={location.pathname + "/#CheckboxCardTheme"} className="button button--transparent button--copy-link"></Link>
      </h2>
      <div className="example-container">
        <div className="card hide-HTML-code">
          <div className="card-content">
            <fieldset>
              <label>Checkbox</label>
              <div className="checkbox-card">
                <input type="checkbox" name="checkbox-card-theme" id="checkbox-card-theme1" defaultChecked={true}/>
                <label htmlFor="checkbox-card-theme1" className="card">Option 1</label>
              </div>
              <div className="checkbox-card">
                <input type="checkbox" name="checkbox-card-theme" id="checkbox-card-theme2" />
                <label htmlFor="checkbox-card-theme2" className="card">Option 2</label>
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

export default CheckboxesCode;
