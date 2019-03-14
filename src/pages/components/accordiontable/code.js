import React from 'react';
import $ from 'jquery';

import Layout from '../../../components/layout';
import SubNav from '../../../components/subnavigation';
import AppContent from '../../../components/appcontent';

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

            <h2>Accordion Title</h2>

            <div className="example-container">
              <div className="accordion--table">
                <ol className="accordion--key">
                  <li className="accordion--arrow"></li>
                  <li className="date">Date</li>
                  <li className="provider">Provider</li>
                  <li className="member">Member</li>
                  {/* <li className="amount">Amount</li> */}
                  <li className="sharing">Sharing</li>
                  {/* <li className="youpay">You Pay</li> */}
                  <li className="category">Category</li>
                  <li className="status">Status</li>
                </ol>

                <ol className="accordion--row" id="toggleAccordionTableA">
                  <li className="accordion--arrow"><i className="dashing-icon accordion--arrow"></i></li>
                  <li className="date">Feb 12</li>
                  <li className="provider">A Long Provider Name</li>
                  <li className="member">Carl ViewSonic</li>
                  {/* <li className="amount">$8624.16</li> */}
                  <li className="sharing">$7175.94</li>
                  {/* <li className="youpay">$860.22</li> */}
                  <li className="category">Broken Arm</li>
                  <li className="status"><i className="dashing-icon dashing-icon--heart"></i></li>
                </ol>

                <section className="accordion--content grid">
                  <div className="grid--half accordian--breakdown">
                    <h3>Carl ViewSonic</h3>
                    <div>
                      <div className="details">
                        <strong className="label-class">Date of Service:</strong>
                        <p className="description">02/12/19</p>
                      </div>
                      <div className="details">
                        <strong className="label-class">Provider:</strong>
                        <p className="description">A Long Provider Name LOLOL</p>
                      </div>
                      <div className="details">
                        <strong className="label-class">Provider Address:</strong>
                        <p className="description">5678 gjgjhkghjk St, wertg PL, 56787</p>
                      </div>
                      <div className="details">
                        <strong className="label-class">Description:</strong>
                        <p className="description">Broken Something</p>
                      </div>
                      <div className="details">
                        <strong className="label-class">Repriced Amount:</strong>
                        <p className="description">Your bill was repriced from this to that.</p>
                      </div>
                      <div className="details">
                        <strong className="label-class">Adjustment:</strong>
                        <p className="description">$Money</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid--half accordian--breakdown">
                    <div>
                      <div className="details">
                        <h3 className="label-class">Unshareable</h3>
                        <p className="description align-right">$0.00</p>
                      </div>
                      <div className="details">
                        <h3 className="label-class">Unshareable</h3>
                        <p className="description align-right">$0.00</p>
                      </div>
                      <hr />
                      <div className="details">
                        <h3 className="label-class">Unshareable</h3>
                        <p className="description align-right">$0.00</p>
                      </div>
                    </div>
                  </div>
                </section>

                <ol className="accordion--row" id="toggleAccordionTableB">
                  <li className="accordion--arrow"><i className="dashing-icon accordion--arrow"></i></li>
                  <li className="date">Feb 16 2019</li>
                  <li className="provider">A Short Name</li>
                  <li className="member">Jill Throwfitz</li>
                  {/* <li className="amount">$8999.16</li> */}
                  <li className="sharing">$7735.94</li>
                  {/* <li className="youpay">$86.22</li> */}
                  <li className="category">Broken Arm</li>
                  <li className="status"><i className="dashing-icon dashing-icon--heart"></i></li>
                </ol>

                <section className="accordion--content grid">
                  <div className="grid--half accordian--breakdown">
                    <h3>Carl ViewSonic</h3>
                    <div>
                      <div className="details">
                        <strong className="label-class">Date of Service:</strong>
                        <p className="description">02/12/19</p>
                      </div>
                      <div className="details">
                        <strong className="label-class">Provider:</strong>
                        <p className="description">A Long Provider Name LOLOL</p>
                      </div>
                      <div className="details">
                        <strong className="label-class">Provider Address:</strong>
                        <p className="description">5678 gjgjhkghjk St, wertg PL, 56787</p>
                      </div>
                      <div className="details">
                        <strong className="label-class">Description:</strong>
                        <p className="description">Broken Something</p>
                      </div>
                      <div className="details">
                        <strong className="label-class">Repriced Amount:</strong>
                        <p className="description">Your bill was repriced from this to that.</p>
                      </div>
                      <div className="details">
                        <strong className="label-class">Adjustment:</strong>
                        <p className="description">$Money</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid--half accordian--breakdown">
                    <div>
                      <div className="details">
                        <h3 className="label-class">Unshareable</h3>
                        <p className="description align-right">$0.00</p>
                      </div>
                      <div className="details">
                        <h3 className="label-class">Unshareable</h3>
                        <p className="description align-right">$0.00</p>
                      </div>
                      <hr />
                      <div className="details">
                        <h3 className="label-class">Unshareable</h3>
                        <p className="description align-right">$0.00</p>
                      </div>
                    </div>
                  </div>
                </section>

                <ol className="accordion--row" id="toggleAccordionTableC">
                  <li className="accordion--arrow"><i className="dashing-icon accordion--arrow"></i></li>
                  <li className="date">01/12/19</li>
                  <li className="provider">St. Angelica Mortimer Gonzallo the Third Memorial Hospital</li>
                  <li className="member">Thomas Wallace Kinkade Jr</li>
                  {/* <li className="amount">$0,000,000.00</li> */}
                  <li className="sharing">$775299.94</li>
                  {/* <li className="youpay">$2.00</li> */}
                  <li className="category">--</li>
                  <li className="status"><i className="dashing-icon dashing-icon--heart"></i></li>
                </ol>

                <section className="accordion--content grid">
                  <div className="grid--half accordian--breakdown">
                    <h3>Carl ViewSonic</h3>
                    <div>
                      <div className="details">
                        <strong className="label-class">Date of Service:</strong>
                        <p className="description">02/12/19</p>
                      </div>
                      <div className="details">
                        <strong className="label-class">Provider:</strong>
                        <p className="description">A Long Provider Name LOLOL</p>
                      </div>
                      <div className="details">
                        <strong className="label-class">Provider Address:</strong>
                        <p className="description">5678 gjgjhkghjk St, wertg PL, 56787</p>
                      </div>
                      <div className="details">
                        <strong className="label-class">Description:</strong>
                        <p className="description">Broken Something</p>
                      </div>
                      <div className="details">
                        <strong className="label-class">Repriced Amount:</strong>
                        <p className="description">Your bill was repriced from this to that.</p>
                      </div>
                      <div className="details">
                        <strong className="label-class">Adjustment:</strong>
                        <p className="description">$Money</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid--half accordian--breakdown">
                    <div>
                      <div className="details">
                        <h3 className="label-class">Unshareable</h3>
                        <p className="description align-right">$86.22</p>
                      </div>
                      <div className="details">
                        <h3 className="label-class">Shareable</h3>
                        <p className="description align-right">$775.94</p>
                      </div>
                      <hr />
                      <div className="details">
                        <h3 className="label-class">Repriced Amount</h3>
                        <p className="description align-right">$862.16</p>
                      </div>
                    </div>
                  </div>
                </section>

                <ol className="accordion--row" id="toggleAccordionTableC">
                  <li className="accordion--arrow"><i className="dashing-icon accordion--arrow"></i></li>
                  <li className="date">01/12/19</li>
                  <li className="provider">St. Angelica Mortimer Gonzallo the Third Memorial Hospital</li>
                  <li className="member">Thomas Wallace Kinkade Jr</li>
                  {/* <li className="amount">$0,000,000.00</li> */}
                  <li className="sharing">$775299.94</li>
                  {/* <li className="youpay">$2.00</li> */}
                  <li className="category">--</li>
                  <li className="status"><i className="dashing-icon dashing-icon--heart"></i></li>
                </ol>

                <section className="accordion--content grid">
                  <div className="grid--half accordian--breakdown">
                    <h3>Carl ViewSonic</h3>
                    <div>
                      <div className="details">
                        <strong className="label-class">Date of Service:</strong>
                        <p className="description">02/12/19</p>
                      </div>
                      <div className="details">
                        <strong className="label-class">Provider:</strong>
                        <p className="description">A Long Provider Name LOLOL</p>
                      </div>
                      <div className="details">
                        <strong className="label-class">Provider Address:</strong>
                        <p className="description">5678 gjgjhkghjk St, wertg PL, 56787</p>
                      </div>
                      <div className="details">
                        <strong className="label-class">Description:</strong>
                        <p className="description">Broken Something</p>
                      </div>
                      <div className="details">
                        <strong className="label-class">Repriced Amount:</strong>
                        <p className="description">Your bill was repriced from this to that.</p>
                      </div>
                      <div className="details">
                        <strong className="label-class">Adjustment:</strong>
                        <p className="description">$Money</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid--half accordian--breakdown">
                    <div>
                      <div className="details">
                        <h3 className="label-class">Unshareable</h3>
                        <p className="description align-right">$0.00</p>
                      </div>
                      <div className="details">
                        <h3 className="label-class">Unshareable</h3>
                        <p className="description align-right">$0.00</p>
                      </div>
                      <hr />
                      <div className="details">
                        <h3 className="label-class">Unshareable</h3>
                        <p className="description align-right">$0.00</p>
                      </div>
                    </div>
                  </div>
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
