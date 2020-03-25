import PropTypes from "prop-types";
import React from "react";

export const Header = ({ secondaryTitle, title }) => (
  <div className="accordion-header" tabIndex="0">
    <i className="dashing-icon accordion-arrow" />
    <h3 className="title">{title}</h3>
    <h3 className="secondary-title">{secondaryTitle}</h3>
  </div>
);

Header.propTypes = {
  secondaryTitle: PropTypes.string,
  title: PropTypes.string.isRequired
};
