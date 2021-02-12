import { bool, node, string } from "prop-types";
import { Display, Icon, Shape, Variants } from "./Variants";
import cn from "classnames";
import { Colors } from "./Colors";
import { NavLink } from "react-router-dom";
import React from "react";

export function Button({
  buttonColor,
  buttonDisplay,
  buttonIcon,
  buttonShape,
  buttonVariant,
  children,
  className,
  component,
  disabled,
  hasSpinner,
  isDisabled,
  name,
  isLoading,
  text,
  to,
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
    disabled,
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

Button.defaultProps = {
  buttonColor: "primary",
  buttonDisplay: undefined,
  buttonIcon: undefined,
  buttonShape: undefined,
  buttonVariant: "",
  children: undefined,
  className: "",
  component: "button",
  hasSpinner: false,
  isDisabled: false,
  name: undefined,
  text: null,
  to: undefined
};

export default Button;
