import React,{Component} from 'react';
import RouterMap from "../routes/index";
import {connect} from 'react-redux';
//绑定actionCreator组成的对象
import {bindActionCreators} from 'redux';
//获取所有actionCreator组成的对象
import * as Actions from '../actions/userInfo';
import {getStorage} from '../local'
class App extends Component{
    render(){
        return (
            <div>
                <RouterMap/>
            </div>
        )
    }
    componentDidMount(){
        //先去本地查找  是否存储过localstorage名字叫cityName的
        //1.没有cityname,赋予一个默认值
        //2.将当前的城市存放到redux
        let cityName=getStorage('cityName');
        if(cityName ==null){
            cityName='杭州'
        }
        //页面加载后就设置一个城市
        this.props.userActions.update({
            cityName
        })
    }
}
export default connect(
    state=>{
        return {}
    },
    dispatch=>{
        return {
            userActions:bindActionCreators(Actions,dispatch)
        }
    }
)(App)