import React,{Component} from 'react';
import ReactSwipe from 'react-swipe';//轮播图插件
import './index.less';
import {Link} from 'react-router-dom'
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
                        <Link to='/search/gouwu'><li>
                            <i className="iconfont icon-gouwu"></i>
                            <span>购物</span>
                        </li></Link>
                        <Link to='/search/canyin'><li>
                            <i className="iconfont icon-canyin"></i>
                            <span>餐饮</span>
                        </li></Link>
                        <Link to='/search/zhusu'><li>
                            <i className="iconfont icon-zhusu"></i>
                            <span>住宿</span>
                        </li></Link>
                        <Link to='/search/yule'><li>
                            <i className="iconfont icon-yule"></i>
                            <span>娱乐</span>
                        </li></Link>
                        <Link to='/search/jingdian'><li>
                            <i className="iconfont icon-jingdian"></i>
                            <span>景点</span>
                        </li></Link>
                        <Link to='/search/jianshen'><li>
                            <i className="iconfont icon-jianshen"></i>
                            <span>健身</span>
                        </li></Link>
                        <Link to='/search/huwai'><li>
                            <i className="iconfont icon-huwai"></i>
                            <span>户外</span>
                        </li></Link>
                        <Link to='/search/haitan'><li>
                            <i className="iconfont icon-haitan"></i>
                            <span>海滩</span>
                        </li></Link>
                        <Link to='/search/youxian'><li>
                            <i className="iconfont icon-youxian"></i>
                            <span>悠闲</span>
                        </li></Link>
                        <Link to='/search/huoche'><li>
                            <i className="iconfont icon-huoche"></i>
                            <span>火车</span>
                        </li></Link>
                    </ul>
                </div>
                    <div>
                        <ul>
                            <Link to='/search/gouwu'><li>
                                <i className="iconfont icon-gouwu"></i>
                                <span>购物</span>
                            </li></Link>
                            <Link to='/search/canyin'><li>
                                <i className="iconfont icon-canyin"></i>
                                <span>餐饮</span>
                            </li></Link>
                            <Link to='/search/zhusu'><li>
                                <i className="iconfont icon-zhusu"></i>
                                <span>住宿</span>
                            </li></Link>
                            <Link to='/search/yule'><li>
                                <i className="iconfont icon-yule"></i>
                                <span>娱乐</span>
                            </li></Link>
                            <Link to='/search/jingdian'><li>
                                <i className="iconfont icon-jingdian"></i>
                                <span>景点</span>
                            </li></Link>
                            <Link to='/search/jianshen'><li>
                                <i className="iconfont icon-jianshen"></i>
                                <span>健身</span>
                            </li></Link>
                            <Link to='/search/huwai'><li>
                                <i className="iconfont icon-huwai"></i>
                                <span>户外</span>
                            </li></Link>
                            <Link to='/search/haitan'><li>
                                <i className="iconfont icon-haitan"></i>
                                <span>海滩</span>
                            </li></Link>
                            <Link to='/search/youxian'><li>
                                <i className="iconfont icon-youxian"></i>
                                <span>悠闲</span>
                            </li></Link>
                            <Link to='/search/huoche'><li>
                                <i className="iconfont icon-huoche"></i>
                                <span>火车</span>
                            </li></Link>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <Link to='/search/gouwu'><li>
                                <i className="iconfont icon-gouwu"></i>
                                <span>购物</span>
                            </li></Link>
                            <Link to='/search/canyin'><li>
                                <i className="iconfont icon-canyin"></i>
                                <span>餐饮</span>
                            </li></Link>
                            <Link to='/search/zhusu'><li>
                                <i className="iconfont icon-zhusu"></i>
                                <span>住宿</span>
                            </li></Link>
                            <Link to='/search/yule'><li>
                                <i className="iconfont icon-yule"></i>
                                <span>娱乐</span>
                            </li></Link>
                            <Link to='/search/jingdian'><li>
                                <i className="iconfont icon-jingdian"></i>
                                <span>景点</span>
                            </li></Link>
                            <Link to='/search/jianshen'><li>
                                <i className="iconfont icon-jianshen"></i>
                                <span>健身</span>
                            </li></Link>
                            <Link to='/search/huwai'><li>
                                <i className="iconfont icon-huwai"></i>
                                <span>户外</span>
                            </li></Link>
                            <Link to='/search/haitan'><li>
                                <i className="iconfont icon-haitan"></i>
                                <span>海滩</span>
                            </li></Link>
                            <Link to='/search/youxian'><li>
                                <i className="iconfont icon-youxian"></i>
                                <span>悠闲</span>
                            </li></Link>
                            <Link to='/search/huoche'><li>
                                <i className="iconfont icon-huoche"></i>
                                <span>火车</span>
                            </li></Link>
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