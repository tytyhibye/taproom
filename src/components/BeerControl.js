import React from "react";
import NewForm from "./NewForm";
import BeerList from "./BeerList";
import Details from "./Details";
import EditForm from './EditForm';

class BeerControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterBeerList: [],
      count: 124,
      selectedBeer: null,
      editing: false
    };
  }
}