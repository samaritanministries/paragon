import React from 'react'
import $ from 'jquery';

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'
import CodeToggle from '../../../components/codetoggle'

const currentPageName = "Accordion";
const currentPageNameLower = currentPageName.toLowerCase();

class AccordionCode extends React.Component {

  componentDidMount() {
    $("#toggleAccordion").click(function(){
      this.parentElement.classList.toggle('expanded');
      $(".accordion--content").slideToggle(200);
    });
  }

  render() {

    return (

      <Layout>
        <header className="subnav">
          <h1>{currentPageName}</h1>
          <SubNav pageName={currentPageNameLower}/>
        </header>
        <AppContent>
          <div className="row">
            <div className="column column--full">
              <h2 className="example-header no-margin--top">Default Accordion <button className="button button--transparent button--copy-link" data-id="copyurl" id="Default_Spinner"/></h2>
              <div className="row example-container">
                <div className="column column--full">
                  <div className="accordion">
                    <div className="accordion--header" id="toggleAccordion" tabindex="0">
                      <i className="dashing-icon accordion--arrow"></i>
                      <h3 className="title">Accordion Title</h3>
                      <h3 className="secondary-title">$100.00</h3>
                    </div>

                    <div className="accordion--content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>

                  </div>
                </div>
              </div>
              <CodeToggle>
{`<div className="accordion">
  <div className="accordion--header" id="toggleAccordion" tabindex="0">
    <i className="dashing-icon accordion--arrow"></i>
    <h3 className="title">Accordion Title</h3>
  </div>

  <div className="accordion--content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>

</div>`}
              </CodeToggle>

            </div>
          </div>
        </AppContent>
      </Layout>
    )
  }
}
export default AccordionCode;
