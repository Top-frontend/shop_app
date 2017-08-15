import React,{Component} from 'react';
import ReactSwipe from 'react-swipe';//轮播图插件
import './index.less'
export default class Slider extends Component{
    constructor(){
        super();
        this.state={
            index:0
        }
    }
    render(){
        let opts={continuous:false,callback:(index)=>{
            this.setState({
                index
            })
        }}
        return (
            <div>
                <ReactSwipe className="carousel" swipeOptions={opts}>
                    <div>
                    <ul>
                        <li>
                            <i className="iconfont icon-gouwu"></i>
                            <span>购物</span>
                        </li>
                        <li>
                            <i className="iconfont icon-canyin"></i>
                            <span>餐饮</span>
                        </li>
                        <li>
                            <i className="iconfont icon-zhusu"></i>
                            <span>住宿</span>
                        </li>
                        <li>
                            <i className="iconfont icon-yule"></i>
                            <span>娱乐</span>
                        </li>
                        <li>
                            <i className="iconfont icon-jingdian"></i>
                            <span>景点</span>
                        </li>
                        <li>
                            <i className="iconfont icon-jianshen"></i>
                            <span>健身</span>
                        </li>
                        <li>
                            <i className="iconfont icon-huwai"></i>
                            <span>户外</span>
                        </li>
                        <li>
                            <i className="iconfont icon-haitan"></i>
                            <span>海滩</span>
                        </li>
                        <li>
                            <i className="iconfont icon-youxian"></i>
                            <span>悠闲</span>
                        </li>
                        <li>
                            <i className="iconfont icon-huoche"></i>
                            <span>火车</span>
                        </li>
                    </ul>
                </div>
                    <div>
                        <ul>
                            <li>
                                <i className="iconfont icon-gouwu"></i>
                                <span>购物</span>
                            </li>
                            <li>
                                <i className="iconfont icon-canyin"></i>
                                <span>餐饮</span>
                            </li>
                            <li>
                                <i className="iconfont icon-zhusu"></i>
                                <span>住宿</span>
                            </li>
                            <li>
                                <i className="iconfont icon-yule"></i>
                                <span>娱乐</span>
                            </li>
                            <li>
                                <i className="iconfont icon-jingdian"></i>
                                <span>景点</span>
                            </li>
                            <li>
                                <i className="iconfont icon-jianshen"></i>
                                <span>健身</span>
                            </li>
                            <li>
                                <i className="iconfont icon-huwai"></i>
                                <span>户外</span>
                            </li>
                            <li>
                                <i className="iconfont icon-haitan"></i>
                                <span>海滩</span>
                            </li>
                            <li>
                                <i className="iconfont icon-youxian"></i>
                                <span>悠闲</span>
                            </li>
                            <li>
                                <i className="iconfont icon-huoche"></i>
                                <span>火车</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <i className="iconfont icon-gouwu"></i>
                                <span>购物</span>
                            </li>
                            <li>
                                <i className="iconfont icon-canyin"></i>
                                <span>餐饮</span>
                            </li>
                            <li>
                                <i className="iconfont icon-zhusu"></i>
                                <span>住宿</span>
                            </li>
                            <li>
                                <i className="iconfont icon-yule"></i>
                                <span>娱乐</span>
                            </li>
                            <li>
                                <i className="iconfont icon-jingdian"></i>
                                <span>景点</span>
                            </li>
                            <li>
                                <i className="iconfont icon-jianshen"></i>
                                <span>健身</span>
                            </li>
                            <li>
                                <i className="iconfont icon-huwai"></i>
                                <span>户外</span>
                            </li>
                            <li>
                                <i className="iconfont icon-haitan"></i>
                                <span>海滩</span>
                            </li>
                            <li>
                                <i className="iconfont icon-youxian"></i>
                                <span>悠闲</span>
                            </li>
                            <li>
                                <i className="iconfont icon-huoche"></i>
                                <span>火车</span>
                            </li>
                        </ul>
                    </div>
                </ReactSwipe>
                <ul className="dots">
                    <li className={this.state.index==0?'active':""}></li>
                    <li className={this.state.index==1?'active':""}></li>
                    <li className={this.state.index==2?'active':""}></li>
                </ul>
            </div>
        )
    }
}