import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'
import CodeToggle from '../../../components/codetoggle'
import CodeToggleSCSS from '../../../components/codetoggle-scss'

const currentPageName = "Lists";
const currentPageNameLower = currentPageName.toLowerCase();

class ListsCode extends React.Component {
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
          <div className="row">
            <div className="column column--full">
              <h2 className="example-header no-margin--top" id="orderedLists">Ordered Lists
                <Link to={location.pathname + "/#orderedLists"} className="button button--transparent button--copy-link"></Link>
              </h2>
              <div className="row example-container">
                <div className="column column--full" style={{ overflow: "auto" }}>
                  <ol className="ordered-list--custom">
                    <li>This is the first item</li>
                    <li>This is the second item</li>
                    <li>This is the third item</li>
                    <li>This is the fourth item</li>
                  </ol>
                </div>
              </div>
              <CodeToggle>
{`<ol class="ordered-list--custom">
  <li>This is the first item</li>
  <li>This is the second item</li>
  <li>This is the third item</li>
  <li>This is the fourth item</li>
</ol>`}
              </CodeToggle>

              <h2 className="example-header" id="customColoredLists">Custom Colored Lists
                <Link to={location.pathname + "/#customColoredLists"} className="button button--transparent button--copy-link"></Link>
              </h2>
              <div className="row example-container">
                <div className="column column--full" style={{ overflow: "auto" }}>
                  <ol className="ordered-list--custom ordered-list--color-blue">
                    <li>This is a custom colored list item</li>
                  </ol>
                </div>
              </div>
              <CodeToggle>
{`<ol class="ordered-list--custom ordered-list--color-blue">
  <li>This is a custom colored list item</li>
</ol>`}
              </CodeToggle>
              <CodeToggleSCSS>
{`//Example: Custom Colored Lists
.ordered-list--color-blue {
  @include ordered-list(var(--color-accent), $color-white);
}`}
              </CodeToggleSCSS>

            </div>
          </div>
        </AppContent>
      </Layout>
    )
  }
}

export default ListsCode;
