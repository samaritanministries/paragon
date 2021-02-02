import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import Layout from "../../../components/layout";
import SubNav from "../../../components/subnavigation";
import AppContent from "../../../components/appcontent";
import CodeToggle from "../../../components/codetoggle";
import CodeToggleSCSS from "../../../components/codetoggle-scss";
import { Button } from "../../../paragon-components/Actions/Actions";

const currentPageName = "Actions - React";
const currentPageNameLower = currentPageName.toLowerCase();

class ActionsCode extends React.Component {

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

            <h2 id="styles">Styles
              <Link to={`${location.pathname}/#styles`} className="button button--transparent button--copy-link" />
            </h2>
            <div className="example-container">
              <div className="card">
                <div className="card-content">
                  <Button>Default</Button>
                </div>
              </div>
              <div className="card">
                <div className="card-content">
                  <button type="button" className="button button--border">Border</button>
                </div>
              </div>
              <div className="card">
                <div className="card-content">
                  <button type="button" className="button button--transparent">Transparent</button>
                </div>
              </div>
              <CodeToggle language="jsx">
                {`<Button>Default</Button>

<Button buttonVariant="border">Default</Button>

<Button buttonVariant="transparent">Default</Button>`}
              </CodeToggle>
            </div>
          </div>
        </AppContent>
      </Layout>
    );
  }

}

export default ActionsCode;
