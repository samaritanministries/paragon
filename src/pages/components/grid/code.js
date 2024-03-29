import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import Layout from "../../../components/layout";
import SubNav from "../../../components/subnavigation";
import AppContent from "../../../components/appcontent";
import CodeToggle from "../../../components/codetoggle";

const currentPageName = "Grid";
const currentPageNameLower = currentPageName.toLowerCase();

class CssGridCode extends React.Component {

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
          <h4 className="grid-compatibility"><i className="dashing-icon dashing-icon--white dashing-icon--alert-filled" /> You are viewing a grid fallback. This page will mimic grid as closely as it can.</h4>
          <div className="row">
            <div className="column column--full">
              <h2 className="example-header" id="gridWithPadding">Grid with Padding
                <Link to={`${location.pathname}/#gridWithPadding`} className="button button--transparent button--copy-link" />
              </h2>
              <div className="example-container">
                <div className="column column--full">
                  <div className="grid grid-highlight-blue grid-padding">
                    <div className="grid--full">Padded Grid Content</div>
                  </div>
                </div>
              </div>
              <CodeToggle>
                {`<!-- Grid with Padding -->
    <div class="app-content grid-wrapper">
      <div class="grid grid-padding"></div>
    </div>`}
              </CodeToggle>

              <h2 className="example-header" id="gridSeperations">Grid Seperations
                <Link to={`${location.pathname}/#gridSeperations`} className="button button--transparent button--copy-link" />
              </h2>
              <div className="example-container">
                <div className="column column--full">
                  <div className="grid grid--full grid-highlight-blue">
                    <div className="grid--full">.grid--full</div>
                    <div className="grid--half">.grid--half</div>
                    <div className="grid--half">.grid--half</div>
                    <div className="grid--three-fourths">.grid--three-fourths</div>
                    <div className="grid--fourth">.grid--fourth</div>
                    <div className="grid--fourth">.grid--fourth</div>
                    <div className="grid--fourth">.grid--fourth</div>
                    <div className="grid--fourth">.grid--fourth</div>
                    <div className="grid--fourth">.grid--fourth</div>
                    <div className="grid--two-thirds">.grid--two-thirds</div>
                    <div className="grid--third">.grid--third</div>
                    <div className="grid--five-sixths">.grid--five-sixths</div>
                    <div className="grid--sixth">.grid--sixth</div>
                    <div className="grid--sixth">.grid--sixth</div>
                    <div className="grid--sixth">.grid--sixth</div>
                    <div className="grid--sixth">.grid--sixth</div>
                    <div className="grid--sixth">.grid--sixth</div>
                    <div className="grid--sixth">.grid--sixth</div>
                    <div className="grid--sixth">.grid--sixth</div>
                  </div>
                </div>
              </div>
              <CodeToggle>
                {`<!-- Grid Example -->
    <div class="grid">
      <div class="grid--full">.grid--full</div>
      <div class="grid--half">.grid--half</div>
      <div class="grid--half">.grid--half</div>
      <div class="grid--three-fourths">.grid--three-fourths</div>
      <div class="grid--fourth">.grid--fourth</div>
      <div class="grid--fourth">.grid--fourth</div>
      <div class="grid--fourth">.grid--fourth</div>
      <div class="grid--fourth">.grid--fourth</div>
      <div class="grid--fourth">.grid--fourth</div>
      <div class="grid--two-thirds">.grid--two-thirds</div>
      <div class="grid--third">.grid--third</div>
      <div class="grid--five-sixth">.grid--five-sixth</div>
      <div class="grid--sixth">.grid--sixth</div>
      <div class="grid--sixth">.grid--sixth</div>
      <div class="grid--sixth">.grid--sixth</div>
      <div class="grid--sixth">.grid--sixth</div>
      <div class="grid--sixth">.grid--sixth</div>
      <div class="grid--sixth">.grid--sixth</div>
    </div>`}
              </CodeToggle>

              <h2 className="example-header" id="gridMultipleBreakpoints">Multiple Grid Breakpoints
                <Link to={`${location.pathname}/#gridMultipleBreakpoints`} className="button button--transparent button--copy-link" />
              </h2>
              <p>To resize a grid for different breakpoints, use a combination of classes. You can add <code className="example-text">_desktop</code> to any grid class to apply to the desktop breakpoint.</p>
              <div className="example-container">
                <div className="column column--full">
                  <div className="grid grid--full grid-highlight-blue">
                    <div className="grid--two-thirds grid--half_desktop">.grid--two-thirds .grid--half_desktop</div>
                    <div className="grid--third grid--full_desktop">.grid--third .grid--full_desktop</div>
                    <div className="grid--full">.grid--full</div>
                  </div>
                </div>
              </div>
              <CodeToggle>
                {`<!-- Grid Example -->
<div class="grid grid--full grid-highlight-blue">
<!-- Grid is two-thirds on tablet and changes to half on desktop -->
  <div class="grid--two-thirds grid--half_desktop">.grid--two-thirds .grid--half_desktop</div>
  <!-- Grid is one third on tablet and changes to full on desktop -->
  <div class="grid--third grid--full_desktop">.grid--third .grid--full_desktop</div>
  <div class="grid--full">.grid--full</div>
</div>`}
              </CodeToggle>

              <h2 className="example-header" id="nestedGrids">Nested Grids
                <Link to={`${location.pathname}/#nestedGrids`} className="button button--transparent button--copy-link" />
              </h2>
              <div className="example-container">
                <div className="column column--full">
                  <div className="grid grid--full grid-highlight-blue">
                    <div className="grid--full">.grid--full</div>
                    <div className="grid--half">.grid--half</div>
                    <div className="grid--half">.grid--half</div>
                    <div className="grid--three-fourths grid grid-highlight-green">
                      <div className="grid--half">.grid--half</div>
                      <div className="grid--half">.grid--half</div>
                    </div>
                    <div className="grid--fourth">.grid--fourth</div>
                    <div className="grid--two-thirds">.grid--two-thirds</div>
                    <div className="grid--third">.grid--third</div>
                    <div className="grid--sixth">.grid--sixth</div>
                    <div className="grid--five-sixths grid grid-highlight-green">
                      <div className="grid--third">.grid--third</div>
                      <div className="grid--third">.grid--third</div>
                      <div className="grid--third">.grid--third</div>
                      <div className="grid--two-thirds">.grid--two-thirds</div>
                      <div className="grid--third">.grid--third</div>
                    </div>
                  </div>
                </div>
              </div>
              <CodeToggle>
                {`<!-- Nested Grid Example -->
    <div class="grid">
      <div class="grid--full">.grid--full</div>
      <div class="grid--half">.grid--half</div>
      <div class="grid--half">.grid--half</div>
      <div class="grid grid--three-fourths">
        <div class="grid--half">.grid--half</div>
        <div class="grid--half">.grid--half</div>
      </div>
      <div class="grid--fourth">.grid--fourth</div>
      <div class="grid--two-thirds">.grid--two-thirds</div>
      <div class="grid--third">.grid--third</div>
      <div class="grid--sixth">.grid--sixth</div>
      <div class="grid grid--five-sixths">
        <div class="grid--third">.grid--third</div>
        <div class="grid--third">.grid--third</div>
        <div class="grid--third">.grid--third</div>
        <div class="grid--two-thirds">.grid--two-thirds</div>
        <div class="grid--third">.grid--third</div>
      </div>
    </div>`}
              </CodeToggle>

              <h2 className="example-header" id="gridInAndWithCards">Grid in and with Cards
                <Link to={`${location.pathname}/#gridInAndWithCards`} className="button button--transparent button--copy-link" />
              </h2>
              <div className="example-container">
                <div className="column column--full">
                  <div className="grid grid--full grid-highlight">
                    <div className="grid--full">
                      <div className="card">
                        <div className="card--header"><h3>Card Header (.grid--full)</h3></div>
                        <div className="card--content">
                          <div className="grid grid-highlight-blue">
                            <div className="grid--full">.grid--full</div>
                            <div className="grid--half">.grid--half</div>
                            <div className="grid--half">.grid--half</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid--half">
                      <div className="card">
                        <div className="card--header"><h3>Card Header (.grid--half)</h3></div>
                        <div className="card--content">
                          <div className="grid grid-highlight-green">
                            <div className="grid--two-thirds">.grid--two-thirds</div>
                            <div className="grid--third">.grid--third</div>
                            <div className="grid--two-thirds">.grid--two-thirds</div>
                            <div className="grid--third">.grid--third</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid--half">
                      <div className="card">
                        <div className="card--header"><h3>Card Header (.grid--half)</h3></div>
                        <div className="card--content">
                          <div className="grid">
                            <div className="grid--two-thirds">Some Information</div>
                            <div className="grid--third align-right"><Link to="/components/grid/code">LINK</Link></div>
                            <div className="grid--two-thirds">More Information</div>
                            <div className="grid--third align-right"><Link to="/components/grid/code">LINK</Link></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <CodeToggle>
                {`<!-- Grid in and with Cards Example -->
    <div class="grid">

      <div class="grid--full">
        <div class="card">
          <div class="card--header"><h3>Card Header (.grid--full)</h3></div>
          <div class="card--content">
            <div class="grid">
              <div class="grid--full">.grid--full</div>
              <div class="grid--half">.grid--half</div>
              <div class="grid--half">.grid--half</div>
            </div>
          </div>
        </div>
      </div>

      <div class="grid--half">
        <div class="card">
          <div class="card--header"><h3>Card Header (.grid--half)</h3></div>
          <div class="card--content">
            <div class="grid">
              <div class="grid--two-thirds">.grid--two-thirds</div>
              <div class="grid--third">.grid--third</div>
              <div class="grid--two-thirds">.grid--two-thirds</div>
              <div class="grid--third">.grid--third</div>
            </div>
          </div>
        </div>
      </div>

      <div class="grid--half">
        <div class="card">
          <div class="card--header"><h3>Card Header (.grid--half)</h3></div>
          <div class="card--content">
            <div class="grid">
              <div class="grid--two-thirds">Some Information</div>
              <div class="grid--third align-right"><a href="#">LINK</a></div>
              <div class="grid--two-thirds">More Information</div>
              <div class="grid--third align-right"><a href="#">LINK</a></div>
            </div>
          </div>
        </div>
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

export default CssGridCode;
