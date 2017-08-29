import React,{Component} from 'react';
import {getOrderList,postComment} from '../../../fetch/orderlist'
import OrderListComponent from "../../../component/OrderListComponent/index";
export default class OrderList extends Component{
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    render(){
        return (
            <div>
                {this.state.data.length?<OrderListComponent data={this.state.data} commitComment={this.commitComment.bind(this)}/>:<div>正在加载</div>}
            </div>
        )
    }
    commitComment(id,content,callback){
        postComment({id,content}).then(res=>res.json()).then(data=>{
            callback();
        })
    }
    componentDidMount(){
        getOrderList(this.props.username).then(res=>res.json()).then(data=>{
            console.log(data);
            this.setState({
                data
            })
        })
    }
}