var React = require('react');
var ReactDOM = require('react-dom');
import * as firebase from 'firebase';
require('./CSS/index.css');
require('./CSS/w3.css');
require('./CSS/style.css');
require('./CSS/style2.css');
var App = require('./components/App');
var Nav = require('./components/Nav');
var HorizontalNav = require('./components/HorizontalNav');
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyC8kX_VMp3e0lLzMxTE0qEM9h0IUtfCUg4",
    authDomain: "mystart-apps.firebaseapp.com",
    databaseURL: "https://mystart-apps.firebaseio.com",
    projectId: "mystart-apps",
    storageBucket: "mystart-apps.appspot.com",
    messagingSenderId: "73130922506"
  };
  firebase.initializeApp(config);
  
ReactDOM.render(
  <HorizontalNav />,
  document.getElementById('header')
);
ReactDOM.render(
  <Nav />,
  document.getElementById('side')
);
ReactDOM.render(
  <App />,
  document.getElementById('app')
);