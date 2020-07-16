import React, {Component} from 'react'

class HogTile extends Component {
    constructor(props) {
        super();
        this.state = {
            cardSide: "front"
        }
    }

    changeSides = () => {
        let newCardSide = this.state.cardSide === "front" ? "back" : "front" 
        this.setState({
        cardSide: newCardSide})
    }

    
    render() { 
        let pigImage = require("../hog-imgs/" + this.props.hogData.name.replace(/\s/g, "_").toLowerCase() + ".jpg")
        return(
            <div className="hog-tile ui eight wide column card"> 
            <div onMouseDown={this.changeSides} onMouseUp={this.changeSides}>
                {this.state.cardSide === "front" 
                ?<div className="card-front" >
                    <h1>Name: {this.props.hogData.name}</h1>
                <img src={pigImage} alt={this.props.hogData.name}/>
                </div>
                :<div className="card-back">
                    <h2>Weight: {this.props.hogData.weight}</h2>
                    <h2>Specialty: {this.props.hogData.specialty}</h2>
                    <h2>Greased: {this.props.hogData.greased + ""}</h2>
                    <h2>Highest Medal: {this.props.hogData['highest medal achieved']}</h2></div>}
            </div>
            <button className="ui button" onClick={() => {this.props.hideHog(this.props.hogData)}}>Hide This Pig</button>
            </div>
        )
    }
}

export default HogTile
