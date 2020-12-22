import { bool, node, string } from "prop-types";
import { Display, Icon, Shape, Variants } from "./Variants";
import cn from "classnames";
import { Colors } from "./Colors";
// import { Link } from "gatsby";//For Gatsby
// import { NavLink } from "react-router-dom"; For React App
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
  href,
  isDisabled,
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
    if (component === "button") {
      return (
        <button
          {...otherProps}
          className={classes}
          disabled={isDisabled}
          name={name}
          type="button"
        >
          {text !== null && text}
          {children}
        </button>
      );
    }

    if (component === "anchor") {
      return (
        <a
          {...otherProps}
          href={href}
          className={classes}
          disabled={isDisabled}
          target="_blank"
          rel="noopener noreferrer"
        >
          {text !== null && text}
          {children}
        </a>
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
  href: string,
  isDisabled: bool,
  isIcon: bool,
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
  href: undefined,
  isDisabled: false,
  isIcon: false,
  text: null,
  to: undefined
};

export default Button;
