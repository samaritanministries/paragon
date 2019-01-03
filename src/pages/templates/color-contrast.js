import React from 'react'
import { Link } from 'gatsby'
import '../../sass/example-page/example-page.scss'

export default () => (

	<div className="overpanel">
		<header className="title-bar">
			<div className="title-content">
				<div>
					<h2>Brand Contrast Checker</h2>
					<p>Rated against <Link to="https://webaim.org/resources/contrastchecker/">WCAG 2.1 AA rating</Link></p>
				</div>
			</div>
		</header>

    <section className="content">
			<div className="grid grid-padding">
	      <h2>Color Accessibility Guidelines</h2>
	      <p>When using color in buttons, links, and navigation, it is important that the foreground-to-background contrast ratio passes W3C’s AA rating for accessibility. Paragon UI colors have been tested against Level AA standards are displayed below with examples of usage.</p>

				<h2 style={{color: "#72569B"}}>Purple #72569B</h2>
				<div className="card card--accessibility card--brand-purple">
					<div className="card-content">
						<div className="x-accessibility-group">
							<span className="tag tag--green tag--solid tag--no-link">Pass</span><h1 style={{color: "#FFFFFF"}}>Header above 24px</h1>
						</div>
						<div className="x-accessibility-group">
							<span className="tag tag--green tag--solid tag--no-link">Pass</span><p style={{color: "#FFFFFF"}}>Body</p>
						</div>
						<div className="x-accessibility-group">
							<span className="tag tag--green tag--solid tag--no-link">Pass</span><button className="button button--brand-purpleWhite">Button</button><button className="button button--brand-whitePurple">Button</button>
						</div>
						<div className="x-accessibility-group">
							<span className="tag tag--green tag--solid tag--no-link">Pass</span><i className="dashing-icon dashing-icon--white dashing-icon--checkmark"></i><i className="dashing-icon dashing-icon--white dashing-icon--question-filled"></i><i className="dashing-icon dashing-icon--white dashing-icon--search"></i>
						</div>
					</div>
				</div>
				<div className="card card--accessibility card--brand-purple">
					<div className="card-content">
						<div className="x-accessibility-group">
							<span className="tag tag--green tag--solid tag--no-link">Pass</span><h1 style={{color: "#000000"}}>Header above 24px</h1>
						</div>
						<div className="x-accessibility-group">
							<span className="tag tag--red tag--solid tag--no-link">Fail</span><p style={{color: "#000000"}}>Body</p>
						</div>
						<div className="x-accessibility-group">
							<span className="tag tag--red tag--solid tag--no-link">Fail</span><button className="button button--brand-purpleBlack">Button</button><button className="button button--brand-blackPurple">Button</button>
						</div>
						<div className="x-accessibility-group">
							<span className="tag tag--green tag--solid tag--no-link">Pass</span><i className="dashing-icon dashing-icon--black dashing-icon--checkmark"></i><i className="dashing-icon dashing-icon--black dashing-icon--question-filled"></i><i className="dashing-icon dashing-icon--black dashing-icon--search"></i>
						</div>
					</div>
				</div>

				<h2 style={{color: "#28336D"}}>Dark Blue #28336D</h2>
				<div className="card card--accessibility card--brand-darkBlue">
					<div className="card-content">
						<div className="x-accessibility-group">
							<span className="tag tag--green tag--solid tag--no-link">Pass</span><h1 style={{color: "#FFFFFF"}}>Header above 24px</h1>
						</div>
						<div className="x-accessibility-group">
							<span className="tag tag--green tag--solid tag--no-link">Pass</span><p style={{color: "#FFFFFF"}}>Body</p>
						</div>
						<div className="x-accessibility-group">
							<span className="tag tag--green tag--solid tag--no-link">Pass</span><button className="button button--brand-darkBlueWhite">Button</button><button className="button button--brand-whiteDarkBlue">Button</button>
						</div>
						<div className="x-accessibility-group">
							<span className="tag tag--green tag--solid tag--no-link">Pass</span><i className="dashing-icon dashing-icon--white dashing-icon--checkmark"></i><i className="dashing-icon dashing-icon--white dashing-icon--question-filled"></i><i className="dashing-icon dashing-icon--white dashing-icon--search"></i>
						</div>
					</div>
				</div>
				<div className="card card--accessibility card--brand-darkBlue">
					<div className="card-content">
						<div className="x-accessibility-group">
							<span className="tag tag--red tag--solid tag--no-link">Fail</span><h1 style={{color: "#000000"}}>Header above 24px</h1>
						</div>
						<div className="x-accessibility-group">
							<span className="tag tag--red tag--solid tag--no-link">Fail</span><p style={{color: "#000000"}}>Body</p>
						</div>
						<div className="x-accessibility-group">
							<span className="tag tag--red tag--solid tag--no-link">Fail</span><button className="button button--brand-darkBlueBlack">Button</button><button className="button button--brand-blackDarkBlue">Button</button>
						</div>
						<div className="x-accessibility-group">
							<span className="tag tag--red tag--solid tag--no-link">Fail</span><i className="dashing-icon dashing-icon--black dashing-icon--checkmark"></i><i className="dashing-icon dashing-icon--black dashing-icon--question-filled"></i><i className="dashing-icon dashing-icon--black dashing-icon--search"></i>
						</div>
					</div>
				</div>

				<h2 style={{color: "#E96A63"}}>Red #E96A63</h2>
				<div className="card card--accessibility card--brand-red">
					<div className="card-content">
						<div className="x-accessibility-group">
							<span className="tag tag--green tag--solid tag--no-link">Pass</span><h1 style={{color: "#FFFFFF"}}>Header above 24px</h1>
						</div>
						<div className="x-accessibility-group">
							<span className="tag tag--red tag--solid tag--no-link">Fail</span><p style={{color: "#FFFFFF"}}>Body</p>
						</div>
						<div className="x-accessibility-group">
							<span className="tag tag--red tag--solid tag--no-link">Fail</span><button className="button button--brand-redWhite">Button</button><button className="button button--brand-whiteRed">Button</button>
						</div>
						<div className="x-accessibility-group">
							<span className="tag tag--green tag--solid tag--no-link">Pass</span><i className="dashing-icon dashing-icon--white dashing-icon--checkmark"></i><i className="dashing-icon dashing-icon--white dashing-icon--question-filled"></i><i className="dashing-icon dashing-icon--white dashing-icon--search"></i>
						</div>
					</div>
				</div>
				<div className="card card--accessibility card--brand-red">
					<div className="card-content">
						<div className="x-accessibility-group">
							<span className="tag tag--green tag--solid tag--no-link">Pass</span><h1 style={{color: "#000000"}}>Header above 24px</h1>
						</div>
						<div className="x-accessibility-group">
							<span className="tag tag--green tag--solid tag--no-link">Pass</span><p style={{color: "#000000"}}>Body</p>
						</div>
						<div className="x-accessibility-group">
							<span className="tag tag--green tag--solid tag--no-link">Pass</span><button className="button button--brand-redBlack">Button</button><button className="button button--brand-blackRed">Button</button>
						</div>
						<div className="x-accessibility-group">
							<span className="tag tag--green tag--solid tag--no-link">Pass</span><i className="dashing-icon dashing-icon--black dashing-icon--checkmark"></i><i className="dashing-icon dashing-icon--black dashing-icon--question-filled"></i><i className="dashing-icon dashing-icon--black dashing-icon--search"></i>
						</div>
					</div>
				</div>

				<h2 style={{color: "#F5CD66"}}>Yellow #F5CD66</h2>
				<div className="card card--accessibility card--brand-yellow">
					<div className="card-content">
						<div className="x-accessibility-group">
							<span className="tag tag--red tag--solid tag--no-link">Fail</span><h1 style={{color: "#FFFFFF"}}>Header above 24px</h1>
						</div>
						<div className="x-accessibility-group">
							<span className="tag tag--red tag--solid tag--no-link">Fail</span><p style={{color: "#FFFFFF"}}>Body</p>
						</div>
						<div className="x-accessibility-group">
							<span className="tag tag--red tag--solid tag--no-link">Fail</span><button className="button button--brand-yellowWhite">Button</button><button className="button button--brand-whiteYellow">Button</button>
						</div>
						<div className="x-accessibility-group">
							<span className="tag tag--red tag--solid tag--no-link">Fail</span><i className="dashing-icon dashing-icon--white dashing-icon--checkmark"></i><i className="dashing-icon dashing-icon--white dashing-icon--question-filled"></i><i className="dashing-icon dashing-icon--white dashing-icon--search"></i>
						</div>
					</div>
				</div>
				<div className="card card--accessibility card--brand-yellow">
					<div className="card-content">
						<div className="x-accessibility-group">
							<span className="tag tag--green tag--solid tag--no-link">Pass</span><h1 style={{color: "#000000"}}>Header above 24px</h1>
						</div>
						<div className="x-accessibility-group">
							<span className="tag tag--green tag--solid tag--no-link">Pass</span><p style={{color: "#000000"}}>Body</p>
						</div>
						<div className="x-accessibility-group">
							<span className="tag tag--green tag--solid tag--no-link">Pass</span><button className="button button--brand-yellowBlack">Button</button><button className="button button--brand-blackYellow">Button</button>
						</div>
						<div className="x-accessibility-group">
							<span className="tag tag--green tag--solid tag--no-link">Pass</span><i className="dashing-icon dashing-icon--black dashing-icon--checkmark"></i><i className="dashing-icon dashing-icon--black dashing-icon--question-filled"></i><i className="dashing-icon dashing-icon--black dashing-icon--search"></i>
						</div>
					</div>
				</div>

				<h2>Gray #F1F2F2</h2>
				<div className="card card--accessibility card--brand-gray">
					<div className="card-content">
						<div className="x-accessibility-group">
							<span className="tag tag--red tag--solid tag--no-link">Fail</span><h1 style={{color: "#FFFFFF"}}>Header above 24px</h1>
						</div>
						<div className="x-accessibility-group">
							<span className="tag tag--red tag--solid tag--no-link">Fail</span><p style={{color: "#FFFFFF"}}>Body</p>
						</div>
						<div className="x-accessibility-group">
							<span className="tag tag--red tag--solid tag--no-link">Fail</span><button className="button button--brand-grayWhite">Button</button><button className="button button--brand-whiteGray">Button</button>
						</div>
						<div className="x-accessibility-group">
							<span className="tag tag--red tag--solid tag--no-link">Fail</span><i className="dashing-icon dashing-icon--white dashing-icon--checkmark"></i><i className="dashing-icon dashing-icon--white dashing-icon--question-filled"></i><i className="dashing-icon dashing-icon--white dashing-icon--search"></i>
						</div>
					</div>
				</div>
				<div className="card card--accessibility card--brand-gray">
					<div className="card-content">
						<div className="x-accessibility-group">
							<span className="tag tag--green tag--solid tag--no-link">Pass</span><h1 style={{color: "#000000"}}>Header above 24px</h1>
						</div>
						<div className="x-accessibility-group">
							<span className="tag tag--green tag--solid tag--no-link">Pass</span><p style={{color: "#000000"}}>Body</p>
						</div>
						<div className="x-accessibility-group">
							<span className="tag tag--green tag--solid tag--no-link">Pass</span><button className="button button--brand-grayBlack">Button</button><button className="button button--brand-blackGray">Button</button>
						</div>
						<div className="x-accessibility-group">
							<span className="tag tag--green tag--solid tag--no-link">Pass</span><i className="dashing-icon dashing-icon--black dashing-icon--checkmark"></i><i className="dashing-icon dashing-icon--black dashing-icon--question-filled"></i><i className="dashing-icon dashing-icon--black dashing-icon--search"></i>
						</div>
					</div>
				</div>
			</div>
    </section>
  </div>
)
