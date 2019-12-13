import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'
import CodeToggle from '../../../components/codetoggle'

const currentPageName = "Cards";
const currentPageNameLower = currentPageName.toLowerCase();

export default class CardsCode extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isLoading: true };
    this.toggleLoading = this.toggleLoading.bind(this);
  }

  static propTypes = { location: PropTypes.object.isRequired }

  toggleLoading() {
    this.setState(prevState => ({
      isLoading: !prevState.isLoading
    }));
   }

  render() {
    const { location } = this.props;

    return (
      <Layout>
        <header className="subnav">
          <h1>{currentPageName}</h1>
          <SubNav pageName={currentPageNameLower}/>
        </header>
      <AppContent>
    		<div className="grid grid-padding">

          <h2 id="form">Form
            <Link to={location.pathname + "/#form"} className="button button--transparent button--copy-link"></Link>
          </h2>
          <div className="example-container">
            <div className="card">
              <div className="card-header has-border">
                <h2 className="no-margin">Card Header</h2>
              </div>

              <div className="card-content flex-content">
                <div className="flex-row">
                  <fieldset>
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name"/>
                  </fieldset>
                  <fieldset>
                    <label htmlFor="middle-name">Middle Name</label>
                    <input type="text" id="middle-name"/>
                  </fieldset>
                  <fieldset>
                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name"/>
                  </fieldset>
                </div>
                <div className="flex-row">
                  <fieldset>
                    <label htmlFor="birthday">Date of Birth</label>
                    <input type="date" id="birthday"/>
                  </fieldset>
                  <fieldset className="select--has-icon">
                    <label htmlFor="gender">Gender</label>
                    <select id="gender">
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </fieldset>
                  <fieldset className="spacer"></fieldset>
                </div>
              </div>
              <div className="card-footer">
                <button className="mr-space-xs">Submit</button>
                <button className="button--transparent button--gray">Cancel</button>
              </div>
            </div>
            <CodeToggle>
{`<!-- Form within a card -->
<div class="card">
<div class="card-header has-border">
  <h2 class="no-margin">Card Header</h2>
</div>

<div class="card-content flex-content">
  <div class="flex-row">
    <fieldset>
      <label for="first-name">First Name</label>
      <input type="text" id="first-name"/>
    </fieldset>
    <fieldset>
      <label for="middle-name">Middle Name</label>
      <input type="text" id="middle-name"/>
    </fieldset>
    <fieldset>
      <label for="last-name">Last Name</label>
      <input type="text" id="last-name"/>
    </fieldset>
  </div>
  <div class="flex-row">
    <fieldset>
      <label for="birthday">Date of Birth</label>
      <input type="date" id="birthday"/>
    </fieldset>
    <fieldset class="select--has-icon">
      <label for="gender">Gender</label>
      <select id="gender">
        <option>Male</option>
        <option>Female</option>
      </select>
    </fieldset>
    <fieldset class="spacer"></fieldset>
  </div>
</div>
<div class="card-footer">
  <button class="mr-space-xs">Submit</button>
  <button class="button--transparent button--gray">Cancel</button>
</div>
</div>`}
            </CodeToggle>
          </div>

          <h2 className="mt-space-xl" id="states">States
            <Link to={location.pathname + "/#states"} className="button button--transparent button--copy-link"></Link>
          </h2>
          <div className="example-container">
            <div className="card">
              <div className="card-header">
                <h3>Default</h3>
              </div>
              <div className="card-content">
                <p>This is a default card.</p>
              </div>
            </div>

            <div className="card is-selectable">
              <div className="card-header">
                <h3>Selectable</h3>
              </div>
              <div className="card-content">
                <p>To use a selectable card, apply <code className="example-text">.is-selectable</code> to the <code className="example-text">.card</code>.</p>
              </div>
            </div>

            <div className="card is-selectable is-disabled">
              <div className="card-header">
                <h3>Disabled</h3>
              </div>
              <div className="card-content">
                <p>To use a disabled card, apply <code className="example-text">.is-disabled</code> to the <code className="example-text">.card</code>.</p>
              </div>
            </div>

            <div className="card card--dashed mb-space-m">
              <div className="card-header">
                <h3>Dashed</h3>
              </div>
              <div className="card-content">
                <p>To use a dashed card, apply <code className="example-text">.card--dashed</code> to the <code className="example-text">.card</code>.</p>
              </div>
            </div>

            {/* <LoadingCard hasBorder={true} numberOfLines={1} hasFooter={false}/> */}

            <div className={this.state.isLoading ? 'card' : 'card is-loading'}>
              <div className="card-header">
                <h3 className={this.state.isLoading ? 'hidden' : ''}>&nbsp;</h3>
                <h3 className={this.state.isLoading ? '' : 'hidden'}>Loading</h3>
              </div>
              <div className="card-content">
                <p className={this.state.isLoading ? 'hidden' : ''}>&nbsp;</p>
                <p className={this.state.isLoading ? '' : 'hidden'}>To use the loading card, apply <code className="example-text">.is-loading</code> to the <code className="example-text">.card</code>. Then add empty elements within the card.</p>
              </div>
            </div>
            <button className="button mb-space-m" onClick={this.toggleLoading}>Toggle Loading</button>
            <CodeToggle>
{`<!-- Different states of cards -->
<div class="card">
  <div class="card-header">
    <h3>Default</h3>
  </div>
  <div class="card-content">
    <p>This is a default card.</p>
  </div>
</div>

<div class="card is-selectable">
  <div class="card-header">
    <h3>Selectable</h3>
  </div>
  <div class="card-content">
    <p>To use a selectable card, apply <code class="example-text">.is-selectable</code> to the <code class="example-text">.card</code>.</p>
  </div>
</div>

<div class="card is-selectable is-disabled">
  <div class="card-header">
    <h3>Disabled</h3>
  </div>
  <div class="card-content">
    <p>To use a disabled card, apply <code class="example-text">.is-disabled</code> to the <code class="example-text">.card</code>.</p>
  </div>
</div>

<div class="card card--dashed">
  <div class="card-header">
    <h3>Dashed</h3>
  </div>
  <div class="card-content">
    <p>To use a dashed card, apply <code class="example-text">.card--dashed</code> to the <code class="example-text">.card</code>.</p>
  </div>
</div>

<div class="card is-loading">
  <div class="card-header">
    <h3></h3>
  </div>
  <div class="card-content">
    <p></p>
  </div>
</div>`}
            </CodeToggle>
          </div>

          <h2 className="mt-space-xl" id="lists">Lists
            <Link to={location.pathname + "/#lists"} className="button button--transparent button--copy-link"></Link>
          </h2>
          <div className="example-container">
            <div className="card">
              <div className="card-header">
                <h3>Simple List</h3>
              </div>
              <div className="card-content">
                <ul className="text-list">
                  <li className="text-list_item">List Item 1</li>
                  <li className="text-list_item">List Item 2</li>
                  <li className="text-list_item">List Item 3</li>
                </ul>
              </div>
            </div>

            <div className="card">
              <div className="card-header has-border">
                <h2>Selectable List</h2>
              </div>
              <ul className="card-list is-selectable">
                <li className="space-between"><span>Ryan Fitz</span><i className="dashing-icon dashing-icon--arrow-right"></i></li>
                <li className="space-between"><span>Jill Fitz</span><i className="dashing-icon dashing-icon--arrow-right"></i></li>
                <li className="space-between"><span>Jackson Fitz</span><i className="dashing-icon dashing-icon--arrow-right"></i></li>
                <li className="space-between"><span>Emily Fitz</span><i className="dashing-icon dashing-icon--arrow-right"></i></li>
              </ul>
            </div>
            <CodeToggle>
{`<!-- Different types of lists within cards -->
<div className="card">
<div className="card-header">
  <h3>Simple List</h3>
</div>
<div className="card-content">
  <ul className="text-list">
    <li className="text-list_item">List Item 1</li>
    <li className="text-list_item">List Item 2</li>
    <li className="text-list_item">List Item 3</li>
  </ul>
</div>
</div>

<div className="card">
<div className="card-header has-border">
  <h2>Selectable List</h2>
</div>
<ul className="card--list is-selectable">
  <li className="space-between"><span>Ryan Fitz</span><i className="dashing-icon dashing-icon--arrow-right"></i></li>
  <li className="space-between"><span>Jill Fitz</span><i className="dashing-icon dashing-icon--arrow-right"></i></li>
  <li className="space-between"><span>Jackson Fitz</span><i className="dashing-icon dashing-icon--arrow-right"></i></li>
  <li className="space-between"><span>Emily Fitz</span><i className="dashing-icon dashing-icon--arrow-right"></i></li>
</ul>
</div>`}
            </CodeToggle>
          </div>

        <h2 className="mt-space-xl" id="card-table">Card Table
          <Link to={location.pathname + "/#card-table"} className="button button--transparent button--copy-link"></Link>
        </h2>
        <div className="example-container">

          <div className="card">
            <div className="card-header">
              <h2>Table within a Card</h2>
            </div>
            <div className="card-table">
              <table className="table has-dividers is-selectable has-arrow">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Age</th>
                    <th>Start Date</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      Ryan Fitz
                    </td>
                    <td>
                      Primary
                    </td>
                    <td>
                      47
                    </td>
                    <td>
                      01/01/2018
                    </td>
                    <td className="align-right">
                      <i className="dashing-icon dashing-icon--arrow-right"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Lisa Fitz
                    </td>
                    <td>
                      Spouse
                    </td>
                    <td>
                      42
                    </td>
                    <td>
                      01/01/2018
                    </td>
                    <td className="align-right">
                      <i className="dashing-icon dashing-icon--arrow-right"></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <CodeToggle>
{`<div class="card">
  <div class="card-header">
    <h2>Table within a Card</h2>
  </div>
  <div class="card-table">
    <table class="table has-dividers is-selectable has-arrow">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Age</th>
          <th>Start Date</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Ryan Fitz</td>
          <td>Primary</td>
          <td>47</td>
          <td>01/01/2018</td>
          <td class="align-right">
            <i class="dashing-icon dashing-icon--arrow-right"></i>
          </td>
        </tr>
        <tr>
          <td>Lisa Fitz</td>
          <td>Spouse</td>
          <td>42</td>
          <td>01/01/2018</td>
          <td class="align-right">
            <i class="dashing-icon dashing-icon--arrow-right"></i>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>`}
          </CodeToggle>
        </div>

        <h2 className="mt-space-xl" id="card-info">Card Info
          <Link to={location.pathname + "/#card-info"} className="button button--transparent button--copy-link"></Link>
        </h2>

        <div className="example-container">

          <div className="card">
            <div className="card-header">
              <h3>Information Cards</h3>
            </div>
            <div className="card-content">

              <p className="mb-space-m">Information cards are nested inside another card and are a good way to spotlight instructions or to give text more emphasis.</p>

              <div className="card card-info mb-space-m">
                <div className="card-header has-icon">
                  <i className="dashing-icon dashing-icon--info-filled dashing-icon--black" />
                  <h4>Default Info Card</h4>
                </div>
                <div className="card-content">
                  <p className="no-margin">This is an info card with an icon.</p>
                </div>
              </div>

              <div className="error-card mb-space-m">
                <div className="flex flex-baseline has-icon p-space-m">
                  <i className="dashing-icon dashing-icon--alert-filled dashing-icon--red" />
                  <p className="strong no-margin">This is an info card with an icon.</p>
                </div>
              </div>

              <div className="error-card-2 mb-space-m">
                <div className="flex flex-baseline has-icon p-space-m">
                  <i className="dashing-icon dashing-icon--alert-filled dashing-icon--red" />
                  <p className="no-margin">This is an error info card.</p>
                </div>
              </div>

              <div className="card error-card-3 mb-space-m">
                <div className="card-header flex flex-baseline has-icon">
                  <i className="dashing-icon dashing-icon--alert-filled dashing-icon--red" />
                  <h4 className="text-color--red no-margin">Important</h4>
                </div>
                <p className="card-content no-margin">This is an error info card.</p>
              </div>

              <div className="card warning-card-3 mb-space-m">
                <div className="card-header flex flex-baseline has-icon">
                  <i className="dashing-icon dashing-icon--alert-filled" />
                  <h4 className="text-color--orange no-margin">Warning</h4>
                </div>
                <p className="card-content no-margin">This is an warning info card.</p>
              </div>

              <div className="card info-card-3">
                <div className="card-header flex flex-baseline has-icon">
                  <i className="dashing-icon dashing-icon--info-filled" />
                  <h4 className="text-color--blue no-margin">Information</h4>
                </div>
                <p className="card-content no-margin">This is an info card.</p>
              </div>

              {/* <div className="card card-info--gray mt-space-m">
                <div className="card-header">
                  <h4>Gray Info Card</h4>
                </div>
                <div className="card-content">
                  <p className="no-margin">This is a gray info card.</p>
                </div>
              </div> */}

            </div>

          </div>

          <CodeToggle>
{`<div class="card-content">
  <div class="card card-info">
    <div class="card-header has-icon">
      <i class="dashing-icon dashing-icon--info-filled dashing-icon--black" />
      <h4>Default Info Card</h4>
    </div>
    <div class="card-content">
      <p class="no-margin">This is an info card with an icon.</p>
    </div>
  </div>

  <div class="card card-info--gray">
    <div class="card-header">
      <h4>Gray Info Card</h4>
    </div>
    <div class="card-content">
      <p class="no-margin">This is a gray info card.</p>
    </div>
  </div>
</div>
`}
          </CodeToggle>

        </div>

          </div>
        </AppContent>
      </Layout>
    )
  }
}
