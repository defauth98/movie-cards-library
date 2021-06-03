import React from 'react';
import PropTypes from 'prop-types';

import './styles.css'; 

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div>
        <div className="rating">
          { rating }
        </div>
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
