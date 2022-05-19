import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {count: 0};
    }
    updateState = () =>{
        this.setState({count: this.state.count+1});
    }
  render() {
    return (
        <>
            <p>The Count value is {this.state.count}</p>
            <input type="button" value="Click" onClick={this.updateState}/>
        </>
    )
  }
}
