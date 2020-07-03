import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Beer from './Beer';
import PropTypes from "prop-types";
import Details from './Details';

const  useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function BeerList(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {props.beerList.map((beer) =>
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
          <Typography className={classes.heading}>{beer.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <button onClick={props.onClickingDecrement(beer.count)}>Sold Pint</button>
          <p>Pints Left: {beer.count}</p>
        </AccordionDetails>
      </Accordion>
      )}
    </div>
  );
}

BeerList.propTypes = {
  beerList: PropTypes.array,
  onBeerSelection: PropTypes.func,
  onClickingDecrement: PropTypes.func
};

export default BeerList;