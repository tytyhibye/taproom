import React from "react";
import PropTypes from "prop-types";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function Beer(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div onClick={() => props.whenBeerClicked(props.id)}>
      <Typography className={classes.heading}>{props.name}</Typography>
      </div>
    </React.Fragment>
  );
}

Beer.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenBeerClicked: PropTypes.func
};


export default Beer;