import React from 'react'
import '../../sass/example-page/example-page.scss'

export default () => (

	<div className="overpanel">
		<header className="title-bar">
			<div className="title-content">
				<div>
					<h2>Overpanel Title</h2>
					<p>Overpanel description</p>
				</div>
				<button className="button button--secondary">Close</button>
			</div>
		</header>

    <section className="app">
			<div className="content">
				<div className="grid grid-padding">
		      <h1>Example Fullscreen Page</h1>
		      <p>This example shows a fullscreen layout. Simple! This example shows a fullscreen layout. Simple! This example shows a fullscreen layout. Simple! This example shows a fullscreen layout. Simple! This example shows a fullscreen layout. Simple! This example shows a fullscreen layout. Simple!</p>
				</div>
			</div>
    </section>
  </div>
)
