import React,{Component} from 'react';
export default class Star extends Component{
    constructor(props){
        super(props);
        let ary=[];
        for (let i=1;i<=5;i++){
            if(i<=props.count){
                ary.push(true);
            }else {
                ary.push(false);
            }
        }
        this.state={ary}
    }
    render(){
        return (
            <div>
                {this.state.ary.map((item,index)=>(
                    item?<i className="iconfont icon-shoucang font" key={index}></i>:<i className="iconfont icon-shoucang-xianxing font" key={index}></i>

                ))}
            </div>
        )
    }
}