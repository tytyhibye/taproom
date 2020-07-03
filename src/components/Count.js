import React from "react";
import PropTypes from "prop-types";

function Count(props) {

  const { beer, onClickingDecrement } = props;
  return (
    <React.Fragment>
      <button className="btn" onClick={()=> onClickingDecrement(beer.count)}>Sell Pint</button>
      <p>Pints Left: {beer.count}</p>
    </React.Fragment>
  );
}

Count.propTypes = {
  beer: PropTypes.object,
  onClickingDecrement: PropTypes.func
};

export default Count;