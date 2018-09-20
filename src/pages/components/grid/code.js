import React from 'react'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'
import CodeToggle from '../../../components/codetoggle'

const currentPageName = "Grid";
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
          <div className="row row--example">
            <div className="column column--full column--example">
              <div className="grid--example">.column--full</div>
            </div>
          </div>

          <div className="row row--example">
            <div className="column column--half column--example">
              <div className="grid--example">.column--half</div>
            </div>
            <div className="column column--half column--example">
              <div className="grid--example">.column--half</div>
            </div>
          </div>

          <div className="row row--example">
            <div className="column column--third column--example">
              <div className="grid--example">.column--third</div>
            </div>
            <div className="column column--third column--example">
              <div className="grid--example">.column--third</div>
            </div>
            <div className="column column--third column--example">
              <div className="grid--example">.column--third</div>
            </div>
          </div>

          <div className="row row--example">
            <div className="column column--third column--example">
              <div className="grid--example">.column--third</div>
            </div>
            <div className="column column--two-thirds column--example">
              <div className="grid--example">.column--two-thirds</div>
            </div>
          </div>

          <div className="row row--example">
            <div className="column column--fourth column--example">
              <div className="grid--example">.column--fourth</div>
            </div>
            <div className="column column--fourth column--example">
              <div className="grid--example">.column--fourth</div>
            </div>
            <div className="column column--fourth column--example">
              <div className="grid--example">.column--fourth</div>
            </div>
            <div className="column column--fourth column--example">
              <div className="grid--example">.column--fourth</div>
            </div>
          </div>

          <div className="row row--example">
            <div className="column column--fourth column--example">
              <div className="grid--example">.column--fourth</div>
            </div>
            <div className="column column--three-fourths column--example">
              <div className="grid--example">.column--three-fourths</div>
            </div>
          </div>

          <div className="row row--example">
            <div className="column column--sixth column--example">
              <div className="grid--example">.column--sixth</div>
            </div>
            <div className="column column--sixth column--example">
              <div className="grid--example">.column--sixth</div>
            </div>
            <div className="column column--sixth column--example">
              <div className="grid--example">.column--sixth</div>
            </div>
            <div className="column column--sixth column--example">
              <div className="grid--example">.column--sixth</div>
            </div>
            <div className="column column--sixth column--example">
              <div className="grid--example">.column--sixth</div>
            </div>
            <div className="column column--sixth column--example">
              <div className="grid--example">.column--sixth</div>
            </div>
          </div>

          <div className="row row--example">
            <div className="column column--eighth column--example">
              <div className="grid--example">.column--eighth</div>
            </div>
            <div className="column column--eighth column--example">
              <div className="grid--example">.column--eighth</div>
            </div>
            <div className="column column--eighth column--example">
              <div className="grid--example">.column--eighth</div>
            </div>
            <div className="column column--eighth column--example">
              <div className="grid--example">.column--eighth</div>
            </div>
            <div className="column column--eighth column--example">
              <div className="grid--example">.column--eighth</div>
            </div>
            <div className="column column--eighth column--example">
              <div className="grid--example">.column--eighth</div>
            </div>
            <div className="column column--eighth column--example">
              <div className="grid--example">.column--eighth</div>
            </div>
            <div className="column column--eighth column--example">
              <div className="grid--example">.column--eighth</div>
            </div>
          </div>

          <div className="row row--example">
            <div className="column column--full column--example">
              <div className="row row--example row--nested">
                <div className="column column--half column--nested column--example">
                  <div className="grid--example">.column--half .column--nested</div>
                </div>
                <div className="column column--half column--nested column--example">
                  <div className="grid--example">.column--half .column--nested</div>
                </div>
              </div>
            </div>
          </div>

          <div className="row row--example">
            <div className="column column--full column--example">
              <div className="row row--example row--nested">
                <div className="column column--third column--nested column--example">
                  <div className="grid--example">.column--third .column--nested</div>
                </div>
                <div className="column column--third column--nested column--example">
                  <div className="grid--example">.column--third .column--nested</div>
                </div>
                <div className="column column--third column--nested column--example">
                  <div className="grid--example">.column--third .column--nested</div>
                </div>
              </div>
            </div>
          </div>

          <div className="row row--example">
            <div className="column column--full column--example">
              <div className="row row--example row--nested">
                <div className="column column--fourth column--nested column--example">
                  <div className="grid--example">.column--fourth .column--nested</div>
                </div>
                <div className="column column--fourth column--nested column--example">
                  <div className="grid--example">.column--fourth .column--nested</div>
                </div>
                <div className="column column--fourth column--nested column--example">
                  <div className="grid--example">.column--fourth .column--nested</div>
                </div>
                <div className="column column--fourth column--nested column--example">
                  <div className="grid--example">.column--fourth .column--nested</div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="example-header"> Grid Example <button className="button button--transparent button--copy-link" data-id="copyurl" id="Grid_Example" /></h2>
          <div className="row example-container">
            <div className="column column--full">
              <fieldset className="row">
                <div className="column column--full column--example">
                  <label>Example</label>
                  <input type="text"></input>
                </div>
              </fieldset>
              <fieldset className="row">
                <div className="column column--third column--example">
                  <label>Example</label>
                  <input type="text"></input>
                </div>
                <div className="column column--third column--example">
                  <label>Example</label>
                  <input type="text"></input>
                </div>
                <div className="column column--third column--example">
                  <label>Example</label>
                  <input type="text"></input>
                </div>
              </fieldset>
            </div>
          </div>
          <CodeToggle>
{`<!-- Grid with inputs -->
<div class="row example-container">
  <div class="column column--full">
    <fieldset class="row">
      <div class="column column--full column--example">
        <label>Example</label>
        <input type="text">
      </div>
    </fieldset>
    <fieldset class="row">
      <div class="column column--third column--example">
        <label>Example</label>
        <input type="text">
      </div>
      <div class="column column--third column--example">
        <label>Example</label>
        <input type="text">
      </div>
      <div class="column column--third column--example">
        <label>Example</label>
        <input type="text">
      </div>
    </div>
  </div>
</div>`}
          </CodeToggle>

          <h2 class="example-header">Nested Grid Example <button class="button button--transparent button--copy-link" data-id="copyurl" id="Nested_Grid_Example" /></h2>
          <p>Use the nested grid when stacking cards, which will give you a consistent gutter all around.</p>
          <div class="row example-container">
            <div class="column column--full">
              <div class="row row--nested">
                <div class="column column--fourth column--nested column--example">
                  <div class="card remove-margin" style={{ padding: "1rem"}}>box</div>
                </div>
                <div class="column column--fourth column--nested column--example">
                  <div class="card remove-margin" style={{ padding: "1rem"}}>box</div>
                </div>
                <div class="column column--fourth column--nested column--example">
                  <div class="card remove-margin" style={{ padding: "1rem"}}>box</div>
                </div>
                <div class="column column--fourth column--nested column--example">
                  <div class="card remove-margin" style={{ padding: "1rem"}}>box</div>
                </div>
              </div>
              <div class="row row--nested">
                <div class="column column--fourth column--nested column--example">
                  <div class="card remove-margin" style={{ padding: "1rem"}}>box</div>
                </div>
                <div class="column column--fourth column--nested column--example">
                  <div class="card remove-margin" style={{ padding: "1rem"}}>box</div>
                </div>
                <div class="column column--fourth column--nested column--example">
                  <div class="card remove-margin" style={{ padding: "1rem"}}>box</div>
                </div>
                <div class="column column--fourth column--nested column--example">
                  <div class="card remove-margin" style={{ padding: "1rem"}}>box</div>
                </div>
              </div>
            </div>
          </div>
          <CodeToggle>
{`<!-- Nested Grid with cards -->
<div class="row example-container">
  <div class="column column--full">
    <div class="row row--nested">
      <div class="column column--fourth column--nested">
        <div class="card remove-margin">box</div>
      </div>
      <div class="column column--fourth column--nested">
        <div class="card remove-margin">box</div>
      </div>
      <div class="column column--fourth column--nested">
        <div class="card remove-margin">box</div>
      </div>
      <div class="column column--fourth column--nested">
        <div class="card remove-margin">box</div>
      </div>
    </div>
    <div class="row row--nested">
      <div class="column column--fourth column--nested">
        <div class="card remove-margin">box</div>
      </div>
      <div class="column column--fourth column--nested">
        <div class="card remove-margin">box</div>
      </div>
      <div class="column column--fourth column--nested">
        <div class="card remove-margin">box</div>
      </div>
      <div class="column column--fourth column--nested">
        <div class="card remove-margin">box</div>
      </div>
    </div>
  </div>
</div>`}
          </CodeToggle>

        </div>
      </div>
    </AppContent>
  </Layout>
)
