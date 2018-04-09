import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './index.css';
import Home from './Home.js';
import Contact from './Contact.js';
import Resource from './resource.js';
import registerServiceWorker from './registerServiceWorker';

(function (doc, win) {
    /* 自适应 */
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 50 * (clientWidth / 375) + 'px';
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
    /* 菜单 */

})(document, window);
ReactDOM.render(
    <Router>
        <div>
        <Route path="/contact" component={Contact}/>
        <Route path="/resource" component={Resource}/>
        <Route exact path="/" component={Home} />
        </div>
    </Router> , document.getElementById('root'));
registerServiceWorker();
