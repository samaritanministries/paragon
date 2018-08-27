import React from 'react'
import { Link } from 'gatsby'

const SubNav = ({ pageName, sectionName }) => {

  if (sectionName == null) {
    sectionName = "components"
  }

  const getPageName = pageName;
  const getSectionName = sectionName;

  return (
    <div className="subnav-links">
        <Link to={ getSectionName + "/" + getPageName  + "/code"} activeClassName="active">Code</Link>
        <Link to={ getSectionName + "/" + getPageName  + "/guidelines"} activeClassName="active">Guidelines</Link>
    </div>
  );
};

export default SubNav
