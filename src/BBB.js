import React, { Component } from 'react'
import Button from "./components/btn"
export default class BBB extends Component {
    
    render() {
        return (
            <div>
                <div>
                    BBBBBBBBBBB | {this.props.match.params.id}
                    <Button />
                </div>
            </div>
        )
    }
}
