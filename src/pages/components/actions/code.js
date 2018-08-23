import React from 'react'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'

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
          <div className="code-toggle"><i className="icon--code"></i></div>
<pre><code className="language-html">&lt;button class="button button--primary"&gt;Primary Button&lt;/button&gt;
&lt;button class="button button--secondary"&gt;Secondary Button&lt;/button&gt;</code>
</pre>
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
          <div className="code-toggle"><i className="icon--code"></i></div>
<pre><code className="language-html">&lt;button class="button button--primary" disabled&gt;Disabled Button&lt;/button&gt;
&lt;button class="button button--secondary" disabled&gt;Disabled Button&lt;/button&gt;</code>
</pre>
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
          <div className="code-toggle"><i className="icon--code"></i></div>
<pre><code className="language-html">&lt;button class="button button--primary button--small"&gt;Small Button&lt;/button&gt;
&lt;button class="button button--secondary button--small"&gt;Small Button&lt;/button&gt;</code>
</pre>
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
          <div className="code-toggle"><i className="icon--code"></i></div>
<pre><code className="language-html">&lt;button class="button button--primary button--large"&gt;Large Button&lt;/button&gt;
&lt;button class="button button--secondary button--large"&gt;Large Button&lt;/button&gt;</code>
</pre>
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
<div className="code-toggle"><i className="icon--code"></i></div>
<pre><code className="language-html">&lt;button class="button button--primary button--border"&gt;Border Button&lt;/button&gt;
&lt;button class="button button--secondary button--border"&gt;Border Button&lt;/button&gt;</code>
</pre>
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
<div className="code-toggle"><i className="icon--code"></i></div>
<pre><code className="language-html">&lt;button class="button button--primary button--transparent"&gt;Transparent Button&lt;/button&gt;
&lt;button class="button button--secondary button--transparent"&gt;Transparent Button&lt;/button&gt;</code>
</pre>
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
<div className="code-toggle"><i className="icon--code"></i></div>
<pre><code className="language-html">&lt;button class="button button--blue"&gt;Blue Button&lt;/button&gt;
&lt;button class="button button--gray"&gt;Gray Button&lt;/button&gt;
&lt;button class="button button--green"&gt;Green Button&lt;/button&gt;
&lt;button class="button button--orange"&gt;Orange Button&lt;/button&gt;
&lt;button class="button button--purple"&gt;Purple Button&lt;/button&gt;
&lt;button class="button button--red"&gt;Red Button&lt;/button&gt;
&lt;button class="button button--white"&gt;White Button&lt;/button&gt;</code>
</pre>
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
  <div className="code-toggle"><i className="icon--code"></i></div>
<pre><code className="language-html">&lt;button class="button button--blue button--border"&gt;Blue Button&lt;/button&gt;
&lt;button class="button button--gray button--border"&gt;Gray Button&lt;/button&gt;
&lt;button class="button button--green button--border"&gt;Green Button&lt;/button&gt;
&lt;button class="button button--orange button--border"&gt;Orange Button&lt;/button&gt;
&lt;button class="button button--purple button--border"&gt;Purple Button&lt;/button&gt;
&lt;button class="button button--red button--border"&gt;Red Button&lt;/button&gt;
&lt;button class="button button--white button--border"&gt;White Button&lt;/button&gt;</code>
</pre>
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
  <div className="code-toggle"><i className="icon--code"></i></div>
<pre><code className="language-html">&lt;!-- Blue Button with Add Icon --&gt;
&lt;button class="button button--primary"&gt;
&lt;i class="dashing-icon dashing-icon--add"&gt;&lt;/i&gt;
Button
&lt;/button&gt;

&lt;!-- Gray Button with Close Icon --&gt;
&lt;button class="button button--secondary"&gt;
&lt;i class="dashing-icon dashing-icon--close"&gt;&lt;/i&gt;
Button
&lt;/button&gt;</code>
</pre>
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
  <div className="code-toggle"><i className="icon--code"></i></div>
<pre><code className="language-html">&lt;!-- Blue Border Button with Edit Icon --&gt;
&lt;button class="button button--blue button--border"&gt;
&lt;i class="dashing-icon dashing-icon--pencil dashing-icon--blue"&gt;&lt;/i&gt;
Button
&lt;/button&gt;

&lt;!-- Gray Border Button with Help Icon --&gt;
&lt;button class="button button--gray button--border"&gt;
&lt;i class="dashing-icon dashing-icon--question-filled dashing-icon--gray"&gt;&lt;/i&gt;
Button
&lt;/button&gt;</code>
</pre>
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
  <div className="code-toggle"><i className="icon--code"></i></div>
<pre><code className="language-html">&lt;!-- Blue Transparent Button with Search Icon --&gt;
&lt;button class="button button--primary button--transparent"&gt;
&lt;i class="dashing-icon dashing-icon--search dashing-icon--blue"&gt;&lt;/i&gt;
Button
&lt;/button&gt;

&lt;!-- Gray Transparent Button with New-Tab Icon --&gt;
&lt;button class="button button--secondary button--transparent"&gt;
Button
&lt;i class="dashing-icon dashing-icon--new-tab flow-opposite"&gt;&lt;/i&gt;
&lt;/button&gt;</code>
</pre>
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
  <div className="code-toggle"><i className="icon--code"></i></div>
<pre><code className="language-html">&lt;!-- Blue Icon Button with Add Icon --&gt;
&lt;button class="button button--icon button--primary"&gt;
&lt;i class="dashing-icon dashing-icon--add dashing-icon--white"&gt;&lt;/i&gt;
&lt;/button&gt;

&lt;!-- Red Icon Button with Trash Icon --&gt;
&lt;button class="button button--icon button--red"&gt;
&lt;i class="dashing-icon dashing-icon--trash dashing-icon--white"&gt;&lt;/i&gt;
&lt;/button&gt;</code>
</pre>
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
  <div className="code-toggle"><i className="icon--code"></i></div>
<pre><code className="language-html">&lt;!-- Small Blue Icon Button with Add Icon --&gt;
&lt;button class="button button--primary button--icon button--icon--small"&gt;
&lt;i class="dashing-icon dashing-icon--add dashing-icon--white"&gt;&lt;/i&gt;
&lt;/button&gt;

&lt;!-- Small Red Icon Button with Trash Icon --&gt;
&lt;button class="button button--red button--icon button--icon--small"&gt;
&lt;i class="dashing-icon dashing-icon--trash dashing-icon--white"&gt;&lt;/i&gt;
&lt;/button&gt;

&lt;!-- Small Transparent Icon Button with Help Icon --&gt;
&lt;button class="button button--transparent button--icon button--icon--small"&gt;
&lt;i class="dashing-icon dashing-icon--question-filled dashing-icon--gray"&gt;&lt;/i&gt;
&lt;/button&gt;</code>
</pre>
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
  <div className="code-toggle"><i className="icon--code"></i></div>
<pre><code className="language-html">&lt;!-- Blue Main Icon Button with Add Icon --&gt;
&lt;button class="button button--icon button--icon--main button--primary"&gt;
&lt;i class="dashing-icon dashing-icon--add dashing-icon--white"&gt;&lt;/i&gt;
&lt;/button&gt;</code>
</pre>
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
<div className="code-toggle"><i className="icon--code"></i></div>
<pre><code className="language-html">&lt;!-- Blue Toggle Button --&gt;
&lt;ul class="button-group button-group--blue"&gt;
&lt;li class="button--radio"&gt;
  &lt;input type="radio" name="options-blue" id="blue1" checked&gt;
  &lt;label for="blue1" class="button"&gt;Left&lt;/label&gt;
&lt;/li&gt;
&lt;li class="button--radio"&gt;
  &lt;input type="radio" name="options-blue" id="blue2"&gt;
  &lt;label for="blue2" class="button"&gt;Middle&lt;/label&gt;
&lt;/li&gt;
&lt;li class="button--radio"&gt;
  &lt;input type="radio" name="options-blue" id="blue3"&gt;
  &lt;label for="blue3" class="button"&gt;Right&lt;/label&gt;
&lt;/li&gt;
&lt;/ul&gt;</code>
</pre>
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
<div className="code-toggle"><i className="icon--code"></i></div>
<pre><code className="language-html">&lt;!-- Green Toggle Border Button --&gt;
&lt;ul class="button-group button-group--green button-group--border"&gt;
&lt;li class="button--radio"&gt;
  &lt;input type="radio" name="options-green" id="green1" checked&gt;
  &lt;label for="green1" class="button"&gt;Left&lt;/label&gt;
&lt;/li&gt;
&lt;li class="button--radio"&gt;
  &lt;input type="radio" name="options-green" id="green2"&gt;
  &lt;label for="green2" class="button"&gt;Middle&lt;/label&gt;
&lt;/li&gt;
&lt;li class="button--radio"&gt;
  &lt;input type="radio" name="options-green" id="green3"&gt;
  &lt;label for="green3" class="button"&gt;Middle&lt;/label&gt;
&lt;/li&gt;
&lt;li class="button--radio"&gt;
  &lt;input type="radio" name="options-green" id="green4"&gt;
  &lt;label for="green4" class="button"&gt;Middle&lt;/label&gt;
&lt;/li&gt;
&lt;li class="button--radio"&gt;
  &lt;input type="radio" name="options-green" id="green5"&gt;
  &lt;label for="green5" class="button"&gt;Middle&lt;/label&gt;
&lt;/li&gt;
&lt;li class="button--radio"&gt;
  &lt;input type="radio" name="options-green" id="green6"&gt;
  &lt;label for="green6" class="button"&gt;Middle&lt;/label&gt;
&lt;/li&gt;
&lt;li class="button--radio"&gt;
  &lt;input type="radio" name="options-green" id="green7"&gt;
  &lt;label for="green7" class="button"&gt;Right&lt;/label&gt;
&lt;/li&gt;
&lt;/ul&gt;</code>
</pre>
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
<div className="code-toggle"><i className="icon--code"></i></div>
<pre><code className="language-html">&lt;!-- Green Toggle Border Button --&gt;
&lt;ul class="button-group button-group--vertical button-group--gray button-group--border"&gt;
&lt;li class="button--radio"&gt;
  &lt;input type="radio" name="options-gray" id="toggle-gray1" checked&gt;
  &lt;label for="toggle-gray1" class="button"&gt;Top&lt;/label&gt;
&lt;/li&gt;
&lt;li class="button--radio"&gt;
  &lt;input type="radio" name="options-gray" id="toggle-gray2"&gt;
  &lt;label for="toggle-gray2" class="button"&gt;Middle&lt;/label&gt;
&lt;/li&gt;
&lt;li class="button--radio"&gt;
  &lt;input type="radio" name="options-gray" id="toggle-gray3"&gt;
  &lt;label for="toggle-gray3" class="button"&gt;Bottom&lt;/label&gt;
&lt;/li&gt;
&lt;/ul&gt;</code>
</pre>
<pre><code className="language-html">&lt;!-- Use the "_phone" or "_tablet" option to apply the class specifically to that media size --&gt;
&lt;ul class="button-group button-group--vertical_phone button-group--gray button-group--border"&gt;
&lt;/ul&gt;</code>
</pre>
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
  <div className="code-toggle"><i className="icon--code"></i></div>
<pre><code className="language-html">&lt;!-- Round Button --&gt;
&lt;button class="button button--round"&gt;Round Button&lt;/button&gt;

&lt;!-- Smooth Button --&gt;
&lt;button class="button button--smooth"&gt;Smooth Button&lt;/button&gt;

&lt;!-- Square Button --&gt;
&lt;button class="button button--square"&gt;Square Button&lt;/button&gt;</code>
</pre>
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
  <div className="code-toggle"><i className="icon--code"></i></div>
<pre><code className="language-scss">{/* Round Button Theme (Default)*/}


</code>
</pre>
</div>
</div>
    </AppContent>
  </Layout>
)
