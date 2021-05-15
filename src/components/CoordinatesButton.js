// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

    handleClicker= (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }
    
    render() {
        return (
            <div>
            <button onClick={this.handleClicker}>coordinates</button>
            </div>
        )
    }
}
