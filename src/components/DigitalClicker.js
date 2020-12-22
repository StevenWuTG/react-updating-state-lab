// Code DigitalClicker Component Here
import React, { Component } from 'react'

export class DigitalClicker extends Component {

    constructor(){
        super()
        this.state={
            timesClicked: 0
        }
    }

    handleClick = () => {
        this.setState(prevState => ({
            timesClicked: prevState.timesClicked + 1
        }))
        // console.log(this.state.timesClicked)
    }

    render() {
        return (
            <div>
                <h1>digital clicker</h1>
                <button onClick={this.handleClick}>{this.state.timesClicked}</button>
            </div>
        )
    }
}

export default DigitalClicker
