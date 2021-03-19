import { bool, node, string } from "prop-types";
import { Display, Icon, Shape, Variants } from "./Variants";
import cn from "classnames";
import { Colors } from "./Colors";
import { NavLink } from "react-router-dom";
import React from "react";

export function Button({
  buttonColor = "primary",
  buttonDisplay,
  buttonIcon,
  buttonShape,
  buttonVariant = "",
  children,
  className = "",
  component = "button",
  hasSpinner = false,
  to,
  isDisabled = false,
  name,
  isLoading = false,
  text = null,
  ...otherProps
}) {
  const classes = cn({
    button: true,
    [`button--${buttonColor}`]: Boolean(buttonColor) && Object.values(Colors).includes(buttonColor),
    [`button--${buttonDisplay}`]: Boolean(buttonDisplay) && Object.values(Display).includes(buttonDisplay),
    [`button--${buttonVariant}`]: Boolean(buttonVariant) && Object.values(Variants).includes(buttonVariant),
    [`button--${buttonShape}`]: Boolean(buttonShape) && Object.values(Shape).includes(buttonShape),
    [`button--${buttonIcon}`]: Boolean(buttonIcon) && Object.values(Icon).includes(buttonIcon),
    [className]: Boolean(className),
    disabled: isDisabled,
    "has-spinner": Boolean(hasSpinner || isLoading),
    [name]: Boolean(name)
  });

  const renderElement = () => {
    if (component === "button--anchor") {
      return (
        <NavLink
          {...otherProps}
          to={to}
          activeClassName="active"
          className={classes}
          disabled={isDisabled}
        >
          {text !== null && text}
          {children}
        </NavLink>
      );
    }
  };
  return renderElement();
}

Button.propTypes = {
  buttonColor: string,
  buttonDisplay: string,
  buttonIcon: string,
  buttonShape: string,
  buttonVariant: string,
  children: node,
  className: string,
  component: string,
  hasSpinner: bool,
  isDisabled: bool,
  name: string,
  text: string,
  to: string
};

export default Button;
