import cn from "classnames";
import PropTypes from "prop-types";
import React from "react";

import "../../paragon.scss";

export const Accordion = ({ children, className, isOpen }) => (
  <div
    className={cn({
      accordion: true,
      [className]: !!className,
      expanded: isOpen
    })}>
    {children}
  </div>
);

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool
};
