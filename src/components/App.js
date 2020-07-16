import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import HogTiles from "./HogTiles"

class App extends Component {
  state = {
    hogs: hogs
  }

  filterGreased = (verdict) => {
    if (verdict) {
      let greasedHogs = this.state.hogs.filter(hog => hog.greased === true)
    this.setState({
      hogs: greasedHogs
    })} else {
      this.setState({
        hogs: hogs
      })
    }
  }

  sortByName = () => {
    let sortedHogs = this.state.hogs.sort(function (a, b){
      let nameA = a.name.toUpperCase();
      let nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      } 
      if (nameA > nameB) {
        return 1;
      }
      return 0
    });
    this.setState({
      hogs: sortedHogs
    })
  }

  sortByWeight = () => {
    let sortedHogs = this.state.hogs.sort(function (a, b){
      return a.weight - b.weight
    })
    this.setState({
      hogs: sortedHogs
    })
  }

  hideHog = hogObj => {
  let newHogsArray = this.state.hogs.filter(hog => hog !== hogObj )
  this.setState({
    hogs: newHogsArray
  })
}

  render() {
    console.log(this.state.hogs)
    return (
      <div className="App">
        <Nav filterGreased={this.filterGreased} sortByName={this.sortByName} sortByWeight={this.sortByWeight}/>
        <HogTiles hogs={this.state.hogs} hideHog={this.hideHog}/>
      </div>
    );
  }
}

export default App;
