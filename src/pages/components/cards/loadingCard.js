import React from 'react'
import PropTypes from 'prop-types'

export default class LoadingCard extends React.Component {

  render() {
    const LoadingCard = this.LoadingCard.bind(this);

    return (
      <LoadingCard />
    );
  }

  LoadingCard() {
    const CardHeader = this.CardHeader.bind(this);
    const CardContent = this.CardContent.bind(this);
    const CardFooter = this.CardFooter.bind(this);

    return (
      <div className="card is-loading">
        <CardHeader />
        <CardContent />
        <CardFooter />
      </div>
    );
  }

  CardHeader() {
    const { hasBorder } = this.props;

    if (hasBorder) {
      return (
        <div className="card-header has-border">
          <h3></h3>
        </div>
      );
    } else {
      return (
        <div className="card-header">
          <h3></h3>
        </div>
      );
    }
  }

  CardContent() {
    const { numberOfLines } = this.props;

    return (
      <div className="card-content">
      {
        Array.from({ length: numberOfLines }, (_, k) => (
          <p key={k}></p>
        ))
      }
    </div>
    );
  }

  CardFooter() {
    const { hasFooter } = this.props;
    if (hasFooter) {
      return (
        <div className="card-footer">
          <p></p>
        </div>
      );
    } else {
      return (null);
    }
  }
}

LoadingCard.defaultProps = {
  hasBorder: false,
  hasFooter: false,
  numberOfLines: 1
};

LoadingCard.propTypes = {
  hasBorder: PropTypes.bool,
  hasFooter: PropTypes.bool,
  numberOfLines: PropTypes.number
};
