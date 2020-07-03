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

  render() {
    let currentlyVisibleState = null;
    // let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditForm entry={this.state.selectedEntry} onEditEntry={this.handleEditingEntryInList} />
      // buttonText = "Return to Entry List";
    }
    else if (this.state.selectedEntry != null) {
      currentlyVisibleState =
        <Details
          entry={this.state.selectedEntry}
          onClickingDelete={this.handleDeletingEntry}
          onClickingEdit={this.handleEditClick}
        />
      // buttonText = "Return to Entry List";
    } else if (this.state.counter === 0) {
      currentlyVisibleState =
        <BeerList
          entryList={this.state.masterEntryList}
          onEntrySelection={this.handleChangingSelectedEntry}
        />
      // buttonText = "Add Entry!";
    } else if (this.state.counter === 1) {
      currentlyVisibleState =
        <NewForm
          onNewEntryCreation={this.handleAddingNewEntryToList}
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