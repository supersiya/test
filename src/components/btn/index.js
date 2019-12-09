import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
class Button extends Component {
    handleClick(){
        this.props.history.push("/home")
    }
    render() {
        console.log(this.props)
        return <button onClick={this.handleClick.bind(this)}>点我调回home页面</button>
    }
}
export default withRouter(Button)