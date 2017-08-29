import React,{Component} from 'react';
import SearchInput from "../SearchInput/index";
import './index.less'
import List from "../../container/Home/subpage/List";
export default class SearchHeader extends Component{
    render(){
        return (
            <div>
                <div className="back search-header">
                    <i className="iconfont icon-fanhui" onClick={this.back.bind(this)}></i>
                    <div>
                        <SearchInput value={this.props.value} fn={this.props.fn}/>
                    </div>
                </div>
                <List/>
            </div>
        )
    }
    back(){
        this.props.history.push('/');
    }
}