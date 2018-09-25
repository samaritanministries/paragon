import React from 'react'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'
import CodeToggle from '../../../components/codetoggle'
import CodeToggleSCSS from '../../../components/codetoggle-scss'

const currentPageName = "Tables";
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
          <h2 className="example-header no-margin--top">Default Table <button className="button button--transparent button--copy-link" data-id="copyurl" id="Default_Table" /></h2>
          <div className="row example-container">
            <div className="column column--full">
              <div className="table--container">
                <table className="table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Kelly Jameson</td>
                      <td>12/18/2012</td>
                      <td>$580.00</td>
                      <td className="text-color--green">Completed</td>
                    </tr>
                    <tr className="disabled">
                      <td>2</td>
                      <td>Michael Andrews</td>
                      <td>05/15/2015</td>
                      <td>$1,512.24</td>
                      <td className="text-color--red">Closed</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Teressa James</td>
                      <td>05/29/2015</td>
                      <td>$450.25</td>
                      <td className="text-color--green">Completed</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Matthew Hepner</td>
                      <td>10/06/2015</td>
                      <td>$2,600.00</td>
                      <td className="text-color--green">Completed</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>William Taylor</td>
                      <td>02/12/2016</td>
                      <td>$818.96</td>
                      <td className="text-color--gray">In Progress</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <CodeToggle>
{`<!-- Add 'has-border' to add a rounded border to the container -->
<div class="table--container">
<!-- Add 'has-dividers' to add line dividers to each table row -->
<!-- Add 'has-hover' to add a hover state to each row -->
<!-- Add 'has-row-color' to add alternating colored rows -->
<table class="table">
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Date</th>
      <th>Amount</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Kelly Jameson</td>
      <td>12/18/2012</td>
      <td>$580.00</td>
      <td class="text-color--green">Completed</td>
    </tr>
    <tr class="disabled">
      <td>2</td>
      <td>Michael Andrews</td>
      <td>05/15/2015</td>
      <td>$1,512.24</td>
      <td class="text-color--red">Closed</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Teressa James</td>
      <td>05/29/2015</td>
      <td>$450.25</td>
      <td class="text-color--green">Completed</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Matthew Hepner</td>
      <td>10/06/2015</td>
      <td>$2,600.00</td>
      <td class="text-color--green">Completed</td>
    </tr>
    <tr>
      <td>5</td>
      <td>William Taylor</td>
      <td>02/12/2016</td>
      <td>$818.96</td>
      <td class="text-color--gray">In Progress</td>
    </tr>
  </tbody>
</table>
</div>`}
          </CodeToggle>

          <h2 className="example-header">Table with Border <button className="button button--transparent button--copy-link" data-id="copyurl" id="Table_With_Border" /></h2>
          <div className="row example-container">
            <div className="column column--full">
              <div className="table--container has-border">
                <table className="table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Kelly Jameson</td>
                      <td>12/18/2012</td>
                      <td>$580.00</td>
                      <td className="text-color--green">Completed</td>
                    </tr>
                    <tr className="disabled">
                      <td>2</td>
                      <td>Michael Andrews</td>
                      <td>05/15/2015</td>
                      <td>$1,512.24</td>
                      <td className="text-color--red">Closed</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Teressa James</td>
                      <td>05/29/2015</td>
                      <td>$450.25</td>
                      <td className="text-color--green">Completed</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Matthew Hepner</td>
                      <td>10/06/2015</td>
                      <td>$2,600.00</td>
                      <td className="text-color--green">Completed</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>William Taylor</td>
                      <td>02/12/2016</td>
                      <td>$818.96</td>
                      <td className="text-color--gray">In Progress</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <CodeToggle>
{`<!-- Add 'has-border' to add a rounded border to the container -->
<div class="table--container has-border">
<!-- Add 'has-dividers' to add line dividers to each table row -->
<!-- Add 'has-hover' to add a hover state to each row -->
<!-- Add 'has-row-color' to add alternating colored rows -->
<table class="table">
<thead>
  <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Date</th>
    <th>Amount</th>
    <th>Status</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>1</td>
    <td>Kelly Jameson</td>
    <td>12/18/2012</td>
    <td>$580.00</td>
    <td class="text-color--green">Completed</td>
  </tr>
  <tr class="disabled">
    <td>2</td>
    <td>Michael Andrews</td>
    <td>05/15/2015</td>
    <td>$1,512.24</td>
    <td class="text-color--red">Closed</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Teressa James</td>
    <td>05/29/2015</td>
    <td>$450.25</td>
    <td class="text-color--green">Completed</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Matthew Hepner</td>
    <td>10/06/2015</td>
    <td>$2,600.00</td>
    <td class="text-color--green">Completed</td>
  </tr>
  <tr>
    <td>5</td>
    <td>William Taylor</td>
    <td>02/12/2016</td>
    <td>$818.96</td>
    <td class="text-color--gray">In Progress</td>
  </tr>
</tbody>
</table>
</div>`}
          </CodeToggle>
          <CodeToggleSCSS>
{`//Override the default table styles in your theme file
$table--border: $gray-200 !default;`}
          </CodeToggleSCSS>

          <h2 className="example-header">Table with Dividers <button className="button button--transparent button--copy-link" data-id="copyurl" id="Table_With_Dividers" /></h2>
          <div className="row example-container">
            <div className="column column--full">
              <div className="table--container">
                <table className="table has-dividers">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Kelly Jameson</td>
                      <td>12/18/2012</td>
                      <td>$580.00</td>
                      <td className="text-color--green">Completed</td>
                    </tr>
                    <tr className="disabled">
                      <td>2</td>
                      <td>Michael Andrews</td>
                      <td>05/15/2015</td>
                      <td>$1,512.24</td>
                      <td className="text-color--red">Closed</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Teressa James</td>
                      <td>05/29/2015</td>
                      <td>$450.25</td>
                      <td className="text-color--green">Completed</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Matthew Hepner</td>
                      <td>10/06/2015</td>
                      <td>$2,600.00</td>
                      <td className="text-color--green">Completed</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>William Taylor</td>
                      <td>02/12/2016</td>
                      <td>$818.96</td>
                      <td className="text-color--gray">In Progress</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <CodeToggle>
{`<!-- Add 'has-border' to add a rounded border to the container -->
<div class="table--container">
<!-- Add 'has-dividers' to add line dividers to each table row -->
<!-- Add 'has-hover' to add a hover state to each row -->
<!-- Add 'has-row-color' to add alternating colored rows -->
<table class="table has-dividers">
<thead>
  <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Date</th>
    <th>Amount</th>
    <th>Status</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>1</td>
    <td>Kelly Jameson</td>
    <td>12/18/2012</td>
    <td>$580.00</td>
    <td class="text-color--green">Completed</td>
  </tr>
  <tr class="disabled">
    <td>2</td>
    <td>Michael Andrews</td>
    <td>05/15/2015</td>
    <td>$1,512.24</td>
    <td class="text-color--red">Closed</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Teressa James</td>
    <td>05/29/2015</td>
    <td>$450.25</td>
    <td class="text-color--green">Completed</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Matthew Hepner</td>
    <td>10/06/2015</td>
    <td>$2,600.00</td>
    <td class="text-color--green">Completed</td>
  </tr>
  <tr>
    <td>5</td>
    <td>William Taylor</td>
    <td>02/12/2016</td>
    <td>$818.96</td>
    <td class="text-color--gray">In Progress</td>
  </tr>
</tbody>
</table>
</div>`}
          </CodeToggle>
          <CodeToggleSCSS>
{`//Override the default table styles in your theme file
$table--dividers: $gray-100 !default;`}
          </CodeToggleSCSS>

          <h2 className="example-header">Table with Hover <button className="button button--transparent button--copy-link" data-id="copyurl" id="Table_With_Hover" /></h2>
          <div className="row example-container">
            <div className="column column--full">
              <div className="table--container">
                <table className="table has-hover">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Kelly Jameson</td>
                      <td>12/18/2012</td>
                      <td>$580.00</td>
                      <td className="text-color--green">Completed</td>
                    </tr>
                    <tr className="disabled">
                      <td>2</td>
                      <td>Michael Andrews</td>
                      <td>05/15/2015</td>
                      <td>$1,512.24</td>
                      <td className="text-color--red">Closed</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Teressa James</td>
                      <td>05/29/2015</td>
                      <td>$450.25</td>
                      <td className="text-color--green">Completed</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Matthew Hepner</td>
                      <td>10/06/2015</td>
                      <td>$2,600.00</td>
                      <td className="text-color--green">Completed</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>William Taylor</td>
                      <td>02/12/2016</td>
                      <td>$818.96</td>
                      <td className="text-color--gray">In Progress</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <CodeToggle>
{`<!-- Add 'has-border' to add a rounded border to the container -->
<div class="table--container">
<!-- Add 'has-dividers' to add line dividers to each table row -->
<!-- Add 'has-hover' to add a hover state to each row -->
<!-- Add 'has-row-color' to add alternating colored rows -->
<table class="table has-hover">
<thead>
  <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Date</th>
    <th>Amount</th>
    <th>Status</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>1</td>
    <td>Kelly Jameson</td>
    <td>12/18/2012</td>
    <td>$580.00</td>
    <td class="text-color--green">Completed</td>
  </tr>
  <tr class="disabled">
    <td>2</td>
    <td>Michael Andrews</td>
    <td>05/15/2015</td>
    <td>$1,512.24</td>
    <td class="text-color--red">Closed</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Teressa James</td>
    <td>05/29/2015</td>
    <td>$450.25</td>
    <td class="text-color--green">Completed</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Matthew Hepner</td>
    <td>10/06/2015</td>
    <td>$2,600.00</td>
    <td class="text-color--green">Completed</td>
  </tr>
  <tr>
    <td>5</td>
    <td>William Taylor</td>
    <td>02/12/2016</td>
    <td>$818.96</td>
    <td class="text-color--gray">In Progress</td>
  </tr>
</tbody>
</table>
</div>`}
          </CodeToggle>

          <h2 className="example-header">Table with Colored Rows <button className="button button--transparent button--copy-link" data-id="copyurl" id="Table_With_Colored_Rows" /></h2>
          <div className="row example-container">
            <div className="column column--full">
              <div className="table--container">
                <table className="table has-row-color">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Kelly Jameson</td>
                      <td>12/18/2012</td>
                      <td>$580.00</td>
                      <td className="text-color--green">Completed</td>
                    </tr>
                    <tr className="disabled">
                      <td>2</td>
                      <td>Michael Andrews</td>
                      <td>05/15/2015</td>
                      <td>$1,512.24</td>
                      <td className="text-color--red">Closed</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Teressa James</td>
                      <td>05/29/2015</td>
                      <td>$450.25</td>
                      <td className="text-color--green">Completed</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Matthew Hepner</td>
                      <td>10/06/2015</td>
                      <td>$2,600.00</td>
                      <td className="text-color--green">Completed</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>William Taylor</td>
                      <td>02/12/2016</td>
                      <td>$818.96</td>
                      <td className="text-color--gray">In Progress</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <CodeToggle>
{`<!-- Add 'has-border' to add a rounded border to the container -->
<div class="table--container">
<!-- Add 'has-dividers' to add line dividers to each table row -->
<!-- Add 'has-hover' to add a hover state to each row -->
<!-- Add 'has-row-color' to add alternating colored rows -->
<table class="table has-row-color">
<thead>
  <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Date</th>
    <th>Amount</th>
    <th>Status</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>1</td>
    <td>Kelly Jameson</td>
    <td>12/18/2012</td>
    <td>$580.00</td>
    <td class="text-color--green">Completed</td>
  </tr>
  <tr class="disabled">
    <td>2</td>
    <td>Michael Andrews</td>
    <td>05/15/2015</td>
    <td>$1,512.24</td>
    <td class="text-color--red">Closed</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Teressa James</td>
    <td>05/29/2015</td>
    <td>$450.25</td>
    <td class="text-color--green">Completed</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Matthew Hepner</td>
    <td>10/06/2015</td>
    <td>$2,600.00</td>
    <td class="text-color--green">Completed</td>
  </tr>
  <tr>
    <td>5</td>
    <td>William Taylor</td>
    <td>02/12/2016</td>
    <td>$818.96</td>
    <td class="text-color--gray">In Progress</td>
  </tr>
</tbody>
</table>
</div>`}
          </CodeToggle>
          <CodeToggleSCSS>
{`//Override the default table styles in your theme file
$table--odd-row: $gray-50 !default;
$table--even-row: $white !default;`}
          </CodeToggleSCSS>

          <h2 className="example-header">Example Table <button className="button button--transparent button--copy-link" data-id="copyurl" id="Example_Table" /></h2>
          <div className="row example-container">
            <div className="column column--full">
              <div className="table--container has-border">
                <table className="table has-row-color has-dividers has-hover">
                  <thead>
                    <tr style={{ backgroundColor: "#3498DB", color: "#FFF" }}>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Kelly Jameson</td>
                      <td>12/18/2012</td>
                      <td>$580.00</td>
                      <td className="text-color--green">Completed</td>
                    </tr>
                    <tr className="disabled">
                      <td>2</td>
                      <td>Michael Andrews</td>
                      <td>05/15/2015</td>
                      <td>$1,512.24</td>
                      <td className="text-color--red">Closed</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Teressa James</td>
                      <td>05/29/2015</td>
                      <td>$450.25</td>
                      <td className="text-color--green">Completed</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Matthew Hepner</td>
                      <td>10/06/2015</td>
                      <td>$2,600.00</td>
                      <td className="text-color--green">Completed</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>William Taylor</td>
                      <td>02/12/2016</td>
                      <td>$818.96</td>
                      <td className="text-color--gray">In Progress</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <CodeToggle>
{`<!-- Add 'has-border' to add a rounded border to the container -->
<div class="table--container has-border">
  <!-- Add 'has-dividers' to add line dividers to each table row -->
  <!-- Add 'has-hover' to add a hover state to each row -->
  <!-- Add 'has-row-color' to add alternating colored rows -->
  <table class="table has-row-color has-dividers has-hover">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Date</th>
        <th>Amount</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Kelly Jameson</td>
        <td>12/18/2012</td>
        <td>$580.00</td>
        <td class="text-color--green">Completed</td>
      </tr>
      <tr class="disabled">
        <td>2</td>
        <td>Michael Andrews</td>
        <td>05/15/2015</td>
        <td>$1,512.24</td>
        <td class="text-color--red">Closed</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Teressa James</td>
        <td>05/29/2015</td>
        <td>$450.25</td>
        <td class="text-color--green">Completed</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Matthew Hepner</td>
        <td>10/06/2015</td>
        <td>$2,600.00</td>
        <td class="text-color--green">Completed</td>
      </tr>
      <tr>
        <td>5</td>
        <td>William Taylor</td>
        <td>02/12/2016</td>
        <td>$818.96</td>
        <td class="text-color--gray">In Progress</td>
      </tr>
    </tbody>
  </table>
</div>`}
          </CodeToggle>
          <CodeToggleSCSS>
{`//Override the default table styles in your theme file
$table--header-row: $white !default;
$table--odd-row: $gray-50 !default;
$table--even-row: $white !default;
$table--dividers: $gray-100 !default;
$table--border: $gray-200 !default;`}
          </CodeToggleSCSS>

        </div>
      </div>
    </AppContent>
  </Layout>
)
