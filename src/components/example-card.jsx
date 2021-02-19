import React from "react";
import PropTypes from "prop-types";

const ExampleCard = ({ children, isWhite }) => (
  <div className={`card ${isWhite && "card--example-white"}`}>
    <div className="card-content">
      {children}
    </div>
  </div>
);

export default ExampleCard;

ExampleCard.propTypes = {
  isWhite: PropTypes.bool
};

ExampleCard.defaultProps = {
  isWhite: false
};
