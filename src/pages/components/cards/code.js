import React from 'react'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'
import CodeToggle from '../../../components/codetoggle'

const currentPageName = "Cards";
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

        <h2 className="example-header no-margin--top">Default Card <button className="button button--transparent button--copy-link" id="Default_Card"></button></h2>
        <div className="row example-container">
          <div className="column column--full">
            <div className="card">
              <div className="card--header">
                <h3>This is a simple card</h3>
              </div>

              <div className="card--content">
                <p className="remove-margin--top">Dashing Cards are used to contain and display any type of content.</p>
                <p className="remove-margin--bottom">This is an example of a simple card. Its little markup makes it very convenient to use.</p>
              </div>
            </div>
          </div>
        </div>
        <CodeToggle>
{`<div class="card">
  <div class="card--header">
    <h3>This is a simple card</h3>
  </div>

  <div class="card--content">
    <p class="remove-margin--top">Dashing Cards are used to contain and display any type of content.</p>
    <p class="remove-margin--bottom">This is an example of a simple card. Its little markup makes it very convenient to use.</p>
  </div>
</div>`}
        </CodeToggle>

        <h2 className="example-header">Centered content in a card <button className="button button--transparent button--copy-link" data-id="copyurl" id="Centered_Content_In_A_Card"></button></h2>
        <div className="row example-container">
          <div className="column column--full">
            <div className="card center-align">
              <div className="card--header">
                <h3>This is a simple card</h3>
              </div>

              <div className="card--content">
                <p>To center content within a card, apply the <a href="https://github.com/dashframework/dashing/blob/2b4f977910aa2cd9c54309d08aae915af283fda0/sass/modules/typography/_typography.scss#L19-L21" target="_blank" rel="noopener noreferrer">alignment utility className</a> <code className="example-text">.center-align</code> to a <code className="example-text">.card</code> element. If you want more control, apply the utility class to the <code className="example-text">.card--header</code>, <code className="example-text">.card--content</code>, or <code className="example-text">.card--footer</code> elements.</p>
              </div>

              <div className="card--footer">
                <button className="button button--blue">Centered Button</button>
              </div>
            </div>
          </div>
        </div>

        <CodeToggle>
{`<div class="card center-align">
  <div class="card--header">
    <h3>This is a simple card</h3>
  </div>

  <div class="card--content">
    <p>To center content within a card, apply the <a href="https://github.com/dashframework/dashing/blob/2b4f977910aa2cd9c54309d08aae915af283fda0/sass/modules/typography/_typography.scss#L19-L21">alignment utility class</a> <code class="example-text">.center-align</code> to a <code class="example-text">.card</code> element. If you want more control, apply the utility class to the <code class="example-text">.card--header</code>, <code class="example-text">.card--content</code>, or <code class="example-text">.card--footer</code> elements.</p>
  </div>

  <div class="card--footer">
    <button class="button button--blue">Centered Button</button>
  </div>
</div>`}
        </CodeToggle>

        <h2 className="example-header">Separation within cards <button className="button button--transparent button--copy-link" id="Seperation_Within_Cards"></button></h2>
        <div className="row example-container">
          <div className="column column--full">
            <div className="card">
              <div className="card--header has-border">
                <h3>Creating line separation with an <code className="example-text">&lt;hr&gt;</code> and <code className="example-text">.has-border</code></h3>
              </div>

              <div className="card--content">
                <p className="remove-margin--top">Use the <code className="example-text">.has-border</code> class on your <code className="example-text">.card--header</code> or <code className="example-text">.card--footer</code> element to create a line separation between content </p>
                <hr />
                <p>Placing an <code className="example-text">&lt;hr&gt;</code> within <code className="example-text">.card--header</code>, <code className="example-text">card--content</code>, or <code className="example-text">card--footer</code> will allow you to separate content within your card, while still respecting your <code className="example-text">$grid-gutter</code>.</p>
                <hr />
                <p className="remove-margin--bottom">Use the <a href="https://github.com/dashframework/dashing/blob/v1.0.7/sass/base/utilities/_utilities.scss#L12-L16" target="_blank" rel="noopener noreferrer">remove-margin</a> utility classes to remove unnecessary margin in your paragraphs.</p>
              </div>

              <hr />

              <div className="card--content">
                <p className="remove-margin">Use an <code className="example-text">&lt;hr&gt;</code> outside of <code className="example-text">.card--header</code>, <code className="example-text">card--content</code>, or <code className="example-text">card--footer</code> to span your <code className="example-text">&lt;hr&gt;</code> edge to edge.</p>
              </div>

              <div className="card--footer has-border">
                <button className="button button--primary">Button</button>
              </div>
            </div>
          </div>
        </div>

        <CodeToggle>
{`<div class="card">
  <div class="card--header has-border">
    <h3>Creating line separation with an <code class="example-text">&lt;hr&gt;</code> and <code class="example-text">.has-border</code></h3>
  </div>

  <div class="card--content">
    <p class="remove-margin--top">Use the <code class="example-text">.has-border</code> class on your <code class="example-text">.card--header</code> or <code class="example-text">.card--footer</code> element to create a line separation between content </p>
    <hr>
    <p>Placing an <code class="example-text">&lt;hr&gt;</code> within <code class="example-text">.card--header</code>, <code class="example-text">card--content</code>, or <code class="example-text">card--footer</code> will allow you to separate content within your card, while still respecting your <code class="example-text">$grid-gutter</code>.</p>
    <hr>
    <p class="remove-margin--bottom">Use the <a href="https://github.com/dashframework/dashing/blob/v1.0.7/sass/base/utilities/_utilities.scss#L12-L16">remove-margin</a> utility classes to remove unnecessary margin in your paragraphs.</p>
  </div>

  <hr>

  <div class="card--content">
    <p class="remove-margin">Use an <code class="example-text">&lt;hr&gt;</code> outside of <code class="example-text">.card--header</code>, <code class="example-text">card--content</code>, or <code class="example-text">card--footer</code> to span your <code class="example-text">&lt;hr&gt;</code> edge to edge.</p>
  </div>

  <div class="card--footer has-border">
    <button class="button button--primary">Button</button>
  </div>
</div>`}
        </CodeToggle>

        <h2 className="example-header">Selectable Card <button className="button button--transparent button--copy-link" data-id="copyurl" id="Selectable_Card"></button></h2>
        <div className="row example-container">
          <div className="column column--full">
            <div className="card is-selectable">
              <div className="card--header">
                <h3>This is a selectable card</h3>
              </div>

              <div className="card--footer">
                <button className="button button--primary button--transparent">Click me</button>
              </div>
            </div>

            <div className="card is-selectable is-disabled">
              <div className="card--header">
                <h3>This is a disabled selectable card</h3>
              </div>

              <div className="card--footer">
                <button className="button button--primary button--transparent">Can't click me</button>
              </div>
            </div>

          </div>
        </div>

      <CodeToggle>
{`<div class="card is-selectable">
  <div class="card--header">
    <h3>This is a selectable card</h3>
  </div>

  <div class="card--footer">
    <button class="button button--primary button--transparent">Click me</button>
  </div>
</div>

<div class="card is-selectable is-disabled">
  <div class="card--header">
    <h3>This is a disabled selectable card</h3>
  </div>

  <div class="card--footer">
    <button class="button button--primary button--transparent">Can't click me</button>
  </div>
</div>`}
      </CodeToggle>

      <h2 class="example-header">Dashed Card <button class="button button--transparent button--copy-link" data-id="copyurl" id="Dashed_Card"></button></h2>
      <div class="row example-container">
        <div class="column column--full">
          <div class="card card--dashed">
            <div class="card--header">
              <h3>This is a dashed card</h3>
            </div>

            <div class="card--content">
              <p class="remove-margin">To use a dashed card, apply <code class="example-text">.card--dashed</code> after <code class="example-text">.card</code>.</p>
            </div>
          </div>
        </div>
      </div>

      <CodeToggle>
{`<div class="card card--dashed">
  <div class="card--header">
    <h3>This is a dashed card</h3>
  </div>

  <div class="card--content">
    <p class="remove-margin">To use a dashed card, apply <code class="example-text">.card--dashed</code> after <code class="example-text">.card</code>.</p>
  </div>
</div>`}
      </CodeToggle>

      <h2 className="example-header">Form Elements in a Card <button className="button button--transparent button--copy-link" data-id="copyurl" id="Form_Elements_In_A_Card"></button></h2>
      <div className="row example-container">
        <div className="column column--full">
          <div className="card">
            <div className="card--header">
              <h3>This is a card with a form</h3>
            </div>

            <form>
              <fieldset className="card--content">

                <div className="row row--nested">
                  <div className="column column--full column--nested">
                    <label>Label</label>
                    <input type="text"/>
                  </div>
                </div>

                <div className="row row--nested">
                  <div className="column column--half column--nested">
                    <label>Label</label>
                    <input type="text"/>
                  </div>
                  <div className="column column--half column--nested">
                    <label>Label</label>
                    <input type="text"/>
                  </div>
                </div>
                <div className="row row--nested">
                  <div className="column column--half column--nested">
                    <label>Label</label>
                    <input type="text"/>
                  </div>
                  <div className="column column--half column--nested">
                    <label>Label</label>
                    <input type="text"/>
                  </div>
                </div>
              </fieldset>

              <div className="card--footer">
                <button className="button button--green">Submit</button>
                <button className="button button--secondary button--transparent">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <CodeToggle>
{`<div class="card">
  <div class="card--header">
    <h3>This is a card with a form</h3>
  </div>

  <form>
    <fieldset class="card--content">

      <div class="row row--nested">
        <div class="column column--full column--nested">
          <label>Label</label>
          <input type="text">
        </div>
      </div>

      <div class="row row--nested">
        <div class="column column--half column--nested">
          <label>Label</label>
          <input type="text">
        </div>
        <div class="column column--half column--nested">
          <label>Label</label>
          <input type="text">
        </div>
      </div>
      <div class="row row--nested">
        <div class="column column--half column--nested">
          <label>Label</label>
          <input type="text">
        </div>
        <div class="column column--half column--nested">
          <label>Label</label>
          <input type="text">
        </div>
      </div>
    </fieldset>

    <div class="card--footer">
      <button class="button button--green">Submit</button>
      <button class="button button--secondary button--transparent">Cancel</button>
    </div>
  </form>
</div>`}
      </CodeToggle>

      </div>
    </div>
    </AppContent>
  </Layout>
)
