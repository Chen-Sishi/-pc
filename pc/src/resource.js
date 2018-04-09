import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import logo from './logo.svg';


import Background from './images/jgzy_banner.png';


import jgzy from'./images/jgzy_banner_txt.png';


import jgzy2 from'./images/jgzy_img_1.png';
import jgzy3 from'./images/jgzy_img_2.png';
import jgzy4 from'./images/jgzy_img_3.png';
import jgzy5 from'./images/jgzy_img_4.png';
import jgzy6 from'./images/jgzy_img_5.png';
import jgzy7 from'./images/jgzy_img_6.png';
import jgzy8 from'./images/jgzy_img_7.png';
import jgzy9 from'./images/jgzy_img_8.png';


import FooterPage from './footerPage.js';


import './resource.css';
import $ from 'jquery';

var bannerImg = {
    width: "100%",
    height: "800px",
    position: "relative",
// makesure here is String确保这里是一个字符串，以下是es6写法
    backgroundImage: `url(${Background})`
};


class Resource extends Component {
    componentDidMount() {
        window.scroll(0,0);
        window.onscroll = function (e) {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            var background = document.getElementsByClassName('menu-bg');
            if (scrollTop > 720) {
                background[0].style.backgroundColor = "rgba(0,0,0,0.7)";
            } else {
                background[0].style.backgroundColor = "rgba(0,0,0,0)";
            }
        }

    }

    render() {
        return (
            <div>
                <div className="menu-bg">
                    <div style={{display: 'flex'}}>
                        <div className="logo-bg"><img src={logo} className="menu-logo" alt="logo"/></div>
                        <div className="logo-name">
                            <p>玩艺汇</p>
                            <p className="small-name">专注寻觅原创手作匠人</p>
                        </div>
                    </div>
                    <ul className="menu-nav">
                        <li><Link to="/"> 首页</Link></li>
                        <li><Link to="/artistPage">匠人招募</Link></li>
                        <li><Link to="/resource">机构资源</Link></li>
                        <li><Link to="/contactPage">关于我们</Link></li>
                    </ul>
                </div>
                {/*banner*/}
                <div style={bannerImg} className="banner-bg">
                    <div className="mask">
                        <div className="main">
                            <img src={jgzy}/>
                        </div>
                    </div>
                </div>

                <div className="contain"  style={{paddingBottom:'30px'}}>
                    <div className="artist-title">机<span>/</span>构<span>/</span>资<span>/</span>源</div>
                        <ul className="resource-list">
                            <li>
                                <img src={jgzy2}/>
                                <div>卓尔书店
                                    <p>湖北省武汉市江岸区惠济路3号</p>
                                </div>
                            </li>
                            <li>
                                <img src={jgzy3}/>
                                <div>卓尔美术馆
                                    <p>湖北省武汉市江岸区惠济路3号</p>
                                </div>
                            </li>
                            <li>
                                <img src={jgzy4}/>
                                <div>武汉客厅
                                    <p>湖北省武汉市东西湖区宏图路8号</p>
                                </div>
                            </li>
                            <li>
                                <img src={jgzy5}/>
                                <div>卓尔小镇·桃花驿
                                    <p>湖北省孝感市孝南区杨店镇</p>
                                </div>
                            </li>
                            <li>
                                <img src={jgzy6}/>
                                <div>赤壁羊楼洞文化旅游区
                                    <p>湖北省赤壁市羊楼洞</p>
                                </div>
                            </li>
                            <li>
                                <img src={jgzy7}/>
                                <div>卓尔万亩茶园·俄罗斯方块小镇
                                    <p>湖北省赤壁市赵李桥</p>
                                </div>
                            </li>
                            <li>
                                <img src={jgzy8}/>
                                <div>中国·长阳卓尔国际旅游度假区
                                    <p>湖北省宜昌市长阳土家族自治县</p>
                                </div>
                            </li>
                            <li>
                                <img src={jgzy9}/>
                                <div>罗田全域旅游项目
                                    <p>湖北省黄冈市罗田县大别山</p>
                                </div>
                            </li>

                        </ul>

                </div>
                <FooterPage/>

            </div>

        );
    }
}

export default Resource;
