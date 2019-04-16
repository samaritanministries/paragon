import React from 'react'
import $ from 'jquery';
import { iconsData } from "./iconData";
import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'

const currentPageName = "Icons";
const currentPageNameLower = currentPageName.toLowerCase();
const millisecondWaitTime = 2000;

class Icons extends React.Component {

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

    return (

      <Layout>
        <header className="subnav">
          <h1>{currentPageName}</h1>
          <SubNav pageName={currentPageNameLower}/>
        </header>
        <AppContent>
          <div className="grid grid-padding">
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

          </div>
        </AppContent>
      </Layout>
    )
  }
}
export default Icons;
