import React from 'react'
import PropTypes from 'prop-types'

import $ from 'jquery'
import { Link } from 'gatsby'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'
import CodeToggle from '../../../components/codetoggle'

const currentPageName = "Accordion"
const currentPageNameLower = currentPageName.toLowerCase()

class AccordionCode extends React.Component {
  static propTypes = { location: PropTypes.object.isRequired }
  
  componentDidMount() {
    $("#toggleAccordion").click(function(){
      this.parentElement.classList.toggle('expanded');
      $(".accordion--content").slideToggle(200);
    });
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

          <h2 id="defaultAccordian">Default Accordion
            <Link to={location.pathname + "/#defaultAccordian"} className="button button--transparent button--copy-link"></Link>
          </h2>
          <div className="example-container">

            <div className="accordion" style={{marginBottom: "1rem"}}>
              <div className="accordion--header" id="toggleAccordion" tabIndex="0">
                <i className="dashing-icon accordion--arrow"></i>
                <h3 className="title">Accordion Title</h3>
                <h3 className="secondary-title">$100.00</h3>
              </div>

              <div className="accordion--content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>

            </div>
            <CodeToggle>
{`<div class="accordion">
<div class="accordion--header" id="toggleAccordion" tabindex="0">
  <i class="dashing-icon accordion--arrow"></i>
  <h3 class="title">Accordion Title</h3>
</div>

<div class="accordion--content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>

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
