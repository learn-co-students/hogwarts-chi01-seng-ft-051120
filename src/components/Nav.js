import piggy from "../porco.png";
import React from "react";
import Filterer from "./Filterer"

const Nav = (props) => {
  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
      <hr></hr>
      <Filterer filterGreased={props.filterGreased} sortByName={props.sortByName} sortByWeight={props.sortByWeight}/>
    </div>
  );
};

export default Nav;
