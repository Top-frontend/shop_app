import React,{Component} from 'react';
import './index.less'
export default class UserInfo extends Component{
    render(){
        return (
            <div className="user-info">
                <span><i className="iconfont icon-people_fill"></i>{this.props.userInfo.username}</span>
                <span><i className="iconfont icon-coordinates"></i>{this.props.userInfo.cityName}</span>
            </div>
        )
    }
    //检查是否登录

}