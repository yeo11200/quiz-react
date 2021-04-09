import { Route, Switch } from "react-router"
import { List, View } from './Board/index'
import { Main, Login, Join } from './Main/index'
import ErrorPage from './Error/index'
import { Qlist } from './Quiz/index';
import MapTes from './Map/index';

const Index = ({ match, history }) =>{

    return(
        <>
            <Switch>
                <Route path="/" exact component={Main}></Route>
                <Route exact path="/board" component={List}></Route>
                <Route path="/board/:id" component={View}></Route>
                <Route path="/quiz" component={Qlist}></Route>
                <Route path="/join" component={Join}></Route>
                <Route path="/map" component={MapTes}></Route>
                <Route path="*" exact component={ErrorPage}></Route>
            </Switch>
        </>
    )
} 

export default Index;