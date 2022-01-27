import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import Layout from "../../../components/layout";
import SubNav from "../../../components/subnavigation";
import AppContent from "../../../components/appcontent";
import CodeToggle from "../../../components/codetoggle";
import CodeToggleSCSS from "../../../components/codetoggle-scss";

const currentPageName = "Progress Stepper";
const currentPageNameLower = currentPageName.toLowerCase();

class ProgressStepperCode extends React.Component {

  static propTypes = { location: PropTypes.object.isRequired }

  render() {
    const { location } = this.props;

    return (
      <Layout>

        <header className="subnav">
          <h1>{currentPageName}</h1>
          <SubNav pageName={currentPageNameLower} />
        </header>
        <AppContent>
          <div className="grid grid-padding">

            <h2 id="progressStepperTheming">Progress Stepper Theming
              <Link to={`${location.pathname}/#progressStepperTheming`} className="button button--transparent button--copy-link" />
            </h2>
            <p>You can customize the color of your progress stepper and completed labels by altering the variable <code className="example-text">$progress-color</code> in your theme file.</p>

            <div className="example-container hide-HTML-code">
              <div className="progress">
                <div className="progress-bar" data-id="progress-stepper" style={{ width: "75%" }} />
              </div>
              <div className="progress-labels mb-space-m">
                <div className="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 1</a></div>
                <div className="progress-label"><a href="/components/progress-stepper/code">Step 2</a></div>
              </div>
              <CodeToggle />
              <CodeToggleSCSS>
                {`//Include this variable in your theme file to customize the color
$progress-color: $color-green;`}
              </CodeToggleSCSS>
            </div>


            <h2 className="mt-space-xl" id="widthOptions">Width Options
              <Link to={`${location.pathname}/#widthOptions`} className="button button--transparent button--copy-link" />
            </h2>
            <p>The width on this progress stepper can be set by an inline style or a class name.</p>
            <ul>
              <li>Inline width: <code className="example-text">style="width: 50%;"</code></li>
              <li>Class width: <code className="example-text">className="progress-bar--2of3"</code></li>
            </ul>

            <div className="example-container">
              <div className="progress">
                <div className="progress-bar" data-id="progress-stepper" style={{ width: "50%" }} />
              </div>
              <div className="progress-labels">
                <div className="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 1</a></div>
                <div className="progress-label"><a href="/components/progress-stepper/code">Step 2</a></div>
                <div className="progress-label"><a href="/components/progress-stepper/code">Step 3</a></div>
              </div>

              <div className="progress mt-space-m">
                <div className="progress-bar progress-bar--2of3" data-id="progress-stepper" />
              </div>
              <div className="progress-labels mb-space-m">
                <div className="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 1</a></div>
                <div className="progress-label"><a href="/components/progress-stepper/code">Step 2</a></div>
                <div className="progress-label"><a href="/components/progress-stepper/code">Step 3</a></div>
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
            </div>

            <h2 className="mt-space-xl" id="twoSteps">Two Steps
              <Link to={`${location.pathname}/#twoSteps`} className="button button--transparent button--copy-link" />
            </h2>

            <div className="example-container">
              <div className="progress">
                <div className="progress-bar" data-id="progress-stepper" style={{ width: "25%" }} />
              </div>
              <div className="progress-labels">
                <div className="progress-label"><a href="/components/progress-stepper/code">Step 1</a></div>
                <div className="progress-label"><a href="/components/progress-stepper/code">Step 2</a></div>
              </div>

              <div className="progress mt-space-m">
                <div className="progress-bar" data-id="progress-stepper" style={{ width: "75%" }} />
              </div>
              <div className="progress-labels">
                <div className="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 1</a></div>
                <div className="progress-label"><a href="/components/progress-stepper/code">Step 2</a></div>
              </div>

              <div className="progress mt-space-m">
                <div className="progress-bar" data-id="progress-stepper" style={{ width: "100%" }} />
              </div>
              <div className="progress-labels mb-space-m">
                <div className="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 1</a></div>
                <div className="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 2</a></div>
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
            </div>
            <h2 className="mt-space-xl" id="threeSteps">Three Steps
              <Link to={`${location.pathname}/#threeSteps`} className="button button--transparent button--copy-link" />
            </h2>

            <div className="example-container">
              <div className="progress">
                <div className="progress-bar" data-id="progress-stepper" style={{ width: "16.666%" }} />
              </div>
              <div className="progress-labels">
                <div className="progress-label"><a href="/components/progress-stepper/code">Step 1</a></div>
                <div className="progress-label"><a href="/components/progress-stepper/code">Step 2</a></div>
                <div className="progress-label"><a href="/components/progress-stepper/code">Step 3</a></div>
              </div>

              <div className="progress mt-space-m">
                <div className="progress-bar" data-id="progress-stepper" style={{ width: "50%" }} />
              </div>
              <div className="progress-labels">
                <div className="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 1</a></div>
                <div className="progress-label"><a href="/components/progress-stepper/code">Step 2</a></div>
                <div className="progress-label"><a href="/components/progress-stepper/code">Step 3</a></div>
              </div>

              <div className="progress mt-space-m">
                <div className="progress-bar" data-id="progress-stepper" style={{ width: "83.333%" }} />
              </div>
              <div className="progress-labels">
                <div className="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 1</a></div>
                <div className="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 2</a></div>
                <div className="progress-label"><a href="/components/progress-stepper/code">Step 3</a></div>
              </div>

              <div className="progress mt-space-m">
                <div className="progress-bar" data-id="progress-stepper" style={{ width: "100%" }} />
              </div>
              <div className="progress-labels mb-space-m">
                <div className="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 1</a></div>
                <div className="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 2</a></div>
                <div className="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 3</a></div>
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
            </div>
            <h2 className="mt-space-xl" id="fourSteps">Four Steps
              <Link to={`${location.pathname}/#fourSteps`} className="button button--transparent button--copy-link" />
            </h2>

            <div className="example-container">
              <div className="progress">
                <div className="progress-bar" data-id="progress-stepper" style={{ width: "12.5%" }} />
              </div>
              <div className="progress-labels">
                <div className="progress-label"><a href="/components/progress-stepper/code">Step 1</a></div>
                <div className="progress-label"><a href="/components/progress-stepper/code">Step 2</a></div>
                <div className="progress-label"><a href="/components/progress-stepper/code">Step 3</a></div>
                <div className="progress-label"><a href="/components/progress-stepper/code">Step 4</a></div>
              </div>

              <div className="progress mt-space-m">
                <div className="progress-bar" data-id="progress-stepper" style={{ width: "37.5%" }} />
              </div>
              <div className="progress-labels">
                <div className="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 1</a></div>
                <div className="progress-label"><a href="/components/progress-stepper/code">Step 2</a></div>
                <div className="progress-label"><a href="/components/progress-stepper/code">Step 3</a></div>
                <div className="progress-label"><a href="/components/progress-stepper/code">Step 4</a></div>
              </div>

              <div className="progress mt-space-m">
                <div className="progress-bar" data-id="progress-stepper" style={{ width: "62.5%" }} />
              </div>
              <div className="progress-labels">
                <div className="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 1</a></div>
                <div className="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 2</a></div>
                <div className="progress-label"><a href="/components/progress-stepper/code">Step 3</a></div>
                <div className="progress-label"><a href="/components/progress-stepper/code">Step 4</a></div>
              </div>

              <div className="progress mt-space-m">
                <div className="progress-bar" data-id="progress-stepper" style={{ width: "87.5%" }} />
              </div>
              <div className="progress-labels">
                <div className="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 1</a></div>
                <div className="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 2</a></div>
                <div className="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 3</a></div>
                <div className="progress-label"><a href="/components/progress-stepper/code">Step 4</a></div>
              </div>

              <div className="progress mt-space-m">
                <div className="progress-bar" data-id="progress-stepper" style={{ width: "100%" }} />
              </div>
              <div className="progress-labels mb-space-m">
                <div className="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 1</a></div>
                <div className="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 2</a></div>
                <div className="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 3</a></div>
                <div className="progress-label progress-label--completed"><a href="/components/progress-stepper/code">Step 4</a></div>
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
    );
  }

}

export default ProgressStepperCode;
