import React from "react";
import { Link } from "gatsby";
import AppFooter from "./footer";
import GlobalNavigation from "../components/navigation/global-navigation";
// The scss needs to be imported here for running 'gatsby build'
//import '../../sass/example-page/example-page.scss'
//import '../../sass/experimental/placeholder.scss'

export default () => (

  <React.Fragment>
    <GlobalNavigation />

    <main className="content">
      <div className="grid grid-padding">
        <div className="grid--full grid--half_desktop">

          <div className="card">
            <div className="card-content">
              <h1>Primary Header</h1>
              <p>Header description</p>
              <Link to="/templates/default">Default Page</Link>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <h1>Primary Header</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate massa sed lacus aliquet, nec placerat neque pellentesque. Ut aliquet gravida lacus quis aliquam. Aenean placerat tellus a ipsum hendrerit, nec bibendum elit pharetra. Pellentesque eleifend felis vitae elit maximus convallis. Donec rhoncus est ut arcu auctor, sit amet aliquam sapien malesuada. Suspendisse potenti. Fusce tortor massa, pharetra eu ligula laoreet, ultrices faucibus elit. Donec eget tortor pharetra, tincidunt libero nec, dictum metus. Nam vitae placerat dolor. Vivamus in leo bibendum, iaculis lectus sed, mollis lorem. Donec viverra ex et luctus facilisis. Aenean orci mi, efficitur quis feugiat in, venenatis ut turpis.

In mattis accumsan accumsan. Aliquam vel sapien euismod, malesuada odio non, ullamcorper magna. Aliquam a egestas enim, vitae imperdiet nulla. Suspendisse maximus nunc non lorem congue lacinia et ut ligula. Curabitur blandit porta tellus, a maximus lacus luctus non. Donec posuere gravida diam non tempor. Phasellus sed purus nunc. Morbi eu odio blandit, aliquet leo sit amet, blandit lorem. Nulla lorem nibh, molestie sit amet justo eu, ullamcorper mattis elit. Sed ac urna mollis, varius erat non, pharetra mi. Nam molestie arcu diam, vitae dignissim lacus tristique eu. In aliquam tristique dui sed sagittis. Proin tincidunt faucibus dolor, nec condimentum dui ultrices sit amet. Nam mattis magna felis, eget consectetur dui gravida at.
              </p>
            </div>
          </div>

        </div>
      </div>
    </main>
    <AppFooter />
  </React.Fragment>

);
