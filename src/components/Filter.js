import React, { Component } from 'react';

class Filter extends Component {

  render() {
    return (
      <div className='filterWrapper'>
        <label>
          Show Greased:
        <input
          type='checkbox'
          onChange={this.props.toggleGreased} />
          </label>
      Sort by:
      <select onChange={this.props.handleChangeFilter}>
        <option>all</option>
        <option>name</option>
        <option>weight</option>
      </select>
      </div>
    )
  }
}

export default Filter;
