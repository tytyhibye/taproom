import React from "react";
import NewForm from "./NewForm";
import BeerList from "./BeerList";
import Details from "./Details";
import EditForm from './EditForm';
import Count from './Count';

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

  decreaseCount = () => {
    this.setState({ count: this.state.count -1 });
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

  render() {
    let currentlyVisibleState = null;
    // let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditForm beer={this.state.selectedBeer} onEditBeer={this.handleEditingBeerInList} />
      // buttonText = "Return to Beer List";
    }
    else if (this.state.selectedBeer != null) {
      currentlyVisibleState =
        <Details
          beer={this.state.selectedBeer}
          onClickingDelete={this.handleDeletingBeer}
          onClickingEdit={this.handleEditClick}
        />
      // buttonText = "Return to Beer List";
    } else if (this.state.counter === 0) {
      currentlyVisibleState =
        <BeerList
          beerList={this.state.masterBeerList}
          onBeerSelection={this.handleChangingSelectedBeer}
          onClickingDecrement={this.decreaseCount}
        />
      // buttonText = "Add Beer!";
    } else if (this.state.counter === 1) {
      currentlyVisibleState =
        <NewForm
          onNewBeerCreation={this.handleAddingNewBeerToList}
        />
      // buttonText = "Return to List";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        {/* <button onClick={this.handleClick}>{buttonText}</button> */}
      </React.Fragment>
    );
  }    

}

export default BeerControl;