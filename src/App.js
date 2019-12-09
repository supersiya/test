import React,{Component,useState,useEffect} from "react"
import {Route,Redirect,Switch,Link} from "react-router-dom"
import advanced from "./Advanced"
import Text from "./Text";
import BBB from "./BBB"

function NoState(props){
    const [num,setNum] = useState(2)
    const [stringNum,setStringNum] = useState("123")
    useEffect(()=>{
        console.log("state更新了")
        document.title = num
    })
    return(
        <div>
            <button onClick={()=>{setNum(num-1)}}>-</button>
            {num} | {stringNum}
            <button onClick={()=>{setNum(num+1)}}>+</button>
        </div>
    )
}
function A(){
    return(
        <div>AAAAA</div>
    )
}
function B(props){
    console.log(props)
    return(
    <div>BBBBB | {props.match.params.a}
    
        <ul>
            <li>
                <Link to="/b/123">bbbb123</Link>
            </li>
            <li>
                <Link to="/b/456">bbbb456</Link>
            </li>
        </ul>
        
        
    </div>
    )
}
function NotFound(){
    return(
        <div>404</div>
    )
}

class App extends Component{
    state={
        isLogin : false
    }
    render(){
        return (
            <>
             {/* 
            <div>
               
                无状态组件
                <NoState />
                hello react-app!
                高级组件用法
                <Text name={"App"}></Text>
                <Link to="/home">home</Link>
                |
                <Link to="/a">aaaaaaa</Link>
                |
                <Link to="/b">bbbbb123</Link>
                |
                <Link to={{
                    pathname : "/a/456",
                    state : {
                        b : 666,
                        c : 555
                    }
                }}>a456</Link>
                <Switch>
                    <Route path="/home" render={(routerProps)=>!this.state.isLogin ? <NoState {...routerProps} x={1}/> : <div>请登录</div>}/>
                    <Route path="/a" exact component={A} />
                    <Route path="/b" component={B} exact/>
                    <Route path="/b/:id" component={BBB}/>
                    <Route path="/404" component={NotFound} />
                    <Redirect to="/home" from="/" exact/>
                    <Redirect to="/404"/>
                </Switch>
            </div>
             */}
                <div>
                    App 
                </div>
             </>
        )
    }
}

// export default advanced(App)

export default App 