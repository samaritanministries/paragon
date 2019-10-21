import React from 'react'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'
// import CodeToggle from '../../../components/codetoggle'
import StillWorking from '../../../components/stillworking'

const currentPageName = "Accessibility";
const currentPageNameLower = currentPageName.toLowerCase();

export default () => (
  <Layout>
    <header className="subnav">
      <h1>{currentPageName}</h1>
      <SubNav pageName={currentPageNameLower} sectionName="style"/>
    </header>
    <AppContent>

    <div className="grid grid-padding">
      <StillWorking />
      {/* <h1>Color Accessibility Guidelines</h1>
      <p>When using color in buttons, links, and navigation, it is important that the foreground-to-background contrast ratio passes <a href="https://webaim.org/resources/contrastchecker/" target="_blank" rel="noopener noreferrer">WCAG 2.1 AA rating</a> rating for accessibility. Paragon UI colors have been tested against Level AA standards are displayed below with examples of usage.</p>
      <ul style={{marginTop: "0"}}>
        <li><strong>Level AA</strong> requires a contrast ratio of at least <strong>4.5:1</strong> for normal text, and <strong>3:1</strong> for large text 24px or larger.</li>
        <li><strong>Level AAA</strong> requires a contrast ratio of at least <strong>7:1</strong> for normal text, and <strong>4.5:1</strong> for large text 24px or larger.</li>
      </ul>
      <h2>Brand Colors</h2>
      <div className="card table--container x-accessiblity-table" style={{overflow: "hidden"}}>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>HEX Value</th>
              <th>Large</th>
              <th>Body</th>
              <th>Button</th>
              <th>Icon</th>
            </tr>
          </thead>
          <tbody>
            <tr className="color--brand-purple">
              <td>$brand-purple</td>
              <td><span>#72569B</span></td>
              <td><i className="x-pass"></i><h2 className="text-color--white">AAA</h2></td>
              <td><i className="x-pass"></i><p className="text-color--white">AA</p></td>
              <td><i className="x-pass"></i><button className="x-button--brand-purpleWhite">AA</button></td>
              <td><i className="x-pass"></i><i className="x-accessibility--white"></i></td>
            </tr>
            <tr className="color--brand-purple" style={{borderBottom: "2px solid #EDEDED"}}>
              <td></td>
              <td></td>
              <td><i className="x-pass"></i><h2 className="text-color--black">AA</h2></td>
              <td><i className="x-fail"></i><p className="text-color--black">FAIL</p></td>
              <td><i className="x-fail"></i><button className="x-button--brand-purpleBlack">FAIL</button></td>
              <td><i className="x-pass"></i><i className="x-accessibility--black"></i></td>
            </tr>
            <tr className="color--brand-blue">
              <td>$brand-blue</td>
              <td><span>#28336D</span></td>
              <td><i className="x-pass"></i><h2 className="text-color--white">AAA</h2></td>
              <td><i className="x-pass"></i><p className="text-color--white">AAA</p></td>
              <td><i className="x-pass"></i><button className="x-button--brand-blueWhite">AAA</button></td>
              <td><i className="x-pass"></i><i className="x-accessibility--white"></i></td>
            </tr>
            <tr className="color--brand-blue" style={{borderBottom: "2px solid #EDEDED"}}>
              <td></td>
              <td></td>
              <td><i className="x-fail"></i><h2 className="text-color--black">FAIL</h2></td>
              <td><i className="x-fail"></i><p className="text-color--black">FAIL</p></td>
              <td><i className="x-fail"></i><button className="x-button--brand-blueBlack">FAIL</button></td>
              <td><i className="x-fail"></i><i className="x-accessibility--black"></i></td>
            </tr>
            <tr className="color--brand-red">
              <td>$brand-red</td>
              <td><span>#E96A63</span></td>
              <td><i className="x-pass"></i><h2 className="text-color--white">AA</h2></td>
              <td><i className="x-fail"></i><p className="text-color--white">FAIL</p></td>
              <td><i className="x-fail"></i><button className="x-button--brand-redWhite">FAIL</button></td>
              <td><i className="x-pass"></i><i className="x-accessibility--white"></i></td>
            </tr>
            <tr className="color--brand-red" style={{borderBottom: "2px solid #EDEDED"}}>
              <td></td>
              <td></td>
              <td><i className="x-pass"></i><h2 className="text-color--black">AAA</h2></td>
              <td><i className="x-pass"></i><p className="text-color--black">AA</p></td>
              <td><i className="x-pass"></i><button className="x-button--brand-redBlack">AA</button></td>
              <td><i className="x-pass"></i><i className="x-accessibility--black"></i></td>
            </tr>
            <tr className="color--brand-yellow">
              <td>$brand-yellow</td>
              <td><span>#F5CD66</span></td>
              <td><i className="x-fail"></i><h2 className="text-color--white">FAIL</h2></td>
              <td><i className="x-fail"></i><p className="text-color--white">FAIL</p></td>
              <td><i className="x-fail"></i><button className="x-button--brand-yellowWhite">FAIL</button></td>
              <td><i className="x-fail"></i><i className="x-accessibility--white"></i></td>
            </tr>
            <tr className="color--brand-yellow" style={{borderBottom: "2px solid #EDEDED"}}>
              <td></td>
              <td></td>
              <td><i className="x-pass"></i><h2 className="text-color--black">AAA</h2></td>
              <td><i className="x-pass"></i><p className="text-color--black">AAA</p></td>
              <td><i className="x-pass"></i><button className="x-button--brand-yellowBlack">AAA</button></td>
              <td><i className="x-pass"></i><i className="x-accessibility--black"></i></td>
            </tr>
            <tr className="color--brand-gray">
              <td>$brand-gray</td>
              <td><span>#F1F2F2</span></td>
              <td><i className="x-fail"></i><h2 className="text-color--white">FAIL</h2></td>
              <td><i className="x-fail"></i><p className="text-color--white">FAIL</p></td>
              <td><i className="x-fail"></i><button className="x-button--brand-grayWhite">FAIL</button></td>
              <td><i className="x-fail"></i><i className="x-accessibility--white"></i></td>
            </tr>
            <tr className="color--brand-gray">
              <td></td>
              <td></td>
              <td><i className="x-pass"></i><h2 className="text-color--black">AAA</h2></td>
              <td><i className="x-pass"></i><p className="text-color--black">AAA</p></td>
              <td><i className="x-pass"></i><button className="x-button--brand-grayBlack">AAA</button></td>
              <td><i className="x-pass"></i><i className="x-accessibility--black"></i></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>UI Colors</h2>
      <div class="card table--container x-accessiblity-table" style={{overflow: "hidden"}}>
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>HEX Value</th>
              <th>Large</th>
              <th>Body</th>
              <th>Button</th>
              <th>Icon</th>
            </tr>
          </thead>
          <tbody>
            <tr className="color--blue">
              <td>$blue</td>
              <td><span>#3F70C9</span></td>
              <td><i className="x-pass"></i><h2 className="text-color--white">AAA</h2></td>
              <td><i className="x-pass"></i><p className="text-color--white">AA</p></td>
              <td><i className="x-pass"></i><button className="x-button--blueWhite">AA</button></td>
              <td><i className="x-pass"></i><i className="x-accessibility--white"></i></td>
            </tr>
            <tr className="color--blue" style={{borderBottom: "2px solid #EDEDED"}}>
              <td></td>
              <td></td>
              <td><i className="x-pass"></i><h2 className="text-color--black">AA</h2></td>
              <td><i className="x-fail"></i><p className="text-color--black">FAIL</p></td>
              <td><i className="x-fail"></i><button className="x-button--blueBlack">FAIL</button></td>
              <td><i className="x-pass"></i><i className="x-accessibility--black"></i></td>
            </tr>
            <tr className="color--green">
              <td>$green</td>
              <td><span>#09AA66</span></td>
              <td><i className="x-pass"></i><h2 className="text-color--white">AA</h2></td>
              <td><i className="x-fail"></i><p className="text-color--white">FAIL</p></td>
              <td><i className="x-fail"></i><button className="x-button--greenWhite">FAIL</button></td>
              <td><i className="x-pass"></i><i className="x-accessibility--white"></i></td>
            </tr>
            <tr className="color--green" style={{borderBottom: "2px solid #EDEDED"}}>
              <td></td>
              <td></td>
              <td><i className="x-pass"></i><h2 className="text-color--black">AAA</h2></td>
              <td><i className="x-pass"></i><p className="text-color--black">AA</p></td>
              <td><i className="x-pass"></i><button className="x-button--greenBlack">AA</button></td>
              <td><i className="x-pass"></i><i className="x-accessibility--black"></i></td>
            </tr>
            <tr className="color--orange">
              <td>$orange</td>
              <td><span>#FFA11F</span></td>
              <td><i className="x-fail"></i><h2 className="text-color--white">FAIL</h2></td>
              <td><i className="x-fail"></i><p className="text-color--white">FAIL</p></td>
              <td><i className="x-fail"></i><button className="x-button--orangeWhite">FAIL</button></td>
              <td><i className="x-fail"></i><i className="x-accessibility--white"></i></td>
            </tr>
            <tr className="color--orange" style={{borderBottom: "2px solid #EDEDED"}}>
              <td></td>
              <td></td>
              <td><i className="x-pass"></i><h2 className="text-color--black">AAA</h2></td>
              <td><i className="x-pass"></i><p className="text-color--black">AAA</p></td>
              <td><i className="x-pass"></i><button className="x-button--orangeBlack">AAA</button></td>
              <td><i className="x-pass"></i><i className="x-accessibility--black"></i></td>
            </tr>
            <tr className="color--red">
              <td>$red</td>
              <td><span>#DA3D30</span></td>
              <td><i className="x-pass"></i><h2 className="text-color--white">AA</h2></td>
              <td><i className="x-fail"></i><p className="text-color--white">FAIL</p></td>
              <td><i className="x-fail"></i><button className="x-button--redWhite">FAIL</button></td>
              <td><i className="x-pass"></i><i className="x-accessibility--white"></i></td>
            </tr>
            <tr className="color--red" style={{borderBottom: "2px solid #EDEDED"}}>
              <td></td>
              <td></td>
              <td><i className="x-pass"></i><h2 className="text-color--black">AAA</h2></td>
              <td><i className="x-pass"></i><p className="text-color--black">AA</p></td>
              <td><i className="x-pass"></i><button className="x-button--redBlack">AA</button></td>
              <td><i className="x-pass"></i><i className="x-accessibility--black"></i></td>
            </tr>
            <tr className="color--purple">
              <td>$purple</td>
              <td><span>#9F65AE</span></td>
              <td><i className="x-pass"></i><h2 className="text-color--white">AA</h2></td>
              <td><i className="x-fail"></i><p className="text-color--white">FAIL</p></td>
              <td><i className="x-fail"></i><button className="x-button--purpleWhite">FAIL</button></td>
              <td><i className="x-pass"></i><i className="x-accessibility--white"></i></td>
            </tr>
            <tr className="color--purple" style={{borderBottom: "2px solid #EDEDED"}}>
              <td></td>
              <td></td>
              <td><i className="x-pass"></i><h2 className="text-color--black">AAA</h2></td>
              <td><i className="x-pass"></i><p className="text-color--black">AA</p></td>
              <td><i className="x-pass"></i><button className="x-button--purpleBlack">AA</button></td>
              <td><i className="x-pass"></i><i className="x-accessibility--black"></i></td>
            </tr>
            <tr className="color--gray">
              <td>$gray</td>
              <td><span>#D4D4D4</span></td>
              <td><i className="x-fail"></i><h2 className="text-color--white">FAIL</h2></td>
              <td><i className="x-fail"></i><p className="text-color--white">FAIL</p></td>
              <td><i className="x-fail"></i><button className="x-button--grayWhite">FAIL</button></td>
              <td><i className="x-fail"></i><i className="x-accessibility--white"></i></td>
            </tr>
            <tr className="color--gray">
              <td></td>
              <td></td>
              <td><i className="x-pass"></i><h2 className="text-color--black">AAA</h2></td>
              <td><i className="x-pass"></i><p className="text-color--black">AAA</p></td>
              <td><i className="x-pass"></i><button className="x-button--grayBlack">AAA</button></td>
              <td><i className="x-pass"></i><i className="x-accessibility--black"></i></td>
            </tr>
          </tbody>
        </table>
      </div> */}
    </div>
  </AppContent>
</Layout>
)
