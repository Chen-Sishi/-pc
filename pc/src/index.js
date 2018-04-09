import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import {Map, Marker, NavigationControl, InfoWindow} from 'react-bmap';

import $ from 'jquery';

import './index.css';
import HomePage from './homePage';
import ArtistPage from './artistPage';
import ContactPage from './contactPage';
import Resource from './resource';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={HomePage} />
            <Route path="/artistPage" component={ArtistPage}/>
            <Route path="/resource" component={Resource}/>
            <Route path="/contactPage" component={ContactPage}/>
        </div>
    </Router> , document.getElementById('root'));
registerServiceWorker();
