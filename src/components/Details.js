import React from "react";
import PropTypes from "prop-types";

function BeerDetail(props) {
  const { beer, onClickingDelete } = props;
  return (
    <React.Fragment>
      <h1>Beer Details</h1>
      <p>Name: {beer.name}</p>
      <p>Brewery: {beer.brand}</p>
      <p>Price: {beer.price}</p>
      <p>ABV%: {beer.abv}</p>
      <p>Flavor Profile: {beer.description}</p>
      <button className="btn" onClick={props.onClickingEdit}>Edit Details</button>
      <button className="btn" onClick={() => onClickingDelete(beer.id)}>Delete Beer</button>
      <hr />
    </React.Fragment>
  ); 
}

BeerDetail.propTypes = {
  beer: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default BeerDetail;