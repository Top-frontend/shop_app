import React,{Component} from 'react';
//主页头部组件
export default class HomeHeader extends Component{
    render(){
        return (
            <div>
                {this.props.cityName}
            </div>
        )
    }
}