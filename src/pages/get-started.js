import React from 'react'

import Layout from '../components/layout'
import AppContent from '../components/appcontent'
import CodeToggleSCSS from '../components/codetoggle-scss'

class GetStarted extends React.Component {

  componentDidMount() {
    var Prism = window.Prism;
    Prism.highlightAll();
  }

  render() {

    return (

      <Layout>
        <header className="subnav">
          <h1>Get Started</h1>
        </header>
        <AppContent>
          <div className="row">
            <div className="column column--full">
              <section className="hero" style={{ marginTop: "0"}}>
                <h2 className="center-align">Installing the Paragon Component</h2>
              </section>

              <fieldset className="example-header">
                <h3>Install npm package</h3>
                <p>If you use <a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">npm</a>, the paragon package can be installed with the following command:</p>
              </fieldset>
              <pre className="language-bash"><code className="language-bash">npm install paragon-framework --save</code></pre>

              <section className="hero">
        <h2 className="center-align" style={{ marginTop: "2rem" }}>Setting up your styles</h2>
      </section>
      <fieldset className="example-header">
        <h3>Import Paragon and custom styles <button className="button button--transparent button--copy-link" data-id="copyurl" id="Import_Paragon_And_Custom_Styles" /></h3>
        <p>Copy &amp; paste this code into your main scss file. Note that the relative path may differ.</p>
        <p className="note"><strong>Note:</strong> You will need to create a folder and file for each custom style file (<span className="underline">theme</span>, <span className="underline">base</span>, <span className="underline">layout</span>, <span className="underline">module</span> and <span className="underline">state</span>).</p>
      </fieldset>
      <div className="show-scss">
      <CodeToggleSCSS>
{`// Import paragon components
@import "/node_modules/paragon-framework/sass/vendor/normalize";
@import "/node_modules/paragon-framework/sass/base/base";

// Import custom theme file
@import "theme/theme";

// Import paragon components
@import "/node_modules/paragon-framework/sass/modules/modules";

// Import custom style files
@import "base/base";
@import "layout/layout";
@import "modules/modules";
@import "state/state";`}
      </CodeToggleSCSS>
    </div>

            </div>
          </div>
        </AppContent>
      </Layout>
    )
  }
}
export default GetStarted;
