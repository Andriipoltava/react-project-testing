import React, { Component } from 'react'

export default class ClassCounter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            conter: 1
        }
        this.Inc=this.Inc.bind(this)
        this.Dec=this.Dec.bind(this)
    }


    Inc() {
        this.setState({ conter: this.state.conter + 1 })
    }
    Dec() {
        this.setState({ conter: this.state.conter - 1 })
    }

    render() {
        return (
            <div>
                <h2>{this.state.conter}</h2>
                <button onClick={this.Inc}>+1</button>
                <button onClick={this.Dec}>-1</button>
            </div>
        )
    }
}
