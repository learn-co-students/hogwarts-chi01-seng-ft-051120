import React, { Component } from "react";
import HogTile from "./HogTile"

class HogTiles extends Component {
    generateHogTiles = hogs => {
        return hogs.map((hog, index) => {
        return <HogTile key={index} hogData={hog} hideHog={this.props.hideHog}/>
    })
}
  
  
    render() {

    return (
      <div className="Hog-Tiles ui grid container">
        {this.generateHogTiles(this.props.hogs)}
      </div>
    );
  }
}

export default HogTiles;