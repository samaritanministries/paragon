import cn from "classnames";
import PropTypes from "prop-types";
import React from "react";

export function Toast({ className, message, isError, isSuccess, isWarning }) {
  return (
    <div
      className={cn("toast-message", {
        [className]: !!className,
        error: isError,
        success: isSuccess
      })}
      data-id="toast-message"
    >
      <i className="toast-message--icon"></i>
      <p>{message}</p>
    </div>
  );
}

Toast.propTypes = {
  className: PropTypes.string,
  isError: PropTypes.bool,
  isSuccess: PropTypes.bool,
  message: PropTypes.string
};

Toast.defaultProps = {
  className: undefined,
  isError: false,
  isSuccess: false,
  message: undefined
};

export default Toast;
