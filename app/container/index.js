import React,{Component} from 'react';
import RouterMap from "../routes/index";
export default class App extends Component{
    constructor(){
        super();
        this.state={
            flag:false
        }
    }
    componentDidMount(){
        this.setState({
            flag:true
        })
    }
    render(){
        return (
            <div>
                {this.state.flag?<RouterMap/>:<div>正在加载</div>}
            </div>
        )
    }
}