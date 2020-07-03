import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Beer from './Beer';
import Count from './Count';
import PropTypes from "prop-types";



function BeerList(props) {
  console.log("beer list", props.beerList);
  return (
    <React.Fragment>
      <h3>Current Beer List</h3>
      {props.beerList.length > 0 ? props.beerList.map(beer => (
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          >
          <Beer
            whenBeerClicked={props.onBeerSelection}
            name={beer.name}
            brand={beer.brand}
            price={beer.price}
            abv={beer.abv}
            description={beer.description}
            count={beer.count}
            id={beer.id}
            key={beer.id}
            />
        </AccordionSummary>
        <AccordionDetails>
          <Count/>
        </AccordionDetails>
      </Accordion>
      )
      ) : <h2>No beers available</h2>}
    </React.Fragment>
  );
}

BeerList.propTypes = {
  beerList: PropTypes.array,
  onBeerSelection: PropTypes.func,
};

export default BeerList;