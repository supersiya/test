import React,{Component} from "react"
import advanced from "./Advanced"
class Text extends Component{
    render(){
        console.log(this.props.name)
        return (
            <div>TEXT!</div>
        )
    }
}

export default advanced(Text)