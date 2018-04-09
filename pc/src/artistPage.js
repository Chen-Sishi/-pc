import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import logo from './logo.svg';


import Background from './images/jrzm_banner.png';

import jrzm from'./images/jrzm_wms_1.png';
import jrzm2 from'./images/jrzm_wmx_1.png';
import jrzm3 from'./images/jrzm_wmx_2.png';
import jrzm4 from'./images/jrzm_wmx_3.png';
import jrzm5 from'./images/jrzm_wmx_4.png';
import jrzm6 from'./images/jrzm_wmx_5.png';
import jrzm7 from'./images/jrzm_wmx_6.png';
import jrzm8 from'./images/jrzm_wmx_7.png';
import wmhx1 from'./images/jrzm_wmhx_1.png';
import wmhx2 from'./images/jrzm_wmhx_2.png';
import wmhx3 from'./images/jrzm_wmhx_3.png';
import wmhx4 from'./images/jrzm_wmhx_4.png';
import nyx from'./images/jrzm_nyx_1.png';

import FooterPage from './footerPage.js';


import './homePage.css';
import './artistPage.css';
import $ from 'jquery';

var bannerImg = {
    width: "100%",
    height: "800px",
    position: "relative",
// makesure here is String确保这里是一个字符串，以下是es6写法
    backgroundImage: `url(${Background})`
};


class ArtistPage extends Component {
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
                            <p className="banner-text" style={{float: 'right'}}>等到你,再出发！
                                <span>手作匠人招募计划全新启动</span></p>
                        </div>
                    </div>
                </div>
                {/*我们是*/}
                <div className="contain">
                    <p className="us-title">我们是</p>
                    <div className="us-bg">
                        <div className="us-text">
                            <p>玩艺汇，是一个专注寻觅原创手作的匠人APP
                                这里，汇集传统手作匠人 发现、传承东方美物
                                这里，尊重传承原创手作 回归、溯源东方美学</p>
                            <p>100+位手作匠人云集玩艺汇平台
                                匠人——回归本源，为坚守技艺的匠者抒写传奇。
                                匠心——心手相连，让技艺在心中蕴藏在指尖流转。</p>
                        </div>
                        <div className="us-img">
                            <img src={jrzm}/>
                        </div>
                    </div>


                </div>
                {/*我们想*/}
                <div className="interest-contain">
                    <div className="contain">
                        <p className="us-title">我们想</p>
                        <p className="title2">我们想让大家了解你。用文字，记录你艺术道路上每一次的披荆斩棘。</p>

                        <ul className="us-list">
                            <li>
                                <img src={jrzm2}/>
                                <p>玩艺汇匠人志专访：孔俊松</p>
                                <span>查看文章详情 >></span>
                            </li>
                            <li>
                                <img src={jrzm3}/>
                                <p>玩艺汇匠人志专访：吴星</p>
                                <span>查看文章详情 >></span>
                            </li>
                            <li>
                                <img src={jrzm4}/>
                                <p>玩艺汇匠人志专访：安雨擎</p>
                                <span>查看文章详情 >></span>
                            </li>
                        </ul>
                        <hr style={{
                            width: '1200px',
                            height: '1px',
                            border: 'none',
                            borderTop: '#846650 1px solid',
                            margin: '80px auto'
                        }}/>
                        <p className="title2">用我们的力量，让更多的原创匠人获得展示的平台和匹配的身价。</p>
                        <ul className="us-artists">
                            <li>
                                <img src={jrzm5}/>
                            </li>
                            <li>
                                <img src={jrzm6}/>
                            </li>
                            <li>
                                <img src={jrzm7}/>
                            </li>
                            <li>
                                <img src={jrzm8}/>
                            </li>

                        </ul>
                        <p className="title2">每周一期的匠人专访</p>
                    </div>
                </div>

                {/*我们还想*/}
                <div className="contain">
                    <p className="us-title">我们还想</p>
                    <p className="title2">我们还想让大家记住你，用各式各样的活动+渠道，展现原创手作的魅力。</p>

                    <ul className="us-think">
                        <li>
                            <img src={wmhx1}/>
                            <p>艺术小镇 推荐入驻</p>
                            <span>推荐入驻卓尔文旅集团倾力打造艺术小镇项目，为匠人提供艺术传承和作品展示专区。</span>>
                        </li>
                        <li>
                            <img src={wmhx2}/>
                            <p>开辟景区售卖专区</p>
                            <span>在卓尔文旅旗下旅游景区，开辟匠人专属展示售卖专区。让更多游客体验到艺术的乐趣。</span>
                        </li>
                        <li>
                            <img src={wmhx3}/>
                            <p>桌尔集团礼品供应商</p>
                            <span>入驻匠人可成为卓尔文旅集团旗下多家子公司的礼品采购特许供应商。</span>
                        </li>
                        <li>
                            <img src={wmhx4}/>
                            <p>线下活动 集中曝光</p>
                            <span>在卓尔书店开展匠人专场分享会，同时在玩艺汇平台上进行网络直播。</span>
                        </li>
                    </ul>

                </div>
                {/*你是不是也想*/}
                <div className="interest-contain">
                    <div className="contain">
                        <p className="think-title">你是不是也想…？</p>
                        <div className="think-contain">
                            <div className="think-text">闭门造车、冥思苦想，倒不如走出对自己的设限。<br/>
                                只要想发声，这里就是你的舞台。<br/>
                                如果你的作品手工原创、题材积极美好，<br/>
                                能让人们感受生活的美好，就可以加入玩艺汇的阵营。<br/>
                                一起用双手创造美物，等到你，再出发！
                            </div>
                            <img src={nyx}/>

                        </div>
                        <div className="contact">
                            用你的美学，去创作新世界。期待你的加入，快联系我们吧！<br/>
                            联系电话: 027-62436251 邮箱: hw@zallhy.com
                        </div>
                    </div>
                </div>

                <FooterPage/>

            </div>

        );
    }
}

export default ArtistPage;
