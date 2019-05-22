import React from 'react'
import { Link } from 'gatsby'
// The scss needs to be imported here for running 'gatsby build'
import '../../sass/example-page/example-page.scss'

export default () => (

	<div className="overpanel slide-up">
		<header className="title-bar">
			<div className="title-content">
				<div>
					<h2 className="title">Overpanel Title</h2>
					<p>Overpanel description</p>
				</div>
				<Link to={"/components/overpanel/code"}>
					<button className="button button--secondary"><i className="dashing-icon dashing-icon--close"></i> Close</button>
				</Link>
			</div>
		</header>

    <section className="content">
			<div className="grid grid-padding">
	      <h2>Example Fullscreen Page</h2>
	      <p>This example shows a fullscreen layout. Simple! This example shows a fullscreen layout. Simple! This example shows a fullscreen layout. Simple! This example shows a fullscreen layout. Simple! This example shows a fullscreen layout. Simple! This example shows a fullscreen layout. Simple!</p>
			</div>
    </section>
  </div>
)
