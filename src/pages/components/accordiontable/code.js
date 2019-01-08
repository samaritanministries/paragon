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
      $(this).siblings(".accordion--content").slideToggle(200);
    });

    $(".accordion--row").click(function(e){
      this.parentElement.classList.toggle('expanded');
      $(this).next(".accordion--content").slideToggle(200);
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
                <ol className="accordion--row accordion--key">
                  <li className="accordion--arrow"></li>
                  <li className="date">Date</li>
                  <li className="provider">Provider</li>
                  <li className="member">Member</li>
                  <li className="amount">Amount</li>
                  <li className="sharing">Sharing</li>
                  <li className="youpay">You Pay</li>
                  <li className="category">Category</li>
                  <li className="status">Status</li>
                </ol>

                <ol className="accordion--row" id="toggleAccordionTable">
                  <li className="accordion--arrow"><i className="dashing-icon accordion--arrow"></i></li>
                  <li className="date">01/12/19</li>
                  <li className="provider">A Long Provider Name</li>
                  <li className="member">Jill Throwfitz</li>
                  <li className="amount">$8624.16</li>
                  <li className="sharing">$7175.94</li>
                  <li className="youpay">$860.22</li>
                  <li className="category">Broken Arm</li>
                  <li className="status">Awaiting Shares</li>
                </ol>

                <section className="accordion--content">
                  <h1>Provider Name</h1>
                  <p>Description of What happened</p>
                  <span className="item"><span>$100</span><span>$100</span></span>
                </section>

                <ol className="accordion--row" id="toggleAccordionTable">
                  <li className="accordion--arrow"><i className="dashing-icon accordion--arrow"></i></li>
                  <li className="date">01/12/19</li>
                  <li className="provider">A Short Name</li>
                  <li className="member">Jill Throwfitz</li>
                  <li className="amount">$8999.16</li>
                  <li className="sharing">$7735.94</li>
                  <li className="youpay">$86.22</li>
                  <li className="category">Broken Arm</li>
                  <li className="status">Awaiting Shares</li>
                </ol>

                <section className="accordion--content">
                  <h1>Provider Name</h1>
                  <p>Description of What happened</p>
                  <span className="item"><span>$100</span><span>$100</span></span>
                </section>

                <ol className="accordion--row" id="toggleAccordionTable">
                  <li className="accordion--arrow"><i className="dashing-icon accordion--arrow"></i></li>
                  <li className="date">--</li>
                  <li className="provider">--</li>
                  <li className="member">Random</li>
                  <li className="amount">$0,000,000.00</li>
                  <li className="sharing">$775299.94</li>
                  <li className="youpay">$2.00</li>
                  <li className="category">--</li>
                  <li className="status">--</li>
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
