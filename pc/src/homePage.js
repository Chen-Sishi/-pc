import React,{ Component} from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'

import logo from './logo.svg';
import './homePage.css';
import $ from 'jquery';
import FooterPage from './footerPage.js';

import Background from './images/sy_banner.png';
import bannerewm from'./images/wyh_app_m.png';
import artists from'./images/sy_yzjr_1.png';
import artists2 from'./images/sy_yzjr_2.png';
import artists3 from'./images/sy_yzjr_3.png';
import artists4 from'./images/sy_yzjr_4.png';
import bl from './images/sy_icon_bl.svg';
import ht from './images/sy_icon_ht.svg';
import wz from './images/sy_icon_wz.svg';
import zp from './images/sy_icon_zp.svg';
import xqbl from './images/sy_xqbl_bl.png';
import xqht from './images/sy_xqbl_ht.png';
import xqwz from './images/sy_xqbl_wz.png';
import xqzp from './images/sy_xqbl_zp.png';
import jxmw1 from './images/sy_jxmw_1.png';
import jxmw2 from './images/sy_jxmw_2.png';
import jxmw3 from './images/sy_jxmw_3.png';
import jxmw4 from './images/sy_jxmw_4.png';
import jxmw5 from './images/sy_jxmw_5.png';
import jxmw6 from './images/sy_jxmw_6.png';
import jxmw7 from './images/sy_jxmw_7.png';
import jxmw8 from './images/sy_jxmw_8.png';
import jxmw9 from './images/sy_jxmw_9.png';
import jxmw10 from './images/sy_jxmw_10.png';
import jxmw11 from './images/sy_jxmw_11.png';
import jxmw12 from './images/sy_jxmw_12.png';
import bjcz from'./images/sy_bjcz_1.png';
import bjcz2 from'./images/sy_bjcz_2.png';
import bjcz3 from'./images/sy_bjcz_3.png';
import bjcz4 from'./images/sy_bjcz_4.png';
import pzwz from './images/sy_pzwz_1.png';


var bannerImg = {
    width: "100%",
    height: "800px",
    position:"relative",
// makesure here is String确保这里是一个字符串，以下是es6写法
    backgroundImage: `url(${Background})`
};


class HomePage extends Component {
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


        $('.switch-list > li').click(function () {
            var index=$(this).index();
            $(this).addClass('on').siblings().removeClass('on');
            $('#switch > .switch-contain').siblings().hide().eq(index).show();
        })
    }

    render() {
    return (
        <div>
        <div className="menu-bg">
            <div style={{display:'flex'}}>
                <div className="logo-bg"><img src={logo} className="menu-logo" alt="logo" /> </div>
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
                        <div className="ewm-bg"><img src={bannerewm} className="banner-ewm"/><p className="ewm-text">扫码下载APP</p></div>
                        <p className="banner-text">美好生活品味，<br/>从玩艺汇开始。</p>
                    </div>
                </div>
            </div>
            {/*优质匠人*/}
            <div className="contain">
                <div className="artist-title">优<span>/</span>质<span>/</span>匠<span>/</span>人</div>
                <div className="artist-contain">
                    <img src={artists}/>
                    <div className="artist-text">
                        <p className="artist-text1">精选匠人</p>
                        <p>首页展示最新鲜<br/>
                            最活跃的匠人推荐，<br/>
                            一键快速访问<br/>
                            最具人气的匠人主页。<br/>
                            点击更多，了解热门匠人<br/>
                            背后的精彩故事。</p>
                    </div>

                </div>
                <hr style={{
                    width: '1200px',
                    height: '1px',
                    border: 'none',
                    borderTop: '#846650 1px solid',
                    margin: '80px auto'
                }}/>

                <ul className="artist-list">
                    <li>
                        <img src={artists2}/>
                        <p className="artist-list-title">热门专题</p>
                        <p className="artist-list-content">结合时下热点话题，定制你感兴趣的热门专题，帮助你快速找到心仪之物；</p>
                    </li>
                    <li><img src={artists3}/>
                        <p className="artist-list-title">匠人故事</p>
                        <p className="artist-list-content">每周一期精选匠人专访，发掘平凡生活中的艺术家，为坚守技艺的匠者抒写传奇;</p>
                    </li>
                    <li><img src={artists4}/>
                        <p className="artist-list-title">匠人主页</p>
                        <p className="artist-list-content">全方位深度解析匠人，挖掘匠人背后的故事，多维度展示匠人作品。</p>
                    </li>
                </ul>
            </div>
            {/*兴趣部落*/}
            <div className="interest-contain">
                <div className="contain">
                    <div className="artist-title">兴<span>/</span>趣<span>/</span>部<span>/</span>落</div>
                    <div className="switch">
                        {/*导航*/}
                        <ul className="switch-list">
                            <li className="on"><img src={bl} className="switch-icon"/>部落</li>
                            <li><img src={ht} className="switch-icon"/> 话题</li>
                            <li><img src={wz} className="switch-icon"/> 文章</li>
                            <li><img src={zp} className="switch-icon"/> 作品</li>
                        </ul>
                        <div id="switch">
                            {/*部落*/}
                            <div className="switch-contain">
                                <div className="switch-img-bg">
                                    <img src={xqbl}/>
                                </div>
                                <div className="switch-text">
                                    <p className="switch-title">加入心仪部落</p>
                                    <p className="switch-content">在这里发现艺术同好，分享你的知识和见解，与大家痛快畅聊、探索匠心之美。</p>
                                </div>
                            </div>
                            {/*话题*/}
                            <div className="switch-contain no-display">
                                <div className="switch-img-bg">
                                    <img src={xqht}/>
                                </div>
                                <div className="switch-text">
                                    <p className="switch-title">参与话题讨论</p>
                                    <p className="switch-content">由酋长不定期推出的热门话题，方便大家在这里畅所欲言，让不同的观点碰撞新意。</p>
                                </div>
                            </div>
                            {/*文章*/}
                            <div className="switch-contain no-display">
                                <div className="switch-img-bg">
                                    <img src={xqwz}/>
                                </div>
                                <div className="switch-text">
                                    <p className="switch-title">发布深度好文</p>
                                    <p className="switch-content">在这里发布你的心情感悟、行业见解；与小伙伴们分享你的文字和态度。</p>
                                </div>
                            </div>
                            {/*作品*/}
                            <div className="switch-contain no-display">
                                <div className="switch-img-bg">
                                    <img src={xqzp}/>
                                </div>
                                <div className="switch-text">
                                    <p className="switch-title">精选匠人作品</p>
                                    <p className="switch-content">由酋长精心筛选的匠心美物，是否为你带来不一样的生活灵感呢？</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <p className="join-text">#快加入喜欢的部落，和小伙伴一起愉快玩耍吧#</p>

                </div>


            </div>
            {/*匠心美物*/}
            <div className="goods-contain">
                <div className="contain">
                    <div className="artist-title goods-title">匠<span>/</span>心<span>/</span>美<span>/</span>物</div>
                    <p className="goods-text">百万件可以消费的走心佳作，每一件都饱含创作者手心的温度。
                        让匠心臻品回归大众视野，打造东方家居生活美学。</p>
                </div>
                <ul className="goods-img-list">
                    <li><img src={jxmw1}/><div className="img-hover">核桃手串</div></li>
                    <li><img src={jxmw2}/><div className="img-hover">手工陶艺花器</div></li>
                    <li><img src={jxmw3}/><div className="img-hover">手工实木台灯</div></li>
                    <li><img src={jxmw4}/><div className="img-hover">手工陶艺茶具</div></li>
                    <li><img src={jxmw5}/><div className="img-hover">实木餐具套装</div></li>
                    <li><img src={jxmw6}/><div className="img-hover">蜜蜡手串</div></li>
                    <li><img src={jxmw7}/><div className="img-hover">手工粗陶花器</div></li>
                    <li><img src={jxmw8}/><div className="img-hover">蜜蜡吊坠</div></li>
                    <li><img src={jxmw9}/><div className="img-hover">手作皮质手帐</div></li>
                    <li><img src={jxmw10}/><div className="img-hover">陶瓷茶具</div></li>
                    <li><img src={jxmw11}/><div className="img-hover">手作牛皮信封包</div></li>
                    <li><img src={jxmw12}/><div className="img-hover">紫砂壶</div></li>

                </ul>
            </div>
            {/*便捷操作*/}
            <div className="contain">
                <div className="artist-title">便<span>/</span>捷<span>/</span>操<span>/</span>作</div>
                <div className="artist-contain">
                    <img src={bjcz}/>
                    <div className="artist-text">
                        <p className="artist-text1">实时互动</p>
                        <p>第一时间<br/>
                            收到评论消息，<br/>
                            快速回复<br/>
                            任意板块的评论。<br/>
                            随时随地<br/>
                            发表你的观点。</p>
                    </div>

                </div>
                <hr style={{
                    width: '1200px',
                    height: '1px',
                    border: 'none',
                    borderTop: '#846650 1px solid',
                    margin: '80px auto'
                }}/>

                <ul className="artist-list">
                    <li>
                        <img src={bjcz2}/>
                        <p className="artist-list-title">兴趣搜索</p>
                        <p className="artist-list-content">可以输入任意关健字进行模糊搜索，能从结果中找到你感兴趣的匠人及相关故事、作品；</p>
                    </li>
                    <li><img src={bjcz3}/>
                        <p className="artist-list-title">热门分类</p>
                        <p className="artist-list-content">精心筛选的各门类优质匠人展示，方便快速找到你喜欢的匠人类型；</p>
                    </li>
                    <li><img src={bjcz4}/>
                        <p className="artist-list-title">个人中心</p>
                        <p className="artist-list-content">可以快速查看过去评论的故事、作品；查找曾经关注的匠人、收藏的作品。</p>
                    </li>
                </ul>
            </div>
            {/*品质文章*/}
            <div className="interest-contain">
                <div className="contain">
                    <div className="artist-title">兴<span>/</span>趣<span>/</span>部<span>/</span>落</div>

                    <div className="artist-contain">
                        <img src={pzwz}/>
                        <div className="artist-text">
                            <p className="artist-text1">实时互动</p>
                            <p>追踪业内动态，<br/>
                                报道前沿趋势、<br/>
                                精选高品质内容<br/>
                                填充你的碎片时间，<br/>
                                陪你一起发现<br/>
                                生活的灵感趣味。</p>
                        </div>

                    </div>
                </div>

            </div>

            <FooterPage/>

        </div>

    );
  }
}

export default HomePage;
