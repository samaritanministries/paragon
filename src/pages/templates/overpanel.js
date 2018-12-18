import React from 'react'
import { Link } from 'gatsby'
import '../../sass/example-page/example-page.scss'

export default () => (

	<div className="overpanel">
		<header className="title-bar">
			<div className="title-content">
				<div>
					<h2>Overpanel Title</h2>
					<p>Overpanel description</p>
				</div>
				<Link to={"/templates/default"}>
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
