import React from 'react'
import { Link } from 'gatsby'
import $ from 'jquery';
import PropTypes from 'prop-types'

import { iconsData } from "./iconData";
import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'
import CodeToggle from '../../../components/codetoggle'

const currentPageName = "Icons";
const currentPageNameLower = currentPageName.toLowerCase();
const millisecondWaitTime = 2000;

class Icons extends React.Component {
  static propTypes = { location: PropTypes.object.isRequired }

  constructor(props) {
    super(props);
    this.state = {
      showCodeContainer: true,
      activeId: null,
      iconText: "",
      copyCodeText: "Copy Code",
      copyCodeClass: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.copyToClipboard = this.copyToClipboard.bind(this);
  }

  copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
    this.setState({
      copyCodeText: "Copied",
      copyCodeClass: "copied"
    });
    setTimeout(() => {
      this.setState({
        copyCodeText: "Copy Code",
        copyCodeClass: null
      });
    }, millisecondWaitTime);
  }

  handleClick(name, id) {
    this.setState({
      iconText: name
    })
    if (id === this.state.activeId) {
    this.setState({
      activeId: null
    });
    } else {
      this.setState({
        activeId: id
      });
    }
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

            <h2 id="styles">Icons
              <Link to={location.pathname + "/#icons"} className="button button--transparent button--copy-link"></Link>
            </h2>
            <div className="grid example-container">
              { iconsData.map((icon) => (
                <React.Fragment key={icon.id}>
                  <div
                    className={`grid--fourth grid--sixth_desktop grid--fourth_mobile example--icon-container ${icon.id === this.state.activeId ?
                "active" : "" }`}
                    onClick={() => this.handleClick(icon.iconName, icon.id) && this.handleClick.bind(this)}
                  >
                    <i className={`dashing-icon dashing-icon--${icon.iconName}`}></i>
                    <span className="example--caption">{icon.iconName}</span>
                  </div>
                </React.Fragment>
              ))}
            </div>

            <div className={`icon-code--container ${this.state.activeId === null ? "" : "slideIn" }`}>
              <div className="icon-code">
                <h3 className="text-color--white no-margin">{this.state.iconText}</h3>
                <div className="hover-code" onClick={() => this.copyToClipboard('code')}>
                  <code className="language-html show" style={{ display: "inline-block" }}>
                    {`<i class="dashing-icon dashing-icon--${this.state.iconText}"></i>`}
                  </code>
                  <button type="button" className={`button--secondary button--copy-code ${this.state.copyCodeClass}`}>{this.state.copyCodeText}</button>
                </div>
              </div>
            </div>

            <h2 className="mt-space-xl" id="styles">Icon Colors
              <Link to={location.pathname + "/#icon-colors"} className="button button--transparent button--copy-link"></Link>
            </h2>
            <div className="example-container">
              <div className="card">
                <div className="card-content">
                  <p className="no-margin">To change the color of an icon, add the class <code className="example-text">.dashing-icon--[color]</code></p>
                  <Link to="/style/color/code">View available colors</Link>
                  <hr className="mb-space-m mt-space-m"/>
                  <i className="dashing-icon dashing-icon--alert-filled dashing-icon--red" />
                  <div className="show-code mt-space-xs mb-space-m">
                    <CodeToggle>
                      {`<i class="dashing-icon dashing-icon--alert-filled dashing-icon--red"></i>`}
                    </CodeToggle>
                  </div>
                  <i className="dashing-icon dashing-icon--checkmark-filled dashing-icon--green" />
                  <div className="show-code mt-space-xs">
                    <CodeToggle>
                      {`<i class="dashing-icon dashing-icon--checkmark-filled dashing-icon--green"></i>`}
                    </CodeToggle>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="mt-space-xl" id="styles">Icons with Text
              <Link to={location.pathname + "/#icons-with-text"} className="button button--transparent button--copy-link"></Link>
            </h2>
            <div className="example-container">
              <div className="card">
                <div className="card-header flex has-icon">
                  <i className="dashing-icon dashing-icon--info-filled" />
                  <h3>Card Header with Icon</h3>
                </div>
                <div className="card-content">
                  <p className="no-margin">This is an example of placing an icon in a card header</p>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <h3>Card Content with Icon</h3>
                </div>
                <div className="card-content">
                  <div className="flex flex-baseline has-icon">
                    <i className="dashing-icon dashing-icon--info-filled" />
                    <p className="no-margin">This is an example of placing an icon in card content that could be multiple lines.</p>
                  </div>
                </div>
              </div>
              <CodeToggle>
{`<!-- Use flex to align the icon. Us has-icon to give the icon proper spacing -->
<div class="card">
  <div class="card-header flex has-icon">
    <i class="dashing-icon dashing-icon--info-filled" />
    <h3>Card Header with Icons</h3>
  </div>
  <div class="card-content">
    <p class="no-margin">This is an example of placing an icon in a card header</p>
  </div>
</div>

<!-- For multi-line content use flex-baseline to align the icon -->
<div class="card">
  <div class="card-header">
    <h3>Card Content with Icon</h3>
  </div>
  <div class="card-content">
    <div class="flex flex-baseline has-icon">
      <i class="dashing-icon dashing-icon--info-filled" />
      <p class="no-margin">This is an example of placing an icon in card content that could be multiple lines.</p>
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
export default Icons;
