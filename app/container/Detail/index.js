import React,{Component} from 'react';
import HeaderComponent from "../../component/HeaderComponent/index";
import Info from "./subpage/Info";
import Comment from "./subpage/Comment";
export default class Detail extends Component{
    render(){
        console.log(this.props.history);
        console.log(this.props.match);
        return (
            <div>
                <HeaderComponent title="商户详情" history={this.props.history}/>
                <Info id={this.props.match.params.id}/>
                <Comment id={this.props.match.params.id}/>
            </div>
        )
    }
}