import React from 'react';
import Header from "./Header";
import BeerControl from "./BeerControl";
import List from "./BeerList";
import { Grid } from "@material-ui/core";
import '../App.css';

function App() {
  return (
    <React.Fragment>
      <div class="bg-image">
        <Grid item><Header/></Grid>
        <Grid container direction="column">
          <Grid item xs={12} sm={6}>
            <BeerControl/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <List/>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}

export default App;
