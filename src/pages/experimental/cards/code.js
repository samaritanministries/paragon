import React from 'react'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'
// import CodeToggle from '../../../components/codetoggle'

const currentPageName = "Card";
const currentPageNameLower = currentPageName.toLowerCase();

export default () => (
  <Layout>
    <header className="subnav">
      <h1>{currentPageName}</h1>
      <SubNav pageName={currentPageNameLower}/>
    </header>
    <AppContent>

    <main className="content content-m">
			<div className="grid grid-padding">
        <div className="card no-padding">
          <div className="card--header has-border">
            <h2>Form</h2>
          </div>

          <div className="card--content flex-content">
            <div className="flex-row">
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
            <div className="flex-row">
              <fieldset>
                <label for="birthday">Date of Birth</label>
                <input type="date" id="birthday"/>
              </fieldset>
              <fieldset className="select--has-icon">
                <label for="gender">Gender</label>
                <select id="gender">
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </fieldset>
              <fieldset className="spacer"></fieldset>
            </div>
          </div>
          <div className="card--footer">
            <button className="mr-space-xs">Submit</button>
            <button className="button--transparent button--gray">Cancel</button>
          </div>
        </div>

        <div className="card no-padding">
          <div className="card--header center-align">
            <h2>Sign In</h2>
            <p>Sign in to your account</p>
          </div>

          <div className="card--content flex-content">
            <div className="flex-row">
              <fieldset>
                <label for="email">Email</label>
                <input type="text" id="email"/>
              </fieldset>
            </div>
            <div className="flex-row">
              <fieldset>
                <label for="password">Password</label>
                <input type="password" id="password"/>
              </fieldset>
            </div>
            <div className="space-between">
              <span>
                <fieldset className="checkbox--custom">
                  <input type="checkbox" id="remember-me"/>
                  <label for="remember-me">Remember me</label>
                </fieldset>
              </span>
              <button className="button button--transparent">
                Forgot your password
              </button>
            </div>
          </div>
          <div className="card--footer">
            <button className="button-block">Sign In</button>
          </div>
        </div>

        <div className="card grid">
          <h2>Grid Card</h2>
          <hr />
          <fieldset className="grid--third">
            <label for="first-name">First Name</label>
            <input type="text" id="first-name"/>
          </fieldset>
          <fieldset className="grid--third">
            <label for="middle-name">Middle Name</label>
            <input type="text" id="middle-name"/>
          </fieldset>
          <fieldset className="grid--third">
            <label for="last-name">Last Name</label>
            <input type="text" id="last-name"/>
          </fieldset>
          <fieldset className="grid--third">
            <label for="birthday">Date of Birth</label>
            <input type="text" id="birthday"/>
          </fieldset>
          <fieldset className="grid--third select--has-icon">
            <label for="gender">Gender</label>
            <select id="gender">
              <option>Male</option>
              <option>Female</option>
            </select>
          </fieldset>
          <div>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </main>

    </AppContent>
  </Layout>
)
