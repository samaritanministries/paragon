import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import Layout from "../../../components/layout";
import SubNav from "../../../components/subnavigation";
import AppContent from "../../../components/appcontent";
import CodeToggle from "../../../components/codetoggle";
import { Button } from "../../../paragon-components/Actions/";
import ExampleCard from "../../../components/example-card";

const currentPageName = "Actions";
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
              <ExampleCard>
                <Button>Default</Button>
              </ExampleCard>
              <ExampleCard>
                <Button buttonVariant="border">Border</Button>
              </ExampleCard>
              <ExampleCard>
                <Button buttonVariant="transparent">Transparent</Button>
              </ExampleCard>
              <CodeToggle language="jsx">
                {`<Button>Default</Button>

<Button buttonVariant="border">Default</Button>

<Button buttonVariant="transparent">Default</Button>`}
              </CodeToggle>
            </div>
          </div>

          <div className="grid grid-padding">

            <h2 id="styles">States
              <Link to={`${location.pathname}/#styles`} className="button button--transparent button--copy-link" />
            </h2>
            <div className="example-container">
              <ExampleCard>
                <Button>Default</Button>
                <Button buttonVariant="border">Border</Button>
                <Button buttonVariant="transparent">Transparent</Button>
              </ExampleCard>

              <ExampleCard>
                <Button isDisabled={true}>Default</Button>
                <Button buttonVariant="border" isDisabled={true}>Border</Button>
                <Button buttonVariant="transparent" isDisabled={true}>Transparent</Button>
              </ExampleCard>
              <CodeToggle language="jsx">
                {`<Button>Default</Button>
<Button buttonVariant="border">Default</Button>
<Button buttonVariant="transparent">Default</Button>

<Button isDisabled={true}>Default</Button>
<Button buttonVariant="border" isDisabled={true}>Border</Button>
<Button buttonVariant="transparent" isDisabled={true}>Transparent</Button>`}
              </CodeToggle>
            </div>
          </div>
        </AppContent>
      </Layout>
    );
  }

}

export default ActionsCode;
