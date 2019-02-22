import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'

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
          <p className="intro">Text legibility and consistency is a must. Adopting the default font and type structure will ensure that you are up to par with our defined design and usability standards in order to make your App more successful.</p>

            <h2 className="has-number has-number--one no-margin--top">System Typeface</h2>
            <p>Source Sans Pro was Adobes first open source typeface family, created in 2012. Designed primarily for user interface, it draws from the clarity and legibility of twentieth-century American gothic typefaces (News Gothic and Franklin Gothic). Samaritan utilizes this typeface throughout our Apps to create a legible interface on any device or screen.</p>

            <div className="image-container">
              <div className="image" id="typography--specimen" alt="Source Sans Pro specimen"></div>
            </div>
        </div>
      </div>

      <div className="row">
        <div className="column column--full">
          <h2 className="has-number has-number--two">Type Structure</h2>
          <p>Keeping a well structured typographic scale is extremely important for legibility and hierarchy in your type. While following a certain scale will never replace the eye of a designer,  it is considered responsible design to showcase rationale behind your design choices. Our typographic structure is loosely based on a <a href="http://alistapart.com/article/more-meaningful-typography" target="_blank" rel="noopener noreferrer">major third scale (1:1.25 ratio)</a>, providing a comfortable range between the h1 and small elements.</p>

          <div className="table--container has-border is-hidden_tablet is-hidden_desktop" style={{ marginBottom: "2rem" }}>
            <table className="table has-dividers">
              <tr>
                <td>&lt;h1&gt;</td>
                <td><h1>Source Sans Pro</h1></td>
              </tr>
              <tr>
                <td>&lt;h2&gt;</td>
                <td><h2>Source Sans Pro</h2></td>
              </tr>
              <tr>
                <td>&lt;h3&gt;</td>
                <td><h3>Source Sans Pro</h3></td>
              </tr>
              <tr>
                <td>&lt;p&gt;</td>
                <td><p>Source Sans Pro</p></td>
              </tr>
              <tr>
                <td>&lt;small&gt;</td>
                <td><small>Source Sans Pro</small></td>
              </tr>
              <tr>
                <td>&lt;xsmall&gt;</td>
                <td><small className="font-size--xsmall">Source Sans Pro</small></td>
              </tr>
            </table>
          </div>

          <div className="table--container has-border is-hidden_phone" style={{ marginBottom: "2rem" }}>
            <table className="table has-dividers">
              <thead>
                <tr>
                  <th>Sass Variable</th>
                  <th>HTML Element</th>
                  <th>Pixel</th>
                  <th>Rem</th>
                  <th>Example</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                <td>$xlarge</td>
                <td>&lt;h1&gt;</td>
                <td>35px</td>
                <td>1.953rem</td>
                <td><h1>Source Sans Pro</h1></td>
              </tr>
              <tr>
                <td>$large</td>
                <td>&lt;h2&gt;</td>
                <td>28px</td>
                <td>1.563rem</td>
                <td><h2>Source Sans Pro</h2></td>
              </tr>
              <tr>
                <td>$medium</td>
                <td>&lt;h3&gt;</td>
                <td>23px</td>
                <td>1.25rem</td>
                <td><h3>Source Sans Pro</h3></td>
              </tr>
              <tr>
                <td>$body</td>
                <td>&lt;p&gt;</td>
                <td>18px</td>
                <td>1rem</td>
                <td><p>Source Sans Pro</p></td>
              </tr>
              <tr>
                <td>$small</td>
                <td>&lt;small&gt;</td>
                <td>16px</td>
                <td>0.9rem</td>
                <td><small>Source Sans Pro</small></td>
              </tr>
              <tr>
                <td>$xsmall</td>
                <td>&lt;label&gt;</td>
                <td>14px</td>
                <td>0.8rem</td>
                <td><fieldset><label>Source Sans Pro</label></fieldset></td>
              </tr>
              </tbody>
            </table>
          </div>

          <p>For increased scanability, we recommend only using regular and semibold weights (400 & 600 respectively); adding additional weights can clutter your content. Keep in mind that achieving visual hierarchy should not be limited by font weight alone. Rather, it is recommended that you use a combination of weight, size and color variations in order to create proper hierarchy.</p>

          <blockquote className="tips">
            <strong>Tip: Using the &lt;strong&gt; tag</strong>
            <p>For small phrases that require extra attention, try using the &lt;strong&gt; tag, which has been formatted to display a heavier weight and darker color.</p>
          </blockquote>
        </div>
      </div>

      <div className="row">
        <div className="column column--full">

          <h2 className="has-number has-number--three">Legibility</h2>

          <p>In order to create a better reading experience, having a slightly larger body font size of 18px (1rem) allows users to quickly and easily scan your content. For small areas of text such as captions, copyrights and labels, it is advised to use the <strong>$small</strong> (16px) or <strong>$xsmall</strong> (14px) Sass variable.  When presenting content in paragraphs, the &lt;p&gt; element or the <strong>$body</strong> Sass variable (18px) should be used.</p>

          <blockquote className="caution">
            <strong>Caution: Minimum font size</strong>
            <p>In an effort to focus on the legibility of your type, font size should never be displayed below 0.8rem, (14px). Always keep your users in mind when deciding on a final font size.</p>
          </blockquote>

          <blockquote className="related">
            <strong>Related: Provide clear contrast</strong>
            <p style={{ marginBottom: "0.5rem" }}>When adjusting the color of your type, be sure to provide clear contrast between text and background colors. Review <Link to="../style/accessibility">accessibility guidelines</Link> for more information.</p>
            <Link to="../style/accessibility" className="button button--border button--smooth">Review Guideline</Link>
          </blockquote>

        </div>
      </div>

      <div className="row">
        <div className="column column--full">

            <h2 class="has-number has-number--four">Line Length</h2>
            <p>To ensure an easy reading experience, restrict the character count in paragraphs to around 55–85 characters per line. Lines under 55 characters can cause your user to skip over words, while lines over 85 characters can result in your user losing their place.</p>
            <div class="image-container" style={{ marginBottom: "2rem" }}>
              <div class="image" id="typography--line-length" alt="Line Length Guidelines"></div>
            </div>

        </div>
      </div>

  </AppContent>
</Layout>
)
