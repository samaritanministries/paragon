import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import Layout from "../../../components/layout";
import SubNav from "../../../components/subnavigation";
import AppContent from "../../../components/appcontent";
import CodeToggle from "../../../components/codetoggle";
import CodeToggleSCSS from "../../../components/codetoggle-scss";
import ExampleHeader from "../../../components/example-header";

class ActionsCode extends React.Component {

  static propTypes = { location: PropTypes.object.isRequired }

  render() {
    //TODO - how can these 4 const be a component?
    const { location } = this.props;
    const url = location.pathname;

    // Uses regex to determine what name comes after "/components/"
    const currentPageName = url.match("^/[^/]+/([^/]+)/")[1];
    const currentPageNameLower = currentPageName.toLowerCase();

    return (
      <Layout>
        <header className="subnav">
          <h1 style={{ textTransform: "capitalize" }}>{currentPageName}</h1>
          <SubNav hasReact={true} pageName={currentPageNameLower} />
        </header>
        <AppContent>
          <div className="grid grid-padding">

            <ExampleHeader text="Styles" url={url} />
            <div className="example-container">
              <div className="card">
                <div className="card-content">
                  <button type="button" className="button">Default</button>
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
              <CodeToggle>
                {`<button class="button">Default</button>

<button class="button button--border">Border</button>

<button class="button button--transparent">Transparent</button>`}
              </CodeToggle>
            </div>

            <ExampleHeader text="States" url={url} />
            <div className="example-container">
              <div className="card">
                <div className="card-content">
                  <button type="button" className="button">Default</button>
                  <button type="button" className="button button--border">Border</button>
                  <button type="button" className="button button--transparent">Transparent</button>
                </div>
              </div>
              <div className="card">
                <div className="card-content">
                  <button type="button" className="button" disabled={true}>Disabled</button>
                  <button type="button" className="button button--border" disabled={true}>Disabled</button>
                  <button type="button" className="button button--transparent" disabled={true}>Disabled</button>
                </div>
              </div>
              <CodeToggle>
                {`<button class="button">Default</button>
<button class="button button--border">Border</button>
<button class="button button--transparent">Transparent</button>

<button class="button" disabled>Disabled</button>
<button class="button button--border" disabled>Disabled</button>
<button class="button button--transparent" disabled>Disabled</button>`}
              </CodeToggle>
            </div>

            <ExampleHeader text="Sizes" url={url} />
            <div className="example-container">
              <div className="card">
                <div className="card-content">
                  <button type="button" className="button button--small">Small</button>
                </div>
              </div>
              <div className="card">
                <div className="card-content">
                  <button type="button" className="button">Default</button>
                </div>
              </div>
              <div className="card">
                <div className="card-content">
                  <button type="button" className="button button--large">Large</button>
                </div>
              </div>
              <div className="card">
                <div className="card-content">
                  <button type="button" className="button button--block">Block</button>
                </div>
              </div>
              <div className="card">
                <div className="card-content">
                  <button type="button" className="button button--block_mobile">Mobile Block</button>
                </div>
              </div>
              <CodeToggle>
                {`<button class="button button--small">Small</button>

<button class="button">Default</button>

<button class="button button--large">Large</button>

<button class="button button--block">Block</button>

<button class="button button--block_mobile">Mobile Block</button>
`}
              </CodeToggle>
            </div>

            <ExampleHeader text="Colors" url={url} />
            <div className="example-container">
              <div className="card">
                <div className="card-content">
                  <button type="button" className="button button--blue">Blue</button>
                  <button type="button" className="button button--blue button--border">Blue</button>
                  <button type="button" className="button button--blue button--transparent">Blue</button>
                  <button type="button" className="button button--blue button--icon">
                    <i className="dashing-icon dashing-icon--pencil" />
                  </button>
                  <button type="button" className="button button--blue button--icon button--transparent">
                    <i className="dashing-icon dashing-icon--pencil" />
                  </button>
                </div>
              </div>
              <div className="card">
                <div className="card-content">
                  <button type="button" className="button button--gray">Gray</button>
                  <button type="button" className="button button--gray button--border">Gray</button>
                  <button type="button" className="button button--gray button--transparent">Gray</button>
                  <button type="button" className="button button--gray button--icon">
                    <i className="dashing-icon dashing-icon--close" />
                  </button>
                  <button type="button" className="button button--icon button--transparent">
                    <i className="dashing-icon dashing-icon--close" />
                  </button>
                </div>
              </div>
              <div className="card">
                <div className="card-content">
                  <button type="button" className="button button--green">Green</button>
                  <button type="button" className="button button--green button--border">Green</button>
                  <button type="button" className="button button--green button--transparent">Green</button>
                  <button type="button" className="button button--green button--icon">
                    <i className="dashing-icon dashing-icon--plus" />
                  </button>
                  <button type="button" className="button button--green button--icon button--transparent">
                    <i className="dashing-icon dashing-icon--plus" />
                  </button>
                </div>
              </div>
              <div className="card">
                <div className="card-content">
                  <button type="button" className="button button--orange">Orange</button>
                  <button type="button" className="button button--orange button--border">Orange</button>
                  <button type="button" className="button button--orange button--transparent">Orange</button>
                  <button type="button" className="button button--orange button--icon">
                    <i className="dashing-icon dashing-icon--comment" />
                  </button>
                  <button type="button" className="button button--orange button--icon button--transparent">
                    <i className="dashing-icon dashing-icon--comment" />
                  </button>
                </div>
              </div>
              <div className="card">
                <div className="card-content">
                  <button type="button" className="button button--purple">Purple</button>
                  <button type="button" className="button button--purple button--border">Purple</button>
                  <button type="button" className="button button--purple button--transparent">Purple</button>
                  <button type="button" className="button button--purple button--icon">
                    <i className="dashing-icon dashing-icon--phone" />
                  </button>
                  <button type="button" className="button button--purple button--icon button--transparent">
                    <i className="dashing-icon dashing-icon--phone" />
                  </button>
                </div>
              </div>
              <div className="card">
                <div className="card-content">
                  <button type="button" className="button button--red">Red</button>
                  <button type="button" className="button button--red button--border">Red</button>
                  <button type="button" className="button button--red button--transparent">Red</button>
                  <button type="button" className="button button--red button--icon">
                    <i className="dashing-icon dashing-icon--trash" />
                  </button>
                  <button type="button" className="button button--red button--icon button--transparent">
                    <i className="dashing-icon dashing-icon--trash" />
                  </button>
                </div>
              </div>
              <div className="card" style={{ backgroundColor: "#28336d" }}>
                <div className="card-content">
                  <button type="button" className="button button--white">White</button>
                  <button type="button" className="button button--white button--border">White</button>
                  <button type="button" className="button button--white button--transparent">White</button>
                  <button type="button" className="button button--white button--icon">
                    <i className="dashing-icon dashing-icon--settings" />
                  </button>
                  <button type="button" className="button button--white button--icon button--transparent">
                    <i className="dashing-icon dashing-icon--settings" />
                  </button>
                </div>
              </div>
              <CodeToggle>
                {`<button class="button">Blue</button>
<button class="button button--border">Blue</button>
<button class="button button--transparent">Blue</button>
<button class="button button--icon">
  <i class="dashing-icon dashing-icon--pencil"></i>
</button>
<button class="button button--blue button--icon button--transparent">
  <i class="dashing-icon dashing-icon--pencil"></i>
</button>

<button class="button button--gray">Gray</button>
<button class="button button--gray button--border">Gray</button>
<button class="button button--gray button--transparent">Gray</button>
<button class="button button--gray button--icon">
  <i class="dashing-icon dashing-icon--close"></i>
</button>
<button class="button button--icon button--transparent">
  <i class="dashing-icon dashing-icon--close"></i>
</button>

<button class="button button--green">Green</button>
<button class="button button--green button--border">Green</button>
<button class="button button--green button--transparent">Green</button>
<button class="button button--green button--icon">
  <i class="dashing-icon dashing-icon--plus"></i>
</button>
<button class="button button--green button--icon button--transparent">
  <i class="dashing-icon dashing-icon--plus"></i>
</button>

<button class="button button--orange">Orange</button>
<button class="button button--orange button--border">Orange</button>
<button class="button button--orange button--transparent">Orange</button>
<button class="button button--orange button--icon">
  <i class="dashing-icon dashing-icon--comment"></i>
</button>
<button class="button button--orange button--icon button--transparent">
  <i class="dashing-icon dashing-icon--comment"></i>
</button>

<button class="button button--purple">Purple</button>
<button class="button button--purple button--border">Purple</button>
<button class="button button--purple button--transparent">Purple</button>
<button class="button button--purple button--icon">
  <i class="dashing-icon dashing-icon--phone"></i>
</button>
<button class="button button--purple button--icon button--transparent">
  <i class="dashing-icon dashing-icon--phone"></i>
</button>

<button class="button button--red">Red</button>
<button class="button button--red button--border">Red</button>
<button class="button button--red button--transparent">Red</button>
<button class="button button--red button--icon">
  <i class="dashing-icon dashing-icon--trash"></i>
</button>
<button class="button button--red button--icon button--transparent">
  <i class="dashing-icon dashing-icon--trash"></i>
</button>

<button class="button button--white">White</button>
<button class="button button--white button--border">White</button>
<button class="button button--white button--transparent">White</button>
<button class="button button--white button--icon">
  <i class="dashing-icon dashing-icon--settings"></i>
</button>
<button class="button button--white button--icon button--transparent">
  <i class="dashing-icon dashing-icon--settings"></i>
</button>

`}
              </CodeToggle>
            </div>

            <ExampleHeader text="Icons" url={url} />
            <div className="example-container">
              <div className="card">
                <div className="card-content">
                  <button type="button" className="button">
                    <i className="dashing-icon dashing-icon--add" />
                  Default
                  </button>
                </div>
              </div>
              <div className="card">
                <div className="card-content">
                  <button type="button" className="button button--border">
                    <i className="dashing-icon dashing-icon--pencil" />
                  Border
                  </button>
                </div>
              </div>
              <div className="card">
                <div className="card-content">
                  <button type="button" className="button button--transparent">
                    <i className="dashing-icon dashing-icon--search" />
                  Transparent
                  </button>
                  <button type="button" className="button button--gray button--transparent">
                  Transparent
                    <i className="dashing-icon dashing-icon--new-tab flow-opposite" />
                  </button>
                </div>
              </div>
              <div className="card">
                <div className="card-content">
                  <button type="button" className="button button--icon">
                    <i className="dashing-icon dashing-icon--add" />
                  </button>
                  <button type="button" className="button button--red button--icon">
                    <i className="dashing-icon dashing-icon--trash" />
                  </button>
                  <button type="button" className="button button--transparent button--icon">
                    <i className="dashing-icon dashing-icon--question-filled" />
                  </button>
                </div>
              </div>
              <div className="card">
                <div className="card-content">
                  <button type="button" className="button button--icon button--icon--main">
                    <i className="dashing-icon dashing-icon--add" />
                  </button>
                </div>
              </div>
              <CodeToggle>
                {`<button class="button">
  <i class="dashing-icon dashing-icon--add"></i>
  Default
</button>

<button class="button button--border">
  <i class="dashing-icon dashing-icon--pencil"></i>
  Border
</button>

<button class="button button--transparent">
  <i class="dashing-icon dashing-icon--search"></i>
  Transparent
</button>
<button class="button button--gray button--transparent">
  Transparent
  <i class="dashing-icon dashing-icon--new-tab flow-opposite"></i>
</button>

<button class="button button--icon">
  <i class="dashing-icon dashing-icon--add"></i>
</button>
<button class="button button--red button--icon">
  <i class="dashing-icon dashing-icon--trash"></i>
</button>
<button class="button button--transparent button--icon">
  <i class="dashing-icon dashing-icon--question-filled"></i>
</button>

<button class="button button--icon button--icon--main">
  <i class="dashing-icon dashing-icon--add"></i>
</button>`}
              </CodeToggle>
            </div>

            <ExampleHeader text="Button Group" url={url} />
            <div className="example-container">
              <div className="card">
                <div className="card-content">
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
                </div>
              </div>
              <div className="card">
                <div className="card-content">
                  <ul className="button-group button-group--vertical button--green button--border">
                    <li className="button--radio">
                      <input type="radio" name="options-gray" id="toggle-gray1" defaultChecked={true} />
                      <label htmlFor="toggle-gray1" className="button">Top</label>
                    </li>
                    <li className="button--radio">
                      <input type="radio" name="options-gray" id="toggle-gray2" />
                      <label htmlFor="toggle-gray2" className="button">Middle</label>
                    </li>
                    <li className="button--radio">
                      <input type="radio" name="options-gray" id="toggle-gray3" />
                      <label htmlFor="toggle-gray3" className="button">Bottom</label>
                    </li>
                  </ul>
                </div>
              </div>
              <CodeToggle>
                {`<ul class="button-group button--blue">
  <li class="button--radio">
    <input type="radio" name="options-blue" id="blue1" defaultChecked />
    <label for="blue1" class="button">Left</label>
  </li>
  <li class="button--radio">
    <input type="radio" name="options-blue" id="blue2" />
    <label for="blue2" class="button">Middle</label>
  </li>
  <li class="button--radio">
    <input type="radio" name="options-blue" id="blue3" />
    <label for="blue3" class="button">Right</label>
  </li>
</ul>

<ul class="button-group button-group--vertical button--green button--border">
  <li class="button--radio">
    <input type="radio" name="options-gray" id="toggle-gray1" defaultChecked />
    <label for="toggle-gray1" class="button">Top</label>
  </li>
  <li class="button--radio">
    <input type="radio" name="options-gray" id="toggle-gray2" />
    <label for="toggle-gray2" class="button">Middle</label>
  </li>
  <li class="button--radio">
    <input type="radio" name="options-gray" id="toggle-gray3" />
    <label for="toggle-gray3" class="button">Bottom</label>
  </li>
</ul>`}
              </CodeToggle>
            </div>

            <ExampleHeader text="Theme Options" url={url} />
            <div className="example-container">
              <div className="card">
                <div className="card-content">
                  <button type="button" className="button button--round">Round</button>
                  <button type="button" className="button button--smooth">Smooth</button>
                  <button type="button" className="button button--square">Square</button>
                </div>
              </div>
              <CodeToggle>
                {`<button class="button button--round">Round</button>
<button class="button button--smooth">Smooth</button>
<button class="button button--square">Square</button>`}
              </CodeToggle>
            </div>

            <ExampleHeader text="Global Button Themes" url={url} />
            <p>Apply one of the following extendables to apply a button theme your entire project.</p>
            <div className="example-container">
              <div className="card hide-HTML-code">
                <div className="card-content">
                  <button type="button" className="button button--round">Round</button>
                  <button type="button" className="button button--smooth">Smooth</button>
                  <button type="button" className="button button--square">Square</button>
                </div>
              </div>
              <CodeToggle />
              <CodeToggleSCSS>
                {`<!-- Round Button Theme (Default) -->
button { @extend %button--round; }

<!-- Smooth Button Theme -->
button { @extend %button--smooth; }

<!-- Square Button Theme -->
button { @extend %button--square; }`}
              </CodeToggleSCSS>
            </div>
          </div>
        </AppContent>
      </Layout>
    );
  }

}

export default ActionsCode;
