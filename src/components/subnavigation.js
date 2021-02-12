import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

const SubNav = ({ pageName, sectionName }) => {

  let getPageName = pageName;
  let getSectionName = sectionName;

  sectionName === null ? getSectionName = "components" : sectionName;
  getPageName = pageName.replace(/\s+/g, "-");

  const isPartiallyActive = ({ isPartiallyCurrent }) => {
    return isPartiallyCurrent ?
      { className: "active" } :
      { className: "" };
  };

  const PartialNavLink = (props) => (
    <Link getProps={isPartiallyActive} {...props}>
      {props.children}
    </Link>
  );

  return (
    <div className="subnav-links">
      <PartialNavLink to={`/${getSectionName}/${getPageName}/code`}>Html</PartialNavLink>
      <PartialNavLink to={`/${getSectionName}/${getPageName}/component`}>React</PartialNavLink>
      <PartialNavLink to={`/${getSectionName}/${getPageName}/guidelines`}>Guidelines</PartialNavLink>
    </div>
  );
};

SubNav.propTypes = {
  pageName: PropTypes.string,
  sectionName: PropTypes.string
};

SubNav.defaultProps = {
  pageName: "/",
  sectionName: null
};

export default SubNav;
