import React from 'react'
import { Link } from 'gatsby'
import $ from 'jquery';
//import { CopyToClipboard } from 'react-copy-to-clipboard';

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'

const currentPageName = "Color";
const currentPageNameLower = currentPageName.toLowerCase();

class ColorGuidelines extends React.Component {

  constructor(props) {
    super(props);
    this.copyToClipboard = this.copyToClipboard.bind(this);
  }

  copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  }

    render() {

      return (
  <Layout>
    <header className="subnav">
      <h1>{currentPageName}</h1>
      <SubNav pageName={currentPageNameLower} sectionName="style"/>
    </header>
    <AppContent>

      <div className="row">
        <div className="column column--full">
          <p className="intro">Samaritan UI elements that are used to display or contain textual content are required to meet <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/conformance.html#uc-levels-head" target="_blank" rel="noopener noreferrer">WCAG Contrast Level AA</a> standards. Samaritan Brand and UI Themes have been tested against both Level AA and Level AAA standards.</p>

          <h2 className="has-number has-number--one no-margin--top">UI Theme</h2>
          <p>Use the UI Theme when interacting with actionable items such as buttons, links and clickable banners.</p>
        </div>

        <div className="column column--half">
          <div className="card card-color--large relative color--ui-blue">
            <div className="color-left">
              <i className="dashing-icon dashing-icon--checkmark-filled dashing-icon--green"></i>
              <i className="dashing-icon dashing-icon--checkmark-filled dashing-icon--green"></i>
              <i className="dashing-icon dashing-icon--close dashing-icon--red"></i>
              <i className="dashing-icon dashing-icon--close dashing-icon--red"></i>
            </div>
            <div className="color-center">
              <span className="color-white aa"></span>
              <span className="color-white aaa"></span>
              <span className="color-black aa"></span>
              <span className="color-black aaa"></span>
            </div>
            <div className="color-right">
              <label>Sass Variable</label>
              <span className="sass-variable"></span>
              <label>HEX Code</label>
              <span className="hex-code"></span>
              <span id="ui-blue" style={{ display: "none" }}>#3F70C9</span>
              <label>Usage</label>
              <span>Action, Active</span>
              <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#ui-blue')}>click to copy</button>
            </div>
          </div>
        </div>

        <div className="column column--half">
          <div className="card card-color--large relative color--ui-green">
            <div className="color-left">
              <i className="dashing-icon dashing-icon--checkmark-filled dashing-icon--green"></i>
              <i className="dashing-icon dashing-icon--close dashing-icon--red"></i>
              <i className="dashing-icon dashing-icon--checkmark-filled dashing-icon--green"></i>
              <i className="dashing-icon dashing-icon--checkmark-filled dashing-icon--green"></i>
            </div>
            <div className="color-center">
              <span className="color-white aa"></span>
              <span className="color-white aaa"></span>
              <span className="color-black aa"></span>
              <span className="color-black aaa"></span>
            </div>
            <div className="color-right">
              <label>Sass Variable</label>
              <span className="sass-variable"></span>
              <label>HEX Code</label>
              <span className="hex-code"></span>
              <label>Usage</label>
              <span>Success, Submit, New </span>
              <span id="ui-green" style={{ display: "none" }}>#09AA66</span>
              <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#ui-green')}>click to copy</button>
            </div>
          </div>
        </div>

        <div className="column column--half">
          <div className="card card-color--large relative color--ui-orange">
            <div className="color-left">
              <i className="dashing-icon dashing-icon--close dashing-icon--red"></i>
              <i className="dashing-icon dashing-icon--close dashing-icon--red"></i>
              <i className="dashing-icon dashing-icon--checkmark-filled dashing-icon--green"></i>
              <i className="dashing-icon dashing-icon--checkmark-filled dashing-icon--green"></i>
            </div>
            <div className="color-center">
              <span className="color-white aa"></span>
              <span className="color-white aaa"></span>
              <span className="color-black aa"></span>
              <span className="color-black aaa"></span>
            </div>
            <div className="color-right">
              <label>Sass Variable</label>
              <span className="sass-variable"></span>
              <label>HEX Code</label>
              <span className="hex-code"></span>
              <label>Usage</label>
              <span>Warning, Problem </span>
              <span id="ui-orange" style={{ display: "none" }}>#FFA11F</span>
              <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#ui-orange')}>click to copy</button>
            </div>
          </div>
        </div>

        <div className="column column--half">
          <div className="card card-color--large relative color--ui-red">
            <div className="color-left">
              <i className="dashing-icon dashing-icon--checkmark-filled dashing-icon--green"></i>
              <i className="dashing-icon dashing-icon--close dashing-icon--red"></i>
              <i className="dashing-icon dashing-icon--checkmark-filled dashing-icon--green"></i>
              <i className="dashing-icon dashing-icon--close dashing-icon--red"></i>
            </div>
            <div className="color-center">
              <span className="color-white aa"></span>
              <span className="color-white aaa"></span>
              <span className="color-black aa"></span>
              <span className="color-black aaa"></span>
            </div>
            <div className="color-right">
              <label>Sass Variable</label>
              <span className="sass-variable"></span>
              <label>HEX Code</label>
              <span className="hex-code"></span>
              <label>Usage</label>
              <span>Error, Danger </span>
              <span id="ui-red" style={{ display: "none" }}>#DA3D30</span>
              <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#ui-red')}>click to copy</button>
            </div>
          </div>
        </div>

        <div className="column column--half">
          <div className="card card-color--large relative color--ui-purple">
            <div className="color-left">
              <i className="dashing-icon dashing-icon--checkmark-filled dashing-icon--green"></i>
              <i className="dashing-icon dashing-icon--close dashing-icon--red"></i>
              <i className="dashing-icon dashing-icon--checkmark-filled dashing-icon--green"></i>
              <i className="dashing-icon dashing-icon--close dashing-icon--red"></i>
            </div>
            <div className="color-center">
              <span className="color-white aa"></span>
              <span className="color-white aaa"></span>
              <span className="color-black aa"></span>
              <span className="color-black aaa"></span>
            </div>
            <div className="color-right">
              <label>Sass Variable</label>
              <span className="sass-variable"></span>
              <label>HEX Code</label>
              <span className="hex-code"></span>
              <label>Usage</label>
              <span>Login, Samaritan </span>
              <span id="ui-purple" style={{ display: "none" }}>#9F65AE</span>
              <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#ui-purple')}>click to copy</button>
            </div>
          </div>
        </div>

        <div className="column column--half">
          <div className="card card-color--large relative color--ui-gray">
            <div className="color-left">
              <i className="dashing-icon dashing-icon--close dashing-icon--red"></i>
              <i className="dashing-icon dashing-icon--close dashing-icon--red"></i>
              <i className="dashing-icon dashing-icon--checkmark-filled dashing-icon--green"></i>
              <i className="dashing-icon dashing-icon--checkmark-filled dashing-icon--green"></i>
            </div>
            <div className="color-center">
              <span className="color-white aa"></span>
              <span className="color-white aaa"></span>
              <span className="color-black aa"></span>
              <span className="color-black aaa"></span>
            </div>
            <div className="color-right">
              <label>Sass Variable</label>
              <span className="sass-variable"></span>
              <label>HEX Code</label>
              <span className="hex-code"></span>
              <label>Usage</label>
              <span>Secondary, Standard </span>
              <span id="ui-gray" style={{ display: "none" }}>#D4D4D4</span>
              <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#ui-gray')}>click to copy</button>
            </div>
          </div>
        </div>

        <blockquote className="related" style={{ display: "inline-block", marginTop: "1rem" }}>
          <strong>Related: Provide clear contrast</strong>
          <p style={{ marginBottom: "0.5rem" }}>When adjusting the color of your type, be sure to provide clear contrast between text and background colors. Review <Link to="/style/accessibility">accessibility guidelines</Link> for more information.</p>
          <Link className="button button--border button--smooth" to="/style/accessibility">Review Guideline</Link>
        </blockquote>

        <h2 className="has-number has-number--two">System Theme</h2>
        <p>Use the System Theme when creating new interface elements to keep to a unified pallet.</p>


        {/* GRAY THEME */}
          <div className="column column--full">
            <div className="card no-margin" style={{ overflow: "hidden" }}>
              <div className="card--header card--header--color has-border color--gray-500">Gray</div>
              <div className="card-color--small color--gray-50">

                  <div className="color-swatch">
                    <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--gray-50')}>click to copy</button>
                  </div>

                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--gray-50" style={{ display: "none" }}>#F2F2F2</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$gray-50</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--gray-100">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--gray-100')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--gray-100" style={{ display: "none" }}>#EDEDED</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$gray-100</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--gray-150">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--gray-150')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--gray-150" style={{ display: "none" }}>#E0E0E0</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$gray-150</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--gray-200">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--gray-200')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--gray-200" style={{ display: "none" }}>#D4D4D4</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$gray-200</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--gray-250">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--gray-250')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--gray-250" style={{ display: "none" }}>#C7C7C7</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$gray-250</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--gray-300">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--gray-300')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--gray-300" style={{ display: "none" }}>#BABABA</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$gray-300</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--gray-400">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--gray-400')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--gray-400" style={{ display: "none" }}>#A1A1A1</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$gray-400</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--gray-500">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--gray-500')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--gray-500" style={{ display: "none" }}>#878787</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$gray-500</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--gray-600">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--gray-600')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--gray-600" style={{ display: "none" }}>#6E6E6E</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$gray-600</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--gray-700">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--gray-700')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--gray-700" style={{ display: "none" }}>#555555</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$gray-700</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--gray-800">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--gray-800')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--gray-800" style={{ display: "none" }}>#3B3B3B</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$gray-800</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--gray-900">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--gray-900')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--gray-900" style={{ display: "none" }}>#222222</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$gray-900</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        {/* COOL GRAY THEME */}
          <div className="column column--full">
            <div className="card no-margin" style={{ overflow: "hidden" }}>
              <div className="card--header card--header--color has-border color--gray-500c">Cool Gray</div>
              <div className="card-color--small color--gray-50c">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--gray-50c')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--gray-50c" style={{ display: "none" }}>#F5F6F7</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$gray-50c</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--gray-100c">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--gray-100c')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--gray-100c" style={{ display: "none" }}>#EDF1F2</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$gray-100c</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--gray-150c">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--gray-150c')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--gray-150c" style={{ display: "none" }}>#DDE2E6</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$gray-150c</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--gray-200c">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--gray-200c')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--gray-200c" style={{ display: "none" }}>#D2D5D9</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$gray-200c</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--gray-250c">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--gray-250c')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--gray-250c" style={{ display: "none" }}>#C4C8CD</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$gray-250c</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--gray-300c">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--gray-300c')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--gray-300c" style={{ display: "none" }}>#B6BBC2</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$gray-300c</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--gray-400c">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--gray-400c')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--gray-400c" style={{ display: "none" }}>#9CA3AA</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$gray-400c</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--gray-500c">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--gray-500c')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--gray-500c" style={{ display: "none" }}>#828B94</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$gray-500c</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--gray-600c">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--gray-600c')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--gray-600c" style={{ display: "none" }}>#6C747D</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$gray-600c</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--gray-700c">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--gray-700c')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--gray-700c" style={{ display: "none" }}>#575D64</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$gray-700c</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--gray-800c">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--gray-800c')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--gray-800c" style={{ display: "none" }}>#41464B</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$gray-800c</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--gray-900c">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--gray-900c')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--gray-900c" style={{ display: "none" }}>#24292C</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$gray-900c</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        {/* BLUE THEME */}
          <div className="column column--full">
            <div className="card no-margin" style={{ overflow: "hidden" }}>
              <div className="card--header card--header--color has-border color--blue">Blue</div>
              <div className="card-color--small color--blue-50">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--blue-50')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--blue-50" style={{ display: "none" }}>#E9FFFF</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$blue-50</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--blue-100">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--blue-100')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--blue-100" style={{ display: "none" }}>#D0F3FF</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$blue-100</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--blue-200">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--blue-200')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--blue-200" style={{ display: "none" }}>#B7DAFF</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$blue-200</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--blue-300">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--blue-300')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--blue-300" style={{ display: "none" }}>#9DC0FF</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$blue-300</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--blue-400">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--blue-400')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--blue-400" style={{ display: "none" }}>#84A7ED</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$blue-400</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--blue-500">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--blue-500')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--blue-500" style={{ display: "none" }}>#6A8DD3</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$blue-500</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--blue-600">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--blue-600')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--blue-600" style={{ display: "none" }}>#5174BA</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$blue-600</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--blue-700">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--blue-700')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--blue-700" style={{ display: "none" }}>#375AA0</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$blue-700</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--blue-800">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--blue-800')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--blue-800" style={{ display: "none" }}>#1E4187</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$blue-800</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--blue-900">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--blue-900')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--blue-900" style={{ display: "none" }}>#04276D</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$blue-900</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        {/* GREEN THEME */}
          <div className="column column--full">
            <div className="card no-margin" style={{ overflow: "hidden" }}>
              <div className="card--header card--header--color has-border color--green">Green</div>
              <div className="card-color--small color--green-50">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--green-50')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--green-50" style={{ display: "none" }}>#ACFFEB</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$green-50</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--green-100">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--green-100')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--green-100" style={{ display: "none" }}>#93FFD2</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$green-100</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--green-200">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--green-200')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--green-200" style={{ display: "none" }}>#7AFEB9</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$green-200</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--green-300">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--green-300')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--green-300" style={{ display: "none" }}>#60E49F</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$green-300</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--green-400">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--green-400')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--green-400" style={{ display: "none" }}>#47CB86</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$green-400</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--green-500">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--green-500')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--green-500" style={{ display: "none" }}>#2DB16C</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$green-500</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--green-600">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--green-600')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--green-600" style={{ display: "none" }}>#149853</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$green-600</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--green-700">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--green-700')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--green-700" style={{ display: "none" }}>#007E39</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$green-700</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--green-800">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--green-800')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--green-800" style={{ display: "none" }}>#006520</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$green-800</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--green-900">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--green-900')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--green-900" style={{ display: "none" }}>#004B06</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$green-900</span>
                  </div>
                </div>
              </div>
            </div>
          </div>


        {/* ORANGE THEME */}
          <div className="column column--full">
            <div className="card no-margin" style={{ overflow: "hidden" }}>
              <div className="card--header card--header--color has-border color--orange">Orange</div>
              <div className="card-color--small color--orange-50">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--orange-50')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--orange-50" style={{ display: "none" }}>#FFFFB0</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$orange-50</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--orange-100">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--orange-100')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--orange-100" style={{ display: "none" }}>#FFF997</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$orange-100</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--orange-200">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--orange-200')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--orange-200" style={{ display: "none" }}>#FFE07E</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$orange-200</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--orange-300">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--orange-300')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--orange-300" style={{ display: "none" }}>#FFC664</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$orange-300</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--orange-400">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--orange-400')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--orange-400" style={{ display: "none" }}>#F7AD4B</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$orange-400</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--orange-500">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--orange-500')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--orange-500" style={{ display: "none" }}>#DD9331</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$orange-500</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--orange-600">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--orange-600')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--orange-600" style={{ display: "none" }}>#C47A18</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$orange-600</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--orange-700">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--orange-700')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--orange-700" style={{ display: "none" }}>#AA6000</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$orange-700</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--orange-800">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--orange-800')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--orange-800" style={{ display: "none" }}>#914700</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$orange-800</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--orange-900">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--orange-900')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--orange-900" style={{ display: "none" }}>#772D00</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$orange-900</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        {/* RED THEME */}
          <div className="column column--full">
            <div className="card no-margin" style={{ overflow: "hidden" }}>
              <div className="card--header card--header--color has-border color--red">Red</div>
              <div className="card-color--small color--red-50">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--red-50')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--red-50" style={{ display: "none" }}>#FFCAB8</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$red-50</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--red-100">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--red-100')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--red-100" style={{ display: "none" }}>#FFB19F</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$red-100</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--red-200">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--red-200')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--red-200" style={{ display: "none" }}>#FF9886</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$red-200</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--red-300">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--red-300')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--red-300" style={{ display: "none" }}>#FF7E6C</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$red-300</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--red-400">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--red-400')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--red-400" style={{ display: "none" }}>#F76553</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$red-400</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--red-500">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--red-500')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--red-500" style={{ display: "none" }}>#DD4B39</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$red-500</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--red-600">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--red-600')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--red-600" style={{ display: "none" }}>#C43220</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$red-600</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--red-700">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--red-700')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--red-700" style={{ display: "none" }}>#AA1806</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$red-700</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--red-800">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--red-800')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--red-800" style={{ display: "none" }}>#910000</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$red-800</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--red-900">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--red-900')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--red-900" style={{ display: "none" }}>#770000</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$red-900</span>
                  </div>
                </div>
              </div>
            </div>
          </div>


        {/* PURPLE THEME */}
          <div className="column column--full">
            <div className="card no-margin" style={{ overflow: "hidden" }}>
              <div className="card--header card--header--color has-border color--purple">Purple</div>
              <div className="card-color--small color--purple-50">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--purple-50')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--purple-50" style={{ display: "none" }}>#F4CBFF</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$purple-50</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--purple-100">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--purple-100')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--purple-100" style={{ display: "none" }}>#DBB2E8</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$purple-100</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--purple-200">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--purple-200')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--purple-200" style={{ display: "none" }}>#C299CF</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$purple-200</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--purple-300">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--purple-300')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--purple-300" style={{ display: "none" }}>#A87FB5</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$purple-300</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--purple-400">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--purple-400')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--purple-400" style={{ display: "none" }}>#8F669C</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$purple-400</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--purple-500">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--purple-500')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--purple-500" style={{ display: "none" }}>#754C82</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$purple-500</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--purple-600">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--purple-600')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--purple-600" style={{ display: "none" }}>#5C3369</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$purple-600</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--purple-700">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--purple-700')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--purple-700" style={{ display: "none" }}>#42194F</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$purple-700</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--purple-800">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--purple-800')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--purple-800" style={{ display: "none" }}>#290036</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$purple-800</span>
                  </div>
                </div>
              </div>

              <div className="card-color--small color--purple-900">
                <div className="color-swatch">
                  <button className="button button--small button--transparent button--white button--copy" onClick={() => this.copyToClipboard('#color--purple-900')}>click to copy</button>
                </div>
                <div className="color-text">
                  <div className="color-detail">
                    <label>HEX Code</label>
                    <span className="hex-code"></span>
                    <span id="color--purple-900" style={{ display: "none" }}>#0F001C</span>
                  </div>
                  <div className="color-detail">
                    <label>Sass Variable</label>
                    <span>$purple-900</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>

    </AppContent>
  </Layout>
)
}
}
export default ColorGuidelines;
