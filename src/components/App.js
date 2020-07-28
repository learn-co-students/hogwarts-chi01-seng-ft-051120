import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from "./HogContainer";
import hogsData from '../porkers_data';
import Filter from './Filter'

class App extends Component {

  constructor() {
    super()
    this.state = {
      hogs: hogsData,
      showGreased: false,
      filterType: 'all'
    }
  }

toggleGreased = () => {
  this.setState({
    showGreased: !this.state.showGreased
  })
}

handleChangeFilter = (event) => {
  this.setState({
    filterType: event.target.value
  })
}

findHogs = () => {
  let hogs = this.state.hogs
  if (this.state.showGreased) {
    hogs = hogs.filter(hogObj => hogObj.greased)
  }

  if (this.state.filterType === 'name') {
    hogs = hogs.sort(function(a, b) {
      const hogA = a.name.toUpperCase();
      const hogB = b.name.toUpperCase();
      if (hogA < hogB) {
        return -1;
      }
      if (hogA > hogB) {
        return 1;
      }
      return 0;
    })
  } else if (this.state.filterType === 'weight') {
      hogs = hogs.sort(function (hogA, hogB) {
        return hogB.weight - hogA.weight;
      })
    }
  return hogs
}

  render() {
    console.log(this.state)
    const hogsToShow = this.findHogs()
    return (
      <div className="App">
        <Nav />
        <Filter
          handleChangeFilter={this.handleChangeFilter}
          toggleGreased={this.toggleGreased}/>
        <HogContainer hogs={hogsToShow} />
      </div>
    );
  }
}

export default App;
