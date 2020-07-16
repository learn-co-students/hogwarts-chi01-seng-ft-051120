import React, {Component} from "react"

class Filterer extends Component {
    state = {
        filterOn: false
    }

    initiateFilter = () => {
        let filterStatus = this.state.filterOn ? false : true
        this.setState({
            filterOn: filterStatus
        })
        this.props.filterGreased(filterStatus)
    }

    render() {
        return (
            <div className="filters">
        <button onClick={this.initiateFilter}>{this.state.filterOn === false ? "Filter out ungreased pigs" : "Show all pigs"}</button>
        <button onClick={this.props.sortByName}>Sort by name</button>
        <button onClick={this.props.sortByWeight}>Sort by weight</button>
        </div>)
    }
}

export default Filterer 