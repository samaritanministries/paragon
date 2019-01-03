import React from 'react'
import $ from 'jquery';

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'

const currentPageName = "AccordionTable";
const currentPageNameLower = currentPageName.toLowerCase();

class AccordionTableCode extends React.Component {

  componentDidMount() {
    $("#toggleAccordion").click(function(){
      this.parentElement.classList.toggle('expanded');
      $(".accordion--content").slideToggle(200);
    });
    $("#toggleAccordionTable").click(function(){
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
        <main className="content content-m" style={{marginTop: "1rem"}}>
    			<div className="grid grid-padding">

            <h2>Default Accordion</h2>
            <div className="example-container">

              <div className="accordion" style={{marginBottom: "1rem"}}>
                <div className="accordion--header" id="toggleAccordion" tabIndex="0">
                  <i className="dashing-icon accordion--arrow"></i>
                  <h3 className="title">Accordion Title</h3>
                  <h3 className="secondary-title">$100.00</h3>
                </div>

                <div className="accordion--content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>

              </div>
            </div>

            <div className="example-container">
              <div className="accordion--table">

                <ol className="accordion--row" id="toggleAccordionTable">
                  <li className="accordion--arrow"><i className="dashing-icon accordion--arrow"></i></li>
                  <li>Item</li>
                  <li>Item</li>
                  <li>Item</li>
                  <li>Item</li>
                  <li>Item</li>
                  <li>Item</li>
                  <li>Item</li>
                  <li>Item</li>
                </ol>

                <section className="accordion--content">
                  <h1>Provider Name</h1>
                  <p>Description of What happened</p>
                  <span className="item"><span>$100</span><span>$100</span></span>
                </section>

              </div>
            </div>

          </div>
        </main>
      </AppContent>
    </Layout>
  )
}
}
export default AccordionTableCode;
