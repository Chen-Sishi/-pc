import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {Map, Marker, NavigationControl, InfoWindow} from 'react-bmap';
import logo from './logo.svg';

import Background from './images/gywm_banner.png';

import FooterPage from './footerPage.js';


import './homePage.css';
import './contactPage.css';
import $ from 'jquery';

var bannerImg = {
    width: "100%",
    height: "800px",
    position: "relative",
// makesure here is String确保这里是一个字符串，以下是es6写法
    backgroundImage: `url(${Background})`
};


class ContactPage extends Component {
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
                        <div className="main" style={{display: 'block'}}>
                            <p className="banner-text" style={{textIndent: '0'}}>玩艺汇，专注寻觅<br/>
                                原创手作匠人。</p>
                        </div>
                    </div>
                </div>


                <div className="contain">
                    <div className="artist-title">关<span>/</span>于<span>/</span>我<span>/</span>们</div>
                    <div className="map-bg">

                        <div className="map">
                            <Map center={{lng: 114.285656, lat: 30.678163}} zoom="17" style={{height: '306px',width:'485px'}}>
                                <Marker position={{lng: 114.285656, lat: 30.678163}} />
                                {/*<NavigationControl />*/}
                            </Map>
                        </div>
                    <div class="para">
                        <p>艺汇由卓尔文旅集团投资运营，</p>
                        <p>定位于发掘原创手作匠人，寻找原创设计好物的平台。</p>
                        <p>玩艺汇致力于传统手艺的传承和复兴，</p>
                        <p>打造可消费的东方美学。</p>
                        <p>在这里，汇集传统手作匠人 发现、传承东方美物。</p>
                        <p>在这里，尊重传承原创手作 回归、溯源东方美学。</p>
                        <div className="addr">
                            <p>地址：武汉市东西湖区金银潭大道宏图路8号武汉客厅</p>
                            <p>电话：027-65383429</p>
                        </div>
                    </div>

                    </div>

                </div>

                <FooterPage/>

            </div>

        );
    }
}

export default ContactPage;
