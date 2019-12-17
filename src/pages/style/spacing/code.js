import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'
import CodeToggle from '../../../components/codetoggle'
import CodeToggleSCSS from '../../../components/codetoggle-scss'

const currentPageName = "Spacing"
const currentPageNameLower = currentPageName.toLowerCase()

export default () => (
  <Layout>
        <header className="subnav">
          <h1>
            {currentPageName}
          </h1>
          <SubNav pageName={currentPageNameLower} sectionName="style"/>
        </header>
        <AppContent>
  			<div className="grid grid-padding">

          <h2>Sizes</h2>

          <div className="example-container">

            <div className="flex-table is-condensed font-small hide-HTML-code">
              <ol className="table-row--header">
                <li>Variable</li>
                <li>rem</li>
                <li>px</li>
                <li>Example</li>
              </ol>
              <ol className="table-row">
                <li><span className="example-text">$space-none</span></li>
                <li>0rem</li>
                <li>0px</li>
                <li><span className="x-space x-space--none" /></li>
              </ol>
              <ol className="table-row">
                <li><span className="example-text">$space-xxs</span></li>
                <li>0.25rem</li>
                <li>4px</li>
                <li><span className="x-space x-space--xxs" /></li>
              </ol>
              <ol className="table-row">
                <li><span className="example-text">$space-xs</span></li>
                <li>0.5rem</li>
                <li>8px</li>
                <li><span className="x-space x-space--xs" /></li>
              </ol>
              <ol className="table-row">
                <li><span className="example-text">$space-s</span></li>
                <li>0.75rem</li>
                <li>12px</li>
                <li><span className="x-space x-space--s" /></li>
              </ol>
              <ol className="table-row">
                <li><span className="example-text">$space-m</span></li>
                <li>1rem</li>
                <li>16px</li>
                <li><span className="x-space x-space--m" /></li>
              </ol>
              <ol className="table-row">
                <li><span className="example-text">$space-l</span></li>
                <li>1.5rem</li>
                <li>24px</li>
                <li><span className="x-space x-space--l" /></li>
              </ol>
              <ol className="table-row">
                <li><span className="example-text">$space-xl</span></li>
                <li>2rem</li>
                <li>32px</li>
                <li><span className="x-space x-space--xl" /></li>
              </ol>
              <ol className="table-row">
                <li><span className="example-text">$space-xxl</span></li>
                <li>3rem</li>
                <li>48px</li>
                <li><span className="x-space x-space--xxl" /></li>
              </ol>
            </div>

            <CodeToggle />
            <CodeToggleSCSS>
{`//Spacing Variables
$space-xxs: 0.25rem;
$space-xs:  0.5rem;
$space-s:   0.75rem;
$space-m:   1rem;
$space-l:   1.5rem;
$space-xl:  2rem;
$space-xxl: 3rem;`}
            </CodeToggleSCSS>
          </div>


          <h2 className="mt-space-xl">Individual Spacing</h2>

          <div className="example-container">

            <div className="flex-table is-condensed font-small">
              <ol className="table-row--header">
                <li>Class</li>
                <li>Property</li>
                <li>Example</li>
              </ol>
              <ol className="table-row">
                <li><span className="example-text">.m-space-*</span></li>
                <li>margin</li>
                <li><span className="relative x-i-space x-i-space--m" /></li>
              </ol>
              <ol className="table-row">
                <li><span className="example-text">.mt-space-*</span></li>
                <li>margin-top</li>
                <li><span className="relative x-i-space x-i-space--mt" /></li>
              </ol>
              <ol className="table-row">
                <li><span className="example-text">.mr-space-*</span></li>
                <li>margin-right</li>
                <li><span className="relative x-i-space x-i-space--mr" /></li>
              </ol>
              <ol className="table-row">
                <li><span className="example-text">.mb-space-*</span></li>
                <li>margin-bottom</li>
                <li><span className="relative x-i-space x-i-space--mb" /></li>
              </ol>
              <ol className="table-row">
                <li><span className="example-text">.ml-space-*</span></li>
                <li>margin-left</li>
                <li><span className="relative x-i-space x-i-space--ml" /></li>
              </ol>
              <ol className="table-row">
                <li><span className="example-text">.p-space-*</span></li>
                <li>padding</li>
                <li><span className="relative x-i-space x-i-space--p" /></li>
              </ol>
              <ol className="table-row">
                <li><span className="example-text">.pt-space-*</span></li>
                <li>padding-top</li>
                <li><span className="relative x-i-space x-i-space--pt" /></li>
              </ol>
              <ol className="table-row">
                <li><span className="example-text">.pr-space-*</span></li>
                <li>padding-right</li>
                <li><span className="relative x-i-space x-i-space--pr" /></li>
              </ol>
              <ol className="table-row">
                <li><span className="example-text">.pb-space-*</span></li>
                <li>padding-bottom</li>
                <li><span className="relative x-i-space x-i-space--pb" /></li>
              </ol>
              <ol className="table-row">
                <li><span className="example-text">.pb-space-*</span></li>
                <li>padding-left</li>
                <li><span className="relative x-i-space x-i-space--pl" /></li>
              </ol>
            </div>

            <CodeToggle>
{`<div class="mt-space-xl"></div> <!-- margin-top: 2rem; -->
<div class="ml-space-xs"></div> <!-- margin-left: 0.5rem; -->
<div class="p-space-m"></div> <!-- padding: 1rem; -->
`}
            </CodeToggle>
            </div>

          </div>
        </AppContent>
      </Layout>
    )
