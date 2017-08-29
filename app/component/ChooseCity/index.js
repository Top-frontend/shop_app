import React,{Component} from 'react';
import './index.less';
export default class ChooseCity extends Component{
    render(){
        return (
            <div className="city">
                <h3>热门城市</h3>
                <ul>
                    <li onClick={this.props.changeCity.bind(this,'北京')}>北京</li>
                    <li onClick={this.props.changeCity.bind(this,'上海')}>上海</li>
                    <li onClick={this.props.changeCity.bind(this,'杭州')}>杭州</li>
                    <li onClick={this.props.changeCity.bind(this,'广州')}>广州</li>
                    <li onClick={this.props.changeCity.bind(this,'南京')}>南京</li>
                    <li onClick={this.props.changeCity.bind(this,'深圳')}>深圳</li>
                </ul>
            </div>
        )
    }
}