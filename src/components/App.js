import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import TileContainer from "./TileContainer";
import Filters from "./Filters";

class App extends Component {
  constructor() {
    super();
    this.state = {
      hogs: hogs,
      filter: "all",
      sort: "name",
    };

    this.changeFilter = this.changeFilter.bind(this);
    this.changeSort = this.changeSort.bind(this);
  }

  // FILTERS

  filterGreaseHogs(hogs) {
    return hogs.filter((hog) => hog.greased === true);
  }

  sortHogsByName(hogs) {
    return hogs.sort((a, b) => (a.name > b.name ? 1 : -1));
  }

  sortHogsByWeight(hogs) {
    return hogs.sort((a, b) => (a.weight > b.weight ? 1 : -1));
  }

  // FILTER/ORDER FUNCTIONS

  findHogs() {
    let hogs = this.state.hogs;

    if (this.state.filter === "all") {
      hogs = this.state.hogs;
    }

    if (this.state.filter === "greased") {
      hogs = this.filterGreaseHogs(hogs);
    }

    if (this.state.sort == "name") {
      hogs = this.sortHogsByName(hogs);
    }

    if (this.state.sort == "weight") {
      hogs = this.sortHogsByWeight(hogs);
    }

    return hogs;
  }

  // CHANGE STATE FUNCTIONS
  changeFilter(newFilter) {
    this.setState({
      filter: newFilter,
    });
  }

  changeSort(newOrder) {
    this.setState({
      sort: newOrder,
    });
  }

  render() {
    const filteredHogs = this.findHogs();
    return (
      <div className="App">
        <Nav />
        <Filters
          changeFilter={this.changeFilter}
          changeSort={this.changeSort}
          currentFilter={this.state.filter}
        />
        <TileContainer hogs={filteredHogs} />
      </div>
    );
  }
}

export default App;
