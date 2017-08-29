import React,{Component} from 'react';
import HeaderComponent from "../../component/HeaderComponent/index";
import {connect} from 'react-redux';
import UserInfo from "../../component/UserInfo/index";
import OrderList from "./subpage/OrderList";
class User extends Component{
    render(){
        return (
            <div>
                <HeaderComponent title="用户信息" history={this.props.history} back="/"/>
                <UserInfo userInfo={this.props.userInfo}/>
                <OrderList username={this.props.userInfo.username}/>
            </div>
        )
    }
}
export default connect(
    state=>{
        return {
            userInfo:state.userInfo
        }
    }
)(User)