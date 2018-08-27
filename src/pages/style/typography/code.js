import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'
import CodeToggle from '../../../components/codetoggle'

const currentPageName = "Typography";
const currentPageNameLower = currentPageName.toLowerCase();

export default () => (
  <Layout>
    <header className="subnav">
      <h1>{currentPageName}</h1>
      <SubNav pageName={currentPageNameLower} sectionName="style"/>
    </header>
    <AppContent>
    <div className="row">
      <div className="column column--full">
        <h2 className="example-header no-margin--top">Headers <button className="button button--transparent button--copy-link" data-id="copyurl" id="Headers"/></h2>
        <div className="row example-container">
          <div className="column column--full">
            <h1>h1. Header 1</h1>
            <h2>h2. Header 2</h2>
            <h3>h3. Header 3</h3>
            <h4>h4. Header 4</h4>
          </div>
        </div>
        <CodeToggle>
{`<h1>h1. Header 1</h1>
<h2>h2. Header 2</h2>
<h3>h3. Header 3</h3>
<h4>h4. Header 4</h4>`}
      </CodeToggle>
      </div>
    </div>

    <div className="row">
      <div className="column column--full">
        <h2 className="example-header">Body Text <button className="button button--transparent button--copy-link" data-id="copyurl" id="Body_Text"/></h2>
        <div className="row example-container">
          <div className="column column--full">
            <p>Nunc hendrerit lectus velit, vel fringilla sem molestie at. Etiam orci ipsum, iaculis eu magna vel, commodo efficitur metus. Praesent elementum justo eros, eu efficitur metus interdum ut. Morbi finibus eros in dolor condimentum bibendum.</p>
            <p>Aliquam luctus malesuada erat, a efficitur dolor consequat ac. Suspendisse sodales aliquet velit in elementum. Proin malesuada auctor libero, ut accumsan dolor tincidunt in.</p>
            <p><strong>Duis fermentum nisi nec ornare volutpat. Donec ultricies ante at nunc consectetur viverra. Pellentesque ac augue lorem. Nulla facilisi.</strong></p>
          </div>
        </div>
        <CodeToggle>
{`<p>Nunc hendrerit lectus velit, vel fringilla sem molestie at. Etiam orci ipsum, iaculis eu magna vel, commodo efficitur metus. Praesent elementum justo eros, eu efficitur metus interdum ut. Morbi finibus eros in dolor condimentum bibendum.</p>
<p>Aliquam luctus malesuada erat, a efficitur dolor consequat ac. Suspendisse sodales aliquet velit in elementum. Proin malesuada auctor libero, ut accumsan dolor tincidunt in.</p>
<p><strong>Duis fermentum nisi nec ornare volutpat. Donec ultricies ante at nunc consectetur viverra. Pellentesque ac augue lorem. Nulla facilisi.</strong></p>`}
        </CodeToggle>
      </div>
    </div>

    <div className="row">
      <div className="column column--full">
      <h2 className="example-header">Hyperlinks <button className="button button--transparent button--copy-link" data-id="copyurl" id="Hyperlinks"/></h2>
      <div className="row example-container">
        <div className="column column--full">
          <Link to="style/typography/code">Click Here</Link>
          <p>Phasellus vel luctus libero. <Link to="style/typography/code">Maecenas sit</Link> amet leo vestibulum, vehicula arcu id, tempus dolor.</p>
        </div>
      </div>
      <CodeToggle>
{`<a>Click Here</a>
<p>Phasellus vel luctus libero. <a>Maecenas sit</a> amet leo vestibulum, vehicula arcu id, tempus dolor.</p>`}
      </CodeToggle>
      </div>
    </div>
    </AppContent>
  </Layout>
)
