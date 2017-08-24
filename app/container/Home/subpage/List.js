import React,{Component} from 'react';
import {getList} from '../../../fetch/home'
import ListComponent from "../../../component/ListComponent/index";
import LoadMore from "../../../component/LoadMore/index";
export default class List extends Component{
    constructor(){
        super();
        this.state={
            hasMore:true,//是否还有更多
            data:[],//数据
            page:0,//页码
            isLoading:true//是否正在加载
        }
    }
    render(){
        return (
            <div>
                {this.state.data.length?<ListComponent data={this.state.data}/>:<div>正在加载</div>}
                <LoadMore hasMore={this.state.hasMore} loadMore={this.loadMore.bind(this)} isLoading={this.state.isLoading}/>
            </div>
        )
    }
    componentDidMount(){
        this.processData(getList(this.props.cityName,0));
    }
    //需要在当前写一个加载更多的函数传递给LoadMore,当点击按钮触发传递的函数
    loadMore(){
        this.setState({
            page:this.state.page+1,
            isLoading:true
        },()=>{//这个函数可以获取到最新的状态
            this.processData(getList(this.props.cityName,this.state.page));
        })
    }

    //处理成功后的逻辑
    processData(result){
        result.then(res=>res.json()).then(({hasMore,data})=>{
            this.setState({
                hasMore,
                data:this.state.data.concat(data),
                isLoading:false
            })
        })
    }
}