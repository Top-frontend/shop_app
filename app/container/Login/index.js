import React,{Component} from 'react';
import HeaderComponent from "../../component/HeaderComponent/index";
import {connect} from 'react-redux';
import * as Actions from '../../actions/userInfo';
import {bindActionCreators} from 'redux';
import LoginComponent from "../../component/LoginComponent/index";
class Login extends Component{
    constructor(){
        super();
        this.state={
            login:false//默认没有登录
        }
    }
    render(){
        return (
            <div>
                <HeaderComponent title="登录" history={this.props.history}/>
                {this.state.login?<LoginComponent login={this.login.bind(this)}/>:<div></div>}
            </div>
        )
    }
    //将用户名存入redux里
    login(username){
        let info=this.props.userInfo;
        info.username=username;
        //更新redux中的状态
        this.props.userActions.update(info);
        //登录成功跳转到用户页面
        if(this.props.match.params.route){
            //如果是从购买页跳进来的,需要跳回购买页
            this.props.history.push(decodeURIComponent(this.props.match.params.route));
        }else {
            //否则就跳到用户页
            this.props.history.push('/user');
        }
    }
    componentDidMount(){
        this.checkLogin();
    }
    checkLogin(){
        if(this.props.userInfo.username){
            return this.props.history.push('/user');
        }
        this.setState({
            login:true
        })
    }
}
export default connect(
    state=>{
        return {userInfo:state.userInfo}
    },
    dispatch=>{
        return {userActions:bindActionCreators(Actions,dispatch)}
    }
)(Login)