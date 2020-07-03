import React from "react";
import PropTypes from "prop-types";

function Beer(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenBeerClicked(props.id)}>
        <h3>Name: {props.name}</h3>
        <hr />
      </div>
    </React.Fragment>
  );
}

Beer.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string,
  price: PropTypes.number,
  abv: PropTypes.number,
  description: PropTypes.string,
  id: PropTypes.string,
  whenBeerClicked: PropTypes.func
};


export default Beer;