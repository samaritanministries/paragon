import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

const SubNav = ({ pageName, sectionName, hasReact }) => {

  let getPageName = pageName;
  let getSectionName = sectionName;

  sectionName === null ? getSectionName = "components" : sectionName;
  getPageName = pageName.replace(/\s+/g, "-");

  return (
    <div className="subnav-links">
      <Link partiallyActive={true} activeClassName="active" to={`/${getSectionName}/${getPageName}/code`}>Html</Link>
      {hasReact && <Link partiallyActive={true} activeClassName="active" to={`/${getSectionName}/${getPageName}/component`}>React</Link>}
      <Link partiallyActive={true} activeClassName="active" to={`/${getSectionName}/${getPageName}/guidelines`}>Guidelines</Link>
    </div>
  );
};

SubNav.propTypes = {
  pageName: PropTypes.string,
  sectionName: PropTypes.string,
  hasReact: PropTypes.bool
};

SubNav.defaultProps = {
  pageName: "/",
  sectionName: null,
  hasReact: false
};

export default SubNav;
