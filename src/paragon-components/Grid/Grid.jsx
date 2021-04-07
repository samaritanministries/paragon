/* eslint-disable no-implicit-coercion */
/* eslint-disable react/button-has-type */
import React from "react";
import { bool, string, node } from "prop-types";
import cn from "classnames";

export function Grid({
  children,
  className,
  gridType,
  hasPadding = false,
  isContainer = false,
  size,
  ...otherProps
}) {
  const classes = cn({
    grid: isContainer,
    ["grid-padding"]: hasPadding,
    [`grid--${size}`]: size,
    ["grid-type"]: gridType,
    [className]: Boolean(className)
  });

  const renderElement = () => {
    return (
      <div
        {...otherProps}
        className={classes}
      >
        {children}
      </div>
    );
  };
  return renderElement();
}

Grid.propTypes = {
  children: node.isRequired,
  gridType: string,
  hasPadding: bool,
  isContainer: bool,
  size: string
};

export default Grid;
