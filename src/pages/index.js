// import ArticleList from "./article";
// import Edit from "./article/Edit";
// import Dashboard from "./dashboard";
// import NotFound from "./notfound";
// import Login from "./login";
// import Setting from "./setting";
import Loadable from 'react-loadable';
import Loading from "../components/loading"

const ArticleList = Loadable({
    loader : ()=>import("./article"),
    loading : Loading
})

const Edit = Loadable({
    loader : ()=>import("./article/Edit"),
    loading : Loading
})
const NotFound = Loadable({
    loader : ()=>import("./notfound"),
    loading : Loading
})
const Dashboard = Loadable({
    loader :()=> import("./dashboard"),
    loading : Loading
})
const Login = Loadable({
    loader : ()=>import("./login"),
    loading : Loading
})
const Setting = Loadable({
    loader : ()=>import("./setting"),
    loading : Loading
})



export {
    ArticleList,
    Edit,
    Dashboard,
    NotFound,
    Login,
    Setting
}