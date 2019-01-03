import React from 'react'
import '../../sass/example-page/example-page.scss'

export default () => (

	<div className="overpanel overpanel-l">
		<header className="title-bar">
			<div className="title-content">
				<div>
					<h1>Brand Contrast Checker</h1>
					<p>Rated against</p>
				</div>
			</div>
		</header>

    <section className="content">
			<div className="grid grid-padding">
	      <h1>Color Accessibility Guidelines</h1>
	      <p>When using color in buttons, links, and navigation, it is important that the foreground-to-background contrast ratio passes W3C’s AA rating for accessibility. Paragon UI colors have been tested against Level AA standards are displayed below with examples of usage.</p>
<<<<<<< HEAD
				<ul style={{marginTop: "0"}}>
					<li><strong>Level AA</strong> requires a contrast ratio of at least <strong>4.5:1</strong> for normal text, and <strong>3:1</strong> for large text 24px or larger.</li>
					<li><strong>Level AAA</strong> requires a contrast ratio of at least <strong>7:1</strong> for normal text, and <strong>4.5:1</strong> for large text 24px or larger.</li>
				</ul>
				<h2>Brand Colors</h2>
				<div class="card table--container x-accessiblity-table" style={{overflow: "hidden"}}>
					<table class="table has-dividers">
						<thead>
						  <tr>
								<th>Name</th>
						    <th>HEX Value</th>
						    <th>Large</th>
						    <th>Body</th>
								<th>Button</th>
						    <th>Icon</th>
						  </tr>
						</thead>
						<tbody>
						  <tr className="color--brand-purple">
								<td>$brand-purple</td>
						    <td><span>#72569B</span></td>
						    <td><i className="x-pass"></i><h2 className="text-color--white">AAA</h2></td>
								<td><i className="x-pass"></i><p className="text-color--white">AA</p></td>
								<td><i className="x-pass"></i><button className="button--brand-purpleWhite">AA</button></td>
						    <td><i className="x-pass"></i><i className="x-accessibility--white"></i></td>
						  </tr>
							<tr className="color--brand-purple">
								<td>$brand-purple</td>
						    <td><span>#72569B</span></td>
								<td><i className="x-pass"></i><h2 className="text-color--black">AA</h2></td>
								<td><i className="x-fail"></i><p className="text-color--black">FAIL</p></td>
								<td><i className="x-fail"></i><button className="button--brand-purpleBlack">FAIL</button></td>
						    <td><i className="x-pass"></i><i className="x-accessibility--black"></i></td>
						  </tr>
							<tr className="color--brand-blue">
								<td>$brand-blue</td>
						    <td><span>#28336D</span></td>
						    <td><i className="x-pass"></i><h2 className="text-color--white">AAA</h2></td>
								<td><i className="x-pass"></i><p className="text-color--white">AAA</p></td>
								<td><i className="x-pass"></i><button className="button--brand-blueWhite">AAA</button></td>
						    <td><i className="x-pass"></i><i className="x-accessibility--white"></i></td>
						  </tr>
							<tr className="color--brand-blue">
								<td>$brand-blue</td>
						    <td><span>#28336D</span></td>
								<td><i className="x-fail"></i><h2 className="text-color--black">FAIL</h2></td>
								<td><i className="x-fail"></i><p className="text-color--black">FAIL</p></td>
								<td><i className="x-fail"></i><button className="button--brand-blueBlack">FAIL</button></td>
						    <td><i className="x-fail"></i><i className="x-accessibility--black"></i></td>
						  </tr>
							<tr className="color--brand-red">
								<td>$brand-red</td>
						    <td><span>#E96A63</span></td>
						    <td><i className="x-pass"></i><h2 className="text-color--white">AA</h2></td>
								<td><i className="x-fail"></i><p className="text-color--white">FAIL</p></td>
								<td><i className="x-fail"></i><button className="button--brand-redWhite">FAIL</button></td>
						    <td><i className="x-pass"></i><i className="x-accessibility--white"></i></td>
						  </tr>
							<tr className="color--brand-red">
								<td>$brand-red</td>
						    <td><span>#E96A63</span></td>
								<td><i className="x-pass"></i><h2 className="text-color--black">AAA</h2></td>
								<td><i className="x-pass"></i><p className="text-color--black">AA</p></td>
								<td><i className="x-pass"></i><button className="button--brand-redBlack">AA</button></td>
						    <td><i className="x-pass"></i><i className="x-accessibility--black"></i></td>
						  </tr>
							<tr className="color--brand-yellow">
								<td>$brand-yellow</td>
						    <td><span>#F5CD66</span></td>
						    <td><i className="x-fail"></i><h2 className="text-color--white">FAIL</h2></td>
								<td><i className="x-fail"></i><p className="text-color--white">FAIL</p></td>
								<td><i className="x-fail"></i><button className="button--brand-yellowWhite">FAIL</button></td>
						    <td><i className="x-fail"></i><i className="x-accessibility--white"></i></td>
						  </tr>
							<tr className="color--brand-yellow">
								<td>$brand-yellow</td>
						    <td><span>#F5CD66</span></td>
								<td><i className="x-pass"></i><h2 className="text-color--black">AAA</h2></td>
								<td><i className="x-pass"></i><p className="text-color--black">AAA</p></td>
								<td><i className="x-pass"></i><button className="button--brand-yellowBlack">AAA</button></td>
						    <td><i className="x-pass"></i><i className="x-accessibility--black"></i></td>
						  </tr>
							<tr className="color--brand-gray">
								<td>$brand-gray</td>
						    <td><span>#F1F2F2</span></td>
						    <td><i className="x-fail"></i><h2 className="text-color--white">FAIL</h2></td>
								<td><i className="x-fail"></i><p className="text-color--white">FAIL</p></td>
								<td><i className="x-fail"></i><button className="button--brand-grayWhite">FAIL</button></td>
						    <td><i className="x-fail"></i><i className="x-accessibility--white"></i></td>
						  </tr>
							<tr className="color--brand-gray">
								<td>$brand-gray</td>
						    <td><span>#F1F2F2</span></td>
								<td><i className="x-pass"></i><h2 className="text-color--black">AAA</h2></td>
								<td><i className="x-pass"></i><p className="text-color--black">AAA</p></td>
								<td><i className="x-pass"></i><button className="button--brand-grayBlack">AAA</button></td>
						    <td><i className="x-pass"></i><i className="x-accessibility--black"></i></td>
						  </tr>
						</tbody>
					</table>
				</div>

				<h2>UI Colors</h2>
				<div class="card table--container x-accessiblity-table" style={{overflow: "hidden"}}>
					<table class="table has-dividers">
						<thead>
						  <tr>
								<th>Name</th>
						    <th>HEX Value</th>
						    <th>Large</th>
						    <th>Body</th>
								<th>Button</th>
						    <th>Icon</th>
						  </tr>
						</thead>
						<tbody>
						  <tr className="color--blue">
								<td>$blue</td>
						    <td><span>#3F70C9</span></td>
						    <td><i className="x-pass"></i><h2 className="text-color--white">AAA</h2></td>
								<td><i className="x-pass"></i><p className="text-color--white">AA</p></td>
								<td><i className="x-pass"></i><button className="button--blueWhite">AA</button></td>
						    <td><i className="x-pass"></i><i className="x-accessibility--white"></i></td>
						  </tr>
							<tr className="color--blue">
								<td>$blue</td>
						    <td><span>#3F70C9</span></td>
								<td><i className="x-pass"></i><h2 className="text-color--black">AA</h2></td>
								<td><i className="x-fail"></i><p className="text-color--black">FAIL</p></td>
								<td><i className="x-fail"></i><button className="button--blueBlack">FAIL</button></td>
						    <td><i className="x-pass"></i><i className="x-accessibility--black"></i></td>
						  </tr>
							<tr className="color--green">
								<td>$green</td>
						    <td><span>#09AA66</span></td>
						    <td><i className="x-pass"></i><h2 className="text-color--white">AA</h2></td>
								<td><i className="x-fail"></i><p className="text-color--white">FAIL</p></td>
								<td><i className="x-fail"></i><button className="button--greenWhite">FAIL</button></td>
						    <td><i className="x-pass"></i><i className="x-accessibility--white"></i></td>
						  </tr>
							<tr className="color--green">
								<td>$green</td>
						    <td><span>#09AA66</span></td>
								<td><i className="x-pass"></i><h2 className="text-color--black">AAA</h2></td>
								<td><i className="x-pass"></i><p className="text-color--black">AA</p></td>
								<td><i className="x-pass"></i><button className="button--greenBlack">AA</button></td>
						    <td><i className="x-pass"></i><i className="x-accessibility--black"></i></td>
						  </tr>
							<tr className="color--orange">
								<td>$orange</td>
						    <td><span>#FFA11F</span></td>
						    <td><i className="x-fail"></i><h2 className="text-color--white">FAIL</h2></td>
								<td><i className="x-fail"></i><p className="text-color--white">FAIL</p></td>
								<td><i className="x-fail"></i><button className="button--orangeWhite">FAIL</button></td>
						    <td><i className="x-fail"></i><i className="x-accessibility--white"></i></td>
						  </tr>
							<tr className="color--orange">
								<td>$orange</td>
						    <td><span>#FFA11F</span></td>
								<td><i className="x-pass"></i><h2 className="text-color--black">AAA</h2></td>
								<td><i className="x-pass"></i><p className="text-color--black">AAA</p></td>
								<td><i className="x-pass"></i><button className="button--orangeBlack">AAA</button></td>
						    <td><i className="x-pass"></i><i className="x-accessibility--black"></i></td>
						  </tr>
							<tr className="color--red">
								<td>$red</td>
						    <td><span>#DA3D30</span></td>
						    <td><i className="x-pass"></i><h2 className="text-color--white">AA</h2></td>
								<td><i className="x-fail"></i><p className="text-color--white">FAIL</p></td>
								<td><i className="x-fail"></i><button className="button--redWhite">FAIL</button></td>
						    <td><i className="x-pass"></i><i className="x-accessibility--white"></i></td>
						  </tr>
							<tr className="color--red">
								<td>$red</td>
						    <td><span>#DA3D30</span></td>
								<td><i className="x-pass"></i><h2 className="text-color--black">AAA</h2></td>
								<td><i className="x-pass"></i><p className="text-color--black">AA</p></td>
								<td><i className="x-pass"></i><button className="button--redBlack">AA</button></td>
						    <td><i className="x-pass"></i><i className="x-accessibility--black"></i></td>
						  </tr>
							<tr className="color--purple">
								<td>$purple</td>
						    <td><span>#9F65AE</span></td>
								<td><i className="x-pass"></i><h2 className="text-color--white">AA</h2></td>
								<td><i className="x-fail"></i><p className="text-color--white">FAIL</p></td>
								<td><i className="x-fail"></i><button className="button--purpleWhite">FAIL</button></td>
						    <td><i className="x-pass"></i><i className="x-accessibility--white"></i></td>
						  </tr>
							<tr className="color--purple">
								<td>$purple</td>
						    <td><span>#9F65AE</span></td>
								<td><i className="x-pass"></i><h2 className="text-color--black">AAA</h2></td>
								<td><i className="x-pass"></i><p className="text-color--black">AA</p></td>
								<td><i className="x-pass"></i><button className="button--purpleBlack">AA</button></td>
						    <td><i className="x-pass"></i><i className="x-accessibility--black"></i></td>
						  </tr>
							<tr className="color--gray">
								<td>$gray</td>
						    <td><span>#D4D4D4</span></td>
								<td><i className="x-fail"></i><h2 className="text-color--white">FAIL</h2></td>
								<td><i className="x-fail"></i><p className="text-color--white">FAIL</p></td>
								<td><i className="x-fail"></i><button className="button--grayWhite">FAIL</button></td>
						    <td><i className="x-fail"></i><i className="x-accessibility--white"></i></td>
						  </tr>
							<tr className="color--gray">
								<td>$gray</td>
						    <td><span>#D4D4D4</span></td>
								<td><i className="x-pass"></i><h2 className="text-color--black">AAA</h2></td>
								<td><i className="x-pass"></i><p className="text-color--black">AAA</p></td>
								<td><i className="x-pass"></i><button className="button--grayBlack">AAA</button></td>
						    <td><i className="x-pass"></i><i className="x-accessibility--black"></i></td>
						  </tr>
						</tbody>
					</table>
=======

				<h1>UI Colors</h1>
				<h3>Blue #3F70C9</h3>

				<div className="grid--half">
					<div className="card card--accessibility card--blue">
						<div className="card-content">
							<div className="x-accessibility-group">
								<span className="tag tag--green tag--solid tag--no-link">Pass</span><h1 style={{color: "#FFFFFF"}}>Header (h1, h2)</h1>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--green tag--solid tag--no-link">Pass</span><p style={{color: "#FFFFFF"}}>Body (p, a, h3, h4, h5, label)</p>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--green tag--solid tag--no-link">Pass</span><button className="button button--blue">Button</button><button className="button button--whiteBlue">Button</button>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--green tag--solid tag--no-link">Pass</span><i className="dashing-icon dashing-icon--white dashing-icon--checkmark"></i><i className="dashing-icon dashing-icon--white dashing-icon--question-filled"></i><i className="dashing-icon dashing-icon--white dashing-icon--search"></i>
							</div>
						</div>
					</div>
				</div>
				<div className="grid--half">
					<div className="card card--accessibility card--blue">
						<div className="card-content">
							<div className="x-accessibility-group">
								<span className="tag tag--green tag--solid tag--no-link">Pass</span><h1 style={{color: "#000000"}}>Header (h1, h2)</h1>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--red tag--solid tag--no-link">Fail</span><p style={{color: "#000000"}}>Body (p, a, h3, h4, h5, label)</p>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--red tag--solid tag--no-link">Fail</span><button className="button button--blueBlack">Button</button><button className="button button--blackBlue">Button</button>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--green tag--solid tag--no-link">Pass</span><i className="dashing-icon dashing-icon--black dashing-icon--checkmark"></i><i className="dashing-icon dashing-icon--black dashing-icon--question-filled"></i><i className="dashing-icon dashing-icon--black dashing-icon--search"></i>
							</div>
						</div>
					</div>
				</div>

				<h3>Green #09AA66</h3>

				<div className="grid--half">
					<div className="card card--accessibility card--green">
						<div className="card-content">
							<div className="x-accessibility-group">
								<span className="tag tag--green tag--solid tag--no-link">Pass</span><h1 style={{color: "#FFFFFF"}}>Header (h1, h2)</h1>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--red tag--solid tag--no-link">Fail</span><p style={{color: "#FFFFFF"}}>Body (p, a, h3, h4, h5, label)</p>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--red tag--solid tag--no-link">Fail</span><button className="button button--green">Button</button><button className="button button--whiteGreen">Button</button>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--green tag--solid tag--no-link">Pass</span><i className="dashing-icon dashing-icon--white dashing-icon--checkmark"></i><i className="dashing-icon dashing-icon--white dashing-icon--question-filled"></i><i className="dashing-icon dashing-icon--white dashing-icon--search"></i>
							</div>
						</div>
					</div>
				</div>
				<div className="grid--half">
					<div className="card card--accessibility card--green">
						<div className="card-content">
							<div className="x-accessibility-group">
								<span className="tag tag--green tag--solid tag--no-link">Pass</span><h1 style={{color: "#000000"}}>Header (h1, h2)</h1>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--green tag--solid tag--no-link">Pass</span><p style={{color: "#000000"}}>Body (p, a, h3, h4, h5, label)</p>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--green tag--solid tag--no-link">Pass</span><button className="button button--greenBlack">Button</button><button className="button button--blackGreen">Button</button>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--green tag--solid tag--no-link">Pass</span><i className="dashing-icon dashing-icon--black dashing-icon--checkmark"></i><i className="dashing-icon dashing-icon--black dashing-icon--question-filled"></i><i className="dashing-icon dashing-icon--black dashing-icon--search"></i>
							</div>
						</div>
					</div>
				</div>

				<h3>Red #DA3D30</h3>

				<div className="grid--half">
					<div className="card card--accessibility card--red">
						<div className="card-content">
							<div className="x-accessibility-group">
								<span className="tag tag--green tag--solid tag--no-link">Pass</span><h1 style={{color: "#FFFFFF"}}>Header (h1, h2)</h1>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--green tag--solid tag--no-link">Pass</span><p style={{color: "#FFFFFF"}}>Body (p, a, h3, h4, h5, label)</p>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--green tag--solid tag--no-link">Pass</span><button className="button button--red">Button</button><button className="button button--whiteRed">Button</button>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--green tag--solid tag--no-link">Pass</span><i className="dashing-icon dashing-icon--white dashing-icon--checkmark"></i><i className="dashing-icon dashing-icon--white dashing-icon--question-filled"></i><i className="dashing-icon dashing-icon--white dashing-icon--search"></i>
							</div>
						</div>
					</div>
				</div>
				<div className="grid--half">
					<div className="card card--accessibility card--red">
						<div className="card-content">
							<div className="x-accessibility-group">
								<span className="tag tag--green tag--solid tag--no-link">Pass</span><h1 style={{color: "#000000"}}>Header (h1, h2)</h1>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--red tag--solid tag--no-link">Fail</span><p style={{color: "#000000"}}>Body (p, a, h3, h4, h5, label)</p>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--red tag--solid tag--no-link">Fail</span><button className="button button--redBlack">Button</button><button className="button button--blackRed">Button</button>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--green tag--solid tag--no-link">Pass</span><i className="dashing-icon dashing-icon--black dashing-icon--checkmark"></i><i className="dashing-icon dashing-icon--black dashing-icon--question-filled"></i><i className="dashing-icon dashing-icon--black dashing-icon--search"></i>
							</div>
						</div>
					</div>
				</div>

				<h3>Orange #FFA11F</h3>

				<div className="grid--half">
					<div className="card card--accessibility card--orange">
						<div className="card-content">
							<div className="x-accessibility-group">
								<span className="tag tag--red tag--solid tag--no-link">Fail</span><h1 style={{color: "#FFFFFF"}}>Header (h1, h2)</h1>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--red tag--solid tag--no-link">Fail</span><p style={{color: "#FFFFFF"}}>Body (p, a, h3, h4, h5, label)</p>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--red tag--solid tag--no-link">Fail</span><button className="button button--orangeWhite">Button</button><button className="button button--whiteOrange">Button</button>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--red tag--solid tag--no-link">Fail</span><i className="dashing-icon dashing-icon--white dashing-icon--checkmark"></i><i className="dashing-icon dashing-icon--white dashing-icon--question-filled"></i><i className="dashing-icon dashing-icon--white dashing-icon--search"></i>
							</div>
						</div>
					</div>
				</div>
				<div className="grid--half">
					<div className="card card--accessibility card--orange">
						<div className="card-content">
							<div className="x-accessibility-group">
								<span className="tag tag--green tag--solid tag--no-link">Pass</span><h1 style={{color: "#000000"}}>Header (h1, h2)</h1>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--green tag--solid tag--no-link">Pass</span><p style={{color: "#000000"}}>Body (p, a, h3, h4, h5, label)</p>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--green tag--solid tag--no-link">Pass</span><button className="button button--orangeBlack">Button</button><button className="button button--blackOrange">Button</button>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--green tag--solid tag--no-link">Pass</span><i className="dashing-icon dashing-icon--black dashing-icon--checkmark"></i><i className="dashing-icon dashing-icon--black dashing-icon--question-filled"></i><i className="dashing-icon dashing-icon--black dashing-icon--search"></i>
							</div>
						</div>
					</div>
				</div>

				<h3>Purple #9F65AE</h3>

				<div className="grid--half">
					<div className="card card--accessibility card--purple">
						<div className="card-content">
							<div className="x-accessibility-group">
								<span className="tag tag--green tag--solid tag--no-link">Pass</span><h1 style={{color: "#FFFFFF"}}>Header (h1, h2)</h1>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--red tag--solid tag--no-link">Fail</span><p style={{color: "#FFFFFF"}}>Body (p, a, h3, h4, h5, label)</p>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--red tag--solid tag--no-link">Fail</span><button className="button button--purple">Button</button><button className="button button--whitePurple">Button</button>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--green tag--solid tag--no-link">Pass</span><i className="dashing-icon dashing-icon--white dashing-icon--checkmark"></i><i className="dashing-icon dashing-icon--white dashing-icon--question-filled"></i><i className="dashing-icon dashing-icon--white dashing-icon--search"></i>
							</div>
						</div>
					</div>
				</div>
				<div className="grid--half">
					<div className="card card--accessibility card--purple">
						<div className="card-content">
							<div className="x-accessibility-group">
								<span className="tag tag--green tag--solid tag--no-link">Pass</span><h1 style={{color: "#000000"}}>Header (h1, h2)</h1>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--green tag--solid tag--no-link">Pass</span><p style={{color: "#000000"}}>Body (p, a, h3, h4, h5, label)</p>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--green tag--solid tag--no-link">Pass</span><button className="button button--purpleBlack">Button</button><button className="button button--blackPurple">Button</button>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--green tag--solid tag--no-link">Pass</span><i className="dashing-icon dashing-icon--black dashing-icon--checkmark"></i><i className="dashing-icon dashing-icon--black dashing-icon--question-filled"></i><i className="dashing-icon dashing-icon--black dashing-icon--search"></i>
							</div>
						</div>
					</div>
				</div>

				<h3>Gray #D4D4D4</h3>

				<div className="grid--half">
					<div className="card card--accessibility card--gray">
						<div className="card-content">
							<div className="x-accessibility-group">
								<span className="tag tag--red tag--solid tag--no-link">Fail</span><h1 style={{color: "#FFFFFF"}}>Header (h1, h2)</h1>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--red tag--solid tag--no-link">Fail</span><p style={{color: "#FFFFFF"}}>Body (p, a, h3, h4, h5, label)</p>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--red tag--solid tag--no-link">Fail</span><button className="button button--grayWhite">Button</button><button className="button button--whiteGray">Button</button>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--red tag--solid tag--no-link">Fail</span><i className="dashing-icon dashing-icon--white dashing-icon--checkmark"></i><i className="dashing-icon dashing-icon--white dashing-icon--question-filled"></i><i className="dashing-icon dashing-icon--white dashing-icon--search"></i>
							</div>
						</div>
					</div>
				</div>
				<div className="grid--half">
					<div className="card card--accessibility card--gray">
						<div className="card-content">
							<div className="x-accessibility-group">
								<span className="tag tag--green tag--solid tag--no-link">Pass</span><h1 style={{color: "#000000"}}>Header (h1, h2)</h1>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--green tag--solid tag--no-link">Pass</span><p style={{color: "#000000"}}>Body (p, a, h3, h4, h5, label)</p>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--green tag--solid tag--no-link">Pass</span><button className="button button--grayBlack">Button</button><button className="button button--blackGray">Button</button>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--green tag--solid tag--no-link">Pass</span><i className="dashing-icon dashing-icon--black dashing-icon--checkmark"></i><i className="dashing-icon dashing-icon--black dashing-icon--question-filled"></i><i className="dashing-icon dashing-icon--black dashing-icon--search"></i>
							</div>
						</div>
					</div>
				</div>

				<h1 className="mt-space-xxl">Brand Colors</h1>
				<h3 style={{color: "#72569B"}}>Purple #72569B</h3>

				<div className="grid--half">
					<div className="card card--accessibility card--brand-purple">
						<div className="card-content">
							<div className="x-accessibility-group">
								<span className="tag tag--green tag--solid tag--no-link">Pass</span><h1 style={{color: "#FFFFFF"}}>Header (h1, h2)</h1>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--green tag--solid tag--no-link">Pass</span><p style={{color: "#FFFFFF"}}>Body (p, a, h3, h4, h5, label)</p>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--green tag--solid tag--no-link">Pass</span><button className="button button--brand-purpleWhite">Button</button><button className="button button--brand-whitePurple">Button</button>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--green tag--solid tag--no-link">Pass</span><i className="dashing-icon dashing-icon--white dashing-icon--checkmark"></i><i className="dashing-icon dashing-icon--white dashing-icon--question-filled"></i><i className="dashing-icon dashing-icon--white dashing-icon--search"></i>
							</div>
						</div>
					</div>
				</div>
				<div className="grid--half">
					<div className="card card--accessibility card--brand-purple">
						<div className="card-content">
							<div className="x-accessibility-group">
								<span className="tag tag--green tag--solid tag--no-link">Pass</span><h1 style={{color: "#000000"}}>Header (h1, h2)</h1>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--red tag--solid tag--no-link">Fail</span><p style={{color: "#000000"}}>Body (p, a, h3, h4, h5, label)</p>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--red tag--solid tag--no-link">Fail</span><button className="button button--brand-purpleBlack">Button</button><button className="button button--brand-blackPurple">Button</button>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--green tag--solid tag--no-link">Pass</span><i className="dashing-icon dashing-icon--black dashing-icon--checkmark"></i><i className="dashing-icon dashing-icon--black dashing-icon--question-filled"></i><i className="dashing-icon dashing-icon--black dashing-icon--search"></i>
							</div>
						</div>
					</div>
				</div>

				<h3 style={{color: "#28336D"}}>Dark Blue #28336D</h3>
				<div className="grid--half">
					<div className="card card--accessibility card--brand-darkBlue">
						<div className="card-content">
							<div className="x-accessibility-group">
								<span className="tag tag--green tag--solid tag--no-link">Pass</span><h1 style={{color: "#FFFFFF"}}>Header (h1, h2)</h1>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--green tag--solid tag--no-link">Pass</span><p style={{color: "#FFFFFF"}}>Body (p, a, h3, h4, h5, label)</p>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--green tag--solid tag--no-link">Pass</span><button className="button button--brand-darkBlueWhite">Button</button><button className="button button--brand-whiteDarkBlue">Button</button>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--green tag--solid tag--no-link">Pass</span><i className="dashing-icon dashing-icon--white dashing-icon--checkmark"></i><i className="dashing-icon dashing-icon--white dashing-icon--question-filled"></i><i className="dashing-icon dashing-icon--white dashing-icon--search"></i>
							</div>
						</div>
					</div>
				</div>
				<div className="grid--half">
					<div className="card card--accessibility card--brand-darkBlue">
						<div className="card-content">
							<div className="x-accessibility-group">
								<span className="tag tag--red tag--solid tag--no-link">Fail</span><h1 style={{color: "#000000"}}>Header (h1, h2)</h1>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--red tag--solid tag--no-link">Fail</span><p style={{color: "#000000"}}>Body (p, a, h3, h4, h5, label)</p>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--red tag--solid tag--no-link">Fail</span><button className="button button--brand-darkBlueBlack">Button</button><button className="button button--brand-blackDarkBlue">Button</button>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--red tag--solid tag--no-link">Fail</span><i className="dashing-icon dashing-icon--black dashing-icon--checkmark"></i><i className="dashing-icon dashing-icon--black dashing-icon--question-filled"></i><i className="dashing-icon dashing-icon--black dashing-icon--search"></i>
							</div>
						</div>
					</div>
				</div>

				<h3 style={{color: "#E96A63"}}>Red #E96A63</h3>
				<div className="grid--half">
					<div className="card card--accessibility card--brand-red">
						<div className="card-content">
							<div className="x-accessibility-group">
								<span className="tag tag--green tag--solid tag--no-link">Pass</span><h1 style={{color: "#FFFFFF"}}>Header (h1, h2)</h1>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--red tag--solid tag--no-link">Fail</span><p style={{color: "#FFFFFF"}}>Body (p, a, h3, h4, h5, label)</p>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--red tag--solid tag--no-link">Fail</span><button className="button button--brand-redWhite">Button</button><button className="button button--brand-whiteRed">Button</button>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--green tag--solid tag--no-link">Pass</span><i className="dashing-icon dashing-icon--white dashing-icon--checkmark"></i><i className="dashing-icon dashing-icon--white dashing-icon--question-filled"></i><i className="dashing-icon dashing-icon--white dashing-icon--search"></i>
							</div>
						</div>
					</div>
				</div>
				<div className="grid--half">
					<div className="card card--accessibility card--brand-red">
						<div className="card-content">
							<div className="x-accessibility-group">
								<span className="tag tag--green tag--solid tag--no-link">Pass</span><h1 style={{color: "#000000"}}>Header (h1, h2)</h1>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--green tag--solid tag--no-link">Pass</span><p style={{color: "#000000"}}>Body (p, a, h3, h4, h5, label)</p>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--green tag--solid tag--no-link">Pass</span><button className="button button--brand-redBlack">Button</button><button className="button button--brand-blackRed">Button</button>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--green tag--solid tag--no-link">Pass</span><i className="dashing-icon dashing-icon--black dashing-icon--checkmark"></i><i className="dashing-icon dashing-icon--black dashing-icon--question-filled"></i><i className="dashing-icon dashing-icon--black dashing-icon--search"></i>
							</div>
						</div>
					</div>
				</div>

				<h3 style={{color: "#F5CD66"}}>Yellow #F5CD66</h3>
				<div className="grid--half">
					<div className="card card--accessibility card--brand-yellow">
						<div className="card-content">
							<div className="x-accessibility-group">
								<span className="tag tag--red tag--solid tag--no-link">Fail</span><h1 style={{color: "#FFFFFF"}}>Header (h1, h2)</h1>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--red tag--solid tag--no-link">Fail</span><p style={{color: "#FFFFFF"}}>Body (p, a, h3, h4, h5, label)</p>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--red tag--solid tag--no-link">Fail</span><button className="button button--brand-yellowWhite">Button</button><button className="button button--brand-whiteYellow">Button</button>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--red tag--solid tag--no-link">Fail</span><i className="dashing-icon dashing-icon--white dashing-icon--checkmark"></i><i className="dashing-icon dashing-icon--white dashing-icon--question-filled"></i><i className="dashing-icon dashing-icon--white dashing-icon--search"></i>
							</div>
						</div>
					</div>
				</div>
				<div className="grid--half">
					<div className="card card--accessibility card--brand-yellow">
						<div className="card-content">
							<div className="x-accessibility-group">
								<span className="tag tag--green tag--solid tag--no-link">Pass</span><h1 style={{color: "#000000"}}>Header (h1, h2)</h1>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--green tag--solid tag--no-link">Pass</span><p style={{color: "#000000"}}>Body (p, a, h3, h4, h5, label)</p>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--green tag--solid tag--no-link">Pass</span><button className="button button--brand-yellowBlack">Button</button><button className="button button--brand-blackYellow">Button</button>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--green tag--solid tag--no-link">Pass</span><i className="dashing-icon dashing-icon--black dashing-icon--checkmark"></i><i className="dashing-icon dashing-icon--black dashing-icon--question-filled"></i><i className="dashing-icon dashing-icon--black dashing-icon--search"></i>
							</div>
						</div>
					</div>
				</div>

				<h3>Gray #F1F2F2</h3>
				<div className="grid--half">
					<div className="card card--accessibility card--brand-gray">
						<div className="card-content">
							<div className="x-accessibility-group">
								<span className="tag tag--red tag--solid tag--no-link">Fail</span><h1 style={{color: "#FFFFFF"}}>Header (h1, h2)</h1>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--red tag--solid tag--no-link">Fail</span><p style={{color: "#FFFFFF"}}>Body (p, a, h3, h4, h5, label)</p>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--red tag--solid tag--no-link">Fail</span><button className="button button--brand-grayWhite">Button</button><button className="button button--brand-whiteGray">Button</button>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--red tag--solid tag--no-link">Fail</span><i className="dashing-icon dashing-icon--white dashing-icon--checkmark"></i><i className="dashing-icon dashing-icon--white dashing-icon--question-filled"></i><i className="dashing-icon dashing-icon--white dashing-icon--search"></i>
							</div>
						</div>
					</div>
				</div>
				<div className="grid--half">
					<div className="card card--accessibility card--brand-gray">
						<div className="card-content">
							<div className="x-accessibility-group">
								<span className="tag tag--green tag--solid tag--no-link">Pass</span><h1 style={{color: "#000000"}}>Header (h1, h2)</h1>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--green tag--solid tag--no-link">Pass</span><p style={{color: "#000000"}}>Body (p, a, h3, h4, h5, label)</p>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--green tag--solid tag--no-link">Pass</span><button className="button button--brand-grayBlack">Button</button><button className="button button--brand-blackGray">Button</button>
							</div>
							<div className="x-accessibility-group">
								<span className="tag tag--green tag--solid tag--no-link">Pass</span><i className="dashing-icon dashing-icon--black dashing-icon--checkmark"></i><i className="dashing-icon dashing-icon--black dashing-icon--question-filled"></i><i className="dashing-icon dashing-icon--black dashing-icon--search"></i>
							</div>
						</div>
					</div>
>>>>>>> updated header and body descriptions
				</div>
			</div>
    </section>
  </div>
)
