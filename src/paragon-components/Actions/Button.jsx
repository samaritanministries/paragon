import { bool, node, string } from "prop-types";
import { Display, Icon, Shape, Variants } from "./Variants";
import cn from "classnames";
import { Colors } from "./Colors";
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
  href,
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
  if (component === "button") {
    return (
      <button {...otherProps} className={classes} disabled={isDisabled} name={name} type="button">
        {text}
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
        {text}
        {children}
      </a>
    );
  }
  return (
    <button {...otherProps} className={classes} disabled={isDisabled} name={name} type="button">
      {text}
      {children}
    </button>
  );
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
  name: string,
  text: string,
  to: string,
  isLoading: bool
};

export default Button;
