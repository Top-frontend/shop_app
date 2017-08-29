import React,{Component} from 'react';
import './index.less'
import {Link} from 'react-router-dom'
import SearchInput from "../SearchInput/index";
//主页头部组件
export default class HomeHeader extends Component{
    render(){
        return (
            <div className="home-header back">
                <Link to='/city'>
                    <div className="city">
                        {this.props.cityName}
                        <i className="iconfont icon-jiantouxia"></i>
                    </div>
                </Link>
                <div className="search">
                    <i className="iconfont icon-search"></i>
                    <SearchInput value="" fn={this.toSearch.bind(this)}/>
                </div>
                <Link to='/login'>
                    <div className="profile">
                        <i className="iconfont icon-people_fill"></i>
                    </div>
                </Link>
            </div>
        )
    }
    toSearch(value){
        this.props.history.push('/search/all/'+value);
    }
}