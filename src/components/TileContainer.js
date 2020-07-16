import React from "react";
import Tile from "./Tile";

class TileContainer extends React.Component {
  renderTiles() {
    return this.props.hogs.map((hog, idx) => {
      return (
        <Tile
          key={idx}
          name={hog.name}
          greased={hog.greased}
          highestMedalAchieved={hog.highestMedalAchieved}
          weight={hog.weight}
          specialty={hog.specialty}
        />
      );
    });
  }

  render() {
    return <div>{this.renderTiles()}</div>;
  }
}

export default TileContainer;
