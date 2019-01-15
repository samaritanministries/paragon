import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'

const currentPageName = "Accessibility";
const currentPageNameLower = currentPageName.toLowerCase();

export default () => (
  <Layout>
    <header className="subnav">
      <h1>Accessibility</h1>
      <SubNav pageName={currentPageNameLower} sectionName="style"/>
    </header>
    <AppContent>
		<div className="grid grid-padding">

      <p className="intro">
        Samaritan web products are built to be consistent, clean, and confident. This is achieved through accessible design, which allows members of all abilites to successfully navigate and interact with our UI.
      </p>

      <h2 className="has-number has-number--one no-margin--top">Color</h2>
      <p>Color is an important design element used to highlight valuable information to our users. When used correctly, it allows users to quickly navigate the page and find what they're looking for.</p>

      <div>
        <h3>Contrast Ratios</h3>
        <p>Color used within buttons, links, and navigation elements must pass the WCAG 2.1 AA rating for accessibility.</p>
      </div>
      <div className="example-container">
        <div className="grid x-accessibility-color-container">
          <div className="grid--half x-accessibility-colorBlack">
            <div className="space-between"><h2>Light on Dark</h2><span className="tag tag--no-link tag--solid tag--green">PASS</span></div>
            <p>Light on Dark</p>
          </div>
          <div className="grid--half x-accessibility-colorWhite">
            <div className="space-between"><h2>Light on Dark</h2><span className="tag tag--no-link tag--solid tag--green">PASS</span></div>
            <p>Dark on Light</p>
          </div>
        </div>
        <div className="grid x-accessibility-color-container mt-space-s">
          <div className="grid--half x-accessibility-colorOffBlack">
            <div className="space-between"><h2>Light on Dark</h2><span className="tag tag--no-link tag--solid tag--red">FAIL</span></div>
            <p>Light on Dark</p>
          </div>
          <div className="grid--half x-accessibility-colorOffWhite">
            <div className="space-between"><h2>Light on Dark</h2><span className="tag tag--no-link tag--solid tag--red">FAIL</span></div>
            <p>Dark on Light</p>
          </div>
        </div>
      </div>

      <blockquote className="tips">
        <strong>Tip: Understanding Web Content Accessibility Guidelines (WCAG)</strong>
        <p>WCAG 2.1 level AA standards require contrast ratios of 4.5:1 for normal text and 3:1 for large text. Level AAA require contrast ratios of 7:1 for normal text and 4.5:1 for large text. Use these helpful resources to learn more and test your designs:</p>
        <ul className="tips-list">
          <li><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html" target="_blank" rel="noopener noreferrer">WCAG Standards</a></li>
          <li><a href="http://webaim.org/resources/contrastchecker/" target="_blank" rel="noopener noreferrer">Contrast Checker</a></li>
        </ul>
      </blockquote>

      <div>
        <h3>Color Blindness</h3>
        <p>Don't rely on color alone to communicate important information to your user. Support key information with related icons and accurate messaging to ensure every user receives the same information.</p>
      </div>

      <div className="example-container">
        <div className="card">
          <div className="card-content">
            <fieldset className="has-error">
              <label htmlFor="password-error">Password</label>
              <input type="password" id="password-error" autocomplete="off" value="fdas"/>
              <div className="message">
                <i className="dashing-icon dashing-icon--alert-filled"></i>
                The password you've entered isn't incorrect.
              </div>
            </fieldset>
          </div>
        </div>
      </div>
      <blockquote className="tips">
        <strong>Tip: Test Your Colors</strong>
        <p>Use accessiblity tools like <a href="https://michelf.ca/projects/sim-daltonism/" target="_blank" rel="noopener noreferrer">Sim Daltonism</a> or <a href="https://github.com/oftheheadland/Colorblindly" target="_blank" rel="noopener noreferrer">Colorblindly</a> to simulate how your designs can be affected by color blindness.</p>
      </blockquote>

      <h2 className="has-number has-number--two">Layout</h2>
      <p>Samaritan products must be responsive and mobile-friendly. Below are a few tips when designing for mobile and touch devices.</p>
      <div>
        <h3>Mobile First</h3>
        <p>As of 2019, roughly 35% of our membership access the Dashboard from a touch device. For this reason, it is important that you offer a clean, consisent experience throughout every form factor. Utilize the <Link to="/components/css-grid/code">CSS grid</Link> system built into the Paragon Framework to get a head start on designing a mobile first layout.</p>
      </div>

      <h2 className="has-number has-number--three">Icons & Images</h2>
      <div>
        <h3>Touch Targets</h3>
        <p>Paragon buttons and actions are designed for function. According to a study by the <a href="http://touchlab.mit.edu/publications/2003_009.pdf" target="_blank" rel="noopener noreferrer">MIT Touch Lab</a>, the average width of a pointer finger equates to about 45-57 pixels. It is important that the size of interactive targets don't cause users to make touch errors. For this reason, interactive actions and icons have a touch target size of at least 34px.</p>
      </div>
      <div className="example-container">
        <fieldset>
          <button className="mr-space-m">Button</button>
          <button className="button--icon button--icon--small button--transparent button--close mr-space-l"></button>
          <div className="checkbox--custom inline">
            <input type="checkbox" id="touch-target-checkbox" defaultChecked={true}/>
            <label htmlFor="touch-target-checkbox">Checkbox</label>
          </div>
        </fieldset>
      </div>

      <h2 className="has-number has-number--four">Language</h2>
      <p>When adding text to your app or website, pay careful attention to the size that it is displayed. Body text should be 16px - 18px in size, and labels should be no smaller than 12px. Using anything smaller can cause strain and frustration for your user.</p>
      <blockquote className="caution">
        <strong>Caution: Don't Save Text as an Image</strong>
        <p>Displaying text as an image can cause pixelation and make sentenses difficult to read. Additionally, this prevents screen readers from seeing and reading text to your user.</p>
      </blockquote>
    </div>
    </AppContent>
  </Layout>
)
