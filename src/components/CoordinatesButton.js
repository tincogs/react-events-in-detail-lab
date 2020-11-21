// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

    handleClick = (e) => {
        let  clickCoordinates = [e.clientX, e.clientY]
        this.props.onReceiveCoordinates(clickCoordinates)
    }

    render() {
        return (
            <div>
               <button onClick={this.handleClick}>
                   Coordinates
               </button>
            </div>
        )
    }
}
