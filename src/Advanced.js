import React, { Component } from 'react'


function advanced(Comp){
    return class Advanced extends Component {
        render() {
            return (
                <div>
                    <Comp {...this.props}/>
                    hello 大家好
                </div>
            )
        }
    }
}

export default advanced

