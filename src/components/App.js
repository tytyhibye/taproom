import React from 'react';
import Header from "./Header";
import BeerControl from "./BeerControl";
import List from "./BeerList";
import { Grid } from "@material-ui/core";
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Grid item><Header/></Grid>
      <Grid container direction="column">
        <Grid item xs={0} sm={2}/>
        <Grid item xs={12} sm={5}>
          <BeerControl/>
        </Grid>
        <Grid item xs={12} sm={5}>
          <List/>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default App;
