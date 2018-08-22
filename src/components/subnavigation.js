import React from 'react'
import { Link } from 'gatsby'

const SubNav = ({ pageName }) => {
  const isHomepage = pageName;

  return (
    <div className="subnav-links">
        <Link to={"components/" + isHomepage  + "/code"} activeClassName="active">Code</Link>
        <Link to={"components/" + isHomepage  + "/guidelines"} activeClassName="active">Guidelines</Link>
    </div>
  );
};

export default SubNav
