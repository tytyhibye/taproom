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

  handleChangingSelectedBeer = (id) => {
    const selectedBeer = this.state.masterBeerList.filter(beer => beer.id === id)[0];
    this.setState({ selectedBeer: selectedBeer });
  }

  handleAddingNewBeerToList = (newBeer) => {

    const newMasterBeerList = this.state.masterBeerList.concat(newBeer);
    this.setState({
      masterBeerList: newMasterBeerList,
      counter: 0
    });
  }

  handleClick = () => {
    if (this.state.selectedBeer != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedBeer: null,
        editing: false
      });
    } else if (this.state.counter === 0) {
      this.setState(prevState => ({
        counter: prevState.counter + 1
      }));
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
        counter: 0
      }));
    }
  }

  handleEditingBeerInList = (beerToEdit) => {
    const editedMasterBeerList = this.state.masterBeerList
      .filter(beer => beer.id !== this.state.selectedBeer.id)
      .concat(beerToEdit);
    this.setState({
      masterBeerList: editedMasterBeerList,
      editing: false,
      selectedBeer: null
    });
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({ editing: true });
  }

  handleDeletingBeer = (id) => {
    const newMasterBeerList = this.state.masterBeerList.filter(beer => beer.id !== id);
    this.setState({
      masterBeerList: newMasterBeerList,
      selectedBeer: null
    });
  }


}

export default BeerControl;