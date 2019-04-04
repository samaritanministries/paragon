import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    return (
      <div className="dash-overlay">
        <div className={`dash-modal ${this.props.sizeClass}`}>
          <button onClick={this.props.onClose} className="button button--icon button--icon--small button--transparent modal-close">
            <i className="dashing-icon dashing-icon--close"></i>
          </button>
          {this.props.children}
        </div>
      </div>
    );
  }
}

Modal.defaultProps = {
  sizeClass: ""
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node,
  sizeClass: PropTypes.string
};

export default Modal;
