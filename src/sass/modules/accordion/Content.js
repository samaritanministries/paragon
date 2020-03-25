import PropTypes from "prop-types";
import React from "react";

export const Content = ({ children }) => (
  <div className="accordion-content">
    {children}
  </div>
);

Content.propTypes = {
  children: PropTypes.node.isRequired
};
