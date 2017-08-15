import React,{Component} from 'react';
import HomeHeader from "../../component/HomeHeader/index";
import Slider from "../../component/Slider/index";
import Ad from "./subpage/Ad";
export default class Home extends Component{
    render(){
        return (
            <div>
                <HomeHeader cityName="北京"/>
                <Slider/>
                <Ad/>
            </div>
        )
    }
}