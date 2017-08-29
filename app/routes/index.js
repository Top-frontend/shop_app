import React,{Component} from 'react';
import {HashRouter as Router,Route,Switch} from 'react-router-dom'
import Home from '../container/Home'
import Detail from "../container/Detail";
import Login from "../container/Login";
import User from "../container/User";
import City from "../container/City";
import Search from "../container/Search";
export default class RouterMap extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path='/' exact component={Home}/>
                        <Route path='/detail/:id' component={Detail}/>
                        <Route path='/login/:route?' component={Login}/>
                        <Route path='/user' component={User}/>
                        <Route path='/city' component={City}/>
                        <Route path='/search/:kind/:keyword?' component={Search}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}