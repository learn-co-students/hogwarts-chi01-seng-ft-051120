import React, { Component } from 'react';

class HogCard extends Component {

constructor() {
  super()
  this.state = {
    showDetails: false 
  }
}

renderImage = () => {
  const {name} = this.props
  const imageName = name.toLowerCase().split(" ").join('_')
  const imageUrl = require(`../hog-imgs/${imageName}.jpg`)
  return <img src={imageUrl} />
}

renderDetails = () => {
  const {name, weight, specialty} = this.props
  const highestMedal = this.props['highest medal achieved']
  return <div>
    <p>weight: {weight}</p>
    <p>specialty: {specialty}</p>
    <p>highest medal: {highestMedal}</p>
  </div>
}

handleClick = () => {
  this.setState({
    showDetails: !this.state.showDetails
  })
}




  render() {
    const { name } = this.props
    return (
      <div className="ui eight wide column pigTile">
        <h4>{name}</h4>
        {this.renderImage()}
        <button onClick={this.handleClick}>Show Details</button>
        {this.state.showDetails ? this.renderDetails() : null}

      </div>
    );
  }
}

export default HogCard;
