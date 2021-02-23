import React from "react";
import PropTypes from "prop-types";

import Layout from "../../../components/layout";
import SubNav from "../../../components/subnavigation";
import AppContent from "../../../components/appcontent";
import CodeToggle from "../../../components/codetoggle";
import { Button, ButtonGroup, ButtonGroupItem } from "../../../paragon-components/Actions";
import { ButtonLink } from "../../../paragon-components/Actions/ButtonLink";
import { Grid } from "../../../paragon-components/Grid";
import ExampleCard from "../../../components/example-card";
import ExampleHeader from "../../../components/example-header";

const currentPageName = "Actions";
const currentPageNameLower = currentPageName.toLowerCase();

class ActionsCode extends React.Component {

  static propTypes = { location: PropTypes.object.isRequired }

  render() {
    const { location } = this.props;
    const url = location.pathname;

    return (
      <Layout>
        <header className="subnav">
          <h1>{currentPageName}</h1>
          <SubNav pageName={currentPageNameLower} />
        </header>
        <AppContent>
          <Grid isContainer={true} hasPadding={true}>
            <ExampleHeader text="Styles" url={url} />

            <div className="example-container">
              <ExampleCard>
                <Button>Default</Button>
              </ExampleCard>
              <ExampleCard>
                <Button buttonVariant="border">Border</Button>
              </ExampleCard>
              <ExampleCard>
                <Button buttonVariant="transparent" buttonColor="blue">Transparent</Button>
              </ExampleCard>
              <CodeToggle language="jsx">
                {`<Button>Default</Button>

<Button buttonVariant="border">Default</Button>

<Button buttonVariant="transparent">Default</Button>`}
              </CodeToggle>
            </div>
          </Grid>

          <Grid isContainer={true} hasPadding={true}>
            <ExampleHeader text="States" url={url} />

            <div className="example-container">
              <ExampleCard>
                <Button>Default</Button>
                <Button buttonVariant="border">Border</Button>
                <Button buttonVariant="transparent" buttonColor="blue">Transparent</Button>
              </ExampleCard>

              <ExampleCard>
                <Button isDisabled={true}>Default</Button>
                <Button buttonVariant="border" isDisabled={true}>Border</Button>
                <Button buttonVariant="transparent" buttonColor="blue" isDisabled={true}>Transparent</Button>
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
          </Grid>

          <Grid isContainer={true} hasPadding={true}>
            <ExampleHeader text="Sizes" url={url} />

            <div className="example-container">
              <ExampleCard>
                <Button buttonDisplay="small">Small</Button>
              </ExampleCard>
              <ExampleCard>
                <Button>Default</Button>
              </ExampleCard>
              <ExampleCard>
                <Button buttonDisplay="large">Large</Button>
              </ExampleCard>
              <ExampleCard>
                <Button buttonDisplay="block">Block</Button>
              </ExampleCard>
              <ExampleCard>
                <Button buttonDisplay="block_mobile">Mobile Block</Button>
              </ExampleCard>

              <CodeToggle language="jsx">
                {`<Button buttonDisplay="small">Small</Button>

<Button>Default</Button>

<Button buttonDisplay="large">Large</Button>

<Button buttonDisplay="block">Block</Button>

<Button buttonDisplay="block_mobile">Mobile Block</Button>
`}
              </CodeToggle>
            </div>
          </Grid>

          <Grid isContainer={true} hasPadding={true}>
            <ExampleHeader text="Colors" url={url} />

            <div className="example-container">
              <ExampleCard>
                <Button buttonColor="blue">Blue</Button>
                <Button buttonColor="blue" buttonVariant="border">Blue</Button>
                <Button buttonColor="blue" buttonVariant="transparent">Blue</Button>
                <Button buttonColor="blue" buttonIcon="icon">
                  <i className="dashing-icon dashing-icon--comment" />
                </Button>
                <Button buttonColor="blue" buttonIcon="icon" buttonVariant="transparent">
                  <i className="dashing-icon dashing-icon--comment" />
                </Button>
              </ExampleCard>
              <ExampleCard>
                <Button buttonColor="gray">Gray</Button>
                <Button buttonColor="gray" buttonVariant="border">Gray</Button>
                <Button buttonColor="gray" buttonVariant="transparent">Gray</Button>
                <Button buttonColor="gray" buttonIcon="icon">
                  <i className="dashing-icon dashing-icon--comment" />
                </Button>
                <Button buttonColor="gray" buttonIcon="icon" buttonVariant="transparent">
                  <i className="dashing-icon dashing-icon--comment" />
                </Button>
              </ExampleCard>
              <ExampleCard>
                <Button buttonColor="green">Green</Button>
                <Button buttonColor="green" buttonVariant="border">Green</Button>
                <Button buttonColor="green" buttonVariant="transparent">Green</Button>
                <Button buttonColor="green" buttonIcon="icon">
                  <i className="dashing-icon dashing-icon--comment" />
                </Button>
                <Button buttonColor="green" buttonIcon="icon" buttonVariant="transparent">
                  <i className="dashing-icon dashing-icon--comment" />
                </Button>
              </ExampleCard>
              <ExampleCard>
                <Button buttonColor="orange">Orange</Button>
                <Button buttonColor="orange" buttonVariant="border">Orange</Button>
                <Button buttonColor="orange" buttonVariant="transparent">Orange</Button>
                <Button buttonColor="orange" buttonIcon="icon">
                  <i className="dashing-icon dashing-icon--comment" />
                </Button>
                <Button buttonColor="orange" buttonIcon="icon" buttonVariant="transparent">
                  <i className="dashing-icon dashing-icon--comment" />
                </Button>
              </ExampleCard>
              <ExampleCard>
                <Button buttonColor="purple">Purple</Button>
                <Button buttonColor="purple" buttonVariant="border">Purple</Button>
                <Button buttonColor="purple" buttonVariant="transparent">Purple</Button>
                <Button buttonColor="purple" buttonIcon="icon">
                  <i className="dashing-icon dashing-icon--comment" />
                </Button>
                <Button buttonColor="purple" buttonIcon="icon" buttonVariant="transparent">
                  <i className="dashing-icon dashing-icon--comment" />
                </Button>
              </ExampleCard>
              <ExampleCard>
                <Button buttonColor="red">Red</Button>
                <Button buttonColor="red" buttonVariant="border">Red</Button>
                <Button buttonColor="red" buttonVariant="transparent">Red</Button>
                <Button buttonColor="red" buttonIcon="icon">
                  <i className="dashing-icon dashing-icon--comment" />
                </Button>
                <Button buttonColor="red" buttonIcon="icon" buttonVariant="transparent">
                  <i className="dashing-icon dashing-icon--comment" />
                </Button>
              </ExampleCard>
              <ExampleCard isWhite={true}>
                <Button buttonColor="white">White</Button>
                <Button buttonColor="white" buttonVariant="border">White</Button>
                <Button buttonColor="white" buttonVariant="transparent">White</Button>
                <Button buttonColor="white" buttonIcon="icon">
                  <i className="dashing-icon dashing-icon--comment" />
                </Button>
                <Button buttonColor="white" buttonIcon="icon" buttonVariant="transparent">
                  <i className="dashing-icon dashing-icon--comment" />
                </Button>
              </ExampleCard>

              <CodeToggle language="jsx">
                {`<Button buttonDisplay="small">Small</Button>

<Button>Default</Button>

<Button buttonDisplay="large">Large</Button>

<Button buttonDisplay="block">Block</Button>

<Button buttonDisplay="block_mobile">Mobile Block</Button>
`}
              </CodeToggle>
            </div>
          </Grid>

          <Grid isContainer={true} hasPadding={true}>
            <ExampleHeader text="Groups" url={url} />

            <div className="example-container">
              <ExampleCard>
                <ul className="button-group button--blue">
                  <li className="button--radio">
                    <input type="radio" name="options-blue" id="blue1" defaultChecked={true} />
                    <label htmlFor="blue1" className="button">Left</label>
                  </li>
                  <li className="button--radio">
                    <input type="radio" name="options-blue" id="blue2" />
                    <label htmlFor="blue2" className="button">Middle</label>
                  </li>
                  <li className="button--radio">
                    <input type="radio" name="options-blue" id="blue3" />
                    <label htmlFor="blue3" className="button">Right</label>
                  </li>
                </ul>
              </ExampleCard>

              <ExampleCard>
                <ul className="button-group button-group--vertical button--green button--border">
                  <li className="button--radio">
                    <input type="radio" name="options-green" id="green1" defaultChecked={true} />
                    <label htmlFor="green1" className="button">Left</label>
                  </li>
                  <li className="button--radio">
                    <input type="radio" name="options-green" id="green2" />
                    <label htmlFor="green2" className="button">Middle</label>
                  </li>
                  <li className="button--radio">
                    <input type="radio" name="options-green" id="green3" />
                    <label htmlFor="green3" className="button">Right</label>
                  </li>
                </ul>
              </ExampleCard>

              <CodeToggle language="jsx">
                {"NA"}
              </CodeToggle>
            </div>

            <div className="example-container">
              <ExampleCard>
                <ButtonGroup buttonColor={"blue"}>
                  <ButtonGroupItem isChecked={true} id="react-blue-1" name={"react-blue-options"}>
                    Left
                  </ButtonGroupItem>
                  <ButtonGroupItem id="react-blue-2" name={"react-blue-options"}>
                    Middle
                  </ButtonGroupItem>
                  <ButtonGroupItem id="react-blue-3" name={"react-blue-options"}>
                    Right
                  </ButtonGroupItem>
                </ButtonGroup>
              </ExampleCard>

              <ExampleCard>
                <ButtonGroup buttonColor={"green"} isVertical={true} isBorder={true}>
                  <ButtonGroupItem isChecked={true} id="react-green-1" name={"react-green-options"}>
                    Left
                  </ButtonGroupItem>
                  <ButtonGroupItem id="react-green-2" name={"react-green-options"}>
                    Middle
                  </ButtonGroupItem>
                  <ButtonGroupItem id="react-green-3" name={"react-green-options"}>
                    Right
                  </ButtonGroupItem>
                </ButtonGroup>
              </ExampleCard>

              <CodeToggle language="jsx">
                {"NA"}
              </CodeToggle>
            </div>
          </Grid>
        </AppContent>
      </Layout>
    );
  }

}

export default ActionsCode;
