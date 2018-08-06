import React from 'react'
import { Link } from 'gatsby'

const SubNav = ({ siteTitle }) => (
  <div class="subnav-links">
    <Link to="./code"  exact={true} activeClassName="active">Code</Link>
    <Link to="./guidelines"  exact={true} activeClassName="active">Guidelines</Link>
  </div>
)

export default SubNav
