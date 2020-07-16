import React, { Component } from "react";

class Filters extends Component {
  handleClick() {}

  render() {
    return (
      <div>
        <button
          onClick={() =>
            this.props.changeFilter(
              this.props.currentFilter === "all" ? "greased" : "all"
            )
          }
        >
          Filter Greased Dogs
        </button>
        <button onClick={() => this.props.changeSort("name")}>
          Sort by Name
        </button>
        <button onClick={() => this.props.changeSort("weight")}>
          Sort by Weight
        </button>
      </div>
    );
  }
}

export default Filters;
