import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import Layout from "../../../components/layout";
import SubNav from "../../../components/subnavigation";
import AppContent from "../../../components/appcontent";
import CodeToggle from "../../../components/codetoggle";
import CodeToggleSCSS from "../../../components/codetoggle-scss";

const currentPageName = "Toggle";
const currentPageNameLower = currentPageName.toLowerCase();

class ToggleCode extends React.Component {

  static propTypes = { location: PropTypes.object.isRequired }

  render() {
    const { location } = this.props;

    return (
      <Layout>
        <header className="subnav">
          <h1>{currentPageName}</h1>
          <SubNav pageName={currentPageNameLower} />
        </header>
        <AppContent>
          <div className="grid grid-padding">

            <h2 className="no-margin--top" id="customToggleSwitch">Custom Toggle Switch
              <Link to={`${location.pathname}/#customToggleSwitch`} className="button button--transparent button--copy-link" />
            </h2>
            <div className="row example-container">
              <fieldset className="mb-space-m">
                <label className="inline" htmlFor="switch1">Switch</label>
                <div className="switch">
                  <input name="switch" type="checkbox" className="switch--checkbox" id="switch1" />
                  <label className="switch--label" htmlFor="switch1">
                    <span className="switch--inner" />
                    <span className="switch--handle" />
                  </label>
                </div>
              </fieldset>
              <CodeToggle>
                {`<!-- Custom Toggle Switch -->
<fieldset class="column column--full">
  <label class="inline" for="switch1">Switch</label>
  <div class="switch">
    <input name="switch" type="checkbox" class="switch--checkbox" id="switch1" />
    <label class="switch--label" for="switch1">
      <span class="switch--inner"></span>
      <span class="switch--handle"></span>
    </label>
  </div>
</fieldset>`}
              </CodeToggle>
              <CodeToggleSCSS>
                {`//Include these variables in your theme file to change the color of your switch
$switch--on: $blue !default; //Color of switch when on
$switch--off: $gray-250 !default; //Color of switch when off
}`}
              </CodeToggleSCSS>

            </div>
          </div>
        </AppContent>
      </Layout>
    );
  }

}

export default ToggleCode;
