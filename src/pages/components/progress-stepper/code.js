import React from 'react'

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
          <h2 className="example-header no-margin--top">Progress Stepper Theming <button className="button button--transparent button--copy-link" data-id="copyurl" id="Progress_Theme" /></h2>
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

          <h2 class="example-header">Width Options<button class="button button--transparent button--copy-link" data-id="copyurl" id="Progress_Width" /></h2>
          <p>The width on this progress stepper can be set by an inline style or a class name.</p>
          <ul>
            <li>Inline width: <code class="example-text">style="width: 50%;"</code></li>
            <li>Class width: <code class="example-text">class="progress-bar--2of3"</code></li>
          </ul>
          <div class="row example-container">
            <div class="column column--full">
              <div class="progress">
                <div class="progress-bar" data-id="progress-stepper" style={{ width: "50%" }}></div>
              </div>
              <div class="progress-labels">
                <div class="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 1</a></div>
                <div class="progress-label"><a href="/components/progress-stepper/code">Step 2</a></div>
                <div class="progress-label"><a href="/components/progress-stepper/code">Step 3</a></div>
              </div>
            </div>

            <div class="column column--full">
              <div class="progress">
                <div class="progress-bar progress-bar--2of3" data-id="progress-stepper"></div>
              </div>
              <div class="progress-labels">
                <div class="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 1</a></div>
                <div class="progress-label"><a href="/components/progress-stepper/code">Step 2</a></div>
                <div class="progress-label"><a href="/components/progress-stepper/code">Step 3</a></div>
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

          <h2 class="example-header">Two Steps <button class="button button--transparent button--copy-link" data-id="copyurl" id="Two_Steps" /></h2>
          <div class="row example-container">
            <div class="column column--full">
              <div class="progress">
                <div class="progress-bar" data-id="progress-stepper" style={{ width: "25%" }}></div>
              </div>
              <div class="progress-labels">
                <div class="progress-label"><a href="/components/progress-stepper/code">Step 1</a></div>
                <div class="progress-label"><a href="/components/progress-stepper/code">Step 2</a></div>
              </div>
            </div>

            <div class="column column--full">
              <div class="progress">
                <div class="progress-bar" data-id="progress-stepper" style={{ width: "75%" }}></div>
              </div>
              <div class="progress-labels">
                <div class="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 1</a></div>
                <div class="progress-label"><a href="/components/progress-stepper/code">Step 2</a></div>
              </div>
            </div>

            <div class="column column--full">
              <div class="progress">
                <div class="progress-bar" data-id="progress-stepper" style={{ width: "100%" }}></div>
              </div>
              <div class="progress-labels">
                <div class="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 1</a></div>
                <div class="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 2</a></div>
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

          <h2 class="example-header">Three Steps <button class="button button--transparent button--copy-link" data-id="copyurl" id="Three_Steps" /></h2>
          <div class="row example-container">
            <div class="column column--full">
              <div class="progress">
                <div class="progress-bar" data-id="progress-stepper" style={{ width: "16.666%" }}></div>
              </div>
              <div class="progress-labels">
                <div class="progress-label"><a href="/components/progress-stepper/code">Step 1</a></div>
                <div class="progress-label"><a href="/components/progress-stepper/code">Step 2</a></div>
                <div class="progress-label"><a href="/components/progress-stepper/code">Step 3</a></div>
              </div>
            </div>

            <div class="column column--full">
              <div class="progress">
                <div class="progress-bar" data-id="progress-stepper" style={{ width: "50%" }}></div>
              </div>
              <div class="progress-labels">
                <div class="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 1</a></div>
                <div class="progress-label"><a href="/components/progress-stepper/code">Step 2</a></div>
                <div class="progress-label"><a href="/components/progress-stepper/code">Step 3</a></div>
              </div>
            </div>

            <div class="column column--full">
              <div class="progress">
                <div class="progress-bar" data-id="progress-stepper" style={{ width: "83.333%" }}></div>
              </div>
              <div class="progress-labels">
                <div class="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 1</a></div>
                <div class="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 2</a></div>
                <div class="progress-label"><a href="/components/progress-stepper/code">Step 3</a></div>
              </div>
            </div>

            <div class="column column--full">
              <div class="progress">
                <div class="progress-bar" data-id="progress-stepper" style={{ width: "100%" }}></div>
              </div>
              <div class="progress-labels">
                <div class="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 1</a></div>
                <div class="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 2</a></div>
                <div class="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 3</a></div>
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

          <h2 class="example-header">Four Steps <button class="button button--transparent button--copy-link" data-id="copyurl" id="Four_Steps" /></h2>
          <div class="row example-container">
            <div class="column column--full">
              <div class="progress">
                <div class="progress-bar" data-id="progress-stepper" style={{ width: "12.5%" }}></div>
              </div>
              <div class="progress-labels">
                <div class="progress-label"><a href="/components/progress-stepper/code">Step 1</a></div>
                <div class="progress-label"><a href="/components/progress-stepper/code">Step 2</a></div>
                <div class="progress-label"><a href="/components/progress-stepper/code">Step 3</a></div>
                <div class="progress-label"><a href="/components/progress-stepper/code">Step 4</a></div>
              </div>
            </div>

            <div class="column column--full">
              <div class="progress">
                <div class="progress-bar" data-id="progress-stepper" style={{ width: "37.5%" }}></div>
              </div>
              <div class="progress-labels">
                <div class="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 1</a></div>
                <div class="progress-label"><a href="/components/progress-stepper/code">Step 2</a></div>
                <div class="progress-label"><a href="/components/progress-stepper/code">Step 3</a></div>
                <div class="progress-label"><a href="/components/progress-stepper/code">Step 4</a></div>
              </div>
            </div>

            <div class="column column--full">
              <div class="progress">
                <div class="progress-bar" data-id="progress-stepper" style={{ width: "62.5%" }}></div>
              </div>
              <div class="progress-labels">
                <div class="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 1</a></div>
                <div class="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 2</a></div>
                <div class="progress-label"><a href="/components/progress-stepper/code">Step 3</a></div>
                <div class="progress-label"><a href="/components/progress-stepper/code">Step 4</a></div>
              </div>
            </div>

            <div class="column column--full">
              <div class="progress">
                <div class="progress-bar" data-id="progress-stepper" style={{ width: "87.5%" }}></div>
              </div>
              <div class="progress-labels">
                <div class="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 1</a></div>
                <div class="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 2</a></div>
                <div class="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 3</a></div>
                <div class="progress-label"><a href="/components/progress-stepper/code">Step 4</a></div>
              </div>
            </div>

            <div class="column column--full">
              <div class="progress">
                <div class="progress-bar" data-id="progress-stepper" style={{ width: "100%" }}></div>
              </div>
              <div class="progress-labels">
                <div class="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 1</a></div>
                <div class="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 2</a></div>
                <div class="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 3</a></div>
                <div class="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 4</a></div>
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
