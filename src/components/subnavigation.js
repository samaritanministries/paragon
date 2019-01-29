import React from 'react'
import { Link } from 'gatsby'

const SubNav = ({ pageName, sectionName }) => {

  if (sectionName == null) {
    sectionName = "components"
  }
  //For Component Names with a space
  if (pageName === "css grid") {
    pageName = "css-grid"
  } else if (pageName === "progress stepper") {
    pageName = "progress-stepper"
  } else if (pageName === "radio buttons") {
    pageName = "radio-buttons"
  }

  const getPageName = pageName;
  const getSectionName = sectionName;

  const isPartiallyActive = ({ isPartiallyCurrent }) => {
  return isPartiallyCurrent
    ? { className: 'active' }
    : { className: '' }
  }

  const PartialNavLink = props => (
    <Link getProps={isPartiallyActive} {...props}>
      {props.children}
    </Link>
  )

  return (
    <div className="subnav-links">
        <PartialNavLink to={ getSectionName + "/" + getPageName  + "/code"}>Code</PartialNavLink>
        <PartialNavLink to={ getSectionName + "/" + getPageName  + "/guidelines"}>Guidelines</PartialNavLink>
    </div>
  );
};

export default SubNav
