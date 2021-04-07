import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

const ExampleHeader = ({ text, url }) => (
  <h2 id={`${text.replace(/\s+/g, "-").toLowerCase()}`}>{text}
    <Link
      to={`${url.replace(/\/$/, "")}/#${text.replace(/\s+/g, "-").toLowerCase()}`}
      className="button button--transparent button--copy-link"
    />
  </h2>
);

ExampleHeader.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string
};

ExampleHeader.defaultProps = {
  text: undefined,
  url: undefined
};

export default ExampleHeader;
