import React from 'react'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'
import CodeToggle from '../../../components/codetoggle'
import CodeToggleSCSS from '../../../components/codetoggle-scss'

const currentPageName = "Actions";
const currentPageNameLower = currentPageName.toLowerCase();

export default () => (
  <Layout>
    <header className="subnav">
    <h1>{currentPageName}</h1>
    <SubNav pageName={currentPageNameLower}/>
    </header>
    <AppContent>
      <main className="content content-m" style={{marginTop: "2rem"}}>
        <div className="grid grid-padding">

          <h2>Styles <button className="button button--transparent button--copy-link" data-id="copyurl" id="Buttonn_Styles"></button></h2>
          <div className="example-container">
            <div className="card">
              <div className="card-content">
                <button className="button">Default</button>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <button className="button button--border">Border</button>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <button className="button button--transparent">Transparent</button>
              </div>
            </div>
            <CodeToggle>
{`<button className="button">Default</button>

<button className="button button--border">Border</button>

<button className="button button--transparent">Transparent</button>`}
            </CodeToggle>
          </div>

          <h2 className="mt-space-xl">States <button className="button button--transparent button--copy-link" data-id="copyurl" id="Default_Button"></button></h2>
          <div className="example-container">
            <div className="card">
              <div className="card-content">
                <button className="button">Default</button>
                <button className="button button--border">Border</button>
                <button className="button button--transparent">Transparent</button>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <button className="button" disabled>Disabled</button>
                <button className="button button--border" disabled>Disabled</button>
                <button className="button button--transparent" disabled>Disabled</button>
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

          <h2 className="mt-space-xl">Sizes <button className="button button--transparent button--copy-link" data-id="copyurl" id="Button_Sizes"></button></h2>
          <div className="example-container">
            <div className="card">
              <div className="card-content">
                <button className="button button--small">Small</button>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <button className="button">Default</button>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <button className="button button--large">Large</button>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <button className="button button--block">Block</button>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <button className="button button--block_mobile">Mobile Block</button>
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

          <h2 className="mt-space-xl">Colors <button className="button button--transparent button--copy-link" data-id="copyurl" id="Button_Colors"></button></h2>
          <div className="example-container">
            <div className="card">
              <div className="card-content">
                <button className="button">Blue</button>
                <button className="button button--border">Blue</button>
                <button className="button button--transparent">Blue</button>
                <button className="button button--icon">
                  <i className="dashing-icon dashing-icon--pencil"></i>
                </button>
                <button className="button button--blue button--icon button--transparent">
                  <i className="dashing-icon dashing-icon--pencil"></i>
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <button className="button button--gray">Gray</button>
                <button className="button button--gray button--border">Gray</button>
                <button className="button button--gray button--transparent">Gray</button>
                <button className="button button--gray button--icon">
                  <i className="dashing-icon dashing-icon--close"></i>
                </button>
                <button className="button button--icon button--transparent">
                  <i className="dashing-icon dashing-icon--close"></i>
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <button className="button button--green">Green</button>
                <button className="button button--green button--border">Green</button>
                <button className="button button--green button--transparent">Green</button>
                <button className="button button--green button--icon">
                  <i className="dashing-icon dashing-icon--plus"></i>
                </button>
                <button className="button button--green button--icon button--transparent">
                  <i className="dashing-icon dashing-icon--plus"></i>
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <button className="button button--orange">Orange</button>
                <button className="button button--orange button--border">Orange</button>
                <button className="button button--orange button--transparent">Orange</button>
                <button className="button button--orange button--icon">
                  <i className="dashing-icon dashing-icon--comment"></i>
                </button>
                <button className="button button--orange button--icon button--transparent">
                  <i className="dashing-icon dashing-icon--comment"></i>
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <button className="button button--purple">Purple</button>
                <button className="button button--purple button--border">Purple</button>
                <button className="button button--purple button--transparent">Purple</button>
                <button className="button button--purple button--icon">
                  <i className="dashing-icon dashing-icon--phone"></i>
                </button>
                <button className="button button--purple button--icon button--transparent">
                  <i className="dashing-icon dashing-icon--phone"></i>
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <button className="button button--red">Red</button>
                <button className="button button--red button--border">Red</button>
                <button className="button button--red button--transparent">Red</button>
                <button className="button button--red button--icon">
                  <i className="dashing-icon dashing-icon--trash"></i>
                </button>
                <button className="button button--red button--icon button--transparent">
                  <i className="dashing-icon dashing-icon--trash"></i>
                </button>
              </div>
            </div>
            <div className="card" style={{backgroundColor: "#28336d"}}>
              <div className="card-content">
                <button className="button button--white">White</button>
                <button className="button button--white button--border">White</button>
                <button className="button button--white button--transparent">White</button>
                <button className="button button--white button--icon">
                  <i className="dashing-icon dashing-icon--settings"></i>
                </button>
                <button className="button button--white button--icon button--transparent">
                  <i className="dashing-icon dashing-icon--settings"></i>
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

          <h2 className="mt-space-xl">Icons <button className="button button--transparent button--copy-link" data-id="copyurl" id="Button_With_Icon"></button></h2>
          <div className="example-container">
            <div className="card">
              <div className="card-content">
                <button className="button">
                  <i className="dashing-icon dashing-icon--add"></i>
                  Default
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <button className="button button--border">
                  <i className="dashing-icon dashing-icon--pencil"></i>
                  Border
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <button className="button button--transparent">
                  <i className="dashing-icon dashing-icon--search"></i>
                  Transparent
                </button>
                <button className="button button--gray button--transparent">
                  Transparent
                  <i className="dashing-icon dashing-icon--new-tab flow-opposite"></i>
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <button className="button button--icon">
                  <i className="dashing-icon dashing-icon--add"></i>
                </button>
                <button className="button button--red button--icon">
                  <i className="dashing-icon dashing-icon--trash"></i>
                </button>
                <button className="button button--transparent button--icon">
                  <i className="dashing-icon dashing-icon--question-filled"></i>
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <button className="button button--icon button--icon--main">
                  <i className="dashing-icon dashing-icon--add"></i>
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

          <h2 className="mt-space-xl">Button Group <button className="button button--transparent button--copy-link" data-id="copyurl" id="Toggle_Button_Border_Button"></button></h2>
          <div className="example-container">
            <div className="card">
              <div className="card-content">
                <ul className="button-group button-group--blue">
                  <li className="button--radio">
                    <input type="radio" name="options-blue" id="blue1" defaultChecked />
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
                <ul className="button-group button-group--green button-group--border">
                  <li className="button--radio">
                    <input type="radio" name="options-green" id="previous" defaultChecked />
                    <label htmlFor="previous" className="button">Previous</label>
                  </li>
                  <li className="button--radio">
                    <input type="radio" name="options-green" id="green1" defaultChecked />
                    <label htmlFor="green1" className="button">1</label>
                  </li>
                  <li className="button--radio">
                    <input type="radio" name="options-green" id="green2" />
                    <label htmlFor="green2" className="button">2</label>
                  </li>
                  <li className="button--radio">
                    <input type="radio" name="options-green" id="green3" />
                    <label htmlFor="green3" className="button">3</label>
                  </li>
                  <li className="button--radio">
                    <input type="radio" name="options-green" id="green4" />
                    <label htmlFor="green4" className="button">4</label>
                  </li>
                  <li className="button--radio">
                    <input type="radio" name="options-green" id="green5" />
                    <label htmlFor="green5" className="button">5</label>
                  </li>
                  <li className="button--radio">
                    <input type="radio" name="options-green" id="next" />
                    <label htmlFor="next" className="button">Next</label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <ul className="button-group button-group--vertical button-group--gray button-group--border">
                  <li className="button--radio">
                    <input type="radio" name="options-gray" id="toggle-gray1" defaultChecked />
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
{`<!-- Green Toggle Border Button -->
<ul class="button-group button-group--green button-group--border">
  <li class="button--radio">
    <input type="radio" name="options-green" id="green1" defaultChecked />
    <label for="green1" class="button">1</label>
  </li>
  <li class="button--radio">
    <input type="radio" name="options-green" id="green2" />
    <label for="green2" class="button">2</label>
  </li>
  <li class="button--radio">
    <input type="radio" name="options-green" id="green3" />
    <label for="green3" class="button">3</label>
  </li>
  <li class="button--radio">
    <input type="radio" name="options-green" id="green4" />
    <label for="green4" class="button">4</label>
  </li>
  <li class="button--radio">
    <input type="radio" name="options-green" id="green5" />
    <label for="green5" class="button">5</label>
  </li>
  <li class="button--radio">
    <input type="radio" name="options-green" id="green6" />
    <label for="green6" class="button">6</label>
  </li>
  <li class="button--radio">
    <input type="radio" name="options-green" id="green7" />
    <label for="green7" class="button">7</label>
  </li>
</ul>`}
          </CodeToggle>
        </div>

        <h2 className="mt-space-xl">Theme Options <button className="button button--transparent button--copy-link" data-id="copyurl" id="Theme_Options"></button></h2>
        <div className="example-container">
          <div className="card">
            <div className="card-content">
              <button className="button button--round">Round</button>
              <button className="button button--smooth">Smooth</button>
              <button className="button button--square">Square</button>
            </div>
          </div>
          <CodeToggle>
{`<button class="button button--round">Round</button>
<button class="button button--smooth">Smooth</button>
<button class="button button--square">Square</button>`}
          </CodeToggle>
        </div>

        <h2 className="mt-space-xl">Global Button Themes <button className="button button--transparent button--copy-link" data-id="copyurl" id="Global_Button_Themes"></button></h2>
        <p>Apply one of the following extendables to apply a button theme your entire project.</p>
        <div className="example-container hide-HTML-code">
          <div className="card">
            <div className="card-content">
              <button className="button button--round">Round</button>
              <button className="button button--smooth">Smooth</button>
              <button className="button button--square">Square</button>
            </div>
          </div>
          <CodeToggle>
          </CodeToggle>
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
      </main>
    </AppContent>
  </Layout>
)
