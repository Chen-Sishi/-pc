import React, { Component } from 'react';
import './footerPage.css';
import gzh from './images/jjc_gzh_m.png';
import xcx from './images/jjc_xcx_m.png';


class FooterPage extends Component {
  render() {
    return (
        <div className="footer-bg">
            <div className="footer-contain">
                <div className="company-info">
                    <p>Copyright 2015 汉艺网zallhy.com Inc.,All rights reserved.</p>
                    <p>地 址：武汉市东西湖区金银潭大道宏图路8号武汉客厅</p>
                    <p>©ZALLHY 2016版权所有 鄂ICP备16007966号-1</p>
                    <p>经营许可证编号：鄂B2-20170031</p>
                </div>
                <div className="ewm-img">
                    <div style={{marginRight:'35px'}}>
                        <img src={gzh}/>
                        <p>聚匠村公众号</p>
                    </div>
                    <div>
                        <img src={xcx}/>
                        <p>聚匠村小程序</p>
                    </div>
                </div>
            </div>
        </div>

    );
  }
}

export default FooterPage;
