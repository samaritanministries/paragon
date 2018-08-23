import React from 'react'
import { Link } from 'gatsby'

const SubNav = ({ pageName }) => {
  const getPageName = pageName;

  return (
    <div className="subnav-links">
        <Link to={"components/" + getPageName  + "/code"} activeClassName="active">Code</Link>
        <Link to={"components/" + getPageName  + "/guidelines"} activeClassName="active">Guidelines</Link>
    </div>
  );
};

export default SubNav
