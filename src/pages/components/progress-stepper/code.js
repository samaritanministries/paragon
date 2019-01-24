import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'
import CodeToggle from '../../../components/codetoggle'
import CodeToggleSCSS from '../../../components/codetoggle-scss'

const currentPageName = "Progress Stepper";
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
          <h2 className="example-header no-margin--top" id="progressStepperTheming">Progress Stepper Theming
            <Link to={window.location.pathname + "/#progressStepperTheming"} className="button button--transparent button--copy-link"></Link>
          </h2>
          <p>You can customize the color of your progress stepper and completed labels by altering the variable <code className="example-text">$progress-color</code> in your theme file.</p>
          <div className="row example-container hide-HTML-code">
            <div className="column column--full">
              <div className="progress">
                <div className="progress-bar" data-id="progress-stepper" style={{ width: "75%" }}></div>
              </div>
              <div className="progress-labels">
                <div className="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 1</a></div>
                <div className="progress-label"><a href="/components/progress-stepper/code">Step 2</a></div>
              </div>
            </div>
          </div>
          <CodeToggle>
          </CodeToggle>
          <CodeToggleSCSS>
{`//Include this variable in your theme file to customize the color
$progress-color: $green;`}
          </CodeToggleSCSS>

          <h2 className="example-header" id="widthOptions">Width Options
            <Link to={window.location.pathname + "/#widthOptions"} className="button button--transparent button--copy-link"></Link>
          </h2>
          <p>The width on this progress stepper can be set by an inline style or a class name.</p>
          <ul>
            <li>Inline width: <code className="example-text">style="width: 50%;"</code></li>
            <li>Class width: <code className="example-text">className="progress-bar--2of3"</code></li>
          </ul>
          <div className="row example-container">
            <div className="column column--full">
              <div className="progress">
                <div className="progress-bar" data-id="progress-stepper" style={{ width: "50%" }}></div>
              </div>
              <div className="progress-labels">
                <div className="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 1</a></div>
                <div className="progress-label"><a href="/components/progress-stepper/code">Step 2</a></div>
                <div className="progress-label"><a href="/components/progress-stepper/code">Step 3</a></div>
              </div>
            </div>

            <div className="column column--full">
              <div className="progress">
                <div className="progress-bar progress-bar--2of3" data-id="progress-stepper"></div>
              </div>
              <div className="progress-labels">
                <div className="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 1</a></div>
                <div className="progress-label"><a href="/components/progress-stepper/code">Step 2</a></div>
                <div className="progress-label"><a href="/components/progress-stepper/code">Step 3</a></div>
              </div>
            </div>
          </div>
          <CodeToggle>
{`<!-- First Step -->
<div class="column column--full">
  <div class="progress">
    <div class="progress-bar" data-id="progress-stepper" style="width: 50%;"></div>
  </div>
  <div class="progress-labels">
    <div class="progress-label progress-label--completed"><a href="#">Step 1</a></div>
    <div class="progress-label"><a href="#">Step 2</a></div>
    <div class="progress-label"><a href="#">Step 3</a></div>
  </div>
</div>

<div class="column column--full">
  <div class="progress">
    <div class="progress-bar progress-bar--2of3" data-id="progress-stepper"></div>
  </div>
  <div class="progress-labels">
    <div class="progress-label progress-label--completed"><a href="#">Step 1</a></div>
    <div class="progress-label"><a href="#">Step 2</a></div>
    <div class="progress-label"><a href="#">Step 3</a></div>
  </div>
</div>`}
          </CodeToggle>

          <h2 className="example-header" id="twoSteps">Two Steps
            <Link to={window.location.pathname + "/#twoSteps"} className="button button--transparent button--copy-link"></Link>
          </h2>
          <div className="row example-container">
            <div className="column column--full">
              <div className="progress">
                <div className="progress-bar" data-id="progress-stepper" style={{ width: "25%" }}></div>
              </div>
              <div className="progress-labels">
                <div className="progress-label"><a href="/components/progress-stepper/code">Step 1</a></div>
                <div className="progress-label"><a href="/components/progress-stepper/code">Step 2</a></div>
              </div>
            </div>

            <div className="column column--full">
              <div className="progress">
                <div className="progress-bar" data-id="progress-stepper" style={{ width: "75%" }}></div>
              </div>
              <div className="progress-labels">
                <div className="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 1</a></div>
                <div className="progress-label"><a href="/components/progress-stepper/code">Step 2</a></div>
              </div>
            </div>

            <div className="column column--full">
              <div className="progress">
                <div className="progress-bar" data-id="progress-stepper" style={{ width: "100%" }}></div>
              </div>
              <div className="progress-labels">
                <div className="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 1</a></div>
                <div className="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 2</a></div>
              </div>
            </div>
          </div>
          <CodeToggle>
{`<!-- First Step -->
<div class="column column--full">
  <div class="progress">
    <div class="progress-bar" data-id="progress-stepper" style="width: 25%;"></div>
  </div>
  <div class="progress-labels">
    <div class="progress-label progress-label--current">Step 1</div>
    <div class="progress-label">Step 2</div>
  </div>
</div>

<!-- Second Step -->
<div class="column column--full">
  <div class="progress">
    <div class="progress-bar" data-id="progress-stepper" style="width: 75%;"></div>
  </div>
  <div class="progress-labels">
    <div class="progress-label progress-label--current">Step 1</div>
    <div class="progress-label">Step 2</div>
  </div>
</div>

<!-- Completed Step -->
<div class="column column--full">
  <div class="progress">
    <div class="progress-bar" data-id="progress-stepper" style="width: 25%;"></div>
  </div>
  <div class="progress-labels">
    <div class="progress-label progress-label--current">Step 1</div>
    <div class="progress-label">Step 2</div>
  </div>
</div>`}
          </CodeToggle>

          <h2 className="example-header" id="threeSteps">Three Steps
            <Link to={window.location.pathname + "/#threeSteps"} className="button button--transparent button--copy-link"></Link>
          </h2>
          <div className="row example-container">
            <div className="column column--full">
              <div className="progress">
                <div className="progress-bar" data-id="progress-stepper" style={{ width: "16.666%" }}></div>
              </div>
              <div className="progress-labels">
                <div className="progress-label"><a href="/components/progress-stepper/code">Step 1</a></div>
                <div className="progress-label"><a href="/components/progress-stepper/code">Step 2</a></div>
                <div className="progress-label"><a href="/components/progress-stepper/code">Step 3</a></div>
              </div>
            </div>

            <div className="column column--full">
              <div className="progress">
                <div className="progress-bar" data-id="progress-stepper" style={{ width: "50%" }}></div>
              </div>
              <div className="progress-labels">
                <div className="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 1</a></div>
                <div className="progress-label"><a href="/components/progress-stepper/code">Step 2</a></div>
                <div className="progress-label"><a href="/components/progress-stepper/code">Step 3</a></div>
              </div>
            </div>

            <div className="column column--full">
              <div className="progress">
                <div className="progress-bar" data-id="progress-stepper" style={{ width: "83.333%" }}></div>
              </div>
              <div className="progress-labels">
                <div className="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 1</a></div>
                <div className="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 2</a></div>
                <div className="progress-label"><a href="/components/progress-stepper/code">Step 3</a></div>
              </div>
            </div>

            <div className="column column--full">
              <div className="progress">
                <div className="progress-bar" data-id="progress-stepper" style={{ width: "100%" }}></div>
              </div>
              <div className="progress-labels">
                <div className="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 1</a></div>
                <div className="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 2</a></div>
                <div className="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 3</a></div>
              </div>
            </div>
          </div>
          <CodeToggle>
{`<!-- First Step -->
<div class="column column--full">
  <div class="progress">
    <div class="progress-bar" data-id="progress-stepper" style="width: 16.666%;"></div>
  </div>
  <div class="progress-labels">
    <div class="progress-label"><a href="#">Step 1</a></div>
    <div class="progress-label"><a href="#">Step 2</a></div>
    <div class="progress-label"><a href="#">Step 3</a></div>
  </div>
</div>

<!-- Second Step -->
<div class="column column--full">
  <div class="progress">
    <div class="progress-bar" data-id="progress-stepper" style="width: 50%;"></div>
  </div>
  <div class="progress-labels">
    <div class="progress-label progress-label--completed"><a href="#">Step 1</a></div>
    <div class="progress-label"><a href="#">Step 2</a></div>
    <div class="progress-label"><a href="#">Step 3</a></div>
  </div>
</div>

<!-- Third Step -->
<div class="column column--full">
  <div class="progress">
    <div class="progress-bar" data-id="progress-stepper" style="width: 83.333%;"></div>
  </div>
  <div class="progress-labels">
    <div class="progress-label progress-label--completed"><a href="#">Step 1</a></div>
    <div class="progress-label progress-label--completed"><a href="#">Step 2</a></div>
    <div class="progress-label"><a href="#">Step 3</a></div>
  </div>
</div>

<!-- Completed Step -->
<div class="column column--full">
  <div class="progress">
    <div class="progress-bar" data-id="progress-stepper" style="width: 100%;"></div>
  </div>
  <div class="progress-labels">
    <div class="progress-label progress-label--completed"><a href="#">Step 1</a></div>
    <div class="progress-label progress-label--completed"><a href="#">Step 2</a></div>
    <div class="progress-label progress-label--completed"><a href="#">Step 3</a></div>
  </div>
</div>`}
          </CodeToggle>

          <h2 className="example-header" id="fourSteps">Four Steps 
            <Link to={window.location.pathname + "/#fourSteps"} className="button button--transparent button--copy-link"></Link>
          </h2>
          <div className="row example-container">
            <div className="column column--full">
              <div className="progress">
                <div className="progress-bar" data-id="progress-stepper" style={{ width: "12.5%" }}></div>
              </div>
              <div className="progress-labels">
                <div className="progress-label"><a href="/components/progress-stepper/code">Step 1</a></div>
                <div className="progress-label"><a href="/components/progress-stepper/code">Step 2</a></div>
                <div className="progress-label"><a href="/components/progress-stepper/code">Step 3</a></div>
                <div className="progress-label"><a href="/components/progress-stepper/code">Step 4</a></div>
              </div>
            </div>

            <div className="column column--full">
              <div className="progress">
                <div className="progress-bar" data-id="progress-stepper" style={{ width: "37.5%" }}></div>
              </div>
              <div className="progress-labels">
                <div className="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 1</a></div>
                <div className="progress-label"><a href="/components/progress-stepper/code">Step 2</a></div>
                <div className="progress-label"><a href="/components/progress-stepper/code">Step 3</a></div>
                <div className="progress-label"><a href="/components/progress-stepper/code">Step 4</a></div>
              </div>
            </div>

            <div className="column column--full">
              <div className="progress">
                <div className="progress-bar" data-id="progress-stepper" style={{ width: "62.5%" }}></div>
              </div>
              <div className="progress-labels">
                <div className="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 1</a></div>
                <div className="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 2</a></div>
                <div className="progress-label"><a href="/components/progress-stepper/code">Step 3</a></div>
                <div className="progress-label"><a href="/components/progress-stepper/code">Step 4</a></div>
              </div>
            </div>

            <div className="column column--full">
              <div className="progress">
                <div className="progress-bar" data-id="progress-stepper" style={{ width: "87.5%" }}></div>
              </div>
              <div className="progress-labels">
                <div className="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 1</a></div>
                <div className="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 2</a></div>
                <div className="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 3</a></div>
                <div className="progress-label"><a href="/components/progress-stepper/code">Step 4</a></div>
              </div>
            </div>

            <div className="column column--full">
              <div className="progress">
                <div className="progress-bar" data-id="progress-stepper" style={{ width: "100%" }}></div>
              </div>
              <div className="progress-labels">
                <div className="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 1</a></div>
                <div className="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 2</a></div>
                <div className="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 3</a></div>
                <div className="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 4</a></div>
              </div>
            </div>
          </div>
          <CodeToggle>
{`<!-- First Step -->
<div class="column column--full">
  <div class="progress">
    <div class="progress-bar" data-id="progress-stepper" style="width: 12.5%;"></div>
  </div>
  <div class="progress-labels">
    <div class="progress-label"><a href="#">Step 1</a></div>
    <div class="progress-label"><a href="#">Step 2</a></div>
    <div class="progress-label"><a href="#">Step 3</a></div>
    <div class="progress-label"><a href="#">Step 4</a></div>
  </div>
</div>

<!-- Second Step -->
<div class="column column--full">
  <div class="progress">
    <div class="progress-bar" data-id="progress-stepper" style="width: 37.5%;"></div>
  </div>
  <div class="progress-labels">
    <div class="progress-label progress-label--completed"><a href="#">Step 1</a></div>
    <div class="progress-label"><a href="#">Step 2</a></div>
    <div class="progress-label"><a href="#">Step 3</a></div>
    <div class="progress-label"><a href="#">Step 4</a></div>
  </div>
</div>

<!-- Third Step -->
<div class="column column--full">
  <div class="progress">
    <div class="progress-bar" data-id="progress-stepper" style="width: 62.5%;"></div>
  </div>
  <div class="progress-labels">
    <div class="progress-label progress-label--completed"><a href="#">Step 1</a></div>
    <div class="progress-label progress-label--completed"><a href="#">Step 2</a></div>
    <div class="progress-label"><a href="#">Step 3</a></div>
    <div class="progress-label"><a href="#">Step 4</a></div>
  </div>
</div>

<!-- Fourth Step -->
<div class="column column--full">
  <div class="progress">
    <div class="progress-bar" data-id="progress-stepper" style="width: 87.5%;"></div>
  </div>
  <div class="progress-labels">
    <div class="progress-label progress-label--completed"><a href="#">Step 1</a></div>
    <div class="progress-label progress-label--completed"><a href="#">Step 2</a></div>
    <div class="progress-label progress-label--completed"><a href="#">Step 3</a></div>
    <div class="progress-label"><a href="#">Step 4</a></div>
  </div>
</div>

<!-- Completed Step -->
<div class="column column--full">
  <div class="progress">
    <div class="progress-bar" data-id="progress-stepper" style="width: 100%;"></div>
  </div>
  <div class="progress-labels">
    <div class="progress-label progress-label--completed"><a href="#">Step 1</a></div>
    <div class="progress-label progress-label--completed"><a href="#">Step 2</a></div>
    <div class="progress-label progress-label--completed"><a href="#">Step 3</a></div>
    <div class="progress-label progress-label--completed"><a href="#">Step 4</a></div>
  </div>
</div>`}
          </CodeToggle>

        </div>
      </div>
    </AppContent>
  </Layout>
)
