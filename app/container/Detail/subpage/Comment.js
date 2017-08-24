import React,{Component} from 'react';
import {getComment} from '../../../fetch/detail';
import CommentComponent from "../../../component/CommentComponent/index";
import LoadMore from "../../../component/LoadMore/index";
export default class Comment extends Component{
    constructor(){
        super();
        this.state={
            page:0,
            data:[],
            hasMore:true,
            isLoading:true
        }
    }
    render(){
        return (
            <div>
                {this.state.data.length?<CommentComponent data={this.state.data}/>:<div>正在加载</div>}
                <LoadMore isLoading={this.state.isLoading} hasMore={this.state.hasMore} loadMore={this.loadMore.bind(this)}/>
            </div>
        )
    }
    componentDidMount(){
        this.processData(getComment(this.props.id,0));
    }
    loadMore(){
        this.setState({
            isLoading:true,
            page:this.state.page+1
        },()=>{
            this.processData(getComment(this.props.id,this.state.page));
        })

    }
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