import React from 'react'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'
import CodeToggle from '../../../components/codetoggle'

const currentPageName = "Actions";
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
            <h2 className="example-header no-margin--top">Default Button <button className="button button--transparent button--copy-link" data-id="copyurl" id="Default_Button"></button></h2>
            <div className="row example-container">
              <div className="column column--full">
                <button className="button button--primary">Primary Button</button>
                <button className="button button--secondary">Secondary Button</button>
              </div>
            </div>
            <CodeToggle>
{`<button class="button button--primary">Primary Button</button>
<button class="button button--secondary">Secondary Button</button>`}
            </CodeToggle>
          </div>
        </div>

        <div className="row">
          <div className="column column--full">
            <h2 className="example-header">Disabled Button <button className="button button--transparent button--copy-link" data-id="copyurl" id="Disabled_Button"></button></h2>
            <div className="row example-container">
              <div className="column column--full">
                <button className="button button--primary" disabled>Disabled Button</button>
                <button className="button button--secondary" disabled>Disabled Button</button>
              </div>
            </div>
            <CodeToggle>
{`<button class="button button--primary" disabled>Disabled Button</button>
<button class="button button--secondary" disabled>Disabled Button</button>`}
            </CodeToggle>
          </div>
        </div>

        <div className="row">
          <div className="column column--full">
            <h2 className="example-header">Small Button <button className="button button--transparent button--copy-link" data-id="copyurl" id="Small_Button"></button></h2>
            <div className="row example-container">
              <div className="column column--full">
                <button className="button button--primary button--small">Small Button</button>
                <button className="button button--secondary button--small">Small Button</button>
              </div>
            </div>
            <CodeToggle>
{`<button class="button button--primary button--small">Small Button</button>
<button class="button button--secondary button--small">Small Button</button>`}
            </CodeToggle>
          </div>
        </div>

        <div className="row">
          <div className="column column--full">
            <h2 className="example-header">Large Button <button className="button button--transparent button--copy-link" data-id="copyurl" id="Large_Button"></button></h2>
            <div className="row example-container">
              <div className="column column--full">
                <button className="button button--primary button--large">Large Button</button>
                <button className="button button--secondary button--large">Large Button</button>
              </div>
            </div>
            <CodeToggle>
{`<button class="button button--primary button--large">Large Button</button>
<button class="button button--secondary button--large">Large Button</button>`}
            </CodeToggle>
          </div>
        </div>

<div className="row">
<div className="column column--full">
<h2 className="example-header">Border Button <button className="button button--transparent button--copy-link" data-id="copyurl" id="Border_Button"></button></h2>
<div className="row example-container">
  <div className="column column--full">
    <button className="button button--primary button--border">Border Button</button>
    <button className="button button--secondary button--border">Border Button</button>
  </div>
</div>
<CodeToggle>
{`<button class="button button--primary button--border">Border Button</button>
<button class="button button--secondary button--border">Border Button</button>`}
</CodeToggle>
</div>
</div>

<div className="row">
<div className="column column--full">
<h2 className="example-header">Transparent Button <button className="button button--transparent button--copy-link" data-id="copyurl" id="Transparent_Button"></button></h2>
<div className="row example-container">
  <div className="column column--full">
    <button className="button button--primary button--transparent">Transparent Button</button>
    <button className="button button--secondary button--transparent">Transparent Button</button>
  </div>
</div>
<CodeToggle>
{`<button class="button button--primary button--transparent">Transparent Button</button>
<button class="button button--secondary button--transparent">Transparent Button</button>`}
</CodeToggle>
</div>
</div>

<div className="row">
<div className="column column--full">
<h2 className="example-header">Button Color Options <button className="button button--transparent button--copy-link" data-id="copyurl" id="Button_Color_Options"></button></h2>
<div className="row example-container">
  <div className="column column--full">
    <button className="button button--blue">Blue Button</button>
    <button className="button button--gray">Gray Button</button>
    <button className="button button--green">Green Button</button>
    <button className="button button--orange">Orange Button</button>
    <button className="button button--purple">Purple Button</button>
    <button className="button button--red">Red Button</button>
    <button className="button button--white">White Button</button>
  </div>
</div>
<CodeToggle>
{`<button class="button button--blue">Blue Button</button>
<button class="button button--gray">Gray Button</button>
<button class="button button--green">Green Button</button>
<button class="button button--orange">Orange Button</button>
<button class="button button--purple">Purple Button</button>
<button class="button button--red">Red Button</button>
<button class="button button--white">White Button</button>`}
</CodeToggle>
</div>
</div>

<div className="row">
  <div className="column column--full">
  <h2 className="example-header">Border Button Color Options <button className="button button--transparent button--copy-link" data-id="copyurl" id="Border_Color_Options"></button></h2>
  <div className="row example-container">
    <div className="column column--full">
      <button className="button button--blue button--border">Blue Button</button>
      <button className="button button--gray button--border">Gray Button</button>
      <button className="button button--green button--border">Green Button</button>
      <button className="button button--orange button--border">Orange Button</button>
      <button className="button button--purple button--border">Purple Button</button>
      <button className="button button--red button--border">Red Button</button>
      <button className="button button--white button--border">White Button</button>
    </div>
  </div>
  <CodeToggle>
{`<button class="button button--blue button--border">Blue Button</button>
<button class="button button--gray button--border">Gray Button</button>
<button class="button button--green button--border">Green Button</button>
<button class="button button--orange button--border">Orange Button</button>
<button class="button button--purple button--border">Purple Button</button>
<button class="button button--red button--border">Red Button</button>
<button class="button button--white button--border">White Button</button>`}
  </CodeToggle>
</div>
</div>

<div className="row">
  <div className="column column--full">
  <h2 className="example-header">Button with Icon <button className="button button--transparent button--copy-link" data-id="copyurl" id="Button_With_Icon"></button></h2>
  <div className="row example-container">
    <div className="column column--full">
      <button className="button button--primary">
        <i className="dashing-icon dashing-icon--add"></i>
        Button
      </button>
      <button className="button button--secondary">
        <i className="dashing-icon dashing-icon--close"></i>
        Button
      </button>
    </div>
  </div>
  <CodeToggle>
{`<!-- Blue Button with Add Icon -->
<button class="button button--primary">
  <i class="dashing-icon dashing-icon--add"></i>
  Button
</button>
<!-- Gray Button with Close Icon -->
<button class="button button--secondary">
  <i class="dashing-icon dashing-icon--close"></i>
  Button
</button>`}
</CodeToggle>
</div>
</div>

<div className="row">
  <div className="column column--full">
  <h2 className="example-header">Border Button with Icon <button className="button button--transparent button--copy-link" data-id="copyurl" id="Border_Button_With_Icon"></button></h2>
  <div className="row example-container">
    <div className="column column--full">
      <button className="button button--blue button--border">
        <i className="dashing-icon dashing-icon--pencil"></i>
        Button
      </button>
      <button className="button button--gray button--border">
        <i className="dashing-icon dashing-icon--question-filled"></i>
        Button
      </button>
    </div>
  </div>
  <CodeToggle>
{`<!-- Blue Border Button with Edit Icon -->
<button class="button button--blue button--border">
  <i class="dashing-icon dashing-icon--pencil"></i>
  Button
</button>
<!-- Gray Border Button with Help Icon -->
<button class="button button--gray button--border">
  <i class="dashing-icon dashing-icon--question-filled"></i>
  Button
</button>`}
</CodeToggle>
</div>
</div>

<div className="row">
  <div className="column column--full">
  <h2 className="example-header">Transparent Button with Icon <button className="button button--transparent button--copy-link" data-id="copyurl" id="Transparent_Button_With_Icon"></button></h2>
  <div className="row example-container">
    <div className="column column--full">
      <button className="button button--primary button--transparent">
        <i className="dashing-icon dashing-icon--search"></i>
        Button
      </button>
      <button className="button button--secondary button--transparent">
        Button
        <i className="dashing-icon dashing-icon--new-tab flow-opposite"></i>
      </button>
    </div>
  </div>
  <CodeToggle>
{`<!-- Blue Transparent Button with Search Icon -->
<button class="button button--primary button--transparent">
  <i class="dashing-icon dashing-icon--search"></i>
  Button
</button>
<!-- Gray Transparent Button with New-Tab Icon -->
<button class="button button--secondary button--transparent">
  Button
  <i class="dashing-icon dashing-icon--new-tab flow-opposite"></i>
</button>`}
</CodeToggle>
</div>
</div>

<div className="row">
  <div className="column column--full">
  <h2 className="example-header">Icon Button <button className="button button--transparent button--copy-link" data-id="copyurl" id="Icon_Button"></button></h2>
  <div className="row example-container">
    <div className="column column--full">
      <button className="button button--icon button--primary">
        <i className="dashing-icon dashing-icon--add dashing-icon--white"></i>
      </button>
      <button className="button button--icon button--red">
        <i className="dashing-icon dashing-icon--trash dashing-icon--white"></i>
      </button>
    </div>
  </div>
  <CodeToggle>
{`<!-- Blue Icon Button with Add Icon -->
<button class="button button--icon button--primary">
  <i class="dashing-icon dashing-icon--add dashing-icon--white"></i>
</button>
<!-- Red Icon Button with Trash Icon -->
<button class="button button--icon button--red">
  <i class="dashing-icon dashing-icon--trash dashing-icon--white"></i>
</button>`}
</CodeToggle>
</div>
</div>

<div className="row">
  <div className="column column--full">
  <h2 className="example-header">Small Icon Button <button className="button button--transparent button--copy-link" data-id="copyurl" id="Small_Icon_Button"></button></h2>
  <div className="row example-container">
    <div className="column column--full">
      <button className="button button--primary button--icon button--icon--small">
        <i className="dashing-icon dashing-icon--add dashing-icon--white"></i>
      </button>
      <button className="button button--red button--icon button--icon--small">
        <i className="dashing-icon dashing-icon--trash dashing-icon--white"></i>
      </button>
      <button className="button button--transparent button--icon button--icon--small">
        <i className="dashing-icon dashing-icon--question-filled dashing-icon--gray"></i>
      </button>
    </div>
  </div>
  <CodeToggle>
{`<!-- Small Blue Icon Button with Add Icon -->
<button class="button button--primary button--icon button--icon--small">
  <i class="dashing-icon dashing-icon--add dashing-icon--white"></i>
</button>

<!-- Small Red Icon Button with Trash Icon -->
<button class="button button--red button--icon button--icon--small">
  <i class="dashing-icon dashing-icon--trash dashing-icon--white"></i>
</button>

<!-- Small Transparent Icon Button with Help Icon -->
<button class="button button--transparent button--icon button--icon--small">
  <i class="dashing-icon dashing-icon--question-filled dashing-icon--gray"></i>
</button>`}
</CodeToggle>
</div>
</div>

<div className="row">
  <div className="column column--full">
  <h2 className="example-header">Main Icon Button <button className="button button--transparent button--copy-link" data-id="copyurl" id="Main_Icon_Button"></button></h2>
  <div className="row example-container">
    <div className="column column--full">
      <button className="button button--icon button--icon--main button--primary">
        <i className="dashing-icon dashing-icon--add dashing-icon--white"></i>
      </button>
    </div>
  </div>
  <CodeToggle>
{`<!-- Blue Main Icon Button with Add Icon -->
<button class="button button--icon button--icon--main button--primary">
  <i class="dashing-icon dashing-icon--add dashing-icon--white"></i>
</button>`}</CodeToggle>
</div>
</div>

<div className="row">
<div className="column column--full">
<h2 className="example-header">Toggle Button <button className="button button--transparent button--copy-link" data-id="copyurl" id="Toggle_Button"></button></h2>
<div className="row example-container">
  <div className="column column--full">
      <ul className="button-group button-group--blue">
        <li className="button--radio">
          <input type="radio" name="options-blue" id="blue1" defaultChecked />
          <label htmlFor="blue1" className="button">Left</label>
        </li>
        <li className="button--radio">
          <input type="radio" name="options-blue" id="blue2" />
          <label htmlFor="blue2" className="button">Middle</label>
        </li>
        <li className="button--radio">
          <input type="radio" name="options-blue" id="blue3" />
          <label htmlFor="blue3" className="button">Right</label>
        </li>
      </ul>
  </div>
</div>
<CodeToggle>
{`<!-- Blue Toggle Button -->
<ul class="button-group button-group--blue">
  <li class="button--radio">
    <input type="radio" name="options-blue" id="blue1" defaultChecked />
    <label htmlFor="blue1" className="button">Left</label>
  </li>
  <li class="button--radio">
    <input type="radio" name="options-blue" id="blue2" />
    <label htmlFor="blue2" className="button">Middle</label>
  </li>
  <li class="button--radio">
    <input type="radio" name="options-blue" id="blue3" />
    <label htmlFor="blue3" className="button">Right</label>
  </li>
</ul>`}</CodeToggle>
</div>
</div>

<div className="row">
<div className="column column--full">
<h2 className="example-header">Toggle Button · Border Button <button className="button button--transparent button--copy-link" data-id="copyurl" id="Toggle_Button_Border_Button"></button></h2>
<div className="row example-container">
  <div className="column column--full">
      <ul className="button-group button-group--green button-group--border">
        <li className="button--radio">
          <input type="radio" name="options-green" id="green1" defaultChecked />
          <label htmlFor="green1" className="button">1</label>
        </li>
        <li className="button--radio">
          <input type="radio" name="options-green" id="green2" />
          <label htmlFor="green2" className="button">2</label>
        </li>
        <li className="button--radio">
          <input type="radio" name="options-green" id="green3" />
          <label htmlFor="green3" className="button">3</label>
        </li>
        <li className="button--radio">
          <input type="radio" name="options-green" id="green4" />
          <label htmlFor="green4" className="button">4</label>
        </li>
        <li className="button--radio">
          <input type="radio" name="options-green" id="green5" />
          <label htmlFor="green5" className="button">5</label>
        </li>
        <li className="button--radio">
          <input type="radio" name="options-green" id="green6" />
          <label htmlFor="green6" className="button">6</label>
        </li>
        <li className="button--radio">
          <input type="radio" name="options-green" id="green7" />
          <label htmlFor="green7" className="button">7</label>
        </li>
      </ul>
  </div>
</div>
<CodeToggle>
{`<!-- Green Toggle Border Button -->
<ul class="button-group button-group--green button-group--border">
  <li class="button--radio">
    <input type="radio" name="options-green" id="green1" defaultChecked />
    <label htmlFor="green1" class="button">1</label>
  </li>
  <li class="button--radio">
    <input type="radio" name="options-green" id="green2" />
    <label htmlFor="green2" class="button">2</label>
  </li>
  <li class="button--radio">
    <input type="radio" name="options-green" id="green3" />
    <label htmlFor="green3" class="button">3</label>
  </li>
  <li class="button--radio">
    <input type="radio" name="options-green" id="green4" />
    <label htmlFor="green4" class="button">4</label>
  </li>
  <li class="button--radio">
    <input type="radio" name="options-green" id="green5" />
    <label htmlFor="green5" class="button">5</label>
  </li>
  <li class="button--radio">
    <input type="radio" name="options-green" id="green6" />
    <label htmlFor="green6" class="button">6</label>
  </li>
  <li class="button--radio">
    <input type="radio" name="options-green" id="green7" />
    <label htmlFor="green7" class="button">7</label>
  </li>
</ul>`}</CodeToggle>
</div>
</div>

<div className="row">
<div className="column column--full">
<h2 className="example-header">Toggle Button · Vertical Button · Border Button <button className="button button--transparent button--copy-link" data-id="copyurl" id="Toggle_Button_Verticle_Button_Border_Button"></button></h2>
<div className="row example-container">
  <div className="column column--full">
      <ul className="button-group button-group--vertical button-group--gray button-group--border">
        <li className="button--radio">
          <input type="radio" name="options-gray" id="toggle-gray1" defaultChecked />
          <label htmlFor="toggle-gray1" className="button">Top</label>
        </li>
        <li className="button--radio">
          <input type="radio" name="options-gray" id="toggle-gray2" />
          <label htmlFor="toggle-gray2" className="button">Middle</label>
        </li>
        <li className="button--radio">
          <input type="radio" name="options-gray" id="toggle-gray3" />
          <label htmlFor="toggle-gray3" className="button">Bottom</label>
        </li>
      </ul>
  </div>
</div>
<CodeToggle>
{`<!-- Green Toggle Border Button -->
<ul class="button-group button-group--vertical button-group--gray button-group--border">
  <li class="button--radio">
    <input type="radio" name="options-gray" id="toggle-gray1" defaultChecked />
    <label htmlFor="toggle-gray1" class="button">Top</label>
  </li>
  <li class="button--radio">
    <input type="radio" name="options-gray" id="toggle-gray2" />
    <label htmlFor="toggle-gray2" class="button">Middle</label>
  </li>
  <li class="button--radio">
    <input type="radio" name="options-gray" id="toggle-gray3" />
    <label htmlFor="toggle-gray3" class="button">Bottom</label>
  </li>
</ul>

<!-- Use the "_phone" or "_tablet" option to apply the class specifically to that media size -->
<ul class="button-group button-group--vertical_phone button-group--gray button-group--border">
</ul>`}
</CodeToggle>
</div>
</div>

<div className="row">
<div className="column column--full">
  <h2 className="example-header">Theme Options <button className="button button--transparent button--copy-link" data-id="copyurl" id="Theme_Options"></button></h2>
  <div className="row example-container">
    <div className="column column--full">
      <button className="button button--round">Round Button</button>
      <button className="button button--smooth">Smooth Button</button>
      <button className="button button--square">Square Button</button>
    </div>
  </div>
  <CodeToggle>
{`<button class="button button--round">Round Button</button>
<button class="button button--smooth">Smooth Button</button>
<button class="button button--square">Square Button</button>`}
  </CodeToggle>
</div>
</div>

<div className="row">
<div className="column column--full">
  <h2 className="example-header">Global Button Themes <button className="button button--transparent button--copy-link" data-id="copyurl" id="Global_Button_Themes"></button></h2>
  <p>Apply one of the following extendables to apply a button theme your entire project.</p>
  <div className="row example-container">
    <div className="column column--full">
      <button className="button button--round">Round Button</button>
      <button className="button button--smooth">Smooth Button</button>
      <button className="button button--square">Square Button</button>
    </div>
  </div>
  <CodeToggle>
{`<!-- Round Button Theme (Default) -->
button { @extend %button--round; }

<!-- Smooth Button Theme -->
button { @extend %button--smooth; }

<!-- Square Button Theme -->
button { @extend %button--square; }`}
</CodeToggle>
</div>
</div>
    </AppContent>
  </Layout>
)
