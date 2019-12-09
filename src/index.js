import React from "react"
import {render} from "react-dom"
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import App from "./App"
import {mainRouter} from "./router"


render(
(
<Router>
    <Switch>
        <Route path="/admin" render={ (routerProps)=> <App {...routerProps}/> }/>
        {
            mainRouter.map(route=>{
                return <Route key={route.pathname} path={route.pathname} component={route.component}/>
            })
        }
    </Switch>
</Router>
),document.getElementById("root"))