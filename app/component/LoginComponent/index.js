import React,{Component} from 'react';
import './index.less'
export default class LoginComponent extends Component{
    constructor(){
        super();
        this.state={
            username:'',
            password:''
        }
    }
    render(){
        return (
            <div className="login-component">
                <input type="text" value={this.state.username} onChange={this.changeValue.bind(this)} placeholder="请输入用户名"/>
                <input type="text" value={this.state.password} onChange={this.changePassword.bind(this)} placeholder="请输入密码"/>
                <button onClick={this.login.bind(this)} className="back">登录</button>
            </div>
        )
    }
    changeValue(e){
        this.setState({
            username:e.target.value
        })
    }
    changePassword(e){
        this.setState({
            password:e.target.value
        })
    }
    login(){
        //调用父级传过来的登录方法
        this.props.login(this.state.username);
    }
}