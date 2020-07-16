import React, { Component } from "react";

class Tile extends Component {
  parseUrl() {
    const lowerCaseName = this.props.name.toLowerCase();
    const parsedName = lowerCaseName.split(" ");

    return parsedName;
  }

  renderSingleTile() {
    let pigImage = require(`../hog-imgs/${this.parseUrl().join("_")}.jpg`);

    return (
      <div>
        <p>{this.props.name}</p>
        <img src={pigImage} onClick={this.handleClick} />
        <div style={{ display: "none" }}>
          <p>Greased: {this.props.greased ? "Greased!" : "Not Greased"}</p>
          <p>Highest Medal Achived: {this.props.highestMedalAchieved}</p>
          <p>Weight: {this.props.weight}</p>
          <p>Specialty: {this.props.specialty}</p>
          <button onClick={this.hideContainer}>Hide Hog!</button>
        </div>
      </div>
    );
  }

  handleClick(e) {
    const hogInfoContainer = e.target.nextElementSibling;
    hogInfoContainer.style.display = "inline";
  }

  hideContainer(e) {
    e.target.parentElement.parentElement.style.display = "none";
  }

  render() {
    return <div>{this.renderSingleTile()}</div>;
  }
}

export default Tile;
