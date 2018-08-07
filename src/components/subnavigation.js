import React from 'react'
import { Link } from 'gatsby'

export default () => (
  <div class="subnav-links">
    <Link to="./code"  exact={true} activeClassName="active">Code</Link>
    <Link to="./guidelines"  exact={true} activeClassName="active">Guidelines</Link>
  </div>
)
