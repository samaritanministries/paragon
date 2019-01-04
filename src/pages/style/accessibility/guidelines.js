import React from 'react'

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

      <h2 className="has-number has-number--one no-margin--top">Contrast Ratios</h2>
      <p>Pay attention to your colors and contrast within your app to help users efficiently navigate your app without strain.</p>
      <div className="image-container">
        <div className="image" id="accessibility--contrast-ratios"></div>
      </div>

      <blockquote className="tips" style={{ marginTop: "2rem" }}>
        <strong>Tip: Understanding Web Content Accessibility Guidelines (WCAG)</strong>
        <p>WCAG 2.0 level AA standards require contrast ratios of 4.5:1 for normal text and 3:1 for large text. Level AAA require contrast ratios of 7:1 for normal text and 4.5:1 for large text. Use these helpful resources to learn more and check your designs:</p>
        <ul className="tips-list">
          <li><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html" target="_blank" rel="noopener noreferrer">WCAG Standards</a></li>
          <li><a href="http://webaim.org/resources/contrastchecker/" target="_blank" rel="noopener noreferrer">Contrast Checker</a></li>
        </ul>
      </blockquote>


      <h2 className="has-number has-number--two">Color Blindness</h2>
      <p>Most people affected by color blindness can see either red or blue. Some can neither see red nor green. For this reason, we recommend altering between red and blue buttons, rather than red and green.</p>
      <div className="image-container">
        <div className="image" id="accessibility--color-blindness"></div>
      </div>
      <p>While we can try to take measures to account for color blindness, not all of these issues can be solved. Sometimes positioning and context can be the cure. Support your actions with descriptive text, icons or good placement to best communicate with your user.</p>
      <blockquote className="tips">
        <strong>Tip: Test Your Colors</strong>
        <p>Use accessiblity apps like <a href="https://michelf.ca/projects/sim-daltonism/" target="_blank" rel="noopener noreferrer">Sim Daltonism</a> to simulate how your designs can be affected by color blindness.</p>
      </blockquote>



      <h2 className="has-number has-number--three">Design for Every Form Factor</h2>
      <p>In order to develop an app on the Dash Platform, your app must be responsive and mobile-friendly. A poor user experience can lead a member to associate that bad taste with your brand. Below are a few tips when designing for mobile and touch devices.</p>
      <h3>Mobile First</h3>
      <p>As of May, 2017, an average of 19% of our membership access the Dashboard from a touch device. While that number may not seem impressive, it is equal to roughly 20,000 sessions per month (and growing). For this reason, it is important that you offer a clean, consisent experience throughout every form factor. Utilize the grid system built into the Dashing Framework to get a head start on designing a mobile first layout.</p>
      <h3>Touch Targets</h3>
      <p>There’s nothing more annoying than trying to tap on tiny tooltip icons, over and over, with no success. It is important to add plenty of padding around links and icons so your users can quickly and accurately interact with your app.</p>
      <div className="image-container">
        <div className="image" id="accessibility--touch-targets"></div>
      </div>

      <h2 className="has-number has-number--four">Focus on Fonts</h2>
      <p>When adding text to your app or website, pay careful attention to the size that it is displayed. Body text should be 16px - 18px in size, and labels should be no smaller than 12px. Using anything smaller can cause strain and frustration for your user.</p>
      <blockquote className="caution">
        <strong>Caution: Don't Save Text as an Image</strong>
        <p>Displaying text as an image can cause pixelation and make sentenses difficult to read. Additionally, this prevents screen readers from seeing and reading text to your user.</p>
      </blockquote>
    </div>
    </AppContent>
  </Layout>
)
