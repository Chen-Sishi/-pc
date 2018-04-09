import React, { Component } from 'react';
import banner from './images/home/sy_banner.png';
import './Contact.css';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import {Map, Marker, NavigationControl, InfoWindow} from 'react-bmap';
class Contact extends Component {
    render() {
        return (
            <div className="App">
                <header className="banner">
                    <img src={banner} />
                    <div className="layer"></div>
                    <div className="text" style={{marginTop: '0.85rem'}}>
                        原创手作匠人。

                    </div>
                    <div className="text text1">
                        玩艺汇，专注寻觅
                    </div>
                </header>
                <h1>关 / 于 / 我 / 们</h1>
                <div class="para">
                    <p>艺汇由卓尔文旅集团投资运营，</p>
                    <p>定位于发掘原创手作匠人，寻找原创设计好物的平台。</p>
                    <p>玩艺汇致力于传统手艺的传承和复兴，</p>
                    <p>打造可消费的东方美学。</p>
                    <p>在这里，汇集传统手作匠人 发现、传承东方美物。</p>
                    <p>在这里，尊重传承原创手作 回归、溯源东方美学。</p>
                </div>
                <div style={{paddingLeft: '.6rem', paddingRight: '.6rem', height: '3.96rem', marginTop: '.5rem', marginBottom: '.5rem'}}>
                    <Map center={{lng: 114.285656, lat: 30.678163}} zoom="17" style={{height: '3.96rem'}}>
                        <Marker position={{lng: 114.285656, lat: 30.678163}} />
                        {/*<NavigationControl />*/}
                    </Map>
                </div>
                <div className="addr">
                    <p>地址：武汉市东西湖区金银潭大道宏图路8号武汉客厅</p>
                    <p>电话：027-65383429</p>
                </div>
                <footer>
                    <p>"Copyright 2015 汉艺网zallhy.com Inc.,All rights reserved.</p>
                    <p>地 址：武汉市东西湖区金银潭大道宏图路8号武汉客厅</p>
                    <p>©ZALLHY 2016版权所有 鄂ICP备16007966号-1</p>
                    <p>经营许可证编号：鄂B2-20170031"</p>
                </footer>
            </div>
        );
    }
}

export default Contact;
