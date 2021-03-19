import PropTypes from "prop-types";
import React from "react";

export const ButtonGroup = ({
  children,
  buttonColor = "primary",
  isBorder = false,
  isVertical = false
}) => (
  <ul
    className={`button-group
      button--${buttonColor}
      ${isBorder ? "button--border" : ""}
      ${isVertical ? "button-group--vertical" : ""}`
    }
  >
    {children}
  </ul>
);

export const ButtonGroupItem = ({
  children,
  name,
  id,
  isChecked = false
}) => (
  <li className="button--radio">
    <input type="radio" name={name} id={id} defaultChecked={isChecked} />
    <label htmlFor={id} className="button">{children}</label>
  </li>
);

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
  buttonColor: PropTypes.string,
  isBorder: PropTypes.bool,
  isVertical: PropTypes.bool
};

ButtonGroupItem.propTypes = {
  children: PropTypes.node.isRequired,
  isChecked: PropTypes.bool,
  name: PropTypes.string,
  id: PropTypes.string
};

export default ButtonGroup;
